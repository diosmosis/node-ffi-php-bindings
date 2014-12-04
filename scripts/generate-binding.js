#!/usr/bin/env node

var path = require('path'),
    fs = require('fs'),
    child_process = require('child_process'),
    glob = require('glob');

function isdir(path) {
    try {
        return fs.statSync(path).isDirectory();
    } catch (err) {
        return false;
    }
}

function makedirs(dirs) {
    var current;

    if (dirs[0] == '/') {
        dirs = dirs.substring(1);
        current = '/';
    } else {
        current = process.cwd();
    }

    var segments = dirs.split('/');
    for (var i = 0; i != segments.length; ++i) {
        var segment = segments[i];
        if (!segment || segment.length == 0) {
            continue;
        }

        current = path.join(current, segment);
        if (!isdir(current)) {
            fs.mkdirSync(current, 0777);
        }
    }

    return current;
}

var script_dir = __dirname,
    node_ffi_generator_path = process.argv[2],
    php_source_root = process.argv[3],
    llvm_dir = process.argv[4];

var repo_root_dir = path.join(script_dir, '..'),
    php_version_slug = path.basename(php_source_root).match(/php-(\d+.\d+).*/)[1],
    dest_dir = path.join(repo_root_dir, 'lib', php_version_slug),
    clang_path = path.join(llvm_dir, 'bin', 'clang');

var lib_xml_include = '/usr/include/libxml2',
    clang_include = path.join(llvm_dir, 'lib', 'clang', '3.6.0', 'include'),
    usr_include = '/usr/include',
    other_usr_include = '/usr/include/x86_64-linux-gnu';// TODO: should be configurable

makedirs(dest_dir);

// headers in PHP source do not include dependent headers, so we gather all source files and determine
// headers in correct order first. the headers go to new file that includes them, and we process THAT
// header.  -MD -MF example-clang.d -c -o example-clang.o example.c

var header_directories = [
    path.join(php_source_root, "main"),
    path.join(php_source_root, "sapi", "embed"),
    path.join(php_source_root, "Zend")
];

var include_directories = header_directories.concat([
    other_usr_include,
    usr_include,
    clang_include,
    php_source_root,
    path.join(php_source_root, 'ext', 'date', 'lib'),
    path.join(php_source_root, 'ext', 'ereg', 'regex'),
    path.join(php_source_root, 'ext', 'mbstring', 'libmbfl'),
    path.join(php_source_root, 'ext', 'mbstring', 'libmbfl', 'mbfl'),
    path.join(php_source_root, 'ext', 'sqlite3', 'libsqlite'),
    path.join(php_source_root, 'ext', 'zip', 'lib'),
    path.join(php_source_root, 'ext', 'standard'),
    path.join(php_source_root, 'Zend'),
    path.join(php_source_root, 'TSRM'),
    path.join(php_source_root, 'main'),
    lib_xml_include
]);

var source_blacklist = [
    /internal_functions.*\.c/,
    /.*win32.*/
];

var header_blacklist = [
    /zend_vm_execute\.h/,
    /zend_.*_scanner_defs\.h/,
    /\.c/,
    /ext\/pcre/
];

function should_include(p) {
    for (var i = 0; i != header_blacklist.length; ++i) {
        var regex = header_blacklist[i];
        if (p.match(regex)) {
            return false;
        }
    }
    return true;
}

// collect all source files
var source_files = [].concat.apply(
    [],
    header_directories.map(function (p) {
        return glob.sync(path.join(p, "**", "*.c")).filter(function (p) {
            for (var i = 0; i != source_blacklist.length; ++i) {
                var regex = source_blacklist[i];

                if (p.match(regex)) {
                    return false;
                }
            }
            return true;
        });
    })
);

// determine header dependencies of all source files
var include_options = [];
include_directories.forEach(function (p) {
    include_options.push("-iquote", p, "-isystem", p);
});

var command_args = [].concat(
    ["-MM"],
    include_options,
    source_files
);

var proc = child_process.spawn(clang_path, command_args);

var real_headers = [];
proc.stdout.on('data', function (data) {
    var lines = data.toString().split('\\');
    lines.shift();

    for (var i = 0; i != lines.length; ++i) {
        var line = lines[i].trim();

        if (real_headers.indexOf(line) == -1
            && should_include(line)
        ) {
            real_headers.push(line);
        }
    }
});

proc.stderr.on('data', function (data) {
    console.error(data.toString());
});

proc.on('close', function (code) {
    if (code) {
        console.error("clang failed!");
        process.exit(2);
    }

    var include_file_contents = "#include <time.h>\n"
                              + "#include <sys/time.h>\n";
    real_headers.forEach(function (p) {
        include_file_contents += "#include \"" + p + "\"\n";
    });
    fs.writeFileSync('all-includes.h', include_file_contents);

    var node_ffi_gen_command_args = [
        "--file=./all-includes.h",
        "--dest=" + dest_dir,
        "--src-root=" + php_source_root,
        "-D_VA_LIST_DEFINED",
        "-D__need_wchar_t",
        "-D__need_timeval",
        "--assume-pragma-once"
    ].concat(include_directories.map(function (p) {
        return "--include=" + p;
    }));

    var node_ffi_proc = child_process.spawn(node_ffi_generator_path, node_ffi_gen_command_args);

    node_ffi_proc.stdout.on('data', function (data) {
        console.log(data.toString().trim());
    });

    node_ffi_proc.stderr.on('data', function (data) {
        console.error(data.toString().trim());
    });

    node_ffi_proc.on('close', function (code) {
        if (code) {
            console.log("node-ffi-generator failed!");
            process.exit(3);
        }

        process.exit(0);
    });
});
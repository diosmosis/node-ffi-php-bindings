var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union');

var exports = module.exports = function (path) {
    var _library = exports;
    for (var key in _library._preload) {
        if (!_library._preload.hasOwnProperty(key)) {
            continue;
        }
        invoke_preload_function(key);
    }
    return ffi.Library(path, _library._functions);
};

exports._functions = {};
exports._preload = [];

// avoid prototype chain bug in ref-array that is triggered when an array is used in a struct
exports.__RefArray = function () {
    var result = RefArray.apply(null, arguments);
    result.toString = function () { return this.type.toString() + '[]'; };
    return result;
};

exports.loadDependentSymbols = function () {
    var _library = exports;
    _library._IO_marker = Struct({});
    _library._IO_marker.size = 1;
    
    _library._preload['_IO_marker'] = ['_IO_marker', '_IO_FILE', function () {
        _library._IO_marker.size = 0;
        _library._IO_marker.defineProperty("_next", ref.refType(_library._IO_marker));
        _library._IO_marker.defineProperty("_sbuf", ref.refType(_library._IO_FILE));
        _library._IO_marker.defineProperty("_pos", 'int');
    }];
    
    _library._IO_FILE = Struct({});
    _library._IO_FILE.size = 1;
    
    _library._preload['_IO_FILE'] = ['_IO_marker', '_IO_FILE', function () {
        _library._IO_FILE.size = 0;
        _library._IO_FILE.defineProperty("_flags", 'int');
        _library._IO_FILE.defineProperty("_IO_read_ptr", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_read_end", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_read_base", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_write_base", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_write_ptr", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_write_end", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_buf_base", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_buf_end", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_save_base", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_backup_base", ref.refType('char'));
        _library._IO_FILE.defineProperty("_IO_save_end", ref.refType('char'));
        _library._IO_FILE.defineProperty("_markers", ref.refType(_library._IO_marker));
        _library._IO_FILE.defineProperty("_chain", ref.refType(_library._IO_FILE));
        _library._IO_FILE.defineProperty("_fileno", 'int');
        _library._IO_FILE.defineProperty("_flags2", 'int');
        _library._IO_FILE.defineProperty("_old_offset", 'long');
        _library._IO_FILE.defineProperty("_cur_column", 'ushort');
        _library._IO_FILE.defineProperty("_vtable_offset", 'char');
        _library._IO_FILE.defineProperty("_shortbuf", _library.__RefArray('char', 1));
        _library._IO_FILE.defineProperty("_lock", ref.refType('void'));
        _library._IO_FILE.defineProperty("_offset", 'long');
        _library._IO_FILE.defineProperty("__pad1", ref.refType('void'));
        _library._IO_FILE.defineProperty("__pad2", ref.refType('void'));
        _library._IO_FILE.defineProperty("__pad3", ref.refType('void'));
        _library._IO_FILE.defineProperty("__pad4", ref.refType('void'));
        _library._IO_FILE.defineProperty("__pad5", 'ulong');
        _library._IO_FILE.defineProperty("_mode", 'int');
        _library._IO_FILE.defineProperty("_unused2", _library.__RefArray('char', 20));
    }];
    
    _library._preload['_IO_FILE'] = [function () {
        _library._IO_FILE = _library._IO_FILE;
    }];
    
    _library.timeval = Struct({});
    _library.timeval.size = 1;
    
    _library._preload['timeval'] = [function () {
        _library.timeval.size = 0;
        _library.timeval.defineProperty("tv_sec", 'long');
        _library.timeval.defineProperty("tv_usec", 'long');
    }];
    
    _library._preload['__jmp_buf'] = [function () {
        _library.__jmp_buf = _library.__RefArray('long', 8);
    }];
    
    _library.__sigset_t = Struct({});
    _library.__sigset_t.size = 1;
    
    _library._preload['__sigset_t'] = [function () {
        _library.__sigset_t.size = 0;
        _library.__sigset_t.defineProperty("__val", _library.__RefArray('ulong', 16));
    }];
    
    _library.__jmp_buf_tag = Struct({});
    _library.__jmp_buf_tag.size = 1;
    
    _library._preload['__jmp_buf_tag'] = ['__jmp_buf', '__sigset_t', '__sigset_t', function () {
        _library.__jmp_buf_tag.size = 0;
        _library.__jmp_buf_tag.defineProperty("__jmpbuf", _library.__jmp_buf);
        _library.__jmp_buf_tag.defineProperty("__mask_was_saved", 'int');
        _library.__jmp_buf_tag.defineProperty("__saved_mask", _library.__sigset_t);
    }];
    
    _library._preload['time_t'] = [function () {
        _library.time_t = 'long';
    }];
    
    _library._preload['FILE'] = ['_IO_FILE', function () {
        _library.FILE = _library._IO_FILE;
    }];
    
    _library._preload['DIR'] = [function () {
        _library.DIR = 'void';
    }];
    
    _library.timespec = Struct({});
    _library.timespec.size = 1;
    
    _library._preload['timespec'] = [function () {
        _library.timespec.size = 0;
        _library.timespec.defineProperty("tv_sec", 'long');
        _library.timespec.defineProperty("tv_nsec", 'long');
    }];
    
    _library.stat = Struct({});
    _library.stat.size = 1;
    
    _library._preload['stat'] = ['timespec', 'timespec', 'timespec', 'timespec', 'timespec', 'timespec', function () {
        _library.stat.size = 0;
        _library.stat.defineProperty("st_dev", 'ulong');
        _library.stat.defineProperty("st_ino", 'ulong');
        _library.stat.defineProperty("st_nlink", 'ulong');
        _library.stat.defineProperty("st_mode", 'uint');
        _library.stat.defineProperty("st_uid", 'uint');
        _library.stat.defineProperty("st_gid", 'uint');
        _library.stat.defineProperty("__pad0", 'int');
        _library.stat.defineProperty("st_rdev", 'ulong');
        _library.stat.defineProperty("st_size", 'long');
        _library.stat.defineProperty("st_blksize", 'long');
        _library.stat.defineProperty("st_blocks", 'long');
        _library.stat.defineProperty("st_atim", _library.timespec);
        _library.stat.defineProperty("st_mtim", _library.timespec);
        _library.stat.defineProperty("st_ctim", _library.timespec);
        _library.stat.defineProperty("__glibc_reserved", _library.__RefArray('long', 3));
    }];
    
    _library._preload['socklen_t'] = [function () {
        _library.socklen_t = 'uint';
    }];
    
    _library.sockaddr_storage = Struct({});
    _library.sockaddr_storage.size = 1;
    
    _library._preload['sockaddr_storage'] = [function () {
        _library.sockaddr_storage.size = 0;
        _library.sockaddr_storage.defineProperty("ss_family", 'ushort');
        _library.sockaddr_storage.defineProperty("__ss_align", 'ulong');
        _library.sockaddr_storage.defineProperty("__ss_padding", _library.__RefArray('char', 112));
    }];
    
    _library._preload['off_t'] = [function () {
        _library.off_t = 'long';
    }];
    
    _library._preload['jmp_buf'] = [function () {
        _library.jmp_buf = _library.__RefArray(_library.__jmp_buf_tag, 1);
    }];
    
    _library._preload['uid_t'] = [function () {
        _library.uid_t = 'uint';
    }];
    
    _library.pollfd = Struct({});
    _library.pollfd.size = 1;
    
    _library._preload['pollfd'] = [function () {
        _library.pollfd.size = 0;
        _library.pollfd.defineProperty("fd", 'int');
        _library.pollfd.defineProperty("events", 'short');
        _library.pollfd.defineProperty("revents", 'short');
    }];
    
    _library._preload['mode_t'] = [function () {
        _library.mode_t = 'uint';
    }];
    
    _library.utimbuf = Struct({});
    _library.utimbuf.size = 1;
    
    _library._preload['utimbuf'] = [function () {
        _library.utimbuf.size = 0;
        _library.utimbuf.defineProperty("actime", 'long');
        _library.utimbuf.defineProperty("modtime", 'long');
    }];
    
    _library._preload['gid_t'] = [function () {
        _library.gid_t = 'uint';
    }];
    
    _library.sockaddr = Struct({});
    _library.sockaddr.size = 1;
    
    _library._preload['sockaddr'] = [function () {
        _library.sockaddr.size = 0;
        _library.sockaddr.defineProperty("sa_family", 'ushort');
        _library.sockaddr.defineProperty("sa_data", _library.__RefArray('char', 14));
    }];
    
    
};

exports.loadAllBindings = function () {
    require('./Zend/zend_static_allocator');
    require('./Zend/zend_indent');
    require('./Zend/zend_language_scanner');
    require('./Zend/zend_interfaces');
    require('./main/fopen_wrappers');
    require('./main/php_memory_streams');
    require('./Zend/zend_globals_macros');
    require('./Zend/zend_qsort');
    require('./main/spprintf');
    require('./main/php');
    require('./Zend/zend_ini');
    require('./ext/standard/php_filestat');
    require('./Zend/zend_vm');
    require('./Zend/zend_objects');
    require('./Zend/zend_ptr_stack');
    require('./main/streams/php_stream_mmap');
    require('./Zend/zend_iterators');
    require('./Zend/zend_float');
    require('./main/php_content_types');
    require('./Zend/zend_ast');
    require('./Zend/zend_llist');
    require('./Zend/zend_API');
    require('./ext/standard/php_string');
    require('./Zend/zend_objects_API');
    require('./Zend/zend_types');
    require('./main/streams/php_stream_filter_api');
    require('./main/php_ini');
    require('./Zend/zend_virtual_cwd');
    require('./ext/standard/head');
    require('./Zend/zend_hash');
    require('./Zend/zend_variables');
    require('./ext/standard/php_crypt');
    require('./Zend/zend_stack');
    require('./Zend/zend_object_handlers');
    require('./Zend/zend_modules');
    require('./ext/standard/php_math');
    require('./main/php_streams');
    require('./ext/standard/quot_print');
    require('./ext/standard/datetime');
    require('./main/php_open_temporary_file');
    require('./Zend/zend_gc');
    require('./main/streams/php_stream_plain_wrapper');
    require('./Zend/zend_compile');
    require('./main/php_network');
    require('./ext/standard/php_array');
    require('./Zend/zend_ts_hash');
    require('./main/php_output');
    require('./Zend/zend');
    require('./Zend/zend_execute');
    require('./ext/standard/html');
    require('./main/php_getopt');
    require('./Zend/zend_operators');
    require('./Zend/zend_strtod');
    require('./Zend/zend_globals');
    require('./main/streams/php_stream_transport');
    require('./Zend/zend_closures');
    require('./main/php_variables');
    require('./main/snprintf');
    require('./Zend/zend_list');
    require('./Zend/zend_generators');
    require('./ext/standard/php_lcg');
    require('./Zend/zend_multibyte');
    require('./ext/standard/php_smart_str_public');
    require('./main/php_globals');
    require('./ext/standard/pageinfo');
    require('./ext/standard/php_var');
    require('./main/streams/php_stream_glob_wrapper');
    require('./Zend/zend_constants');
    require('./main/SAPI');
    require('./ext/date/lib/timelib');
    require('./ext/standard/exec');
    require('./Zend/zend_highlight');
    require('./ext/standard/basic_functions');
    require('./Zend/zend_alloc');
    require('./ext/standard/php_mail');
    require('./ext/standard/md5');
    require('./Zend/zend_vm_opcodes');
    require('./main/rfc1867');
    require('./ext/standard/sha1');
    require('./ext/standard/base64');
    require('./ext/standard/file');
    require('./ext/standard/url');
    require('./ext/standard/php_image');
    require('./ext/standard/info');
    require('./ext/standard/dl');
    require('./main/php_main');
    require('./ext/date/lib/timelib_structs');
    require('./ext/standard/php_versioning');
    require('./ext/standard/php_password');
    require('./main/streams/php_stream_context');
    require('./ext/date/php_date');
    require('./ext/standard/credits');
    require('./Zend/zend_exceptions');
    require('./main/php_ticks');
    require('./ext/standard/php_rand');
    require('./ext/standard/flock_compat');
    require('./Zend/zend_stream');
    require('./ext/standard/url_scanner_ex');
    require('./sapi/embed/php_embed');
    require('./Zend/zend_extensions');
    require('./Zend/zend_builtin_functions');
};

function invoke_preload_function(key) {
    var _library = exports;
    var entry = _library._preload[key];
    delete _library._preload[key];

    if (entry) {
        var func = entry.pop();

        // execute dependent preloads
        for (var i = 0; i != entry.length; ++i) {
            invoke_preload_function(entry[i]);
        }

        func();
    }
}

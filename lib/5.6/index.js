var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union');

var exports = module.exports = function (path) {
    var _library = this;
    return ffi.Library(_library._functions);
};

exports._functions = [];

exports.loadDependentSymbols = function () {
    var _library = exports;
    _library.gid_t = 'uint';
    
    _library.mode_t = 'uint';
    
    _library.off_t = 'long';
    
    _library.pollfd = Struct({
        "events": 'short',
        "fd": 'int',
        "revents": 'short'
    });
    
    _library.sockaddr_storage = Struct({
        "__ss_align": 'ulong',
        "__ss_padding": RefArray('char', 112),
        "ss_family": 'ushort'
    });
    
    _library.socklen_t = 'uint';
    
    _library.timespec = Struct({
        "tv_nsec": 'long',
        "tv_sec": 'long'
    });
    
    _library.stat = Struct({
        "__glibc_reserved": RefArray('long', 3),
        "__pad0": 'int',
        "st_atim": _library.timespec,
        "st_blksize": 'long',
        "st_blocks": 'long',
        "st_ctim": _library.timespec,
        "st_dev": 'ulong',
        "st_gid": 'uint',
        "st_ino": 'ulong',
        "st_mode": 'uint',
        "st_mtim": _library.timespec,
        "st_nlink": 'ulong',
        "st_rdev": 'ulong',
        "st_size": 'long',
        "st_uid": 'uint'
    });
    
    _library.time_t = 'long';
    
    _library.timeval = Struct({
        "tv_sec": 'long',
        "tv_usec": 'long'
    });
    
    _library.uid_t = 'uint';
    
    
};

exports.loadAllBindings = function () {
    require('./TSRM/tsrm_strtok_r');
    require('./Zend/zend_static_allocator');
    require('./Zend/zend_indent');
    require('./Zend/zend_language_scanner');
    require('./Zend/zend_interfaces');
    require('./Zend/zend_closures');
    require('./Zend/zend_vm');
    require('./Zend/zend_builtin_functions');
    require('./Zend/zend_extensions');
    require('./ext/standard/flock_compat');
    require('./main/streams/php_streams_int');
    require('./ext/standard/php_rand');
    require('./ext/standard/php_smart_str');
    require('./main/php_open_temporary_file');
    require('./main/php_ticks');
    require('./Zend/zend_exceptions');
    require('./ext/standard/credits');
    require('./ext/date/lib/timelib_structs');
    require('./main/php_main');
    require('./main/fopen_wrappers');
    require('./main/php_memory_streams');
    require('./ext/standard/microtime');
    require('./ext/date/php_date');
    require('./main/streams/php_stream_context');
    require('./Zend/zend_globals_macros');
    require('./Zend/zend_qsort');
    require('./main/spprintf');
    require('./ext/standard/php_type');
    require('./Zend/zend_ini');
    require('./Zend/zend_objects');
    require('./Zend/zend_ptr_stack');
    require('./main/php_content_types');
    require('./Zend/zend_ini_scanner');
    require('./Zend/zend_ast');
    require('./Zend/zend_llist');
    require('./main/php_getopt');
    require('./Zend/zend_string');
    require('./Zend/zend_API');
    require('./ext/standard/php_string');
    require('./main/streams/php_stream_filter_api');
    require('./Zend/zend_hash');
    require('./Zend/zend_variables');
    require('./ext/standard/php_standard');
    require('./Zend/zend_objects_API');
    require('./Zend/zend_types');
    require('./main/php_streams');
    require('./ext/standard/quot_print');
    require('./ext/standard/datetime');
    require('./Zend/zend_object_handlers');
    require('./main/streams/php_stream_mmap');
    require('./ext/standard/php_dns');
    require('./Zend/zend_stack');
    require('./ext/standard/php_crypt');
    require('./Zend/zend_iterators');
    require('./Zend/zend_modules');
    require('./ext/standard/php_math');
    require('./Zend/zend_gc');
    require('./main/streams/php_stream_plain_wrapper');
    require('./Zend/zend_compile');
    require('./main/php_network');
    require('./ext/standard/php_array');
    require('./main/php_output');
    require('./Zend/zend');
    require('./Zend/zend_execute');
    require('./ext/standard/html');
    require('./Zend/zend_operators');
    require('./Zend/zend_strtod');
    require('./Zend/zend_globals');
    require('./main/streams/php_stream_transport');
    require('./main/php_variables');
    require('./main/snprintf');
    require('./ext/standard/fsock');
    require('./Zend/zend_list');
    require('./Zend/zend_generators');
    require('./ext/standard/php_lcg');
    require('./Zend/zend_multibyte');
    require('./ext/standard/php_smart_str_public');
    require('./main/php_globals');
    require('./ext/standard/pageinfo');
    require('./ext/standard/php_var');
    require('./main/streams/php_stream_glob_wrapper');
    require('./main/php_ini');
    require('./Zend/zend_virtual_cwd');
    require('./ext/standard/head');
    require('./Zend/zend_constants');
    require('./main/SAPI');
    require('./main/php');
    require('./ext/standard/php_link');
    require('./ext/date/lib/timelib');
    require('./ext/standard/exec');
    require('./Zend/zend_highlight');
    require('./sapi/embed/php_embed');
    require('./Zend/zend_stream');
    require('./ext/standard/url_scanner_ex');
    require('./ext/standard/basic_functions');
    require('./Zend/zend_ts_hash');
    require('./ext/standard/php_dir');
    require('./Zend/zend_alloc');
    require('./ext/standard/php_mail');
    require('./ext/standard/md5');
    require('./ext/standard/php_ftok');
    require('./Zend/zend_vm_opcodes');
    require('./main/rfc1867');
    require('./ext/standard/sha1');
    require('./ext/standard/base64');
    require('./ext/standard/file');
    require('./ext/standard/php_ext_syslog');
    require('./ext/standard/php_assert');
    require('./ext/standard/php_browscap');
    require('./ext/standard/php_image');
    require('./ext/standard/url');
    require('./Zend/zend_float');
    require('./ext/standard/cyr_convert');
    require('./ext/standard/php_iptc');
    require('./ext/standard/info');
    require('./ext/standard/uniqid');
    require('./ext/standard/php_filestat');
    require('./ext/standard/php_metaphone');
    require('./ext/standard/dl');
    require('./ext/standard/php_versioning');
    require('./ext/standard/pack');
    require('./ext/standard/php_password');
};

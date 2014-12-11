var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_get_highlight_struct'] = ['zend_syntax_highlighter_ini', function () {
    _library.php_get_highlight_struct = ['void', [ref.refType(_library.zend_syntax_highlighter_ini)]];
    _library._functions['php_get_highlight_struct'] = _library.php_get_highlight_struct;
}];

_library._preload['_php_error_log'] = [function () {
    _library._php_error_log = ['int', ['int', ref.refType('char'), ref.refType('char'), ref.refType('char')]];
    _library._functions['_php_error_log'] = _library._php_error_log;
}];

_library._preload['_php_error_log_ex'] = [function () {
    _library._php_error_log_ex = ['int', ['int', ref.refType('char'), 'int', ref.refType('char'), ref.refType('char')]];
    _library._functions['_php_error_log_ex'] = _library._php_error_log_ex;
}];

_library._preload['php_prefix_varname'] = ['zval', 'zval', function () {
    _library.php_prefix_varname = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType('char'), 'int', 'uchar']];
    _library._functions['php_prefix_varname'] = _library.php_prefix_varname;
}];

_library._php_basic_globals = Struct({});
_library._php_basic_globals.size = 1;

_library._preload['_php_basic_globals'] = ['zval', 'zend_fcall_info', '_zend_fcall_info', 'zend_fcall_info_cache', '_zend_fcall_info_cache', 'zend_class_entry', 'php_stream_statbuf', '_php_stream_statbuf', 'time_t', 'HashTable', '_hashtable', 'php_stream_statbuf', '_php_stream_statbuf', 'zval', 'url_adapt_state_ex_t', 'url_adapt_state_ex_t', 'zend_fcall_info', '_zend_fcall_info', 'zend_fcall_info_cache', '_zend_fcall_info_cache', 'HashTable', 'HashTable', 'zend_llist', function () {
    _library._php_basic_globals.size = 0;
    _library._php_basic_globals.defineProperty("CurrentLStatFile", ref.refType('char'));
    _library._php_basic_globals.defineProperty("CurrentStatFile", ref.refType('char'));
    _library._php_basic_globals.defineProperty("active_ini_file_section", ref.refType(_library.zval));
    _library._php_basic_globals.defineProperty("array_walk_fci", _library.zend_fcall_info);
    _library._php_basic_globals.defineProperty("array_walk_fci_cache", _library.zend_fcall_info_cache);
    _library._php_basic_globals.defineProperty("incomplete_class", ref.refType(_library.zend_class_entry));
    _library._php_basic_globals.defineProperty("left", 'int');
    _library._php_basic_globals.defineProperty("locale_string", ref.refType('char'));
    _library._php_basic_globals.defineProperty("lssb", _library.php_stream_statbuf);
    _library._php_basic_globals.defineProperty("mmap_file", ref.refType('void'));
    _library._php_basic_globals.defineProperty("mmap_len", 'ulong');
    _library._php_basic_globals.defineProperty("mt_rand_is_seeded", 'uchar');
    _library._php_basic_globals.defineProperty("next", ref.refType('uint'));
    _library._php_basic_globals.defineProperty("page_gid", 'long');
    _library._php_basic_globals.defineProperty("page_inode", 'long');
    _library._php_basic_globals.defineProperty("page_mtime", _library.time_t);
    _library._php_basic_globals.defineProperty("page_uid", 'long');
    _library._php_basic_globals.defineProperty("putenv_ht", _library.HashTable);
    _library._php_basic_globals.defineProperty("rand_is_seeded", 'uchar');
    _library._php_basic_globals.defineProperty("rand_seed", 'uint');
    _library._php_basic_globals.defineProperty("serialize", (function () {
        var temp = Struct({});
        temp.defineProperty("level", 'uint');
        temp.defineProperty("var_hash", ref.refType('void'));
        return temp;
    })());
    _library._php_basic_globals.defineProperty("serialize_lock", 'uint');
    _library._php_basic_globals.defineProperty("ssb", _library.php_stream_statbuf);
    _library._php_basic_globals.defineProperty("state", _library.__RefArray('uint', 625));
    _library._php_basic_globals.defineProperty("str_ebuf", _library.__RefArray('char', 40));
    _library._php_basic_globals.defineProperty("strtok_last", ref.refType('char'));
    _library._php_basic_globals.defineProperty("strtok_len", 'ulong');
    _library._php_basic_globals.defineProperty("strtok_string", ref.refType('char'));
    _library._php_basic_globals.defineProperty("strtok_table", _library.__RefArray('char', 256));
    _library._php_basic_globals.defineProperty("strtok_zval", ref.refType(_library.zval));
    _library._php_basic_globals.defineProperty("syslog_device", ref.refType('char'));
    _library._php_basic_globals.defineProperty("umask", 'int');
    _library._php_basic_globals.defineProperty("unserialize", (function () {
        var temp = Struct({});
        temp.defineProperty("level", 'uint');
        temp.defineProperty("var_hash", ref.refType('void'));
        return temp;
    })());
    _library._php_basic_globals.defineProperty("url_adapt_state_ex", _library.url_adapt_state_ex_t);
    _library._php_basic_globals.defineProperty("user_compare_fci", _library.zend_fcall_info);
    _library._php_basic_globals.defineProperty("user_compare_fci_cache", _library.zend_fcall_info_cache);
    _library._php_basic_globals.defineProperty("user_filter_map", ref.refType(_library.HashTable));
    _library._php_basic_globals.defineProperty("user_shutdown_function_names", ref.refType(_library.HashTable));
    _library._php_basic_globals.defineProperty("user_tick_functions", ref.refType(_library.zend_llist));
}];

_library._preload['php_basic_globals'] = [function () {
    _library.php_basic_globals = _library._php_basic_globals;
}];

_library.putenv_entry = Struct({});
_library.putenv_entry.size = 1;

_library._preload['putenv_entry'] = [function () {
    _library.putenv_entry.size = 0;
    _library.putenv_entry.defineProperty("key", ref.refType('char'));
    _library.putenv_entry.defineProperty("key_len", 'int');
    _library.putenv_entry.defineProperty("previous_value", ref.refType('char'));
    _library.putenv_entry.defineProperty("putenv_string", ref.refType('char'));
}];

_library._preload['php_get_nan'] = [function () {
    _library.php_get_nan = ['double', []];
    _library._functions['php_get_nan'] = _library.php_get_nan;
}];

_library._preload['php_get_inf'] = [function () {
    _library.php_get_inf = ['double', []];
    _library._functions['php_get_inf'] = _library.php_get_inf;
}];

_library._php_shutdown_function_entry = Struct({});
_library._php_shutdown_function_entry.size = 1;

_library._preload['_php_shutdown_function_entry'] = ['pointer', function () {
    _library._php_shutdown_function_entry.size = 0;
    _library._php_shutdown_function_entry.defineProperty("arg_count", 'int');
    _library._php_shutdown_function_entry.defineProperty("arguments", ref.refType(ref.refType(_library.zval)));
}];

_library._preload['php_shutdown_function_entry'] = [function () {
    _library.php_shutdown_function_entry = _library._php_shutdown_function_entry;
}];

_library._preload['register_user_shutdown_function'] = ['php_shutdown_function_entry', function () {
    _library.register_user_shutdown_function = ['uchar', [ref.refType('char'), 'ulong', ref.refType(_library.php_shutdown_function_entry)]];
    _library._functions['register_user_shutdown_function'] = _library.register_user_shutdown_function;
}];

_library._preload['remove_user_shutdown_function'] = [function () {
    _library.remove_user_shutdown_function = ['uchar', [ref.refType('char'), 'ulong']];
    _library._functions['remove_user_shutdown_function'] = _library.remove_user_shutdown_function;
}];

_library._preload['append_user_shutdown_function'] = ['php_shutdown_function_entry', function () {
    _library.append_user_shutdown_function = ['uchar', [_library.php_shutdown_function_entry]];
    _library._functions['append_user_shutdown_function'] = _library.append_user_shutdown_function;
}];

function loadDependentSymbols() {
    require('./../../Zend/zend.js');
    require('./../../Zend/zend_API.js');
    require('./../../Zend/zend_ast.js');
    require('./../../Zend/zend_compile.js');
    require('./../../Zend/zend_hash.js');
    require('./../../Zend/zend_highlight.js');
    require('./../../Zend/zend_ini.js');
    require('./../../Zend/zend_iterators.js');
    require('./../../Zend/zend_llist.js');
    require('./../../Zend/zend_modules.js');
    require('./../../Zend/zend_object_handlers.js');
    require('./../../Zend/zend_types.js');
    require('./php_smart_str_public.js');
    require('./url_scanner_ex.js');
    require('./../../main/php_streams.js');
}

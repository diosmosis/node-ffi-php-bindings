var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zm_startup_basic = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_basic);

_library.zm_shutdown_basic = ['int', ['int', 'int']];
_library._functions.push(_library.zm_shutdown_basic);

_library.zm_activate_basic = ['int', ['int', 'int']];
_library._functions.push(_library.zm_activate_basic);

_library.zm_deactivate_basic = ['int', ['int', 'int']];
_library._functions.push(_library.zm_deactivate_basic);

_library.zm_info_basic = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.zm_info_basic);

_library.zif_constant = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_constant);

_library.zif_sleep = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_sleep);

_library.zif_usleep = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_usleep);

_library.zif_time_nanosleep = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_time_nanosleep);

_library.zif_time_sleep_until = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_time_sleep_until);

_library.zif_flush = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_flush);

_library.php_inet_ntop = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_inet_ntop);

_library.php_inet_pton = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_inet_pton);

_library.zif_ip2long = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ip2long);

_library.zif_long2ip = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_long2ip);

_library.zif_getenv = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_getenv);

_library.zif_putenv = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_putenv);

_library.zif_getopt = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_getopt);

_library.zif_get_current_user = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_get_current_user);

_library.zif_set_time_limit = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_set_time_limit);

_library.zif_header_register_callback = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_header_register_callback);

_library.zif_get_cfg_var = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_get_cfg_var);

_library.zif_set_magic_quotes_runtime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_set_magic_quotes_runtime);

_library.zif_get_magic_quotes_runtime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_get_magic_quotes_runtime);

_library.zif_get_magic_quotes_gpc = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_get_magic_quotes_gpc);

_library.zif_error_log = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_error_log);

_library.zif_error_get_last = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_error_get_last);

_library.zif_call_user_func = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_call_user_func);

_library.zif_call_user_func_array = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_call_user_func_array);

_library.zif_call_user_method = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_call_user_method);

_library.zif_call_user_method_array = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_call_user_method_array);

_library.zif_forward_static_call = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_forward_static_call);

_library.zif_forward_static_call_array = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_forward_static_call_array);

_library.zif_register_shutdown_function = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_register_shutdown_function);

_library.zif_highlight_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_highlight_file);

_library.zif_highlight_string = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_highlight_string);

_library.zif_php_strip_whitespace = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_php_strip_whitespace);

_library.php_get_highlight_struct = ['void', [ref.refType(_library.zend_syntax_highlighter_ini)]];
_library._functions.push(_library.php_get_highlight_struct);

_library.zif_ini_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ini_get);

_library.zif_ini_get_all = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ini_get_all);

_library.zif_ini_set = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ini_set);

_library.zif_ini_restore = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ini_restore);

_library.zif_get_include_path = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_get_include_path);

_library.zif_set_include_path = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_set_include_path);

_library.zif_restore_include_path = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_restore_include_path);

_library.zif_print_r = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_print_r);

_library.zif_fprintf = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fprintf);

_library.zif_vfprintf = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_vfprintf);

_library.zif_connection_aborted = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_connection_aborted);

_library.zif_connection_status = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_connection_status);

_library.zif_ignore_user_abort = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ignore_user_abort);

_library.zif_getservbyname = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_getservbyname);

_library.zif_getservbyport = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_getservbyport);

_library.zif_getprotobyname = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_getprotobyname);

_library.zif_getprotobynumber = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_getprotobynumber);

_library.php_if_crc32 = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_if_crc32);

_library.zif_register_tick_function = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_register_tick_function);

_library.zif_unregister_tick_function = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_unregister_tick_function);

_library.zif_sys_getloadavg = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_sys_getloadavg);

_library.zif_is_uploaded_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_is_uploaded_file);

_library.zif_move_uploaded_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_move_uploaded_file);

_library.zif_parse_ini_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_parse_ini_file);

_library.zif_parse_ini_string = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_parse_ini_string);

_library.zif_config_get_hash = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_config_get_hash);

_library.zif_str_rot13 = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_str_rot13);

_library.zif_stream_get_filters = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stream_get_filters);

_library.zif_stream_filter_register = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stream_filter_register);

_library.zif_stream_bucket_make_writeable = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stream_bucket_make_writeable);

_library.zif_stream_bucket_prepend = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stream_bucket_prepend);

_library.zif_stream_bucket_append = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stream_bucket_append);

_library.zif_stream_bucket_new = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stream_bucket_new);

_library.zm_startup_user_filters = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_user_filters);

_library.zm_deactivate_user_filters = ['int', ['int', 'int']];
_library._functions.push(_library.zm_deactivate_user_filters);

_library.zm_deactivate_browscap = ['int', ['int', 'int']];
_library._functions.push(_library.zm_deactivate_browscap);

_library._php_error_log = ['int', ['int', ref.refType('char'), ref.refType('char'), ref.refType('char')]];
_library._functions.push(_library._php_error_log);

_library._php_error_log_ex = ['int', ['int', ref.refType('char'), 'int', ref.refType('char'), ref.refType('char')]];
_library._functions.push(_library._php_error_log_ex);

_library.php_prefix_varname = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType('char'), 'int', 'uchar']];
_library._functions.push(_library.php_prefix_varname);

_library._php_basic_globals = Struct({
    "CurrentLStatFile": ref.refType('char'),
    "CurrentStatFile": ref.refType('char'),
    "active_ini_file_section": ref.refType(_library.zval),
    "array_walk_fci": _library.zend_fcall_info,
    "array_walk_fci_cache": _library.zend_fcall_info_cache,
    "incomplete_class": ref.refType(_library.zend_class_entry),
    "left": 'int',
    "locale_string": ref.refType('char'),
    "lssb": _library.php_stream_statbuf,
    "mmap_file": ref.refType('void'),
    "mmap_len": 'ulong',
    "mt_rand_is_seeded": 'uchar',
    "next": ref.refType('uint'),
    "page_gid": 'long',
    "page_inode": 'long',
    "page_mtime": _library.time_t,
    "page_uid": 'long',
    "putenv_ht": _library.HashTable,
    "rand_is_seeded": 'uchar',
    "rand_seed": 'uint',
    "serialize": Struct({
        "level": 'uint',
        "var_hash": ref.refType('void')
    });,
    "serialize_lock": 'uint',
    "ssb": _library.php_stream_statbuf,
    "state": RefArray('uint', 625),
    "str_ebuf": RefArray('char', 40),
    "strtok_last": ref.refType('char'),
    "strtok_len": 'ulong',
    "strtok_string": ref.refType('char'),
    "strtok_table": RefArray('char', 256),
    "strtok_zval": ref.refType(_library.zval),
    "syslog_device": ref.refType('char'),
    "umask": 'int',
    "unserialize": Struct({
        "level": 'uint',
        "var_hash": ref.refType('void')
    });,
    "url_adapt_state_ex": _library.url_adapt_state_ex_t,
    "user_compare_fci": _library.zend_fcall_info,
    "user_compare_fci_cache": _library.zend_fcall_info_cache,
    "user_filter_map": ref.refType(_library.HashTable),
    "user_shutdown_function_names": ref.refType(_library.HashTable),
    "user_tick_functions": ref.refType(_library.zend_llist)
});

_library.php_basic_globals = _library._php_basic_globals;

_library.putenv_entry = Struct({
    "key": ref.refType('char'),
    "key_len": 'int',
    "previous_value": ref.refType('char'),
    "putenv_string": ref.refType('char')
});

_library.php_get_nan = ['double', []];
_library._functions.push(_library.php_get_nan);

_library.php_get_inf = ['double', []];
_library._functions.push(_library.php_get_inf);

_library._php_shutdown_function_entry = Struct({
    "arg_count": 'int',
    "arguments": ref.refType(ref.refType(_library.zval))
});

_library.php_shutdown_function_entry = _library._php_shutdown_function_entry;

_library.register_user_shutdown_function = ['uchar', [ref.refType('char'), 'ulong', ref.refType(_library.php_shutdown_function_entry)]];
_library._functions.push(_library.register_user_shutdown_function);

_library.remove_user_shutdown_function = ['uchar', [ref.refType('char'), 'ulong']];
_library._functions.push(_library.remove_user_shutdown_function);

_library.append_user_shutdown_function = ['uchar', [_library.php_shutdown_function_entry]];
_library._functions.push(_library.append_user_shutdown_function);

function loadDependentSymbols() {
    require('../../Zend/zend_API.js');
    require('../../Zend/zend_hash.js');
    require('url_scanner_ex.js');
    require('../../main/php_streams.js');
};
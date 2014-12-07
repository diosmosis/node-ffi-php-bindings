var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._arg_separators = Struct({});

_library._preload.push(function () {
    _library._arg_separators.defineProperty("input", ref.refType('char'));
    _library._arg_separators.defineProperty("output", ref.refType('char'));
});

require('./php_globals.js');
_library.arg_separators = _library._arg_separators;

require('./zend_hash.js');
require('./zend_llist.js');
_library._php_core_globals = Struct({});

_library._preload.push(function () {
    _library._php_core_globals.defineProperty("activated_auto_globals", RefArray('uchar', 8));
    _library._php_core_globals.defineProperty("allow_url_fopen", 'uchar');
    _library._php_core_globals.defineProperty("allow_url_include", 'uchar');
    _library._php_core_globals.defineProperty("always_populate_raw_post_data", 'char');
    _library._php_core_globals.defineProperty("arg_separator", _library.arg_separators);
    _library._php_core_globals.defineProperty("auto_append_file", ref.refType('char'));
    _library._php_core_globals.defineProperty("auto_globals_jit", 'uchar');
    _library._php_core_globals.defineProperty("auto_prepend_file", ref.refType('char'));
    _library._php_core_globals.defineProperty("connection_status", 'short');
    _library._php_core_globals.defineProperty("disable_classes", ref.refType('char'));
    _library._php_core_globals.defineProperty("disable_functions", ref.refType('char'));
    _library._php_core_globals.defineProperty("display_errors", 'uchar');
    _library._php_core_globals.defineProperty("display_startup_errors", 'uchar');
    _library._php_core_globals.defineProperty("doc_root", ref.refType('char'));
    _library._php_core_globals.defineProperty("docref_ext", ref.refType('char'));
    _library._php_core_globals.defineProperty("docref_root", ref.refType('char'));
    _library._php_core_globals.defineProperty("during_request_startup", 'uchar');
    _library._php_core_globals.defineProperty("enable_dl", 'uchar');
    _library._php_core_globals.defineProperty("enable_post_data_reading", 'uchar');
    _library._php_core_globals.defineProperty("error_append_string", ref.refType('char'));
    _library._php_core_globals.defineProperty("error_log", ref.refType('char'));
    _library._php_core_globals.defineProperty("error_prepend_string", ref.refType('char'));
    _library._php_core_globals.defineProperty("exit_on_timeout", 'uchar');
    _library._php_core_globals.defineProperty("expose_php", 'uchar');
    _library._php_core_globals.defineProperty("extension_dir", ref.refType('char'));
    _library._php_core_globals.defineProperty("file_uploads", 'uchar');
    _library._php_core_globals.defineProperty("header_is_being_sent", 'uchar');
    _library._php_core_globals.defineProperty("html_errors", 'uchar');
    _library._php_core_globals.defineProperty("http_globals", RefArray(ref.refType(_library.zval), 6));
    _library._php_core_globals.defineProperty("ignore_repeated_errors", 'uchar');
    _library._php_core_globals.defineProperty("ignore_repeated_source", 'uchar');
    _library._php_core_globals.defineProperty("ignore_user_abort", 'short');
    _library._php_core_globals.defineProperty("implicit_flush", 'uchar');
    _library._php_core_globals.defineProperty("in_error_log", 'uchar');
    _library._php_core_globals.defineProperty("in_user_include", 'uchar');
    _library._php_core_globals.defineProperty("include_path", ref.refType('char'));
    _library._php_core_globals.defineProperty("input_encoding", ref.refType('char'));
    _library._php_core_globals.defineProperty("internal_encoding", ref.refType('char'));
    _library._php_core_globals.defineProperty("last_error_file", ref.refType('char'));
    _library._php_core_globals.defineProperty("last_error_lineno", 'int');
    _library._php_core_globals.defineProperty("last_error_message", ref.refType('char'));
    _library._php_core_globals.defineProperty("last_error_type", 'int');
    _library._php_core_globals.defineProperty("log_errors", 'uchar');
    _library._php_core_globals.defineProperty("log_errors_max_len", 'long');
    _library._php_core_globals.defineProperty("mail_log", ref.refType('char'));
    _library._php_core_globals.defineProperty("mail_x_header", 'uchar');
    _library._php_core_globals.defineProperty("max_input_nesting_level", 'long');
    _library._php_core_globals.defineProperty("max_input_time", 'long');
    _library._php_core_globals.defineProperty("max_input_vars", 'long');
    _library._php_core_globals.defineProperty("memory_limit", 'long');
    _library._php_core_globals.defineProperty("modules_activated", 'uchar');
    _library._php_core_globals.defineProperty("open_basedir", ref.refType('char'));
    _library._php_core_globals.defineProperty("output_buffering", 'long');
    _library._php_core_globals.defineProperty("output_encoding", ref.refType('char'));
    _library._php_core_globals.defineProperty("output_handler", ref.refType('char'));
    _library._php_core_globals.defineProperty("php_binary", ref.refType('char'));
    _library._php_core_globals.defineProperty("register_argc_argv", 'uchar');
    _library._php_core_globals.defineProperty("report_memleaks", 'uchar');
    _library._php_core_globals.defineProperty("report_zend_debug", 'uchar');
    _library._php_core_globals.defineProperty("request_order", ref.refType('char'));
    _library._php_core_globals.defineProperty("rfc1867_protected_variables", _library.HashTable);
    _library._php_core_globals.defineProperty("serialize_precision", 'long');
    _library._php_core_globals.defineProperty("sql_safe_mode", 'uchar');
    _library._php_core_globals.defineProperty("sys_temp_dir", ref.refType('char'));
    _library._php_core_globals.defineProperty("tick_functions", _library.zend_llist);
    _library._php_core_globals.defineProperty("track_errors", 'uchar');
    _library._php_core_globals.defineProperty("unserialize_callback_func", ref.refType('char'));
    _library._php_core_globals.defineProperty("upload_max_filesize", 'long');
    _library._php_core_globals.defineProperty("upload_tmp_dir", ref.refType('char'));
    _library._php_core_globals.defineProperty("user_dir", ref.refType('char'));
    _library._php_core_globals.defineProperty("user_ini_cache_ttl", 'long');
    _library._php_core_globals.defineProperty("user_ini_filename", ref.refType('char'));
    _library._php_core_globals.defineProperty("variables_order", ref.refType('char'));
    _library._php_core_globals.defineProperty("xmlrpc_error_number", 'long');
    _library._php_core_globals.defineProperty("xmlrpc_errors", 'uchar');
});

_library.php_core_globals = _library._php_core_globals;


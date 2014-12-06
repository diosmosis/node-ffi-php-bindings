var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._arg_separators = Struct({
    "input": 'char' ? ref.refType('char') : 'pointer',
    "output": 'char' ? ref.refType('char') : 'pointer'
});

_library.arg_separators = _library._arg_separators;

_library._php_core_globals = Struct({
    "activated_auto_globals": RefArray('uchar', 8),
    "allow_url_fopen": 'uchar',
    "allow_url_include": 'uchar',
    "always_populate_raw_post_data": 'char',
    "arg_separator": _library.arg_separators,
    "auto_append_file": 'char' ? ref.refType('char') : 'pointer',
    "auto_globals_jit": 'uchar',
    "auto_prepend_file": 'char' ? ref.refType('char') : 'pointer',
    "connection_status": 'short',
    "disable_classes": 'char' ? ref.refType('char') : 'pointer',
    "disable_functions": 'char' ? ref.refType('char') : 'pointer',
    "display_errors": 'uchar',
    "display_startup_errors": 'uchar',
    "doc_root": 'char' ? ref.refType('char') : 'pointer',
    "docref_ext": 'char' ? ref.refType('char') : 'pointer',
    "docref_root": 'char' ? ref.refType('char') : 'pointer',
    "during_request_startup": 'uchar',
    "enable_dl": 'uchar',
    "enable_post_data_reading": 'uchar',
    "error_append_string": 'char' ? ref.refType('char') : 'pointer',
    "error_log": 'char' ? ref.refType('char') : 'pointer',
    "error_prepend_string": 'char' ? ref.refType('char') : 'pointer',
    "exit_on_timeout": 'uchar',
    "expose_php": 'uchar',
    "extension_dir": 'char' ? ref.refType('char') : 'pointer',
    "file_uploads": 'uchar',
    "header_is_being_sent": 'uchar',
    "html_errors": 'uchar',
    "http_globals": RefArray(ref.refType(_library.zval), 6),
    "ignore_repeated_errors": 'uchar',
    "ignore_repeated_source": 'uchar',
    "ignore_user_abort": 'short',
    "implicit_flush": 'uchar',
    "in_error_log": 'uchar',
    "in_user_include": 'uchar',
    "include_path": 'char' ? ref.refType('char') : 'pointer',
    "input_encoding": 'char' ? ref.refType('char') : 'pointer',
    "internal_encoding": 'char' ? ref.refType('char') : 'pointer',
    "last_error_file": 'char' ? ref.refType('char') : 'pointer',
    "last_error_lineno": 'int',
    "last_error_message": 'char' ? ref.refType('char') : 'pointer',
    "last_error_type": 'int',
    "log_errors": 'uchar',
    "log_errors_max_len": 'long',
    "mail_log": 'char' ? ref.refType('char') : 'pointer',
    "mail_x_header": 'uchar',
    "max_input_nesting_level": 'long',
    "max_input_time": 'long',
    "max_input_vars": 'long',
    "memory_limit": 'long',
    "modules_activated": 'uchar',
    "open_basedir": 'char' ? ref.refType('char') : 'pointer',
    "output_buffering": 'long',
    "output_encoding": 'char' ? ref.refType('char') : 'pointer',
    "output_handler": 'char' ? ref.refType('char') : 'pointer',
    "php_binary": 'char' ? ref.refType('char') : 'pointer',
    "register_argc_argv": 'uchar',
    "report_memleaks": 'uchar',
    "report_zend_debug": 'uchar',
    "request_order": 'char' ? ref.refType('char') : 'pointer',
    "rfc1867_protected_variables": _library.HashTable,
    "serialize_precision": 'long',
    "sql_safe_mode": 'uchar',
    "sys_temp_dir": 'char' ? ref.refType('char') : 'pointer',
    "tick_functions": _library.zend_llist,
    "track_errors": 'uchar',
    "unserialize_callback_func": 'char' ? ref.refType('char') : 'pointer',
    "upload_max_filesize": 'long',
    "upload_tmp_dir": 'char' ? ref.refType('char') : 'pointer',
    "user_dir": 'char' ? ref.refType('char') : 'pointer',
    "user_ini_cache_ttl": 'long',
    "user_ini_filename": 'char' ? ref.refType('char') : 'pointer',
    "variables_order": 'char' ? ref.refType('char') : 'pointer',
    "xmlrpc_error_number": 'long',
    "xmlrpc_errors": 'uchar'
});

_library.php_core_globals = _library._php_core_globals;

function loadDependentSymbols() {
    require('./../Zend/zend.js');
    require('./../Zend/zend_API.js');
    require('./../Zend/zend_ast.js');
    require('./../Zend/zend_compile.js');
    require('./../Zend/zend_hash.js');
    require('./../Zend/zend_ini.js');
    require('./../Zend/zend_iterators.js');
    require('./../Zend/zend_llist.js');
    require('./../Zend/zend_modules.js');
    require('./../Zend/zend_object_handlers.js');
    require('./../Zend/zend_types.js');
}
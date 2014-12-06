var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.sapi_header_struct = Struct({
    "header": ref.refType('char'),
    "header_len": 'uint'
});

_library.sapi_headers_struct = Struct({
    "headers": _library.zend_llist,
    "http_response_code": 'int',
    "http_status_line": ref.refType('char'),
    "mimetype": ref.refType('char'),
    "send_default_content_type": 'uchar'
});

_library._sapi_post_entry = Struct({
    "content_type": ref.refType('char'),
    "content_type_len": 'uint',
    "post_handler": ffi.Function('void', [ref.refType('char'), ref.refType('void')]),
    "post_reader": ffi.Function('void', [])
});

_library._sapi_post_entry = Struct({
    "content_type": ref.refType('char'),
    "content_type_len": 'uint',
    "post_handler": ffi.Function('void', [ref.refType('char'), ref.refType('void')]),
    "post_reader": ffi.Function('void', [])
});

_library.sapi_post_entry = _library._sapi_post_entry;

_library._sapi_module_struct = Struct({
    "activate": ffi.Function('int', []),
    "additional_functions": ref.refType(_library.zend_function_entry),
    "block_interruptions": ffi.Function('void', []),
    "deactivate": ffi.Function('int', []),
    "default_post_reader": ffi.Function('void', []),
    "executable_location": ref.refType('char'),
    "flush": ffi.Function('void', [ref.refType('void')]),
    "force_http_10": ffi.Function('int', []),
    "get_fd": ffi.Function('int', [ref.refType('int')]),
    "get_request_time": ffi.Function('double', []),
    "get_stat": ffi.Function(ref.refType(_library.stat), []),
    "get_target_gid": ffi.Function('int', [ref.refType('uint')]),
    "get_target_uid": ffi.Function('int', [ref.refType('uint')]),
    "getenv": ffi.Function(ref.refType('char'), [ref.refType('char'), 'ulong']),
    "header_handler": ffi.Function('int', [ref.refType(_library.sapi_header_struct), _library.sapi_header_op_enum, ref.refType(_library.sapi_headers_struct)]),
    "ini_defaults": ffi.Function('void', [ref.refType(_library._hashtable)]),
    "ini_entries": ref.refType('char'),
    "input_filter": ffi.Function('uint', ['int', ref.refType('char'), ref.refType(ref.refType('char')), 'uint', ref.refType('uint')]),
    "input_filter_init": ffi.Function('uint', []),
    "log_message": ffi.Function('void', [ref.refType('char')]),
    "name": ref.refType('char'),
    "php_ini_ignore": 'int',
    "php_ini_ignore_cwd": 'int',
    "php_ini_path_override": ref.refType('char'),
    "phpinfo_as_text": 'int',
    "pretty_name": ref.refType('char'),
    "read_cookies": ffi.Function(ref.refType('char'), []),
    "read_post": ffi.Function('int', [ref.refType('char'), 'uint']),
    "register_server_variables": ffi.Function('void', [ref.refType(_library._zval_struct)]),
    "sapi_error": ffi.Function('void', ['int', ref.refType('char')]),
    "send_header": ffi.Function('void', [ref.refType(_library.sapi_header_struct), ref.refType('void')]),
    "send_headers": ffi.Function('int', [ref.refType(_library.sapi_headers_struct)]),
    "shutdown": ffi.Function('int', [ref.refType(_library._sapi_module_struct)]),
    "startup": ffi.Function('int', [ref.refType(_library._sapi_module_struct)]),
    "terminate_process": ffi.Function('void', []),
    "treat_data": ffi.Function('void', ['int', ref.refType('char'), ref.refType(_library._zval_struct)]),
    "ub_write": ffi.Function('int', [ref.refType('char'), 'uint']),
    "unblock_interruptions": ffi.Function('void', [])
});

_library._sapi_module_struct = Struct({
    "activate": ffi.Function('int', []),
    "additional_functions": ref.refType(_library.zend_function_entry),
    "block_interruptions": ffi.Function('void', []),
    "deactivate": ffi.Function('int', []),
    "default_post_reader": ffi.Function('void', []),
    "executable_location": ref.refType('char'),
    "flush": ffi.Function('void', [ref.refType('void')]),
    "force_http_10": ffi.Function('int', []),
    "get_fd": ffi.Function('int', [ref.refType('int')]),
    "get_request_time": ffi.Function('double', []),
    "get_stat": ffi.Function(ref.refType(_library.stat), []),
    "get_target_gid": ffi.Function('int', [ref.refType('uint')]),
    "get_target_uid": ffi.Function('int', [ref.refType('uint')]),
    "getenv": ffi.Function(ref.refType('char'), [ref.refType('char'), 'ulong']),
    "header_handler": ffi.Function('int', [ref.refType(_library.sapi_header_struct), _library.sapi_header_op_enum, ref.refType(_library.sapi_headers_struct)]),
    "ini_defaults": ffi.Function('void', [ref.refType(_library._hashtable)]),
    "ini_entries": ref.refType('char'),
    "input_filter": ffi.Function('uint', ['int', ref.refType('char'), ref.refType(ref.refType('char')), 'uint', ref.refType('uint')]),
    "input_filter_init": ffi.Function('uint', []),
    "log_message": ffi.Function('void', [ref.refType('char')]),
    "name": ref.refType('char'),
    "php_ini_ignore": 'int',
    "php_ini_ignore_cwd": 'int',
    "php_ini_path_override": ref.refType('char'),
    "phpinfo_as_text": 'int',
    "pretty_name": ref.refType('char'),
    "read_cookies": ffi.Function(ref.refType('char'), []),
    "read_post": ffi.Function('int', [ref.refType('char'), 'uint']),
    "register_server_variables": ffi.Function('void', [ref.refType(_library._zval_struct)]),
    "sapi_error": ffi.Function('void', ['int', ref.refType('char')]),
    "send_header": ffi.Function('void', [ref.refType(_library.sapi_header_struct), ref.refType('void')]),
    "send_headers": ffi.Function('int', [ref.refType(_library.sapi_headers_struct)]),
    "shutdown": ffi.Function('int', [ref.refType(_library._sapi_module_struct)]),
    "startup": ffi.Function('int', [ref.refType(_library._sapi_module_struct)]),
    "terminate_process": ffi.Function('void', []),
    "treat_data": ffi.Function('void', ['int', ref.refType('char'), ref.refType(_library._zval_struct)]),
    "ub_write": ffi.Function('int', [ref.refType('char'), 'uint']),
    "unblock_interruptions": ffi.Function('void', [])
});

_library.sapi_module_struct = _library._sapi_module_struct;

_library.sapi_request_info = Struct({
    "argc": 'int',
    "argv": ref.refType(ref.refType('char')),
    "argv0": ref.refType('char'),
    "auth_digest": ref.refType('char'),
    "auth_password": ref.refType('char'),
    "auth_user": ref.refType('char'),
    "content_length": 'long',
    "content_type": ref.refType('char'),
    "content_type_dup": ref.refType('char'),
    "cookie_data": ref.refType('char'),
    "current_user": ref.refType('char'),
    "current_user_length": 'int',
    "headers_only": 'uchar',
    "headers_read": 'uchar',
    "no_headers": 'uchar',
    "path_translated": ref.refType('char'),
    "post_entry": ref.refType(_library.sapi_post_entry),
    "proto_num": 'int',
    "query_string": ref.refType('char'),
    "request_body": ref.refType(_library._php_stream),
    "request_method": ref.refType('char'),
    "request_uri": ref.refType('char')
});

_library._sapi_globals_struct = Struct({
    "callback_func": ref.refType(_library.zval),
    "callback_run": 'uchar',
    "default_charset": ref.refType('char'),
    "default_mimetype": ref.refType('char'),
    "fci_cache": _library.zend_fcall_info_cache,
    "global_request_time": 'double',
    "global_stat": _library.stat,
    "headers_sent": 'uchar',
    "known_post_content_types": _library.HashTable,
    "options": 'int',
    "post_max_size": 'long',
    "post_read": 'uchar',
    "read_post_bytes": 'long',
    "request_info": _library.sapi_request_info,
    "rfc1867_uploaded_files": ref.refType(_library.HashTable),
    "sapi_headers": _library.sapi_headers_struct,
    "sapi_started": 'uchar',
    "server_context": ref.refType('void')
});

_library.sapi_globals_struct = _library._sapi_globals_struct;

_library.sapi_startup = ['void', [ref.refType(_library.sapi_module_struct)]];
_library._functions.push(_library.sapi_startup);

_library.sapi_shutdown = ['void', []];
_library._functions.push(_library.sapi_shutdown);

_library.sapi_activate = ['void', []];
_library._functions.push(_library.sapi_activate);

_library.sapi_deactivate = ['void', []];
_library._functions.push(_library.sapi_deactivate);

_library.sapi_initialize_empty_request = ['void', []];
_library._functions.push(_library.sapi_initialize_empty_request);

_library.sapi_header_line = Struct({
    "line": ref.refType('char'),
    "line_len": 'uint',
    "response_code": 'long'
});

_library.sapi_header_op_enum = 'int32';

_library.sapi_header_op = ['int', [_library.sapi_header_op_enum, ref.refType('void')]];
_library._functions.push(_library.sapi_header_op);

_library.sapi_add_header_ex = ['int', [ref.refType('char'), 'uint', 'uchar', 'uchar']];
_library._functions.push(_library.sapi_add_header_ex);

_library.sapi_send_headers = ['int', []];
_library._functions.push(_library.sapi_send_headers);

_library.sapi_free_header = ['void', [ref.refType(_library.sapi_header_struct)]];
_library._functions.push(_library.sapi_free_header);

_library.sapi_handle_post = ['void', [ref.refType('void')]];
_library._functions.push(_library.sapi_handle_post);

_library.sapi_read_post_block = ['int', [ref.refType('char'), 'ulong']];
_library._functions.push(_library.sapi_read_post_block);

_library.sapi_register_post_entries = ['int', [ref.refType(_library.sapi_post_entry)]];
_library._functions.push(_library.sapi_register_post_entries);

_library.sapi_register_post_entry = ['int', [ref.refType(_library.sapi_post_entry)]];
_library._functions.push(_library.sapi_register_post_entry);

_library.sapi_unregister_post_entry = ['void', [ref.refType(_library.sapi_post_entry)]];
_library._functions.push(_library.sapi_unregister_post_entry);

_library.sapi_register_default_post_reader = ['int', [ffi.Function('void', [])]];
_library._functions.push(_library.sapi_register_default_post_reader);

_library.sapi_register_treat_data = ['int', [ffi.Function('void', ['int', ref.refType('char'), ref.refType(_library._zval_struct)])]];
_library._functions.push(_library.sapi_register_treat_data);

_library.sapi_register_input_filter = ['int', [ffi.Function('uint', ['int', ref.refType('char'), ref.refType(ref.refType('char')), 'uint', ref.refType('uint')]), ffi.Function('uint', [])]];
_library._functions.push(_library.sapi_register_input_filter);

_library.sapi_flush = ['int', []];
_library._functions.push(_library.sapi_flush);

_library.sapi_get_stat = [ref.refType(_library.stat), []];
_library._functions.push(_library.sapi_get_stat);

_library.sapi_getenv = [ref.refType('char'), [ref.refType('char'), 'ulong']];
_library._functions.push(_library.sapi_getenv);

_library.sapi_get_default_content_type = [ref.refType('char'), []];
_library._functions.push(_library.sapi_get_default_content_type);

_library.sapi_get_default_content_type_header = ['void', [ref.refType(_library.sapi_header_struct)]];
_library._functions.push(_library.sapi_get_default_content_type_header);

_library.sapi_apply_default_charset = ['ulong', [ref.refType(ref.refType('char')), 'ulong']];
_library._functions.push(_library.sapi_apply_default_charset);

_library.sapi_activate_headers_only = ['void', []];
_library._functions.push(_library.sapi_activate_headers_only);

_library.sapi_get_fd = ['int', [ref.refType('int')]];
_library._functions.push(_library.sapi_get_fd);

_library.sapi_force_http_10 = ['int', []];
_library._functions.push(_library.sapi_force_http_10);

_library.sapi_get_target_uid = ['int', [ref.refType(_library.uid_t)]];
_library._functions.push(_library.sapi_get_target_uid);

_library.sapi_get_target_gid = ['int', [ref.refType(_library.gid_t)]];
_library._functions.push(_library.sapi_get_target_gid);

_library.sapi_get_request_time = ['double', []];
_library._functions.push(_library.sapi_get_request_time);

_library.sapi_terminate_process = ['void', []];
_library._functions.push(_library.sapi_terminate_process);

_library.sapi_read_standard_form_data = ['void', []];
_library._functions.push(_library.sapi_read_standard_form_data);

_library.php_default_post_reader = ['void', []];
_library._functions.push(_library.php_default_post_reader);

_library.php_default_treat_data = ['void', ['int', ref.refType('char'), ref.refType(_library.zval)]];
_library._functions.push(_library.php_default_treat_data);

_library.php_default_input_filter = ['uint', ['int', ref.refType('char'), ref.refType(ref.refType('char')), 'uint', ref.refType('uint')]];
_library._functions.push(_library.php_default_input_filter);

function loadDependentSymbols() {
    require('./../Zend/zend_API.js');
    require('./../Zend/zend_hash.js');
};
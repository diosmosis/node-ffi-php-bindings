var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.sapi_header_struct = Struct({});
_library.sapi_header_struct.size = 1;

_library._preload.push(function () {
    _library.sapi_header_struct.size = 0;
    _library.sapi_header_struct.defineProperty("header", ref.refType('char'));
    _library.sapi_header_struct.defineProperty("header_len", 'uint');
});

require('./zend_llist.js');
_library.sapi_headers_struct = Struct({});
_library.sapi_headers_struct.size = 1;

_library._preload.push(function () {
    _library.sapi_headers_struct.size = 0;
    _library.sapi_headers_struct.defineProperty("headers", _library.zend_llist);
    _library.sapi_headers_struct.defineProperty("http_response_code", 'int');
    _library.sapi_headers_struct.defineProperty("http_status_line", ref.refType('char'));
    _library.sapi_headers_struct.defineProperty("mimetype", ref.refType('char'));
    _library.sapi_headers_struct.defineProperty("send_default_content_type", 'uchar');
});

_library._sapi_post_entry = Struct({});
_library._sapi_post_entry.size = 1;

_library._preload.push(function () {
    _library._sapi_post_entry.size = 0;
    _library._sapi_post_entry.defineProperty("content_type", ref.refType('char'));
    _library._sapi_post_entry.defineProperty("content_type_len", 'uint');
    _library._sapi_post_entry.defineProperty("post_handler", ffi.Function('void', [ref.refType('char'), ref.refType('void')]));
    _library._sapi_post_entry.defineProperty("post_reader", ffi.Function('void', []));
});

_library.sapi_post_entry = _library._sapi_post_entry;

_library.sapi_header_op_enum = 'int32';

require('./zend_API.js');
_library._sapi_module_struct = Struct({});
_library._sapi_module_struct.size = 1;

_library._preload.push(function () {
    _library._sapi_module_struct.size = 0;
    _library._sapi_module_struct.defineProperty("activate", ffi.Function('int', []));
    _library._sapi_module_struct.defineProperty("additional_functions", ref.refType(_library.zend_function_entry));
    _library._sapi_module_struct.defineProperty("block_interruptions", ffi.Function('void', []));
    _library._sapi_module_struct.defineProperty("deactivate", ffi.Function('int', []));
    _library._sapi_module_struct.defineProperty("default_post_reader", ffi.Function('void', []));
    _library._sapi_module_struct.defineProperty("executable_location", ref.refType('char'));
    _library._sapi_module_struct.defineProperty("flush", ffi.Function('void', [ref.refType('void')]));
    _library._sapi_module_struct.defineProperty("force_http_10", ffi.Function('int', []));
    _library._sapi_module_struct.defineProperty("get_fd", ffi.Function('int', [ref.refType('int')]));
    _library._sapi_module_struct.defineProperty("get_request_time", ffi.Function('double', []));
    _library._sapi_module_struct.defineProperty("get_stat", ffi.Function(ref.refType(_library.stat), []));
    _library._sapi_module_struct.defineProperty("get_target_gid", ffi.Function('int', [ref.refType('uint')]));
    _library._sapi_module_struct.defineProperty("get_target_uid", ffi.Function('int', [ref.refType('uint')]));
    _library._sapi_module_struct.defineProperty("getenv", ffi.Function(ref.refType('char'), [ref.refType('char'), 'ulong']));
    _library._sapi_module_struct.defineProperty("header_handler", ffi.Function('int', [ref.refType(_library.sapi_header_struct), _library.sapi_header_op_enum, ref.refType(_library.sapi_headers_struct)]));
    _library._sapi_module_struct.defineProperty("ini_defaults", ffi.Function('void', [ref.refType(_library._hashtable)]));
    _library._sapi_module_struct.defineProperty("ini_entries", ref.refType('char'));
    _library._sapi_module_struct.defineProperty("input_filter", ffi.Function('uint', ['int', ref.refType('char'), ref.refType(ref.refType('char')), 'uint', ref.refType('uint')]));
    _library._sapi_module_struct.defineProperty("input_filter_init", ffi.Function('uint', []));
    _library._sapi_module_struct.defineProperty("log_message", ffi.Function('void', [ref.refType('char')]));
    _library._sapi_module_struct.defineProperty("name", ref.refType('char'));
    _library._sapi_module_struct.defineProperty("php_ini_ignore", 'int');
    _library._sapi_module_struct.defineProperty("php_ini_ignore_cwd", 'int');
    _library._sapi_module_struct.defineProperty("php_ini_path_override", ref.refType('char'));
    _library._sapi_module_struct.defineProperty("phpinfo_as_text", 'int');
    _library._sapi_module_struct.defineProperty("pretty_name", ref.refType('char'));
    _library._sapi_module_struct.defineProperty("read_cookies", ffi.Function(ref.refType('char'), []));
    _library._sapi_module_struct.defineProperty("read_post", ffi.Function('int', [ref.refType('char'), 'uint']));
    _library._sapi_module_struct.defineProperty("register_server_variables", ffi.Function('void', [ref.refType(_library._zval_struct)]));
    _library._sapi_module_struct.defineProperty("sapi_error", ffi.Function('void', ['int', ref.refType('char')]));
    _library._sapi_module_struct.defineProperty("send_header", ffi.Function('void', [ref.refType(_library.sapi_header_struct), ref.refType('void')]));
    _library._sapi_module_struct.defineProperty("send_headers", ffi.Function('int', [ref.refType(_library.sapi_headers_struct)]));
    _library._sapi_module_struct.defineProperty("shutdown", ffi.Function('int', [ref.refType(_library._sapi_module_struct)]));
    _library._sapi_module_struct.defineProperty("startup", ffi.Function('int', [ref.refType(_library._sapi_module_struct)]));
    _library._sapi_module_struct.defineProperty("terminate_process", ffi.Function('void', []));
    _library._sapi_module_struct.defineProperty("treat_data", ffi.Function('void', ['int', ref.refType('char'), ref.refType(_library._zval_struct)]));
    _library._sapi_module_struct.defineProperty("ub_write", ffi.Function('int', [ref.refType('char'), 'uint']));
    _library._sapi_module_struct.defineProperty("unblock_interruptions", ffi.Function('void', []));
});

_library.sapi_module_struct = _library._sapi_module_struct;

require('./php_streams.js');
_library.sapi_request_info = Struct({});
_library.sapi_request_info.size = 1;

_library._preload.push(function () {
    _library.sapi_request_info.size = 0;
    _library.sapi_request_info.defineProperty("argc", 'int');
    _library.sapi_request_info.defineProperty("argv", ref.refType(ref.refType('char')));
    _library.sapi_request_info.defineProperty("argv0", ref.refType('char'));
    _library.sapi_request_info.defineProperty("auth_digest", ref.refType('char'));
    _library.sapi_request_info.defineProperty("auth_password", ref.refType('char'));
    _library.sapi_request_info.defineProperty("auth_user", ref.refType('char'));
    _library.sapi_request_info.defineProperty("content_length", 'long');
    _library.sapi_request_info.defineProperty("content_type", ref.refType('char'));
    _library.sapi_request_info.defineProperty("content_type_dup", ref.refType('char'));
    _library.sapi_request_info.defineProperty("cookie_data", ref.refType('char'));
    _library.sapi_request_info.defineProperty("current_user", ref.refType('char'));
    _library.sapi_request_info.defineProperty("current_user_length", 'int');
    _library.sapi_request_info.defineProperty("headers_only", 'uchar');
    _library.sapi_request_info.defineProperty("headers_read", 'uchar');
    _library.sapi_request_info.defineProperty("no_headers", 'uchar');
    _library.sapi_request_info.defineProperty("path_translated", ref.refType('char'));
    _library.sapi_request_info.defineProperty("post_entry", ref.refType(_library.sapi_post_entry));
    _library.sapi_request_info.defineProperty("proto_num", 'int');
    _library.sapi_request_info.defineProperty("query_string", ref.refType('char'));
    _library.sapi_request_info.defineProperty("request_body", ref.refType(_library._php_stream));
    _library.sapi_request_info.defineProperty("request_method", ref.refType('char'));
    _library.sapi_request_info.defineProperty("request_uri", ref.refType('char'));
});

require('./zend_types.js');
require('./zend_hash.js');
_library._sapi_globals_struct = Struct({});
_library._sapi_globals_struct.size = 1;

_library._preload.push(function () {
    _library._sapi_globals_struct.size = 0;
    _library._sapi_globals_struct.defineProperty("callback_func", ref.refType(_library.zval));
    _library._sapi_globals_struct.defineProperty("callback_run", 'uchar');
    _library._sapi_globals_struct.defineProperty("default_charset", ref.refType('char'));
    _library._sapi_globals_struct.defineProperty("default_mimetype", ref.refType('char'));
    _library._sapi_globals_struct.defineProperty("fci_cache", _library.zend_fcall_info_cache);
    _library._sapi_globals_struct.defineProperty("global_request_time", 'double');
    _library._sapi_globals_struct.defineProperty("global_stat", _library.stat);
    _library._sapi_globals_struct.defineProperty("headers_sent", 'uchar');
    _library._sapi_globals_struct.defineProperty("known_post_content_types", _library.HashTable);
    _library._sapi_globals_struct.defineProperty("options", 'int');
    _library._sapi_globals_struct.defineProperty("post_max_size", 'long');
    _library._sapi_globals_struct.defineProperty("post_read", 'uchar');
    _library._sapi_globals_struct.defineProperty("read_post_bytes", 'long');
    _library._sapi_globals_struct.defineProperty("request_info", _library.sapi_request_info);
    _library._sapi_globals_struct.defineProperty("rfc1867_uploaded_files", ref.refType(_library.HashTable));
    _library._sapi_globals_struct.defineProperty("sapi_headers", _library.sapi_headers_struct);
    _library._sapi_globals_struct.defineProperty("sapi_started", 'uchar');
    _library._sapi_globals_struct.defineProperty("server_context", ref.refType('void'));
});

_library.sapi_globals_struct = _library._sapi_globals_struct;

_library.sapi_startup = ['void', [ref.refType(_library.sapi_module_struct)]];
_library._functions['sapi_startup'] = _library.sapi_startup;

_library.sapi_shutdown = ['void', []];
_library._functions['sapi_shutdown'] = _library.sapi_shutdown;

_library.sapi_activate = ['void', []];
_library._functions['sapi_activate'] = _library.sapi_activate;

_library.sapi_deactivate = ['void', []];
_library._functions['sapi_deactivate'] = _library.sapi_deactivate;

_library.sapi_initialize_empty_request = ['void', []];
_library._functions['sapi_initialize_empty_request'] = _library.sapi_initialize_empty_request;

_library.sapi_header_line = Struct({});
_library.sapi_header_line.size = 1;

_library._preload.push(function () {
    _library.sapi_header_line.size = 0;
    _library.sapi_header_line.defineProperty("line", ref.refType('char'));
    _library.sapi_header_line.defineProperty("line_len", 'uint');
    _library.sapi_header_line.defineProperty("response_code", 'long');
});

_library.sapi_header_op = ['int', [_library.sapi_header_op_enum, ref.refType('void')]];
_library._functions['sapi_header_op'] = _library.sapi_header_op;

_library.sapi_add_header_ex = ['int', [ref.refType('char'), 'uint', 'uchar', 'uchar']];
_library._functions['sapi_add_header_ex'] = _library.sapi_add_header_ex;

_library.sapi_send_headers = ['int', []];
_library._functions['sapi_send_headers'] = _library.sapi_send_headers;

_library.sapi_free_header = ['void', [ref.refType(_library.sapi_header_struct)]];
_library._functions['sapi_free_header'] = _library.sapi_free_header;

_library.sapi_handle_post = ['void', [ref.refType('void')]];
_library._functions['sapi_handle_post'] = _library.sapi_handle_post;

_library.sapi_read_post_block = ['int', [ref.refType('char'), 'ulong']];
_library._functions['sapi_read_post_block'] = _library.sapi_read_post_block;

_library.sapi_register_post_entries = ['int', [ref.refType(_library.sapi_post_entry)]];
_library._functions['sapi_register_post_entries'] = _library.sapi_register_post_entries;

_library.sapi_register_post_entry = ['int', [ref.refType(_library.sapi_post_entry)]];
_library._functions['sapi_register_post_entry'] = _library.sapi_register_post_entry;

_library.sapi_unregister_post_entry = ['void', [ref.refType(_library.sapi_post_entry)]];
_library._functions['sapi_unregister_post_entry'] = _library.sapi_unregister_post_entry;

_library.sapi_register_default_post_reader = ['int', [ffi.Function('void', [])]];
_library._functions['sapi_register_default_post_reader'] = _library.sapi_register_default_post_reader;

_library.sapi_register_treat_data = ['int', [ffi.Function('void', ['int', ref.refType('char'), ref.refType(_library._zval_struct)])]];
_library._functions['sapi_register_treat_data'] = _library.sapi_register_treat_data;

_library.sapi_register_input_filter = ['int', [ffi.Function('uint', ['int', ref.refType('char'), ref.refType(ref.refType('char')), 'uint', ref.refType('uint')]), ffi.Function('uint', [])]];
_library._functions['sapi_register_input_filter'] = _library.sapi_register_input_filter;

_library.sapi_flush = ['int', []];
_library._functions['sapi_flush'] = _library.sapi_flush;

_library.sapi_get_stat = [ref.refType(_library.stat), []];
_library._functions['sapi_get_stat'] = _library.sapi_get_stat;

_library.sapi_getenv = [ref.refType('char'), [ref.refType('char'), 'ulong']];
_library._functions['sapi_getenv'] = _library.sapi_getenv;

_library.sapi_get_default_content_type = [ref.refType('char'), []];
_library._functions['sapi_get_default_content_type'] = _library.sapi_get_default_content_type;

_library.sapi_get_default_content_type_header = ['void', [ref.refType(_library.sapi_header_struct)]];
_library._functions['sapi_get_default_content_type_header'] = _library.sapi_get_default_content_type_header;

_library.sapi_apply_default_charset = ['ulong', [ref.refType(ref.refType('char')), 'ulong']];
_library._functions['sapi_apply_default_charset'] = _library.sapi_apply_default_charset;

_library.sapi_activate_headers_only = ['void', []];
_library._functions['sapi_activate_headers_only'] = _library.sapi_activate_headers_only;

_library.sapi_get_fd = ['int', [ref.refType('int')]];
_library._functions['sapi_get_fd'] = _library.sapi_get_fd;

_library.sapi_force_http_10 = ['int', []];
_library._functions['sapi_force_http_10'] = _library.sapi_force_http_10;

_library.sapi_get_target_uid = ['int', [ref.refType(_library.uid_t)]];
_library._functions['sapi_get_target_uid'] = _library.sapi_get_target_uid;

_library.sapi_get_target_gid = ['int', [ref.refType(_library.gid_t)]];
_library._functions['sapi_get_target_gid'] = _library.sapi_get_target_gid;

_library.sapi_get_request_time = ['double', []];
_library._functions['sapi_get_request_time'] = _library.sapi_get_request_time;

_library.sapi_terminate_process = ['void', []];
_library._functions['sapi_terminate_process'] = _library.sapi_terminate_process;

_library.sapi_read_standard_form_data = ['void', []];
_library._functions['sapi_read_standard_form_data'] = _library.sapi_read_standard_form_data;

_library.php_default_post_reader = ['void', []];
_library._functions['php_default_post_reader'] = _library.php_default_post_reader;

_library.php_default_treat_data = ['void', ['int', ref.refType('char'), ref.refType(_library.zval)]];
_library._functions['php_default_treat_data'] = _library.php_default_treat_data;

_library.php_default_input_filter = ['uint', ['int', ref.refType('char'), ref.refType(ref.refType('char')), 'uint', ref.refType('uint')]];
_library._functions['php_default_input_filter'] = _library.php_default_input_filter;


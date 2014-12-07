var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.php_request_startup = ['int', []];
_library._functions['php_request_startup'] = _library.php_request_startup;

_library.php_request_shutdown = ['void', [ref.refType('void')]];
_library._functions['php_request_shutdown'] = _library.php_request_shutdown;

_library.php_request_shutdown_for_exec = ['void', [ref.refType('void')]];
_library._functions['php_request_shutdown_for_exec'] = _library.php_request_shutdown_for_exec;

require('./SAPI.js');
require('./zend_modules.js');
_library.php_module_startup = ['int', [ref.refType(_library.sapi_module_struct), ref.refType(_library.zend_module_entry), 'uint']];
_library._functions['php_module_startup'] = _library.php_module_startup;

_library.php_module_shutdown = ['void', []];
_library._functions['php_module_shutdown'] = _library.php_module_shutdown;

_library.php_module_shutdown_for_exec = ['void', []];
_library._functions['php_module_shutdown_for_exec'] = _library.php_module_shutdown_for_exec;

_library.php_module_shutdown_wrapper = ['int', [ref.refType(_library.sapi_module_struct)]];
_library._functions['php_module_shutdown_wrapper'] = _library.php_module_shutdown_wrapper;

_library.php_request_startup_for_hook = ['int', []];
_library._functions['php_request_startup_for_hook'] = _library.php_request_startup_for_hook;

_library.php_request_shutdown_for_hook = ['void', [ref.refType('void')]];
_library._functions['php_request_shutdown_for_hook'] = _library.php_request_shutdown_for_hook;

_library.php_register_extensions = ['int', [ref.refType(ref.refType(_library.zend_module_entry)), 'int']];
_library._functions['php_register_extensions'] = _library.php_register_extensions;

require('./zend_stream.js');
_library.php_execute_script = ['int', [ref.refType(_library.zend_file_handle)]];
_library._functions['php_execute_script'] = _library.php_execute_script;

require('./zend_types.js');
_library.php_execute_simple_script = ['int', [ref.refType(_library.zend_file_handle), ref.refType(ref.refType(_library.zval))]];
_library._functions['php_execute_simple_script'] = _library.php_execute_simple_script;

_library.php_handle_special_queries = ['int', []];
_library._functions['php_handle_special_queries'] = _library.php_handle_special_queries;

_library.php_lint_script = ['int', [ref.refType(_library.zend_file_handle)]];
_library._functions['php_lint_script'] = _library.php_lint_script;

_library.php_handle_aborted_connection = ['void', []];
_library._functions['php_handle_aborted_connection'] = _library.php_handle_aborted_connection;

_library.php_handle_auth_data = ['int', [ref.refType('char')]];
_library._functions['php_handle_auth_data'] = _library.php_handle_auth_data;

_library.php_html_puts = ['void', [ref.refType('char'), 'uint']];
_library._functions['php_html_puts'] = _library.php_html_puts;

_library.php_stream_open_for_zend_ex = ['int', [ref.refType('char'), ref.refType(_library.zend_file_handle), 'int']];
_library._functions['php_stream_open_for_zend_ex'] = _library.php_stream_open_for_zend_ex;

_library.php_call_shutdown_functions = ['void', []];
_library._functions['php_call_shutdown_functions'] = _library.php_call_shutdown_functions;

_library.php_free_shutdown_functions = ['void', []];
_library._functions['php_free_shutdown_functions'] = _library.php_free_shutdown_functions;

_library.php_init_environ = ['int', []];
_library._functions['php_init_environ'] = _library.php_init_environ;

_library.php_shutdown_environ = ['int', []];
_library._functions['php_shutdown_environ'] = _library.php_shutdown_environ;


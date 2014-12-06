var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_request_startup = ['int', []];
_library._functions.push(_library.php_request_startup);

_library.php_request_shutdown = ['void', [ref.refType('void')]];
_library._functions.push(_library.php_request_shutdown);

_library.php_request_shutdown_for_exec = ['void', [ref.refType('void')]];
_library._functions.push(_library.php_request_shutdown_for_exec);

_library.php_module_startup = ['int', [ref.refType(_library.sapi_module_struct), ref.refType(_library.zend_module_entry), 'uint']];
_library._functions.push(_library.php_module_startup);

_library.php_module_shutdown = ['void', []];
_library._functions.push(_library.php_module_shutdown);

_library.php_module_shutdown_for_exec = ['void', []];
_library._functions.push(_library.php_module_shutdown_for_exec);

_library.php_module_shutdown_wrapper = ['int', [ref.refType(_library.sapi_module_struct)]];
_library._functions.push(_library.php_module_shutdown_wrapper);

_library.php_request_startup_for_hook = ['int', []];
_library._functions.push(_library.php_request_startup_for_hook);

_library.php_request_shutdown_for_hook = ['void', [ref.refType('void')]];
_library._functions.push(_library.php_request_shutdown_for_hook);

_library.php_register_extensions = ['int', [ref.refType(ref.refType(_library.zend_module_entry)), 'int']];
_library._functions.push(_library.php_register_extensions);

_library.php_execute_script = ['int', [ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.php_execute_script);

_library.php_execute_simple_script = ['int', [ref.refType(_library.zend_file_handle), ref.refType(ref.refType(_library.zval))]];
_library._functions.push(_library.php_execute_simple_script);

_library.php_handle_special_queries = ['int', []];
_library._functions.push(_library.php_handle_special_queries);

_library.php_lint_script = ['int', [ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.php_lint_script);

_library.php_handle_aborted_connection = ['void', []];
_library._functions.push(_library.php_handle_aborted_connection);

_library.php_handle_auth_data = ['int', [ref.refType('char')]];
_library._functions.push(_library.php_handle_auth_data);

_library.php_html_puts = ['void', [ref.refType('char'), 'uint']];
_library._functions.push(_library.php_html_puts);

_library.php_stream_open_for_zend_ex = ['int', [ref.refType('char'), ref.refType(_library.zend_file_handle), 'int']];
_library._functions.push(_library.php_stream_open_for_zend_ex);

_library.php_call_shutdown_functions = ['void', []];
_library._functions.push(_library.php_call_shutdown_functions);

_library.php_free_shutdown_functions = ['void', []];
_library._functions.push(_library.php_free_shutdown_functions);

_library.php_init_environ = ['int', []];
_library._functions.push(_library.php_init_environ);

_library.php_shutdown_environ = ['int', []];
_library._functions.push(_library.php_shutdown_environ);

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
    require('./../Zend/zend_stream.js');
    require('./../Zend/zend_types.js');
    require('./SAPI.js');
}
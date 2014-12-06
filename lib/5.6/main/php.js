var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_strlcpy = ['ulong', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'ulong']];
_library._functions.push(_library.php_strlcpy);

_library.php_strlcat = ['ulong', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'ulong']];
_library._functions.push(_library.php_strlcat);

_library.phperror = ['void', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.phperror);

_library.php_write = ['int', ['void' ? ref.refType('void') : 'pointer', 'uint']];
_library._functions.push(_library.php_write);

_library.php_get_module_initialized = ['int', []];
_library._functions.push(_library.php_get_module_initialized);

_library.php_log_err = ['void', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_log_err);

_library.cfgparse = ['int', []];
_library._functions.push(_library.cfgparse);

_library.php_set_error_handling = ['void', [_library.zend_error_handling_t, ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.php_set_error_handling);

_library.php_std_error_handling = ['void', []];
_library._functions.push(_library.php_std_error_handling);

_library.php_verror = ['void', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.php_verror);

_library.php_register_internal_extensions = ['int', []];
_library._functions.push(_library.php_register_internal_extensions);

_library.php_mergesort = ['int', ['void' ? ref.refType('void') : 'pointer', 'ulong', 'ulong', ffi.Function('int', ['void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer'])]];
_library._functions.push(_library.php_mergesort);

_library.php_register_pre_request_shutdown = ['void', [ffi.Function('void', ['void' ? ref.refType('void') : 'pointer']), 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.php_register_pre_request_shutdown);

_library.php_com_initialize = ['void', []];
_library._functions.push(_library.php_com_initialize);

_library.php_get_current_user = ['char' ? ref.refType('char') : 'pointer', []];
_library._functions.push(_library.php_get_current_user);

function loadDependentSymbols() {
    require('./../Zend/zend.js');
    require('./../Zend/zend_API.js');
    require('./../Zend/zend_ast.js');
    require('./../Zend/zend_compile.js');
    require('./../Zend/zend_hash.js');
    require('./../Zend/zend_ini.js');
    require('./../Zend/zend_iterators.js');
    require('./../Zend/zend_modules.js');
    require('./../Zend/zend_object_handlers.js');
    require('./../Zend/zend_types.js');
}
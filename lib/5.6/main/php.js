var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.php_strlcpy = ['ulong', [ref.refType('char'), ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_strlcpy);

_library.php_strlcat = ['ulong', [ref.refType('char'), ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_strlcat);

_library.phperror = ['void', [ref.refType('char')]];
_library._functions.push(_library.phperror);

_library.php_write = ['int', [ref.refType('void'), 'uint']];
_library._functions.push(_library.php_write);

_library.php_get_module_initialized = ['int', []];
_library._functions.push(_library.php_get_module_initialized);

_library.php_log_err = ['void', [ref.refType('char')]];
_library._functions.push(_library.php_log_err);

_library.cfgparse = ['int', []];
_library._functions.push(_library.cfgparse);

_library.php_set_error_handling = ['void', [_library.zend_error_handling_t, ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.php_set_error_handling);

_library.php_std_error_handling = ['void', []];
_library._functions.push(_library.php_std_error_handling);

_library.php_verror = ['void', [ref.refType('char'), ref.refType('char'), 'int', ref.refType('char'), ref.refType('void')]];
_library._functions.push(_library.php_verror);

_library.php_register_internal_extensions = ['int', []];
_library._functions.push(_library.php_register_internal_extensions);

_library.php_mergesort = ['int', [ref.refType('void'), 'ulong', 'ulong', ffi.Function('int', [ref.refType('void'), ref.refType('void')])]];
_library._functions.push(_library.php_mergesort);

_library.php_register_pre_request_shutdown = ['void', [ffi.Function('void', [ref.refType('void')]), ref.refType('void')]];
_library._functions.push(_library.php_register_pre_request_shutdown);

_library.php_com_initialize = ['void', []];
_library._functions.push(_library.php_com_initialize);

_library.php_get_current_user = [ref.refType('char'), []];
_library._functions.push(_library.php_get_current_user);


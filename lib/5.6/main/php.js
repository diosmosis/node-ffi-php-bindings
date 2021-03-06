var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['php_strlcpy'] = [function () {
    _library.php_strlcpy = ['ulong', [ref.refType('char'), ref.refType('char'), 'ulong']];
    _library._functions['php_strlcpy'] = _library.php_strlcpy;
}];

_library._preload['php_strlcat'] = [function () {
    _library.php_strlcat = ['ulong', [ref.refType('char'), ref.refType('char'), 'ulong']];
    _library._functions['php_strlcat'] = _library.php_strlcat;
}];

_library._preload['php_write'] = [function () {
    _library.php_write = ['int', [ref.refType('void'), 'uint']];
    _library._functions['php_write'] = _library.php_write;
}];

_library._preload['php_get_module_initialized'] = [function () {
    _library.php_get_module_initialized = ['int', []];
    _library._functions['php_get_module_initialized'] = _library.php_get_module_initialized;
}];

_library._preload['php_log_err'] = [function () {
    _library.php_log_err = ['void', [ref.refType('char')]];
    _library._functions['php_log_err'] = _library.php_log_err;
}];

_library._preload['php_verror'] = [function () {
    _library.php_verror = ['void', [ref.refType('char'), ref.refType('char'), 'int', ref.refType('char'), ref.refType('void')]];
    _library._functions['php_verror'] = _library.php_verror;
}];

_library._preload['php_register_internal_extensions'] = [function () {
    _library.php_register_internal_extensions = ['int', []];
    _library._functions['php_register_internal_extensions'] = _library.php_register_internal_extensions;
}];

_library._preload['php_mergesort'] = ['int (const void *, const void *)', function () {
    _library.php_mergesort = ['int', [ref.refType('void'), 'ulong', 'ulong', ffi.Function('int', [ref.refType('void'), ref.refType('void')])]];
    _library._functions['php_mergesort'] = _library.php_mergesort;
}];

_library._preload['php_com_initialize'] = [function () {
    _library.php_com_initialize = ['void', []];
    _library._functions['php_com_initialize'] = _library.php_com_initialize;
}];

_library._preload['php_get_current_user'] = [function () {
    _library.php_get_current_user = [ref.refType('char'), []];
    _library._functions['php_get_current_user'] = _library.php_get_current_user;
}];

function loadDependentSymbols() {
}

var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_module_dep = Struct({
    "name": ref.refType('char'),
    "rel": ref.refType('char'),
    "type": 'uchar',
    "version": ref.refType('char')
});

_library._zend_module_entry = Struct({
    "build_id": ref.refType('char'),
    "deps": ref.refType(_library._zend_module_dep),
    "functions": ref.refType(_library._zend_function_entry),
    "globals_ctor": ffi.Function('void', [ref.refType('void')]),
    "globals_dtor": ffi.Function('void', [ref.refType('void')]),
    "globals_ptr": ref.refType('void'),
    "globals_size": 'ulong',
    "handle": ref.refType('void'),
    "info_func": ffi.Function('void', [ref.refType(_library._zend_module_entry)]),
    "ini_entry": ref.refType(_library._zend_ini_entry),
    "module_number": 'int',
    "module_shutdown_func": ffi.Function('int', ['int', 'int']),
    "module_started": 'int',
    "module_startup_func": ffi.Function('int', ['int', 'int']),
    "name": ref.refType('char'),
    "post_deactivate_func": ffi.Function('int', []),
    "request_shutdown_func": ffi.Function('int', ['int', 'int']),
    "request_startup_func": ffi.Function('int', ['int', 'int']),
    "size": 'ushort',
    "type": 'uchar',
    "version": ref.refType('char'),
    "zend_api": 'uint',
    "zend_debug": 'uchar',
    "zts": 'uchar'
});

_library._zend_module_entry = Struct({
    "build_id": ref.refType('char'),
    "deps": ref.refType(_library._zend_module_dep),
    "functions": ref.refType(_library._zend_function_entry),
    "globals_ctor": ffi.Function('void', [ref.refType('void')]),
    "globals_dtor": ffi.Function('void', [ref.refType('void')]),
    "globals_ptr": ref.refType('void'),
    "globals_size": 'ulong',
    "handle": ref.refType('void'),
    "info_func": ffi.Function('void', [ref.refType(_library._zend_module_entry)]),
    "ini_entry": ref.refType(_library._zend_ini_entry),
    "module_number": 'int',
    "module_shutdown_func": ffi.Function('int', ['int', 'int']),
    "module_started": 'int',
    "module_startup_func": ffi.Function('int', ['int', 'int']),
    "name": ref.refType('char'),
    "post_deactivate_func": ffi.Function('int', []),
    "request_shutdown_func": ffi.Function('int', ['int', 'int']),
    "request_startup_func": ffi.Function('int', ['int', 'int']),
    "size": 'ushort',
    "type": 'uchar',
    "version": ref.refType('char'),
    "zend_api": 'uint',
    "zend_debug": 'uchar',
    "zts": 'uchar'
});

_library.zend_module_entry = _library._zend_module_entry;

_library._zend_module_dep = Struct({
    "name": ref.refType('char'),
    "rel": ref.refType('char'),
    "type": 'uchar',
    "version": ref.refType('char')
});

_library.zend_module_dep = _library._zend_module_dep;

_library.module_destructor = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.module_destructor);

_library.module_registry_cleanup = ['int', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.module_registry_cleanup);

_library.module_registry_request_startup = ['int', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.module_registry_request_startup);

_library.module_registry_unload_temp = ['int', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.module_registry_unload_temp);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}
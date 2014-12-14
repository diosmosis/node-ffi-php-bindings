var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_module_dep = Struct({});
_library._zend_module_dep.size = 1;

_library._preload['_zend_module_dep'] = [function () {
    _library._zend_module_dep.size = 0;
    _library._zend_module_dep.defineProperty("name", ref.refType('char'));
    _library._zend_module_dep.defineProperty("rel", ref.refType('char'));
    _library._zend_module_dep.defineProperty("version", ref.refType('char'));
    _library._zend_module_dep.defineProperty("type", 'uchar');
}];

_library._zend_module_entry = Struct({});
_library._zend_module_entry.size = 1;

_library._preload['_zend_module_entry'] = ['_zend_ini_entry', '_zend_module_dep', '_zend_function_entry', 'int (int, int)', 'int (int, int)', 'int (int, int)', 'int (int, int)', 'void (zend_module_entry *)', 'void (void *)', 'void (void *)', 'int (void)', function () {
    _library._zend_module_entry.size = 0;
    _library._zend_module_entry.defineProperty("size", 'ushort');
    _library._zend_module_entry.defineProperty("zend_api", 'uint');
    _library._zend_module_entry.defineProperty("zend_debug", 'uchar');
    _library._zend_module_entry.defineProperty("zts", 'uchar');
    _library._zend_module_entry.defineProperty("ini_entry", ref.refType(_library._zend_ini_entry));
    _library._zend_module_entry.defineProperty("deps", ref.refType(_library._zend_module_dep));
    _library._zend_module_entry.defineProperty("name", ref.refType('char'));
    _library._zend_module_entry.defineProperty("functions", ref.refType(_library._zend_function_entry));
    _library._zend_module_entry.defineProperty("module_startup_func", ffi.Function('int', ['int', 'int']));
    _library._zend_module_entry.defineProperty("module_shutdown_func", ffi.Function('int', ['int', 'int']));
    _library._zend_module_entry.defineProperty("request_startup_func", ffi.Function('int', ['int', 'int']));
    _library._zend_module_entry.defineProperty("request_shutdown_func", ffi.Function('int', ['int', 'int']));
    _library._zend_module_entry.defineProperty("info_func", ffi.Function('void', [ref.refType(_library._zend_module_entry)]));
    _library._zend_module_entry.defineProperty("version", ref.refType('char'));
    _library._zend_module_entry.defineProperty("globals_size", 'ulong');
    _library._zend_module_entry.defineProperty("globals_ptr", ref.refType('void'));
    _library._zend_module_entry.defineProperty("globals_ctor", ffi.Function('void', [ref.refType('void')]));
    _library._zend_module_entry.defineProperty("globals_dtor", ffi.Function('void', [ref.refType('void')]));
    _library._zend_module_entry.defineProperty("post_deactivate_func", ffi.Function('int', []));
    _library._zend_module_entry.defineProperty("module_started", 'int');
    _library._zend_module_entry.defineProperty("type", 'uchar');
    _library._zend_module_entry.defineProperty("handle", ref.refType('void'));
    _library._zend_module_entry.defineProperty("module_number", 'int');
    _library._zend_module_entry.defineProperty("build_id", ref.refType('char'));
}];

_library._preload['zend_module_entry'] = [function () {
    _library.zend_module_entry = _library._zend_module_entry;
}];

_library._preload['zend_module_dep'] = [function () {
    _library.zend_module_dep = _library._zend_module_dep;
}];

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

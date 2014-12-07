var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._zend_module_dep = Struct({});

_library._preload.push(function () {
    _library._zend_module_dep.defineProperty("name", ref.refType('char'));
    _library._zend_module_dep.defineProperty("rel", ref.refType('char'));
    _library._zend_module_dep.defineProperty("type", 'uchar');
    _library._zend_module_dep.defineProperty("version", ref.refType('char'));
});

require('./zend_API.js');
require('./zend_ini.js');
_library._zend_module_entry = Struct({});

_library._preload.push(function () {
    _library._zend_module_entry.defineProperty("build_id", ref.refType('char'));
    _library._zend_module_entry.defineProperty("deps", ref.refType(_library._zend_module_dep));
    _library._zend_module_entry.defineProperty("functions", ref.refType(_library._zend_function_entry));
    _library._zend_module_entry.defineProperty("globals_ctor", ffi.Function('void', [ref.refType('void')]));
    _library._zend_module_entry.defineProperty("globals_dtor", ffi.Function('void', [ref.refType('void')]));
    _library._zend_module_entry.defineProperty("globals_ptr", ref.refType('void'));
    _library._zend_module_entry.defineProperty("globals_size", 'ulong');
    _library._zend_module_entry.defineProperty("handle", ref.refType('void'));
    _library._zend_module_entry.defineProperty("info_func", ffi.Function('void', [ref.refType(_library._zend_module_entry)]));
    _library._zend_module_entry.defineProperty("ini_entry", ref.refType(_library._zend_ini_entry));
    _library._zend_module_entry.defineProperty("module_number", 'int');
    _library._zend_module_entry.defineProperty("module_shutdown_func", ffi.Function('int', ['int', 'int']));
    _library._zend_module_entry.defineProperty("module_started", 'int');
    _library._zend_module_entry.defineProperty("module_startup_func", ffi.Function('int', ['int', 'int']));
    _library._zend_module_entry.defineProperty("name", ref.refType('char'));
    _library._zend_module_entry.defineProperty("post_deactivate_func", ffi.Function('int', []));
    _library._zend_module_entry.defineProperty("request_shutdown_func", ffi.Function('int', ['int', 'int']));
    _library._zend_module_entry.defineProperty("request_startup_func", ffi.Function('int', ['int', 'int']));
    _library._zend_module_entry.defineProperty("size", 'ushort');
    _library._zend_module_entry.defineProperty("type", 'uchar');
    _library._zend_module_entry.defineProperty("version", ref.refType('char'));
    _library._zend_module_entry.defineProperty("zend_api", 'uint');
    _library._zend_module_entry.defineProperty("zend_debug", 'uchar');
    _library._zend_module_entry.defineProperty("zts", 'uchar');
});

_library.zend_module_entry = _library._zend_module_entry;

_library.zend_module_dep = _library._zend_module_dep;

_library.module_destructor = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions['module_destructor'] = _library.module_destructor;

_library.module_registry_cleanup = ['int', [ref.refType(_library.zend_module_entry)]];
_library._functions['module_registry_cleanup'] = _library.module_registry_cleanup;

_library.module_registry_request_startup = ['int', [ref.refType(_library.zend_module_entry)]];
_library._functions['module_registry_request_startup'] = _library.module_registry_request_startup;

_library.module_registry_unload_temp = ['int', [ref.refType(_library.zend_module_entry)]];
_library._functions['module_registry_unload_temp'] = _library.module_registry_unload_temp;


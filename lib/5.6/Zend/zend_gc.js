var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._gc_root_buffer = Struct({});
_library._gc_root_buffer.size = 1;

_library._preload['_gc_root_buffer'] = ['_gc_root_buffer', '_gc_root_buffer', 'zval', 'zend_object_handlers', function () {
    _library._gc_root_buffer.size = 0;
    _library._gc_root_buffer.defineProperty("prev", ref.refType(_library._gc_root_buffer));
    _library._gc_root_buffer.defineProperty("next", ref.refType(_library._gc_root_buffer));
    _library._gc_root_buffer.defineProperty("handle", 'uint');
    _library._gc_root_buffer.defineProperty("u", (function () {
        var temp = Union({});
        temp.defineProperty("pz", ref.refType(_library.zval));
        temp.defineProperty("handlers", ref.refType(_library.zend_object_handlers));
        return temp;
    })());
}];

_library._preload['gc_root_buffer'] = [function () {
    _library.gc_root_buffer = _library._gc_root_buffer;
}];

_library._zval_gc_info = Struct({});
_library._zval_gc_info.size = 1;

_library._preload['_zval_gc_info'] = ['zval', '_zval_struct', 'gc_root_buffer', '_zval_gc_info', function () {
    _library._zval_gc_info.size = 0;
    _library._zval_gc_info.defineProperty("z", _library.zval);
    _library._zval_gc_info.defineProperty("u", (function () {
        var temp = Union({});
        temp.defineProperty("buffered", ref.refType(_library.gc_root_buffer));
        temp.defineProperty("next", ref.refType(_library._zval_gc_info));
        return temp;
    })());
}];

_library._preload['zval_gc_info'] = [function () {
    _library.zval_gc_info = _library._zval_gc_info;
}];

_library._zend_gc_globals = Struct({});
_library._zend_gc_globals.size = 1;

_library._preload['_zend_gc_globals'] = ['gc_root_buffer', 'gc_root_buffer', '_gc_root_buffer', 'gc_root_buffer', 'gc_root_buffer', 'gc_root_buffer', 'zval_gc_info', 'zval_gc_info', 'zval_gc_info', function () {
    _library._zend_gc_globals.size = 0;
    _library._zend_gc_globals.defineProperty("gc_enabled", 'uchar');
    _library._zend_gc_globals.defineProperty("gc_active", 'uchar');
    _library._zend_gc_globals.defineProperty("buf", ref.refType(_library.gc_root_buffer));
    _library._zend_gc_globals.defineProperty("roots", _library.gc_root_buffer);
    _library._zend_gc_globals.defineProperty("unused", ref.refType(_library.gc_root_buffer));
    _library._zend_gc_globals.defineProperty("first_unused", ref.refType(_library.gc_root_buffer));
    _library._zend_gc_globals.defineProperty("last_unused", ref.refType(_library.gc_root_buffer));
    _library._zend_gc_globals.defineProperty("zval_to_free", ref.refType(_library.zval_gc_info));
    _library._zend_gc_globals.defineProperty("free_list", ref.refType(_library.zval_gc_info));
    _library._zend_gc_globals.defineProperty("next_to_free", ref.refType(_library.zval_gc_info));
    _library._zend_gc_globals.defineProperty("gc_runs", 'uint');
    _library._zend_gc_globals.defineProperty("collected", 'uint');
}];

_library._preload['zend_gc_globals'] = [function () {
    _library.zend_gc_globals = _library._zend_gc_globals;
}];

_library._preload['gc_collect_cycles'] = [function () {
    _library.gc_collect_cycles = ['int', []];
    _library._functions['gc_collect_cycles'] = _library.gc_collect_cycles;
}];

_library._preload['gc_zval_possible_root'] = ['zval', function () {
    _library.gc_zval_possible_root = ['void', [ref.refType(_library.zval)]];
    _library._functions['gc_zval_possible_root'] = _library.gc_zval_possible_root;
}];

_library._preload['gc_zobj_possible_root'] = ['zval', function () {
    _library.gc_zobj_possible_root = ['void', [ref.refType(_library.zval)]];
    _library._functions['gc_zobj_possible_root'] = _library.gc_zobj_possible_root;
}];

_library._preload['gc_remove_zval_from_buffer'] = ['zval', function () {
    _library.gc_remove_zval_from_buffer = ['void', [ref.refType(_library.zval)]];
    _library._functions['gc_remove_zval_from_buffer'] = _library.gc_remove_zval_from_buffer;
}];

_library._preload['gc_globals_ctor'] = [function () {
    _library.gc_globals_ctor = ['void', []];
    _library._functions['gc_globals_ctor'] = _library.gc_globals_ctor;
}];

_library._preload['gc_globals_dtor'] = [function () {
    _library.gc_globals_dtor = ['void', []];
    _library._functions['gc_globals_dtor'] = _library.gc_globals_dtor;
}];

_library._preload['gc_init'] = [function () {
    _library.gc_init = ['void', []];
    _library._functions['gc_init'] = _library.gc_init;
}];

_library._preload['gc_reset'] = [function () {
    _library.gc_reset = ['void', []];
    _library._functions['gc_reset'] = _library.gc_reset;
}];

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}

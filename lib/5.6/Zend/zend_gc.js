var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._gc_root_buffer = Struct({});

_library._preload.push(function () {
    _library._gc_root_buffer.defineProperty("handle", 'uint');
    _library._gc_root_buffer.defineProperty("next", ref.refType(_library._gc_root_buffer));
    _library._gc_root_buffer.defineProperty("prev", ref.refType(_library._gc_root_buffer));
    _library._gc_root_buffer.defineProperty("u", Union({}));
    _library._gc_root_buffer.fields.u.type.defineProperty("handlers", ref.refType(_library.zend_object_handlers));
    _library._gc_root_buffer.fields.u.type.defineProperty("pz", ref.refType(_library.zval));
});

_library.gc_root_buffer = _library._gc_root_buffer;

require('./zend_types.js');
_library._zval_gc_info = Struct({});

_library._preload.push(function () {
    _library._zval_gc_info.defineProperty("u", Union({}));
    _library._zval_gc_info.fields.u.type.defineProperty("buffered", ref.refType(_library.gc_root_buffer));
    _library._zval_gc_info.fields.u.type.defineProperty("next", ref.refType(_library._zval_gc_info));
    _library._zval_gc_info.defineProperty("z", _library.zval);
});

_library.zval_gc_info = _library._zval_gc_info;

_library._zend_gc_globals = Struct({});

_library._preload.push(function () {
    _library._zend_gc_globals.defineProperty("buf", ref.refType(_library.gc_root_buffer));
    _library._zend_gc_globals.defineProperty("collected", 'uint');
    _library._zend_gc_globals.defineProperty("first_unused", ref.refType(_library.gc_root_buffer));
    _library._zend_gc_globals.defineProperty("free_list", ref.refType(_library.zval_gc_info));
    _library._zend_gc_globals.defineProperty("gc_active", 'uchar');
    _library._zend_gc_globals.defineProperty("gc_enabled", 'uchar');
    _library._zend_gc_globals.defineProperty("gc_runs", 'uint');
    _library._zend_gc_globals.defineProperty("last_unused", ref.refType(_library.gc_root_buffer));
    _library._zend_gc_globals.defineProperty("next_to_free", ref.refType(_library.zval_gc_info));
    _library._zend_gc_globals.defineProperty("roots", _library.gc_root_buffer);
    _library._zend_gc_globals.defineProperty("unused", ref.refType(_library.gc_root_buffer));
    _library._zend_gc_globals.defineProperty("zval_to_free", ref.refType(_library.zval_gc_info));
});

_library.zend_gc_globals = _library._zend_gc_globals;

_library.gc_collect_cycles = ['int', []];
_library._functions['gc_collect_cycles'] = _library.gc_collect_cycles;

_library.gc_zval_possible_root = ['void', [ref.refType(_library.zval)]];
_library._functions['gc_zval_possible_root'] = _library.gc_zval_possible_root;

_library.gc_zobj_possible_root = ['void', [ref.refType(_library.zval)]];
_library._functions['gc_zobj_possible_root'] = _library.gc_zobj_possible_root;

_library.gc_remove_zval_from_buffer = ['void', [ref.refType(_library.zval)]];
_library._functions['gc_remove_zval_from_buffer'] = _library.gc_remove_zval_from_buffer;

_library.gc_globals_ctor = ['void', []];
_library._functions['gc_globals_ctor'] = _library.gc_globals_ctor;

_library.gc_globals_dtor = ['void', []];
_library._functions['gc_globals_dtor'] = _library.gc_globals_dtor;

_library.gc_init = ['void', []];
_library._functions['gc_init'] = _library.gc_init;

_library.gc_reset = ['void', []];
_library._functions['gc_reset'] = _library.gc_reset;

_library.gc_zval_check_possible_root = ['void', [ref.refType(_library.zval)]];
_library._functions['gc_zval_check_possible_root'] = _library.gc_zval_check_possible_root;

_library.gc_remove_from_buffer = ['void', [ref.refType(_library.gc_root_buffer)]];
_library._functions['gc_remove_from_buffer'] = _library.gc_remove_from_buffer;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._gc_root_buffer = Struct({
    "handle": 'uint',
    "next": 'pointer',
    "prev": 'pointer',
    "u": Union({
        "handlers": ref.refType(_library.zend_object_handlers),
        "pz": ref.refType(_library.zval)
    })
});

_library._gc_root_buffer = Struct({
    "handle": 'uint',
    "next": 'pointer',
    "prev": 'pointer',
    "u": Union({
        "handlers": ref.refType(_library.zend_object_handlers),
        "pz": ref.refType(_library.zval)
    })
});

_library.gc_root_buffer = _library._gc_root_buffer;

_library._zval_gc_info = Struct({
    "u": Union({
        "buffered": ref.refType(_library.gc_root_buffer),
        "next": ref.refType(_library._zval_gc_info)
    }),
    "z": _library.zval
});

_library.zval_gc_info = _library._zval_gc_info;

_library._zend_gc_globals = Struct({
    "buf": ref.refType(_library.gc_root_buffer),
    "collected": 'uint',
    "first_unused": ref.refType(_library.gc_root_buffer),
    "free_list": ref.refType(_library.zval_gc_info),
    "gc_active": 'uchar',
    "gc_enabled": 'uchar',
    "gc_runs": 'uint',
    "last_unused": ref.refType(_library.gc_root_buffer),
    "next_to_free": ref.refType(_library.zval_gc_info),
    "roots": _library.gc_root_buffer,
    "unused": ref.refType(_library.gc_root_buffer),
    "zval_to_free": ref.refType(_library.zval_gc_info)
});

_library.zend_gc_globals = _library._zend_gc_globals;

_library.gc_collect_cycles = ['int', []];
_library._functions.push(_library.gc_collect_cycles);

_library.gc_zval_possible_root = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.gc_zval_possible_root);

_library.gc_zobj_possible_root = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.gc_zobj_possible_root);

_library.gc_remove_zval_from_buffer = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.gc_remove_zval_from_buffer);

_library.gc_globals_ctor = ['void', []];
_library._functions.push(_library.gc_globals_ctor);

_library.gc_globals_dtor = ['void', []];
_library._functions.push(_library.gc_globals_dtor);

_library.gc_init = ['void', []];
_library._functions.push(_library.gc_init);

_library.gc_reset = ['void', []];
_library._functions.push(_library.gc_reset);

_library.gc_zval_check_possible_root = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.gc_zval_check_possible_root);

_library.gc_remove_from_buffer = ['void', [ref.refType(_library.gc_root_buffer)]];
_library._functions.push(_library.gc_remove_from_buffer);

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
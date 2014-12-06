var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_object_iterator = Struct({
    "data": ref.refType('void'),
    "funcs": ref.refType(_library.zend_object_iterator_funcs),
    "index": 'ulong'
});

_library._zend_class_iterator_funcs = Struct({
    "funcs": ref.refType(_library.zend_object_iterator_funcs),
    "zf_current": ref.refType(_library._zend_function),
    "zf_key": ref.refType(_library._zend_function),
    "zf_new_iterator": ref.refType(_library._zend_function),
    "zf_next": ref.refType(_library._zend_function),
    "zf_rewind": ref.refType(_library._zend_function),
    "zf_valid": ref.refType(_library._zend_function)
});

_library.zend_class_iterator_funcs = _library._zend_class_iterator_funcs;

_library._zend_object_iterator_funcs = Struct({
    "dtor": ffi.Function('void', [ref.refType(_library._zend_object_iterator)]),
    "get_current_data": ffi.Function('void', [ref.refType(_library._zend_object_iterator), ref.refType(ref.refType(ref.refType(_library._zval_struct)))]),
    "get_current_key": ffi.Function('void', [ref.refType(_library._zend_object_iterator), ref.refType(_library._zval_struct)]),
    "invalidate_current": ffi.Function('void', [ref.refType(_library._zend_object_iterator)]),
    "move_forward": ffi.Function('void', [ref.refType(_library._zend_object_iterator)]),
    "rewind": ffi.Function('void', [ref.refType(_library._zend_object_iterator)]),
    "valid": ffi.Function('int', [ref.refType(_library._zend_object_iterator)])
});

_library.zend_object_iterator_funcs = _library._zend_object_iterator_funcs;

_library._zend_object_iterator = Struct({
    "data": ref.refType('void'),
    "funcs": ref.refType(_library.zend_object_iterator_funcs),
    "index": 'ulong'
});

_library.zend_object_iterator = _library._zend_object_iterator;

_library.zend_object_iterator_kind = {
    ZEND_ITER_OBJECT: 3,
    ZEND_ITER_PLAIN_OBJECT: 2,
    ZEND_ITER_PLAIN_ARRAY: 1,
    ZEND_ITER_INVALID: 0
};

_library.zend_iterator_unwrap = ['int32', [ref.refType(_library.zval), ref.refType(ref.refType(_library.zend_object_iterator))]];
_library._functions.push(_library.zend_iterator_unwrap);

_library.zend_iterator_wrap = [ref.refType(_library.zval), [ref.refType(_library.zend_object_iterator)]];
_library._functions.push(_library.zend_iterator_wrap);

_library.zend_register_iterator_wrapper = ['void', []];
_library._functions.push(_library.zend_register_iterator_wrapper);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}
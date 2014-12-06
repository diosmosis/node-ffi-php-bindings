var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_object_iterator = Struct({
    "data": ref.refType('void'),
    "funcs": _library.zend_object_iterator_funcs ? ref.refType(_library.zend_object_iterator_funcs) : 'pointer',
    "index": 'ulong'
});

_library._zend_class_iterator_funcs = Struct({
    "funcs": _library.zend_object_iterator_funcs ? ref.refType(_library.zend_object_iterator_funcs) : 'pointer',
    "zf_current": _library._zend_function ? ref.refType(_library._zend_function) : 'pointer',
    "zf_key": _library._zend_function ? ref.refType(_library._zend_function) : 'pointer',
    "zf_new_iterator": _library._zend_function ? ref.refType(_library._zend_function) : 'pointer',
    "zf_next": _library._zend_function ? ref.refType(_library._zend_function) : 'pointer',
    "zf_rewind": _library._zend_function ? ref.refType(_library._zend_function) : 'pointer',
    "zf_valid": _library._zend_function ? ref.refType(_library._zend_function) : 'pointer'
});

_library.zend_class_iterator_funcs = _library._zend_class_iterator_funcs;

_library._zend_object_iterator_funcs = Struct({
    "dtor": ffi.Function('void', [_library._zend_object_iterator ? ref.refType(_library._zend_object_iterator) : 'pointer']),
    "get_current_data": ffi.Function('void', [_library._zend_object_iterator ? ref.refType(_library._zend_object_iterator) : 'pointer', _library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer' ? ref.refType(_library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer') : 'pointer' ? ref.refType(_library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer' ? ref.refType(_library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer') : 'pointer') : 'pointer']),
    "get_current_key": ffi.Function('void', [_library._zend_object_iterator ? ref.refType(_library._zend_object_iterator) : 'pointer', _library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer']),
    "invalidate_current": ffi.Function('void', [_library._zend_object_iterator ? ref.refType(_library._zend_object_iterator) : 'pointer']),
    "move_forward": ffi.Function('void', [_library._zend_object_iterator ? ref.refType(_library._zend_object_iterator) : 'pointer']),
    "rewind": ffi.Function('void', [_library._zend_object_iterator ? ref.refType(_library._zend_object_iterator) : 'pointer']),
    "valid": ffi.Function('int', [_library._zend_object_iterator ? ref.refType(_library._zend_object_iterator) : 'pointer'])
});

_library.zend_object_iterator_funcs = _library._zend_object_iterator_funcs;

_library._zend_object_iterator = Struct({
    "data": ref.refType('void'),
    "funcs": _library.zend_object_iterator_funcs ? ref.refType(_library.zend_object_iterator_funcs) : 'pointer',
    "index": 'ulong'
});

_library.zend_object_iterator = _library._zend_object_iterator;

_library.zend_object_iterator_kind = {
    ZEND_ITER_OBJECT: 3,
    ZEND_ITER_PLAIN_OBJECT: 2,
    ZEND_ITER_PLAIN_ARRAY: 1,
    ZEND_ITER_INVALID: 0
};

_library.zend_iterator_unwrap = ['int32', [_library.zval ? ref.refType(_library.zval) : 'pointer', _library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer' ? ref.refType(_library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_iterator_unwrap);

_library.zend_iterator_wrap = [_library.zval ? ref.refType(_library.zval) : 'pointer', [_library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer']];
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
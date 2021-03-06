var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_class_iterator_funcs = Struct({});
_library._zend_class_iterator_funcs.size = 1;

_library._preload['_zend_class_iterator_funcs'] = ['zend_object_iterator_funcs', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', function () {
    _library._zend_class_iterator_funcs.size = 0;
    _library._zend_class_iterator_funcs.defineProperty("funcs", ref.refType(_library.zend_object_iterator_funcs));
    _library._zend_class_iterator_funcs.defineProperty("zf_new_iterator", ref.refType(_library._zend_function));
    _library._zend_class_iterator_funcs.defineProperty("zf_valid", ref.refType(_library._zend_function));
    _library._zend_class_iterator_funcs.defineProperty("zf_current", ref.refType(_library._zend_function));
    _library._zend_class_iterator_funcs.defineProperty("zf_key", ref.refType(_library._zend_function));
    _library._zend_class_iterator_funcs.defineProperty("zf_next", ref.refType(_library._zend_function));
    _library._zend_class_iterator_funcs.defineProperty("zf_rewind", ref.refType(_library._zend_function));
}];

_library._preload['zend_class_iterator_funcs'] = [function () {
    _library.zend_class_iterator_funcs = _library._zend_class_iterator_funcs;
}];

_library._zend_object_iterator_funcs = Struct({});
_library._zend_object_iterator_funcs.size = 1;

_library._preload['_zend_object_iterator_funcs'] = ['void (zend_object_iterator *)', 'int (zend_object_iterator *)', 'void (zend_object_iterator *, zval ***)', 'void (zend_object_iterator *, zval *)', 'void (zend_object_iterator *)', 'void (zend_object_iterator *)', 'void (zend_object_iterator *)', function () {
    _library._zend_object_iterator_funcs.size = 0;
    _library._zend_object_iterator_funcs.defineProperty("dtor", ffi.Function('void', [ref.refType(_library._zend_object_iterator)]));
    _library._zend_object_iterator_funcs.defineProperty("valid", ffi.Function('int', [ref.refType(_library._zend_object_iterator)]));
    _library._zend_object_iterator_funcs.defineProperty("get_current_data", ffi.Function('void', [ref.refType(_library._zend_object_iterator), ref.refType(ref.refType(ref.refType(_library._zval_struct)))]));
    _library._zend_object_iterator_funcs.defineProperty("get_current_key", ffi.Function('void', [ref.refType(_library._zend_object_iterator), ref.refType(_library._zval_struct)]));
    _library._zend_object_iterator_funcs.defineProperty("move_forward", ffi.Function('void', [ref.refType(_library._zend_object_iterator)]));
    _library._zend_object_iterator_funcs.defineProperty("rewind", ffi.Function('void', [ref.refType(_library._zend_object_iterator)]));
    _library._zend_object_iterator_funcs.defineProperty("invalidate_current", ffi.Function('void', [ref.refType(_library._zend_object_iterator)]));
}];

_library._preload['zend_object_iterator_funcs'] = [function () {
    _library.zend_object_iterator_funcs = _library._zend_object_iterator_funcs;
}];

_library._zend_object_iterator = Struct({});
_library._zend_object_iterator.size = 1;

_library._preload['_zend_object_iterator'] = ['zend_object_iterator_funcs', function () {
    _library._zend_object_iterator.size = 0;
    _library._zend_object_iterator.defineProperty("data", ref.refType('void'));
    _library._zend_object_iterator.defineProperty("funcs", ref.refType(_library.zend_object_iterator_funcs));
    _library._zend_object_iterator.defineProperty("index", 'ulong');
}];

_library._preload['zend_object_iterator'] = [function () {
    _library.zend_object_iterator = _library._zend_object_iterator;
}];

_library.zend_object_iterator_kind = {
    ZEND_ITER_OBJECT: 3,
    ZEND_ITER_PLAIN_OBJECT: 2,
    ZEND_ITER_PLAIN_ARRAY: 1,
    ZEND_ITER_INVALID: 0
};

_library._preload['zend_iterator_unwrap'] = ['zval', 'pointer', function () {
    _library.zend_iterator_unwrap = ['int32', [ref.refType(_library.zval), ref.refType(ref.refType(_library.zend_object_iterator))]];
    _library._functions['zend_iterator_unwrap'] = _library.zend_iterator_unwrap;
}];

_library._preload['zend_iterator_wrap'] = ['zval', 'zend_object_iterator', function () {
    _library.zend_iterator_wrap = [ref.refType(_library.zval), [ref.refType(_library.zend_object_iterator)]];
    _library._functions['zend_iterator_wrap'] = _library.zend_iterator_wrap;
}];

_library._preload['zend_register_iterator_wrapper'] = [function () {
    _library.zend_register_iterator_wrapper = ['void', []];
    _library._functions['zend_register_iterator_wrapper'] = _library.zend_register_iterator_wrapper;
}];

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

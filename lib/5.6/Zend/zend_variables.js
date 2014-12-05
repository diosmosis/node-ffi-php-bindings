var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._zval_dtor_func = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_dtor_func);

_library._zval_dtor = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_dtor);

_library._zval_copy_ctor_func = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_copy_ctor_func);

_library._zval_copy_ctor = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_copy_ctor);

_library.zval_copy_static_var = ['int', [ref.refType(ref.refType(_library.zval)), 'int', ref.refType('void'), ref.refType(_library.zend_hash_key)]];
_library._functions.push(_library.zval_copy_static_var);

_library.zend_print_variable = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.zend_print_variable);

_library._zval_ptr_dtor = ['void', [ref.refType(ref.refType(_library.zval)), ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_ptr_dtor);

_library._zval_internal_dtor = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_internal_dtor);

_library._zval_internal_ptr_dtor = ['void', [ref.refType(ref.refType(_library.zval)), ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_internal_ptr_dtor);

_library._zval_dtor_wrapper = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library._zval_dtor_wrapper);

_library._zval_copy_ctor_wrapper = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library._zval_copy_ctor_wrapper);

_library._zval_ptr_dtor_wrapper = ['void', [ref.refType(ref.refType(_library.zval))]];
_library._functions.push(_library._zval_ptr_dtor_wrapper);

_library._zval_internal_dtor_wrapper = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library._zval_internal_dtor_wrapper);

_library._zval_internal_ptr_dtor_wrapper = ['void', [ref.refType(ref.refType(_library.zval))]];
_library._functions.push(_library._zval_internal_ptr_dtor_wrapper);

_library.zval_add_ref = ['void', [ref.refType(ref.refType(_library.zval))]];
_library._functions.push(_library.zval_add_ref);

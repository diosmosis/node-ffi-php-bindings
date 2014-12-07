var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend_types.js');
_library._zval_dtor_func = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions['_zval_dtor_func'] = _library._zval_dtor_func;

_library._zval_dtor = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions['_zval_dtor'] = _library._zval_dtor;

_library._zval_copy_ctor_func = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions['_zval_copy_ctor_func'] = _library._zval_copy_ctor_func;

_library._zval_copy_ctor = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions['_zval_copy_ctor'] = _library._zval_copy_ctor;

require('./zend_hash.js');
_library.zval_copy_static_var = ['int', [ref.refType(ref.refType(_library.zval)), 'int', ref.refType('void'), ref.refType(_library.zend_hash_key)]];
_library._functions['zval_copy_static_var'] = _library.zval_copy_static_var;

_library.zend_print_variable = ['int', [ref.refType(_library.zval)]];
_library._functions['zend_print_variable'] = _library.zend_print_variable;

_library._zval_ptr_dtor = ['void', [ref.refType(ref.refType(_library.zval)), ref.refType('char'), 'uint']];
_library._functions['_zval_ptr_dtor'] = _library._zval_ptr_dtor;

_library._zval_internal_dtor = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions['_zval_internal_dtor'] = _library._zval_internal_dtor;

_library._zval_internal_ptr_dtor = ['void', [ref.refType(ref.refType(_library.zval)), ref.refType('char'), 'uint']];
_library._functions['_zval_internal_ptr_dtor'] = _library._zval_internal_ptr_dtor;

_library._zval_dtor_wrapper = ['void', [ref.refType(_library.zval)]];
_library._functions['_zval_dtor_wrapper'] = _library._zval_dtor_wrapper;

_library._zval_copy_ctor_wrapper = ['void', [ref.refType(_library.zval)]];
_library._functions['_zval_copy_ctor_wrapper'] = _library._zval_copy_ctor_wrapper;

_library._zval_ptr_dtor_wrapper = ['void', [ref.refType(ref.refType(_library.zval))]];
_library._functions['_zval_ptr_dtor_wrapper'] = _library._zval_ptr_dtor_wrapper;

_library._zval_internal_dtor_wrapper = ['void', [ref.refType(_library.zval)]];
_library._functions['_zval_internal_dtor_wrapper'] = _library._zval_internal_dtor_wrapper;

_library._zval_internal_ptr_dtor_wrapper = ['void', [ref.refType(ref.refType(_library.zval))]];
_library._functions['_zval_internal_ptr_dtor_wrapper'] = _library._zval_internal_ptr_dtor_wrapper;

_library.zval_add_ref = ['void', [ref.refType(ref.refType(_library.zval))]];
_library._functions['zval_add_ref'] = _library.zval_add_ref;


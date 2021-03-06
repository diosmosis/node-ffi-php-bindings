var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['_zval_dtor_func'] = ['zval', function () {
    _library._zval_dtor_func = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
    _library._functions['_zval_dtor_func'] = _library._zval_dtor_func;
}];

_library._preload['_zval_copy_ctor_func'] = ['zval', function () {
    _library._zval_copy_ctor_func = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
    _library._functions['_zval_copy_ctor_func'] = _library._zval_copy_ctor_func;
}];

_library._preload['zval_copy_static_var'] = ['pointer', 'zend_hash_key', function () {
    _library.zval_copy_static_var = ['int', [ref.refType(ref.refType(_library.zval)), 'int', ref.refType('void'), ref.refType(_library.zend_hash_key)]];
    _library._functions['zval_copy_static_var'] = _library.zval_copy_static_var;
}];

_library._preload['zend_print_variable'] = ['zval', function () {
    _library.zend_print_variable = ['int', [ref.refType(_library.zval)]];
    _library._functions['zend_print_variable'] = _library.zend_print_variable;
}];

_library._preload['_zval_ptr_dtor'] = ['pointer', function () {
    _library._zval_ptr_dtor = ['void', [ref.refType(ref.refType(_library.zval)), ref.refType('char'), 'uint']];
    _library._functions['_zval_ptr_dtor'] = _library._zval_ptr_dtor;
}];

_library._preload['_zval_internal_dtor'] = ['zval', function () {
    _library._zval_internal_dtor = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
    _library._functions['_zval_internal_dtor'] = _library._zval_internal_dtor;
}];

_library._preload['_zval_internal_ptr_dtor'] = ['pointer', function () {
    _library._zval_internal_ptr_dtor = ['void', [ref.refType(ref.refType(_library.zval)), ref.refType('char'), 'uint']];
    _library._functions['_zval_internal_ptr_dtor'] = _library._zval_internal_ptr_dtor;
}];

_library._preload['_zval_dtor_wrapper'] = ['zval', function () {
    _library._zval_dtor_wrapper = ['void', [ref.refType(_library.zval)]];
    _library._functions['_zval_dtor_wrapper'] = _library._zval_dtor_wrapper;
}];

_library._preload['_zval_copy_ctor_wrapper'] = ['zval', function () {
    _library._zval_copy_ctor_wrapper = ['void', [ref.refType(_library.zval)]];
    _library._functions['_zval_copy_ctor_wrapper'] = _library._zval_copy_ctor_wrapper;
}];

_library._preload['_zval_ptr_dtor_wrapper'] = ['pointer', function () {
    _library._zval_ptr_dtor_wrapper = ['void', [ref.refType(ref.refType(_library.zval))]];
    _library._functions['_zval_ptr_dtor_wrapper'] = _library._zval_ptr_dtor_wrapper;
}];

_library._preload['_zval_internal_dtor_wrapper'] = ['zval', function () {
    _library._zval_internal_dtor_wrapper = ['void', [ref.refType(_library.zval)]];
    _library._functions['_zval_internal_dtor_wrapper'] = _library._zval_internal_dtor_wrapper;
}];

_library._preload['_zval_internal_ptr_dtor_wrapper'] = ['pointer', function () {
    _library._zval_internal_ptr_dtor_wrapper = ['void', [ref.refType(ref.refType(_library.zval))]];
    _library._functions['_zval_internal_ptr_dtor_wrapper'] = _library._zval_internal_ptr_dtor_wrapper;
}];

_library._preload['zval_add_ref'] = ['pointer', function () {
    _library.zval_add_ref = ['void', [ref.refType(ref.refType(_library.zval))]];
    _library._functions['zval_add_ref'] = _library.zval_add_ref;
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

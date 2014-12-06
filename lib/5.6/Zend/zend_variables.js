var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zval_dtor_func = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_dtor_func);

_library._zval_dtor = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_dtor);

_library._zval_copy_ctor_func = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_copy_ctor_func);

_library._zval_copy_ctor = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_copy_ctor);

_library.zval_copy_static_var = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', 'int', ref.refType('void'), _library.zend_hash_key ? ref.refType(_library.zend_hash_key) : 'pointer']];
_library._functions.push(_library.zval_copy_static_var);

_library.zend_print_variable = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_print_variable);

_library._zval_ptr_dtor = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_ptr_dtor);

_library._zval_internal_dtor = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_internal_dtor);

_library._zval_internal_ptr_dtor = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._zval_internal_ptr_dtor);

_library._zval_dtor_wrapper = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library._zval_dtor_wrapper);

_library._zval_copy_ctor_wrapper = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library._zval_copy_ctor_wrapper);

_library._zval_ptr_dtor_wrapper = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer']];
_library._functions.push(_library._zval_ptr_dtor_wrapper);

_library._zval_internal_dtor_wrapper = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library._zval_internal_dtor_wrapper);

_library._zval_internal_ptr_dtor_wrapper = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer']];
_library._functions.push(_library._zval_internal_ptr_dtor_wrapper);

_library.zval_add_ref = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer']];
_library._functions.push(_library.zval_add_ref);

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
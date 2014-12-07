var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.zend_register_closure_ce = ['void', []];
_library._functions['zend_register_closure_ce'] = _library.zend_register_closure_ce;

_library.zend_create_closure = ['void', [ref.refType(_library.zval), ref.refType(_library.zend_function), ref.refType(_library.zend_class_entry), ref.refType(_library.zval)]];
_library._functions['zend_create_closure'] = _library.zend_create_closure;

_library.zend_get_closure_invoke_method = [ref.refType(_library.zend_function), [ref.refType(_library.zval)]];
_library._functions['zend_get_closure_invoke_method'] = _library.zend_get_closure_invoke_method;

_library.zend_get_closure_method_def = [ref.refType(_library.zend_function), [ref.refType(_library.zval)]];
_library._functions['zend_get_closure_method_def'] = _library.zend_get_closure_method_def;

_library.zend_get_closure_this_ptr = [ref.refType(_library.zval), [ref.refType(_library.zval)]];
_library._functions['zend_get_closure_this_ptr'] = _library.zend_get_closure_this_ptr;


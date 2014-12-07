var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend_types.js');
_library.zend_exception_set_previous = ['void', [ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions['zend_exception_set_previous'] = _library.zend_exception_set_previous;

_library.zend_exception_save = ['void', []];
_library._functions['zend_exception_save'] = _library.zend_exception_save;

_library.zend_exception_restore = ['void', []];
_library._functions['zend_exception_restore'] = _library.zend_exception_restore;

_library.zend_throw_exception_internal = ['void', [ref.refType(_library.zval)]];
_library._functions['zend_throw_exception_internal'] = _library.zend_throw_exception_internal;

_library.zend_register_default_exception = ['void', []];
_library._functions['zend_register_default_exception'] = _library.zend_register_default_exception;

require('./zend.js');
_library.zend_exception_get_default = [ref.refType(_library.zend_class_entry), []];
_library._functions['zend_exception_get_default'] = _library.zend_exception_get_default;

_library.zend_get_error_exception = [ref.refType(_library.zend_class_entry), []];
_library._functions['zend_get_error_exception'] = _library.zend_get_error_exception;

_library.zend_register_default_classes = ['void', []];
_library._functions['zend_register_default_classes'] = _library.zend_register_default_classes;

_library.zend_throw_exception = [ref.refType(_library.zval), [ref.refType(_library.zend_class_entry), ref.refType('char'), 'long']];
_library._functions['zend_throw_exception'] = _library.zend_throw_exception;

_library.zend_throw_exception_object = ['void', [ref.refType(_library.zval)]];
_library._functions['zend_throw_exception_object'] = _library.zend_throw_exception_object;

_library.zend_clear_exception = ['void', []];
_library._functions['zend_clear_exception'] = _library.zend_clear_exception;

_library.zend_throw_error_exception = [ref.refType(_library.zval), [ref.refType(_library.zend_class_entry), ref.refType('char'), 'long', 'int']];
_library._functions['zend_throw_error_exception'] = _library.zend_throw_error_exception;

_library.zend_exception_error = ['void', [ref.refType(_library.zval), 'int']];
_library._functions['zend_exception_error'] = _library.zend_exception_error;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend.js');
_library.zval = _library._zval_struct;

_library._zend_object_value = Struct({});

_library._preload.push(function () {
    _library._zend_object_value.defineProperty("handle", 'uint');
    _library._zend_object_value.defineProperty("handlers", ref.refType(_library.zend_object_handlers));
});

_library.zend_object_value = _library._zend_object_value;

require('./zend_object_handlers.js');
_library.zend_object_handlers = _library._zend_object_handlers;


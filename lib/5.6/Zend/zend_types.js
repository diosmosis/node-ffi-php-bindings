var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_object_handlers = _library._zend_object_handlers;

_library.zval = _library._zval_struct;

_library._zend_object_value = Struct({
    "handle": 'uint',
    "handlers": ref.refType(_library.zend_object_handlers)
});

_library.zend_object_value = _library._zend_object_value;

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_object_handlers.js');
};
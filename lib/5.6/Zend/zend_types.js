var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_object_value = Struct({});
_library._zend_object_value.size = 1;

_library._preload['_zend_object_value'] = ['zend_object_handlers', function () {
    _library._zend_object_value.size = 0;
    _library._zend_object_value.defineProperty("handle", 'uint');
    _library._zend_object_value.defineProperty("handlers", ref.refType(_library.zend_object_handlers));
}];

_library._preload['zend_object_value'] = [function () {
    _library.zend_object_value = _library._zend_object_value;
}];

_library._preload['zval'] = [function () {
    _library.zval = _library._zval_struct;
}];

_library._preload['zend_object_handlers'] = [function () {
    _library.zend_object_handlers = _library._zend_object_handlers;
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
}

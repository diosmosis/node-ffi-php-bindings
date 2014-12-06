var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_startup_builtin_functions = ['int', []];
_library._functions.push(_library.zend_startup_builtin_functions);

_library.zend_fetch_debug_backtrace = ['void', [ref.refType(_library.zval), 'int', 'int', 'int']];
_library._functions.push(_library.zend_fetch_debug_backtrace);

function loadDependentSymbols() {
};
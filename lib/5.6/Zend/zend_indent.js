var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_indent'] = [function () {
    _library.zend_indent = ['void', []];
    _library._functions['zend_indent'] = _library.zend_indent;
}];

function loadDependentSymbols() {
}

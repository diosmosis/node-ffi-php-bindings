var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_get_opcode_name'] = [function () {
    _library.zend_get_opcode_name = [ref.refType('char'), ['uchar']];
    _library._functions['zend_get_opcode_name'] = _library.zend_get_opcode_name;
}];

function loadDependentSymbols() {
}

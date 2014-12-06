var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.smart_str = Struct({
    "a": 'ulong',
    "c": ref.refType('char'),
    "len": 'ulong'
});

function loadDependentSymbols() {
};
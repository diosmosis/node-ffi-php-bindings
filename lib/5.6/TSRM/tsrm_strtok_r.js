var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['tsrm_strtok_r'] = ['pointer', function () {
    _library.tsrm_strtok_r = [ref.refType('char'), [ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char'))]];
    _library._functions['tsrm_strtok_r'] = _library.tsrm_strtok_r;
}];

function loadDependentSymbols() {
}

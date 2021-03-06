var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['vspprintf'] = ['pointer', function () {
    _library.vspprintf = ['int', [ref.refType(ref.refType('char')), 'ulong', ref.refType('char'), ref.refType('void')]];
    _library._functions['vspprintf'] = _library.vspprintf;
}];

function loadDependentSymbols() {
}

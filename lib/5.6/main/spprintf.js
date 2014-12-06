var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.vspprintf = ['int', ['char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.vspprintf);

function loadDependentSymbols() {
}
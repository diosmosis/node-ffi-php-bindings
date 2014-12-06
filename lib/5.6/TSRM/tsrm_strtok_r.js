var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.tsrm_strtok_r = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.tsrm_strtok_r);

function loadDependentSymbols() {
}
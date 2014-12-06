var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._opt_struct = Struct({
    "need_param": 'int',
    "opt_char": 'char',
    "opt_name": ref.refType('char')
});

_library.opt_struct = _library._opt_struct;

_library.php_getopt = ['int', ['int', ref.refType(ref.refType('char')), ref.refType(_library.opt_struct), ref.refType(ref.refType('char')), ref.refType('int'), 'int', 'int']];
_library._functions.push(_library.php_getopt);

function loadDependentSymbols() {
}
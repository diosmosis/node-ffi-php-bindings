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
    "opt_name": 'char' ? ref.refType('char') : 'pointer'
});

_library.opt_struct = _library._opt_struct;

_library.php_getopt = ['int', ['int', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', ref.refType(_library.opt_struct), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer', 'int', 'int']];
_library._functions.push(_library.php_getopt);

function loadDependentSymbols() {
}
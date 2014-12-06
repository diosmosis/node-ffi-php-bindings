var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.smart_str_print_long = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'long']];
_library._functions.push(_library.smart_str_print_long);

_library.smart_str_print_unsigned = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'long']];
_library._functions.push(_library.smart_str_print_unsigned);

function loadDependentSymbols() {
}
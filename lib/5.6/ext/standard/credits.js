var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_print_credits = ['void', ['int']];
_library._functions.push(_library.php_print_credits);

function loadDependentSymbols() {
}
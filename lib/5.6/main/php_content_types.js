var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['php_std_post_handler'] = [function () {
    _library.php_std_post_handler = ['void', [ref.refType('char'), ref.refType('void')]];
    _library._functions['php_std_post_handler'] = _library.php_std_post_handler;
}];

function loadDependentSymbols() {
}

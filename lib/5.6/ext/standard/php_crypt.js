var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_crypt'] = ['pointer', function () {
    _library.php_crypt = ['int', [ref.refType('char'), 'int', ref.refType('char'), 'int', ref.refType(ref.refType('char'))]];
    _library._functions['php_crypt'] = _library.php_crypt;
}];

function loadDependentSymbols() {
}

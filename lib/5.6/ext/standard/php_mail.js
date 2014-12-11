var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_mail'] = [function () {
    _library.php_mail = ['int', [ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char')]];
    _library._functions['php_mail'] = _library.php_mail;
}];

function loadDependentSymbols() {
}

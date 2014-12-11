var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_header'] = [function () {
    _library.php_header = ['int', []];
    _library._functions['php_header'] = _library.php_header;
}];

_library._preload['php_setcookie'] = ['time_t', function () {
    _library.php_setcookie = ['int', [ref.refType('char'), 'int', ref.refType('char'), 'int', _library.time_t, ref.refType('char'), 'int', ref.refType('char'), 'int', 'int', 'int', 'int']];
    _library._functions['php_setcookie'] = _library.php_setcookie;
}];

function loadDependentSymbols() {
}

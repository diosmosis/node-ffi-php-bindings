var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_std_date'] = ['time_t', function () {
    _library.php_std_date = [ref.refType('char'), [_library.time_t]];
    _library._functions['php_std_date'] = _library.php_std_date;
}];

function loadDependentSymbols() {
}

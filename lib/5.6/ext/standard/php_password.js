var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_password_algo'] = [function () {
    _library.php_password_algo = 'int32';
}];

function loadDependentSymbols() {
}

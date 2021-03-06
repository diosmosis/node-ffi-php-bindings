var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_srand'] = [function () {
    _library.php_srand = ['void', ['long']];
    _library._functions['php_srand'] = _library.php_srand;
}];

_library._preload['php_rand'] = [function () {
    _library.php_rand = ['long', []];
    _library._functions['php_rand'] = _library.php_rand;
}];

_library._preload['php_mt_srand'] = [function () {
    _library.php_mt_srand = ['void', ['uint']];
    _library._functions['php_mt_srand'] = _library.php_mt_srand;
}];

_library._preload['php_mt_rand'] = [function () {
    _library.php_mt_rand = ['uint', []];
    _library._functions['php_mt_rand'] = _library.php_mt_rand;
}];

function loadDependentSymbols() {
}

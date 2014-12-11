var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_statpage'] = [function () {
    _library.php_statpage = ['void', []];
    _library._functions['php_statpage'] = _library.php_statpage;
}];

_library._preload['php_getlastmod'] = [function () {
    _library.php_getlastmod = ['long', []];
    _library._functions['php_getlastmod'] = _library.php_getlastmod;
}];

function loadDependentSymbols() {
}

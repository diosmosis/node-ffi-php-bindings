var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_flock = ['int', ['int', 'int']];
_library._functions['php_flock'] = _library.php_flock;

function loadDependentSymbols() {
}
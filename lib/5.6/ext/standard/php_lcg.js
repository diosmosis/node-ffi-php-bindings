var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_lcg_globals = Struct({});
_library.php_lcg_globals.size = 1;

_library._preload['php_lcg_globals'] = [function () {
    _library.php_lcg_globals.size = 0;
    _library.php_lcg_globals.defineProperty("s1", 'int');
    _library.php_lcg_globals.defineProperty("s2", 'int');
    _library.php_lcg_globals.defineProperty("seeded", 'int');
}];

_library._preload['php_combined_lcg'] = [function () {
    _library.php_combined_lcg = ['double', []];
    _library._functions['php_combined_lcg'] = _library.php_combined_lcg;
}];

function loadDependentSymbols() {
}

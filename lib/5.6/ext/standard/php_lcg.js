var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_lcg_globals = Struct({});

_library._preload.push(function () {
    _library.php_lcg_globals.defineProperty("s1", 'int');
    _library.php_lcg_globals.defineProperty("s2", 'int');
    _library.php_lcg_globals.defineProperty("seeded", 'int');
});

_library.php_combined_lcg = ['double', []];
_library._functions['php_combined_lcg'] = _library.php_combined_lcg;

require('./zend_types.js');
_library.zif_lcg_value = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_lcg_value'] = _library.zif_lcg_value;

_library.zm_startup_lcg = ['int', ['int', 'int']];
_library._functions['zm_startup_lcg'] = _library.zm_startup_lcg;


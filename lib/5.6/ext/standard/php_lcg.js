var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_lcg_globals = Struct({
    "s1": 'int',
    "s2": 'int',
    "seeded": 'int'
});

_library.php_combined_lcg = ['double', []];
_library._functions.push(_library.php_combined_lcg);

_library.zif_lcg_value = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_lcg_value);

_library.zm_startup_lcg = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_lcg);

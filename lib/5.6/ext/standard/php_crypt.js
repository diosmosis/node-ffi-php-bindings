var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_crypt = ['int', [ref.refType('char'), 'int', ref.refType('char'), 'int', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_crypt);

_library.zif_crypt = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_crypt);

_library.zm_startup_crypt = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_crypt);

_library.zm_shutdown_crypt = ['int', ['int', 'int']];
_library._functions.push(_library.zm_shutdown_crypt);

_library.zm_activate_crypt = ['int', ['int', 'int']];
_library._functions.push(_library.zm_activate_crypt);

function loadDependentSymbols() {
};
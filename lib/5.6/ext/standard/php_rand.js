var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_srand = ['void', ['long']];
_library._functions.push(_library.php_srand);

_library.php_rand = ['long', []];
_library._functions.push(_library.php_rand);

_library.php_mt_srand = ['void', ['uint']];
_library._functions.push(_library.php_mt_srand);

_library.php_mt_rand = ['uint', []];
_library._functions.push(_library.php_mt_rand);

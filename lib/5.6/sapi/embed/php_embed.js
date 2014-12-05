var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_embed_init = ['int', ['int', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_embed_init);

_library.php_embed_shutdown = ['void', []];
_library._functions.push(_library.php_embed_shutdown);

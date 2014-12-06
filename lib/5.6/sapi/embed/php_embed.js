var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_embed_init = ['int', ['int', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.php_embed_init);

_library.php_embed_shutdown = ['void', []];
_library._functions.push(_library.php_embed_shutdown);

function loadDependentSymbols() {
}
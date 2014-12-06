var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_std_post_handler = ['void', [ref.refType('char'), ref.refType('void')]];
_library._functions.push(_library.php_std_post_handler);

_library.php_startup_sapi_content_types = ['int', []];
_library._functions.push(_library.php_startup_sapi_content_types);

_library.php_setup_sapi_content_types = ['int', []];
_library._functions.push(_library.php_setup_sapi_content_types);

function loadDependentSymbols() {
};
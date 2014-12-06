var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_open_temporary_file = [ref.refType(_library.FILE), ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.php_open_temporary_file);

_library.php_open_temporary_fd_ex = ['int', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'uchar']];
_library._functions.push(_library.php_open_temporary_fd_ex);

_library.php_open_temporary_fd = ['int', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.php_open_temporary_fd);

_library.php_get_temporary_directory = ['char' ? ref.refType('char') : 'pointer', []];
_library._functions.push(_library.php_get_temporary_directory);

_library.php_shutdown_temporary_directory = ['void', []];
_library._functions.push(_library.php_shutdown_temporary_directory);

function loadDependentSymbols() {
}
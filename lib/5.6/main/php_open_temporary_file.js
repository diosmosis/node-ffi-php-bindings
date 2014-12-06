var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_open_temporary_file = [ref.refType(_library.FILE), [ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_open_temporary_file);

_library.php_open_temporary_fd_ex = ['int', [ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char')), 'uchar']];
_library._functions.push(_library.php_open_temporary_fd_ex);

_library.php_open_temporary_fd = ['int', [ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_open_temporary_fd);

_library.php_get_temporary_directory = [ref.refType('char'), []];
_library._functions.push(_library.php_get_temporary_directory);

_library.php_shutdown_temporary_directory = ['void', []];
_library._functions.push(_library.php_shutdown_temporary_directory);

function loadDependentSymbols() {
};
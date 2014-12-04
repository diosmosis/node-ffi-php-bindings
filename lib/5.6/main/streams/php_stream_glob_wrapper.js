var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library._php_glob_stream_get_path = [ref.refType('char'), [ref.refType(_library.php_stream), 'int', ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_glob_stream_get_path);

_library._php_glob_stream_get_pattern = [ref.refType('char'), [ref.refType(_library.php_stream), 'int', ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_glob_stream_get_pattern);

_library._php_glob_stream_get_count = ['int', [ref.refType(_library.php_stream), ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_glob_stream_get_count);


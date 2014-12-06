var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._php_stream_memory_create = [ref.refType(_library.php_stream), ['int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_memory_create);

_library._php_stream_memory_open = [ref.refType(_library.php_stream), ['int', ref.refType('char'), 'ulong', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_memory_open);

_library._php_stream_memory_get_buffer = [ref.refType('char'), [ref.refType(_library.php_stream), ref.refType('ulong'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_memory_get_buffer);

_library._php_stream_temp_create = [ref.refType(_library.php_stream), ['int', 'ulong', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_temp_create);

_library._php_stream_temp_create_ex = [ref.refType(_library.php_stream), ['int', 'ulong', ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_temp_create_ex);

_library._php_stream_temp_open = [ref.refType(_library.php_stream), ['int', 'ulong', ref.refType('char'), 'ulong', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_temp_open);

function loadDependentSymbols() {
};
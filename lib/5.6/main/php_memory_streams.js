var ffi = require('ffi'),
    ref = require('ref'),
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
    require('./../Zend/zend.js');
    require('./../Zend/zend_API.js');
    require('./../Zend/zend_ast.js');
    require('./../Zend/zend_compile.js');
    require('./../Zend/zend_hash.js');
    require('./../Zend/zend_ini.js');
    require('./../Zend/zend_iterators.js');
    require('./../Zend/zend_modules.js');
    require('./../Zend/zend_object_handlers.js');
    require('./../Zend/zend_types.js');
    require('./php_streams.js');
    require('./streams/php_stream_context.js');
    require('./streams/php_stream_filter_api.js');
}
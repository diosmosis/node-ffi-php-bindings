var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._php_stream_fopen = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char')), 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_fopen);

_library._php_stream_fopen_with_path = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char')), 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_fopen_with_path);

_library._php_stream_fopen_from_file = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [_library.FILE ? ref.refType(_library.FILE) : 'pointer', ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_fopen_from_file);

_library._php_stream_fopen_from_fd = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ['int', ref.refType('char'), ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_fopen_from_fd);

_library._php_stream_fopen_from_pipe = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [_library.FILE ? ref.refType(_library.FILE) : 'pointer', ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_fopen_from_pipe);

_library._php_stream_fopen_tmpfile = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ['int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_fopen_tmpfile);

_library._php_stream_fopen_temporary_file = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char')), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_fopen_temporary_file);

_library._php_stream_open_wrapper_as_file = [_library.FILE ? ref.refType(_library.FILE) : 'pointer', [ref.refType('char'), ref.refType('char'), 'int', ref.refType(ref.refType('char')), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_open_wrapper_as_file);

function loadDependentSymbols() {
    require('./../../Zend/zend.js');
    require('./../../Zend/zend_API.js');
    require('./../../Zend/zend_ast.js');
    require('./../../Zend/zend_compile.js');
    require('./../../Zend/zend_hash.js');
    require('./../../Zend/zend_ini.js');
    require('./../../Zend/zend_iterators.js');
    require('./../../Zend/zend_modules.js');
    require('./../../Zend/zend_object_handlers.js');
    require('./../../Zend/zend_types.js');
    require('./../php_streams.js');
    require('./php_stream_context.js');
    require('./php_stream_filter_api.js');
}
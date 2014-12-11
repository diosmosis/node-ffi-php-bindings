var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['_php_stream_fopen'] = ['php_stream', 'pointer', function () {
    _library._php_stream_fopen = [ref.refType(_library.php_stream), [ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char')), 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_fopen'] = _library._php_stream_fopen;
}];

_library._preload['_php_stream_fopen_with_path'] = ['php_stream', 'pointer', function () {
    _library._php_stream_fopen_with_path = [ref.refType(_library.php_stream), [ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char')), 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_fopen_with_path'] = _library._php_stream_fopen_with_path;
}];

_library._preload['_php_stream_fopen_from_file'] = ['php_stream', 'FILE', function () {
    _library._php_stream_fopen_from_file = [ref.refType(_library.php_stream), [ref.refType(_library.FILE), ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_fopen_from_file'] = _library._php_stream_fopen_from_file;
}];

_library._preload['_php_stream_fopen_from_fd'] = ['php_stream', function () {
    _library._php_stream_fopen_from_fd = [ref.refType(_library.php_stream), ['int', ref.refType('char'), ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_fopen_from_fd'] = _library._php_stream_fopen_from_fd;
}];

_library._preload['_php_stream_fopen_from_pipe'] = ['php_stream', 'FILE', function () {
    _library._php_stream_fopen_from_pipe = [ref.refType(_library.php_stream), [ref.refType(_library.FILE), ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_fopen_from_pipe'] = _library._php_stream_fopen_from_pipe;
}];

_library._preload['_php_stream_fopen_tmpfile'] = ['php_stream', function () {
    _library._php_stream_fopen_tmpfile = [ref.refType(_library.php_stream), ['int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_fopen_tmpfile'] = _library._php_stream_fopen_tmpfile;
}];

_library._preload['_php_stream_fopen_temporary_file'] = ['php_stream', 'pointer', function () {
    _library._php_stream_fopen_temporary_file = [ref.refType(_library.php_stream), [ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char')), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_fopen_temporary_file'] = _library._php_stream_fopen_temporary_file;
}];

_library._preload['_php_stream_open_wrapper_as_file'] = ['FILE', 'pointer', function () {
    _library._php_stream_open_wrapper_as_file = [ref.refType(_library.FILE), [ref.refType('char'), ref.refType('char'), 'int', ref.refType(ref.refType('char')), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_open_wrapper_as_file'] = _library._php_stream_open_wrapper_as_file;
}];

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

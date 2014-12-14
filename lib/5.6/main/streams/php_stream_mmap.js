var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_stream_mmap_operation_t'] = [function () {
    _library.php_stream_mmap_operation_t = 'int32';
}];

_library._preload['php_stream_mmap_access_t'] = [function () {
    _library.php_stream_mmap_access_t = 'int32';
}];

_library.php_stream_mmap_range = Struct({});
_library.php_stream_mmap_range.size = 1;

_library._preload['php_stream_mmap_range'] = ['php_stream_mmap_access_t', function () {
    _library.php_stream_mmap_range.size = 0;
    _library.php_stream_mmap_range.defineProperty("offset", 'ulong');
    _library.php_stream_mmap_range.defineProperty("length", 'ulong');
    _library.php_stream_mmap_range.defineProperty("mode", _library.php_stream_mmap_access_t);
    _library.php_stream_mmap_range.defineProperty("mapped", ref.refType('char'));
}];

_library._preload['_php_stream_mmap_range'] = ['php_stream', 'php_stream_mmap_operation_t', function () {
    _library._php_stream_mmap_range = [ref.refType('char'), [ref.refType(_library.php_stream), 'ulong', 'ulong', _library.php_stream_mmap_operation_t, ref.refType('ulong')]];
    _library._functions['_php_stream_mmap_range'] = _library._php_stream_mmap_range;
}];

_library._preload['_php_stream_mmap_unmap'] = ['php_stream', function () {
    _library._php_stream_mmap_unmap = ['int', [ref.refType(_library.php_stream)]];
    _library._functions['_php_stream_mmap_unmap'] = _library._php_stream_mmap_unmap;
}];

_library._preload['_php_stream_mmap_unmap_ex'] = ['php_stream', 'off_t', function () {
    _library._php_stream_mmap_unmap_ex = ['int', [ref.refType(_library.php_stream), _library.off_t]];
    _library._functions['_php_stream_mmap_unmap_ex'] = _library._php_stream_mmap_unmap_ex;
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

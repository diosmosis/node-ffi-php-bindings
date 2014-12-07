var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_stream_mmap_operation_t = 'int32';

_library.php_stream_mmap_access_t = 'int32';

require('./php_stream_mmap.js');
_library.php_stream_mmap_range = Struct({});

_library._preload.push(function () {
    _library.php_stream_mmap_range.defineProperty("length", 'ulong');
    _library.php_stream_mmap_range.defineProperty("mapped", ref.refType('char'));
    _library.php_stream_mmap_range.defineProperty("mode", _library.php_stream_mmap_access_t);
    _library.php_stream_mmap_range.defineProperty("offset", 'ulong');
});

_library._php_stream_mmap_range = [ref.refType('char'), [ref.refType(_library.php_stream), 'ulong', 'ulong', _library.php_stream_mmap_operation_t, ref.refType('ulong')]];
_library._functions['_php_stream_mmap_range'] = _library._php_stream_mmap_range;

_library._php_stream_mmap_unmap = ['int', [ref.refType(_library.php_stream)]];
_library._functions['_php_stream_mmap_unmap'] = _library._php_stream_mmap_unmap;

_library._php_stream_mmap_unmap_ex = ['int', [ref.refType(_library.php_stream), _library.off_t]];
_library._functions['_php_stream_mmap_unmap_ex'] = _library._php_stream_mmap_unmap_ex;


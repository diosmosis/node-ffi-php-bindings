var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.zend_stream_fsizer_t = ffi.Function('ulong', [ref.refType('void')]);

_library.zend_stream_reader_t = ffi.Function('ulong', [ref.refType('void'), ref.refType('char'), 'ulong']);

_library.zend_stream_closer_t = ffi.Function('void', [ref.refType('void')]);

_library.zend_stream_type = 'int32';

_library._zend_mmap = Struct({});
_library._zend_mmap.size = 1;

_library._preload.push(function () {
    _library._zend_mmap.size = 0;
    _library._zend_mmap.defineProperty("buf", ref.refType('char'));
    _library._zend_mmap.defineProperty("len", 'ulong');
    _library._zend_mmap.defineProperty("map", ref.refType('void'));
    _library._zend_mmap.defineProperty("old_closer", _library.zend_stream_closer_t);
    _library._zend_mmap.defineProperty("old_handle", ref.refType('void'));
    _library._zend_mmap.defineProperty("pos", 'ulong');
});

_library.zend_mmap = _library._zend_mmap;

_library._zend_stream = Struct({});
_library._zend_stream.size = 1;

_library._preload.push(function () {
    _library._zend_stream.size = 0;
    _library._zend_stream.defineProperty("closer", _library.zend_stream_closer_t);
    _library._zend_stream.defineProperty("fsizer", _library.zend_stream_fsizer_t);
    _library._zend_stream.defineProperty("handle", ref.refType('void'));
    _library._zend_stream.defineProperty("isatty", 'int');
    _library._zend_stream.defineProperty("mmap", _library.zend_mmap);
    _library._zend_stream.defineProperty("reader", _library.zend_stream_reader_t);
});

_library.zend_stream = _library._zend_stream;

_library._zend_file_handle = Struct({});
_library._zend_file_handle.size = 1;

_library._preload.push(function () {
    _library._zend_file_handle.size = 0;
    _library._zend_file_handle.defineProperty("filename", ref.refType('char'));
    _library._zend_file_handle.defineProperty("free_filename", 'uchar');
    _library._zend_file_handle.defineProperty("handle", Union({}));
    _library._zend_file_handle.fields.handle.type.defineProperty("fd", 'int');
    _library._zend_file_handle.fields.handle.type.defineProperty("fp", ref.refType(_library.FILE));
    _library._zend_file_handle.fields.handle.type.defineProperty("stream", _library.zend_stream);
    _library._zend_file_handle.defineProperty("opened_path", ref.refType('char'));
    _library._zend_file_handle.defineProperty("type", _library.zend_stream_type);
});

_library.zend_file_handle = _library._zend_file_handle;

_library.zend_stream_open = ['int', [ref.refType('char'), ref.refType(_library.zend_file_handle)]];
_library._functions['zend_stream_open'] = _library.zend_stream_open;

_library.zend_stream_fixup = ['int', [ref.refType(_library.zend_file_handle), ref.refType(ref.refType('char')), ref.refType('ulong')]];
_library._functions['zend_stream_fixup'] = _library.zend_stream_fixup;

_library.zend_file_handle_dtor = ['void', [ref.refType(_library.zend_file_handle)]];
_library._functions['zend_file_handle_dtor'] = _library.zend_file_handle_dtor;

_library.zend_compare_file_handles = ['int', [ref.refType(_library.zend_file_handle), ref.refType(_library.zend_file_handle)]];
_library._functions['zend_compare_file_handles'] = _library.zend_compare_file_handles;


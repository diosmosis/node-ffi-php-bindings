var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_stream_fsizer_t'] = ['size_t (void *)', function () {
    _library.zend_stream_fsizer_t = ffi.Function('ulong', [ref.refType('void')]);
}];

_library._preload['zend_stream_reader_t'] = ['size_t (void *, char *, size_t)', function () {
    _library.zend_stream_reader_t = ffi.Function('ulong', [ref.refType('void'), ref.refType('char'), 'ulong']);
}];

_library._preload['zend_stream_closer_t'] = ['void (void *)', function () {
    _library.zend_stream_closer_t = ffi.Function('void', [ref.refType('void')]);
}];

_library._preload['zend_stream_type'] = [function () {
    _library.zend_stream_type = 'int32';
}];

_library._zend_mmap = Struct({});
_library._zend_mmap.size = 1;

_library._preload['_zend_mmap'] = ['zend_stream_closer_t', function () {
    _library._zend_mmap.size = 0;
    _library._zend_mmap.defineProperty("len", 'ulong');
    _library._zend_mmap.defineProperty("pos", 'ulong');
    _library._zend_mmap.defineProperty("map", ref.refType('void'));
    _library._zend_mmap.defineProperty("buf", ref.refType('char'));
    _library._zend_mmap.defineProperty("old_handle", ref.refType('void'));
    _library._zend_mmap.defineProperty("old_closer", _library.zend_stream_closer_t);
}];

_library._preload['zend_mmap'] = [function () {
    _library.zend_mmap = _library._zend_mmap;
}];

_library._zend_stream = Struct({});
_library._zend_stream.size = 1;

_library._preload['_zend_stream'] = ['zend_mmap', '_zend_mmap', 'zend_stream_reader_t', 'zend_stream_fsizer_t', 'zend_stream_closer_t', function () {
    _library._zend_stream.size = 0;
    _library._zend_stream.defineProperty("handle", ref.refType('void'));
    _library._zend_stream.defineProperty("isatty", 'int');
    _library._zend_stream.defineProperty("mmap", _library.zend_mmap);
    _library._zend_stream.defineProperty("reader", _library.zend_stream_reader_t);
    _library._zend_stream.defineProperty("fsizer", _library.zend_stream_fsizer_t);
    _library._zend_stream.defineProperty("closer", _library.zend_stream_closer_t);
}];

_library._preload['zend_stream'] = [function () {
    _library.zend_stream = _library._zend_stream;
}];

_library._zend_file_handle = Struct({});
_library._zend_file_handle.size = 1;

_library._preload['_zend_file_handle'] = ['zend_stream_type', 'FILE', 'zend_stream', '_zend_stream', function () {
    _library._zend_file_handle.size = 0;
    _library._zend_file_handle.defineProperty("type", _library.zend_stream_type);
    _library._zend_file_handle.defineProperty("filename", ref.refType('char'));
    _library._zend_file_handle.defineProperty("opened_path", ref.refType('char'));
    _library._zend_file_handle.defineProperty("handle", (function () {
        var temp = Union({});
        temp.defineProperty("fd", 'int');
        temp.defineProperty("fp", ref.refType(_library.FILE));
        temp.defineProperty("stream", _library.zend_stream);
        return temp;
    })());
    _library._zend_file_handle.defineProperty("free_filename", 'uchar');
}];

_library._preload['zend_file_handle'] = [function () {
    _library.zend_file_handle = _library._zend_file_handle;
}];

_library._preload['zend_stream_open'] = ['zend_file_handle', function () {
    _library.zend_stream_open = ['int', [ref.refType('char'), ref.refType(_library.zend_file_handle)]];
    _library._functions['zend_stream_open'] = _library.zend_stream_open;
}];

_library._preload['zend_stream_fixup'] = ['zend_file_handle', 'pointer', function () {
    _library.zend_stream_fixup = ['int', [ref.refType(_library.zend_file_handle), ref.refType(ref.refType('char')), ref.refType('ulong')]];
    _library._functions['zend_stream_fixup'] = _library.zend_stream_fixup;
}];

_library._preload['zend_file_handle_dtor'] = ['zend_file_handle', function () {
    _library.zend_file_handle_dtor = ['void', [ref.refType(_library.zend_file_handle)]];
    _library._functions['zend_file_handle_dtor'] = _library.zend_file_handle_dtor;
}];

_library._preload['zend_compare_file_handles'] = ['zend_file_handle', 'zend_file_handle', function () {
    _library.zend_compare_file_handles = ['int', [ref.refType(_library.zend_file_handle), ref.refType(_library.zend_file_handle)]];
    _library._functions['zend_compare_file_handles'] = _library.zend_compare_file_handles;
}];

function loadDependentSymbols() {
}

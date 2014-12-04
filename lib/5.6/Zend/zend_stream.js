var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.zend_stream_fsizer_t = ffi.Function('ulong', [ref.refType('void')]);

_library.zend_stream_reader_t = ffi.Function('ulong', [ref.refType('void'), ref.refType('char'), 'ulong']);

_library.zend_stream_closer_t = ffi.Function('void', [ref.refType('void')]);

_library.zend_stream_type = 'int32';

_library._zend_mmap = Struct({
    "buf": ref.refType('char'),
    "len": 'ulong',
    "map": ref.refType('void'),
    "old_closer": _library.zend_stream_closer_t,
    "old_handle": ref.refType('void'),
    "pos": 'ulong'
});

_library.zend_mmap = _library._zend_mmap;

_library._zend_stream = Struct({
    "closer": _library.zend_stream_closer_t,
    "fsizer": _library.zend_stream_fsizer_t,
    "handle": ref.refType('void'),
    "isatty": 'int',
    "mmap": _library.zend_mmap,
    "reader": _library.zend_stream_reader_t
});

_library.zend_stream = _library._zend_stream;

_library._zend_file_handle = Struct({
    "filename": ref.refType('char'),
    "free_filename": 'uchar',
    "handle": Union({
        "fd": 'int',
        "fp": ref.refType(_library.FILE),
        "stream": _library.zend_stream
    });,
    "opened_path": ref.refType('char'),
    "type": _library.zend_stream_type
});

_library.zend_file_handle = _library._zend_file_handle;

_library.zend_stream_open = ['int', [ref.refType('char'), ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.zend_stream_open);

_library.zend_stream_fixup = ['int', [ref.refType(_library.zend_file_handle), ref.refType(ref.refType('char')), ref.refType('ulong')]];
_library._functions.push(_library.zend_stream_fixup);

_library.zend_file_handle_dtor = ['void', [ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.zend_file_handle_dtor);

_library.zend_compare_file_handles = ['int', [ref.refType(_library.zend_file_handle), ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.zend_compare_file_handles);


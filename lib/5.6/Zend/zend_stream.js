var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_stream_fsizer_t = ffi.Function('ulong', ['void' ? ref.refType('void') : 'pointer']);

_library.zend_stream_reader_t = ffi.Function('ulong', ['void' ? ref.refType('void') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'ulong']);

_library.zend_stream_closer_t = ffi.Function('void', ['void' ? ref.refType('void') : 'pointer']);

_library.zend_stream_type = 'int32';

_library._zend_mmap = Struct({
    "buf": 'char' ? ref.refType('char') : 'pointer',
    "len": 'ulong',
    "map": 'void' ? ref.refType('void') : 'pointer',
    "old_closer": _library.zend_stream_closer_t,
    "old_handle": 'void' ? ref.refType('void') : 'pointer',
    "pos": 'ulong'
});

_library.zend_mmap = _library._zend_mmap;

_library._zend_stream = Struct({
    "closer": _library.zend_stream_closer_t,
    "fsizer": _library.zend_stream_fsizer_t,
    "handle": 'void' ? ref.refType('void') : 'pointer',
    "isatty": 'int',
    "mmap": _library.zend_mmap,
    "reader": _library.zend_stream_reader_t
});

_library.zend_stream = _library._zend_stream;

_library._zend_file_handle = Struct({
    "filename": 'char' ? ref.refType('char') : 'pointer',
    "free_filename": 'uchar',
    "handle": Union({
        "fd": 'int',
        "fp": ref.refType(_library.FILE),
        "stream": _library.zend_stream
    }),
    "opened_path": 'char' ? ref.refType('char') : 'pointer',
    "type": _library.zend_stream_type
});

_library.zend_file_handle = _library._zend_file_handle;

_library.zend_stream_open = ['int', ['char' ? ref.refType('char') : 'pointer', ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.zend_stream_open);

_library.zend_stream_fixup = ['int', [ref.refType(_library.zend_file_handle), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'ulong' ? ref.refType('ulong') : 'pointer']];
_library._functions.push(_library.zend_stream_fixup);

_library.zend_file_handle_dtor = ['void', [ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.zend_file_handle_dtor);

_library.zend_compare_file_handles = ['int', [ref.refType(_library.zend_file_handle), ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.zend_compare_file_handles);

function loadDependentSymbols() {
}
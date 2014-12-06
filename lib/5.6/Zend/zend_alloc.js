var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_leak_info = Struct({
    "addr": 'void' ? ref.refType('void') : 'pointer',
    "filename": 'char' ? ref.refType('char') : 'pointer',
    "lineno": 'uint',
    "orig_filename": 'char' ? ref.refType('char') : 'pointer',
    "orig_lineno": 'uint',
    "size": 'ulong'
});

_library.zend_leak_info = _library._zend_leak_info;

_library.zend_strndup = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library.zend_strndup);

_library._emalloc = ['void' ? ref.refType('void') : 'pointer', ['ulong', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._emalloc);

_library._safe_emalloc = ['void' ? ref.refType('void') : 'pointer', ['ulong', 'ulong', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._safe_emalloc);

_library._safe_malloc = ['void' ? ref.refType('void') : 'pointer', ['ulong', 'ulong', 'ulong']];
_library._functions.push(_library._safe_malloc);

_library._efree = ['void', ['void' ? ref.refType('void') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._efree);

_library._ecalloc = ['void' ? ref.refType('void') : 'pointer', ['ulong', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._ecalloc);

_library._erealloc = ['void' ? ref.refType('void') : 'pointer', ['void' ? ref.refType('void') : 'pointer', 'ulong', 'int', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._erealloc);

_library._safe_erealloc = ['void' ? ref.refType('void') : 'pointer', ['void' ? ref.refType('void') : 'pointer', 'ulong', 'ulong', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._safe_erealloc);

_library._safe_realloc = ['void' ? ref.refType('void') : 'pointer', ['void' ? ref.refType('void') : 'pointer', 'ulong', 'ulong', 'ulong']];
_library._functions.push(_library._safe_realloc);

_library._estrdup = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._estrdup);

_library._estrndup = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._estrndup);

_library._zend_mem_block_size = ['ulong', ['void' ? ref.refType('void') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._zend_mem_block_size);

_library.__zend_malloc = ['void' ? ref.refType('void') : 'pointer', ['ulong']];
_library._functions.push(_library.__zend_malloc);

_library.__zend_calloc = ['void' ? ref.refType('void') : 'pointer', ['ulong', 'ulong']];
_library._functions.push(_library.__zend_calloc);

_library.__zend_realloc = ['void' ? ref.refType('void') : 'pointer', ['void' ? ref.refType('void') : 'pointer', 'ulong']];
_library._functions.push(_library.__zend_realloc);

_library.zend_set_memory_limit = ['int', ['ulong']];
_library._functions.push(_library.zend_set_memory_limit);

_library.start_memory_manager = ['void', []];
_library._functions.push(_library.start_memory_manager);

_library.shutdown_memory_manager = ['void', ['int', 'int']];
_library._functions.push(_library.shutdown_memory_manager);

_library.is_zend_mm = ['int', []];
_library._functions.push(_library.is_zend_mm);

_library._mem_block_check = ['int', ['void' ? ref.refType('void') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._mem_block_check);

_library._full_mem_check = ['void', ['int', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._full_mem_check);

_library.zend_memory_usage = ['ulong', ['int']];
_library._functions.push(_library.zend_memory_usage);

_library.zend_memory_peak_usage = ['ulong', ['int']];
_library._functions.push(_library.zend_memory_peak_usage);

_library.zend_mm_heap = 'void';

_library.zend_mm_startup = [ref.refType(_library.zend_mm_heap), []];
_library._functions.push(_library.zend_mm_startup);

_library.zend_mm_shutdown = ['void', [ref.refType(_library.zend_mm_heap), 'int', 'int']];
_library._functions.push(_library.zend_mm_shutdown);

_library._zend_mm_alloc = ['void' ? ref.refType('void') : 'pointer', [ref.refType(_library.zend_mm_heap), 'ulong', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._zend_mm_alloc);

_library._zend_mm_free = ['void', [ref.refType(_library.zend_mm_heap), 'void' ? ref.refType('void') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._zend_mm_free);

_library._zend_mm_realloc = ['void' ? ref.refType('void') : 'pointer', [ref.refType(_library.zend_mm_heap), 'void' ? ref.refType('void') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._zend_mm_realloc);

_library._zend_mm_block_size = ['ulong', [ref.refType(_library.zend_mm_heap), 'void' ? ref.refType('void') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._zend_mm_block_size);

_library._zend_mm_segment = Struct({
    "next_segment": ref.refType(_library._zend_mm_segment),
    "size": 'ulong'
});

_library._zend_mm_mem_handlers = Struct({
    "_alloc": ffi.Function(ref.refType(_library._zend_mm_segment), [ref.refType(_library._zend_mm_storage), 'ulong']),
    "_free": ffi.Function('void', [ref.refType(_library._zend_mm_storage), ref.refType(_library._zend_mm_segment)]),
    "_realloc": ffi.Function(ref.refType(_library._zend_mm_segment), [ref.refType(_library._zend_mm_storage), ref.refType(_library._zend_mm_segment), 'ulong']),
    "compact": ffi.Function('void', [ref.refType(_library._zend_mm_storage)]),
    "dtor": ffi.Function('void', [ref.refType(_library._zend_mm_storage)]),
    "init": ffi.Function(ref.refType(_library._zend_mm_storage), ['void' ? ref.refType('void') : 'pointer']),
    "name": 'char' ? ref.refType('char') : 'pointer'
});

_library.zend_mm_mem_handlers = _library._zend_mm_mem_handlers;

_library._zend_mm_storage = Struct({
    "data": 'void' ? ref.refType('void') : 'pointer',
    "handlers": ref.refType(_library.zend_mm_mem_handlers)
});

_library.zend_mm_storage = _library._zend_mm_storage;

_library.zend_mm_segment = _library._zend_mm_segment;

_library.zend_mm_startup_ex = [ref.refType(_library.zend_mm_heap), [ref.refType(_library.zend_mm_mem_handlers), 'ulong', 'ulong', 'int', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_mm_startup_ex);

_library.zend_mm_set_heap = [ref.refType(_library.zend_mm_heap), [ref.refType(_library.zend_mm_heap)]];
_library._functions.push(_library.zend_mm_set_heap);

_library.zend_mm_get_storage = [ref.refType(_library.zend_mm_storage), [ref.refType(_library.zend_mm_heap)]];
_library._functions.push(_library.zend_mm_get_storage);

_library.zend_mm_set_custom_handlers = ['void', [ref.refType(_library.zend_mm_heap), ffi.Function('void' ? ref.refType('void') : 'pointer', ['ulong']), ffi.Function('void', ['void' ? ref.refType('void') : 'pointer']), ffi.Function('void' ? ref.refType('void') : 'pointer', ['void' ? ref.refType('void') : 'pointer', 'ulong'])]];
_library._functions.push(_library.zend_mm_set_custom_handlers);

function loadDependentSymbols() {
}
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_leak_info = Struct({});
_library._zend_leak_info.size = 1;

_library._preload['_zend_leak_info'] = [function () {
    _library._zend_leak_info.size = 0;
    _library._zend_leak_info.defineProperty("addr", ref.refType('void'));
    _library._zend_leak_info.defineProperty("filename", ref.refType('char'));
    _library._zend_leak_info.defineProperty("lineno", 'uint');
    _library._zend_leak_info.defineProperty("orig_filename", ref.refType('char'));
    _library._zend_leak_info.defineProperty("orig_lineno", 'uint');
    _library._zend_leak_info.defineProperty("size", 'ulong');
}];

_library._preload['zend_leak_info'] = [function () {
    _library.zend_leak_info = _library._zend_leak_info;
}];

_library._preload['zend_strndup'] = [function () {
    _library.zend_strndup = [ref.refType('char'), [ref.refType('char'), 'uint']];
    _library._functions['zend_strndup'] = _library.zend_strndup;
}];

_library._preload['_emalloc'] = [function () {
    _library._emalloc = [ref.refType('void'), ['ulong', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_emalloc'] = _library._emalloc;
}];

_library._preload['_safe_emalloc'] = [function () {
    _library._safe_emalloc = [ref.refType('void'), ['ulong', 'ulong', 'ulong', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_safe_emalloc'] = _library._safe_emalloc;
}];

_library._preload['_safe_malloc'] = [function () {
    _library._safe_malloc = [ref.refType('void'), ['ulong', 'ulong', 'ulong']];
    _library._functions['_safe_malloc'] = _library._safe_malloc;
}];

_library._preload['_efree'] = [function () {
    _library._efree = ['void', [ref.refType('void'), ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_efree'] = _library._efree;
}];

_library._preload['_ecalloc'] = [function () {
    _library._ecalloc = [ref.refType('void'), ['ulong', 'ulong', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_ecalloc'] = _library._ecalloc;
}];

_library._preload['_erealloc'] = [function () {
    _library._erealloc = [ref.refType('void'), [ref.refType('void'), 'ulong', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_erealloc'] = _library._erealloc;
}];

_library._preload['_safe_erealloc'] = [function () {
    _library._safe_erealloc = [ref.refType('void'), [ref.refType('void'), 'ulong', 'ulong', 'ulong', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_safe_erealloc'] = _library._safe_erealloc;
}];

_library._preload['_safe_realloc'] = [function () {
    _library._safe_realloc = [ref.refType('void'), [ref.refType('void'), 'ulong', 'ulong', 'ulong']];
    _library._functions['_safe_realloc'] = _library._safe_realloc;
}];

_library._preload['_estrdup'] = [function () {
    _library._estrdup = [ref.refType('char'), [ref.refType('char'), ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_estrdup'] = _library._estrdup;
}];

_library._preload['_estrndup'] = [function () {
    _library._estrndup = [ref.refType('char'), [ref.refType('char'), 'uint', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_estrndup'] = _library._estrndup;
}];

_library._preload['_zend_mem_block_size'] = [function () {
    _library._zend_mem_block_size = ['ulong', [ref.refType('void'), ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_zend_mem_block_size'] = _library._zend_mem_block_size;
}];

_library._preload['zend_set_memory_limit'] = [function () {
    _library.zend_set_memory_limit = ['int', ['ulong']];
    _library._functions['zend_set_memory_limit'] = _library.zend_set_memory_limit;
}];

_library._preload['start_memory_manager'] = [function () {
    _library.start_memory_manager = ['void', []];
    _library._functions['start_memory_manager'] = _library.start_memory_manager;
}];

_library._preload['shutdown_memory_manager'] = [function () {
    _library.shutdown_memory_manager = ['void', ['int', 'int']];
    _library._functions['shutdown_memory_manager'] = _library.shutdown_memory_manager;
}];

_library._preload['is_zend_mm'] = [function () {
    _library.is_zend_mm = ['int', []];
    _library._functions['is_zend_mm'] = _library.is_zend_mm;
}];

_library._preload['_mem_block_check'] = [function () {
    _library._mem_block_check = ['int', [ref.refType('void'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_mem_block_check'] = _library._mem_block_check;
}];

_library._preload['_full_mem_check'] = [function () {
    _library._full_mem_check = ['void', ['int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_full_mem_check'] = _library._full_mem_check;
}];

_library._preload['zend_memory_usage'] = [function () {
    _library.zend_memory_usage = ['ulong', ['int']];
    _library._functions['zend_memory_usage'] = _library.zend_memory_usage;
}];

_library._preload['zend_memory_peak_usage'] = [function () {
    _library.zend_memory_peak_usage = ['ulong', ['int']];
    _library._functions['zend_memory_peak_usage'] = _library.zend_memory_peak_usage;
}];

_library._preload['zend_mm_heap'] = [function () {
    _library.zend_mm_heap = 'void';
}];

_library._preload['zend_mm_startup'] = ['zend_mm_heap', function () {
    _library.zend_mm_startup = [ref.refType(_library.zend_mm_heap), []];
    _library._functions['zend_mm_startup'] = _library.zend_mm_startup;
}];

_library._preload['zend_mm_shutdown'] = ['zend_mm_heap', function () {
    _library.zend_mm_shutdown = ['void', [ref.refType(_library.zend_mm_heap), 'int', 'int']];
    _library._functions['zend_mm_shutdown'] = _library.zend_mm_shutdown;
}];

_library._preload['_zend_mm_alloc'] = ['zend_mm_heap', function () {
    _library._zend_mm_alloc = [ref.refType('void'), [ref.refType(_library.zend_mm_heap), 'ulong', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_zend_mm_alloc'] = _library._zend_mm_alloc;
}];

_library._preload['_zend_mm_free'] = ['zend_mm_heap', function () {
    _library._zend_mm_free = ['void', [ref.refType(_library.zend_mm_heap), ref.refType('void'), ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_zend_mm_free'] = _library._zend_mm_free;
}];

_library._preload['_zend_mm_realloc'] = ['zend_mm_heap', function () {
    _library._zend_mm_realloc = [ref.refType('void'), [ref.refType(_library.zend_mm_heap), ref.refType('void'), 'ulong', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_zend_mm_realloc'] = _library._zend_mm_realloc;
}];

_library._preload['_zend_mm_block_size'] = ['zend_mm_heap', function () {
    _library._zend_mm_block_size = ['ulong', [ref.refType(_library.zend_mm_heap), ref.refType('void'), ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_zend_mm_block_size'] = _library._zend_mm_block_size;
}];

_library._zend_mm_segment = Struct({});
_library._zend_mm_segment.size = 1;

_library._preload['_zend_mm_segment'] = ['_zend_mm_segment', function () {
    _library._zend_mm_segment.size = 0;
    _library._zend_mm_segment.defineProperty("next_segment", ref.refType(_library._zend_mm_segment));
    _library._zend_mm_segment.defineProperty("size", 'ulong');
}];

_library._zend_mm_mem_handlers = Struct({});
_library._zend_mm_mem_handlers.size = 1;

_library._preload['_zend_mm_mem_handlers'] = ['zend_mm_segment *(zend_mm_storage *, size_t)', 'void (zend_mm_storage *, zend_mm_segment *)', 'zend_mm_segment *(zend_mm_storage *, zend_mm_segment *, size_t)', 'void (zend_mm_storage *)', 'void (zend_mm_storage *)', 'zend_mm_storage *(void *)', function () {
    _library._zend_mm_mem_handlers.size = 0;
    _library._zend_mm_mem_handlers.defineProperty("_alloc", ffi.Function(ref.refType(_library._zend_mm_segment), [ref.refType(_library._zend_mm_storage), 'ulong']));
    _library._zend_mm_mem_handlers.defineProperty("_free", ffi.Function('void', [ref.refType(_library._zend_mm_storage), ref.refType(_library._zend_mm_segment)]));
    _library._zend_mm_mem_handlers.defineProperty("_realloc", ffi.Function(ref.refType(_library._zend_mm_segment), [ref.refType(_library._zend_mm_storage), ref.refType(_library._zend_mm_segment), 'ulong']));
    _library._zend_mm_mem_handlers.defineProperty("compact", ffi.Function('void', [ref.refType(_library._zend_mm_storage)]));
    _library._zend_mm_mem_handlers.defineProperty("dtor", ffi.Function('void', [ref.refType(_library._zend_mm_storage)]));
    _library._zend_mm_mem_handlers.defineProperty("init", ffi.Function(ref.refType(_library._zend_mm_storage), [ref.refType('void')]));
    _library._zend_mm_mem_handlers.defineProperty("name", ref.refType('char'));
}];

_library._preload['zend_mm_mem_handlers'] = [function () {
    _library.zend_mm_mem_handlers = _library._zend_mm_mem_handlers;
}];

_library._zend_mm_storage = Struct({});
_library._zend_mm_storage.size = 1;

_library._preload['_zend_mm_storage'] = ['zend_mm_mem_handlers', function () {
    _library._zend_mm_storage.size = 0;
    _library._zend_mm_storage.defineProperty("data", ref.refType('void'));
    _library._zend_mm_storage.defineProperty("handlers", ref.refType(_library.zend_mm_mem_handlers));
}];

_library._preload['zend_mm_storage'] = [function () {
    _library.zend_mm_storage = _library._zend_mm_storage;
}];

_library._preload['zend_mm_segment'] = [function () {
    _library.zend_mm_segment = _library._zend_mm_segment;
}];

_library._preload['zend_mm_startup_ex'] = ['zend_mm_heap', 'zend_mm_mem_handlers', function () {
    _library.zend_mm_startup_ex = [ref.refType(_library.zend_mm_heap), [ref.refType(_library.zend_mm_mem_handlers), 'ulong', 'ulong', 'int', ref.refType('void')]];
    _library._functions['zend_mm_startup_ex'] = _library.zend_mm_startup_ex;
}];

_library._preload['zend_mm_set_heap'] = ['zend_mm_heap', 'zend_mm_heap', function () {
    _library.zend_mm_set_heap = [ref.refType(_library.zend_mm_heap), [ref.refType(_library.zend_mm_heap)]];
    _library._functions['zend_mm_set_heap'] = _library.zend_mm_set_heap;
}];

_library._preload['zend_mm_get_storage'] = ['zend_mm_storage', 'zend_mm_heap', function () {
    _library.zend_mm_get_storage = [ref.refType(_library.zend_mm_storage), [ref.refType(_library.zend_mm_heap)]];
    _library._functions['zend_mm_get_storage'] = _library.zend_mm_get_storage;
}];

_library._preload['zend_mm_set_custom_handlers'] = ['zend_mm_heap', 'void *(size_t)', 'void (void *)', 'void *(void *, size_t)', function () {
    _library.zend_mm_set_custom_handlers = ['void', [ref.refType(_library.zend_mm_heap), ffi.Function(ref.refType('void'), ['ulong']), ffi.Function('void', [ref.refType('void')]), ffi.Function(ref.refType('void'), [ref.refType('void'), 'ulong'])]];
    _library._functions['zend_mm_set_custom_handlers'] = _library.zend_mm_set_custom_handlers;
}];

function loadDependentSymbols() {
}

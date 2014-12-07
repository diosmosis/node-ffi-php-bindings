var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_file_le_stream = ['int', []];
_library._functions['php_file_le_stream'] = _library.php_file_le_stream;

_library.php_file_le_pstream = ['int', []];
_library._functions['php_file_le_pstream'] = _library.php_file_le_pstream;

_library.php_file_le_stream_filter = ['int', []];
_library._functions['php_file_le_stream_filter'] = _library.php_file_le_stream_filter;

_library.php_stream_context = _library._php_stream_context;

_library._php_stream_statbuf = Struct({});

_library._preload.push(function () {
    _library._php_stream_statbuf.defineProperty("sb", _library.stat);
});

_library._php_stream_ops = Struct({});

_library._preload.push(function () {
    _library._php_stream_ops.defineProperty("cast", ffi.Function('int', [ref.refType(_library._php_stream), 'int', ref.refType(ref.refType('void'))]));
    _library._php_stream_ops.defineProperty("close", ffi.Function('int', [ref.refType(_library._php_stream), 'int']));
    _library._php_stream_ops.defineProperty("flush", ffi.Function('int', [ref.refType(_library._php_stream)]));
    _library._php_stream_ops.defineProperty("label", ref.refType('char'));
    _library._php_stream_ops.defineProperty("read", ffi.Function('ulong', [ref.refType(_library._php_stream), ref.refType('char'), 'ulong']));
    _library._php_stream_ops.defineProperty("seek", ffi.Function('int', [ref.refType(_library._php_stream), 'long', 'int', ref.refType('long')]));
    _library._php_stream_ops.defineProperty("set_option", ffi.Function('int', [ref.refType(_library._php_stream), 'int', 'int', ref.refType('void')]));
    _library._php_stream_ops.defineProperty("stat", ffi.Function('int', [ref.refType(_library._php_stream), ref.refType(_library._php_stream_statbuf)]));
    _library._php_stream_ops.defineProperty("write", ffi.Function('ulong', [ref.refType(_library._php_stream), ref.refType('char'), 'ulong']));
});

_library.php_stream_ops = _library._php_stream_ops;

_library.php_stream_filter = _library._php_stream_filter;

_library.php_stream = _library._php_stream;

_library._php_stream_wrapper_ops = Struct({});

_library._preload.push(function () {
    _library._php_stream_wrapper_ops.defineProperty("dir_opener", ffi.Function(ref.refType(_library._php_stream), [ref.refType(_library._php_stream_wrapper), ref.refType('char'), ref.refType('char'), 'int', ref.refType(ref.refType('char')), ref.refType(_library._php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']));
    _library._php_stream_wrapper_ops.defineProperty("label", ref.refType('char'));
    _library._php_stream_wrapper_ops.defineProperty("rename", ffi.Function('int', [ref.refType(_library._php_stream_wrapper), ref.refType('char'), ref.refType('char'), 'int', ref.refType(_library._php_stream_context)]));
    _library._php_stream_wrapper_ops.defineProperty("stream_closer", ffi.Function('int', [ref.refType(_library._php_stream_wrapper), ref.refType(_library._php_stream)]));
    _library._php_stream_wrapper_ops.defineProperty("stream_metadata", ffi.Function('int', [ref.refType(_library._php_stream_wrapper), ref.refType('char'), 'int', ref.refType('void'), ref.refType(_library._php_stream_context)]));
    _library._php_stream_wrapper_ops.defineProperty("stream_mkdir", ffi.Function('int', [ref.refType(_library._php_stream_wrapper), ref.refType('char'), 'int', 'int', ref.refType(_library._php_stream_context)]));
    _library._php_stream_wrapper_ops.defineProperty("stream_opener", ffi.Function(ref.refType(_library._php_stream), [ref.refType(_library._php_stream_wrapper), ref.refType('char'), ref.refType('char'), 'int', ref.refType(ref.refType('char')), ref.refType(_library._php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']));
    _library._php_stream_wrapper_ops.defineProperty("stream_rmdir", ffi.Function('int', [ref.refType(_library._php_stream_wrapper), ref.refType('char'), 'int', ref.refType(_library._php_stream_context)]));
    _library._php_stream_wrapper_ops.defineProperty("stream_stat", ffi.Function('int', [ref.refType(_library._php_stream_wrapper), ref.refType(_library._php_stream), ref.refType(_library._php_stream_statbuf)]));
    _library._php_stream_wrapper_ops.defineProperty("unlink", ffi.Function('int', [ref.refType(_library._php_stream_wrapper), ref.refType('char'), 'int', ref.refType(_library._php_stream_context)]));
    _library._php_stream_wrapper_ops.defineProperty("url_stat", ffi.Function('int', [ref.refType(_library._php_stream_wrapper), ref.refType('char'), 'int', ref.refType(_library._php_stream_statbuf), ref.refType(_library._php_stream_context)]));
});

_library.php_stream_wrapper_ops = _library._php_stream_wrapper_ops;

_library._php_stream_wrapper = Struct({});

_library._preload.push(function () {
    _library._php_stream_wrapper.defineProperty("abstract", ref.refType('void'));
    _library._php_stream_wrapper.defineProperty("is_url", 'int');
    _library._php_stream_wrapper.defineProperty("wops", ref.refType(_library.php_stream_wrapper_ops));
});

_library.php_stream_wrapper = _library._php_stream_wrapper;

_library._php_stream = Struct({});

_library._preload.push(function () {
    _library._php_stream.defineProperty("__exposed", 'int');
    _library._php_stream.defineProperty("abstract", ref.refType('void'));
    _library._php_stream.defineProperty("chunk_size", 'ulong');
    _library._php_stream.defineProperty("context", ref.refType(_library.php_stream_context));
    _library._php_stream.defineProperty("enclosing_stream", ref.refType(_library._php_stream));
    _library._php_stream.defineProperty("eof", 'int');
    _library._php_stream.defineProperty("fclose_stdiocast", 'int');
    _library._php_stream.defineProperty("fgetss_state", 'int');
    _library._php_stream.defineProperty("flags", 'int');
    _library._php_stream.defineProperty("in_free", 'int');
    _library._php_stream.defineProperty("is_persistent", 'int');
    _library._php_stream.defineProperty("mode", RefArray('char', 16));
    _library._php_stream.defineProperty("open_filename", ref.refType('char'));
    _library._php_stream.defineProperty("open_lineno", 'uint');
    _library._php_stream.defineProperty("ops", ref.refType(_library.php_stream_ops));
    _library._php_stream.defineProperty("orig_path", ref.refType('char'));
    _library._php_stream.defineProperty("position", _library.off_t);
    _library._php_stream.defineProperty("readbuf", ref.refType('uchar'));
    _library._php_stream.defineProperty("readbuflen", 'ulong');
    _library._php_stream.defineProperty("readfilters", _library.php_stream_filter_chain);
    _library._php_stream.defineProperty("readpos", _library.off_t);
    _library._php_stream.defineProperty("rsrc_id", 'int');
    _library._php_stream.defineProperty("stdiocast", ref.refType(_library.FILE));
    _library._php_stream.defineProperty("wrapper", ref.refType(_library.php_stream_wrapper));
    _library._php_stream.defineProperty("wrapperdata", ref.refType(_library.zval));
    _library._php_stream.defineProperty("wrapperthis", ref.refType('void'));
    _library._php_stream.defineProperty("writefilters", _library.php_stream_filter_chain);
    _library._php_stream.defineProperty("writepos", _library.off_t);
});

_library.php_stream_statbuf = _library._php_stream_statbuf;

_library._php_stream_dirent = Struct({});

_library._preload.push(function () {
    _library._php_stream_dirent.defineProperty("d_name", RefArray('char', 4096));
});

_library.php_stream_dirent = _library._php_stream_dirent;

_library._php_stream_alloc = [ref.refType(_library.php_stream), [ref.refType(_library.php_stream_ops), ref.refType('void'), ref.refType('char'), ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_alloc'] = _library._php_stream_alloc;

_library.php_stream_encloses = [ref.refType(_library.php_stream), [ref.refType(_library.php_stream), ref.refType(_library.php_stream)]];
_library._functions['php_stream_encloses'] = _library.php_stream_encloses;

_library._php_stream_free_enclosed = ['int', [ref.refType(_library.php_stream), 'int']];
_library._functions['_php_stream_free_enclosed'] = _library._php_stream_free_enclosed;

_library.php_stream_from_persistent_id = ['int', [ref.refType('char'), ref.refType(ref.refType(_library.php_stream))]];
_library._functions['php_stream_from_persistent_id'] = _library.php_stream_from_persistent_id;

_library._php_stream_free = ['int', [ref.refType(_library.php_stream), 'int']];
_library._functions['_php_stream_free'] = _library._php_stream_free;

_library._php_stream_seek = ['int', [ref.refType(_library.php_stream), _library.off_t, 'int']];
_library._functions['_php_stream_seek'] = _library._php_stream_seek;

_library._php_stream_tell = [_library.off_t, [ref.refType(_library.php_stream)]];
_library._functions['_php_stream_tell'] = _library._php_stream_tell;

_library._php_stream_read = ['ulong', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong']];
_library._functions['_php_stream_read'] = _library._php_stream_read;

_library._php_stream_write = ['ulong', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong']];
_library._functions['_php_stream_write'] = _library._php_stream_write;

_library._php_stream_eof = ['int', [ref.refType(_library.php_stream)]];
_library._functions['_php_stream_eof'] = _library._php_stream_eof;

_library._php_stream_getc = ['int', [ref.refType(_library.php_stream)]];
_library._functions['_php_stream_getc'] = _library._php_stream_getc;

_library._php_stream_putc = ['int', [ref.refType(_library.php_stream), 'int']];
_library._functions['_php_stream_putc'] = _library._php_stream_putc;

_library._php_stream_flush = ['int', [ref.refType(_library.php_stream), 'int']];
_library._functions['_php_stream_flush'] = _library._php_stream_flush;

_library._php_stream_get_line = [ref.refType('char'), [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', ref.refType('ulong')]];
_library._functions['_php_stream_get_line'] = _library._php_stream_get_line;

_library.php_stream_get_record = [ref.refType('char'), [ref.refType(_library.php_stream), 'ulong', ref.refType('ulong'), ref.refType('char'), 'ulong']];
_library._functions['php_stream_get_record'] = _library.php_stream_get_record;

_library._php_stream_puts = ['int', [ref.refType(_library.php_stream), ref.refType('char')]];
_library._functions['_php_stream_puts'] = _library._php_stream_puts;

_library._php_stream_stat = ['int', [ref.refType(_library.php_stream), ref.refType(_library.php_stream_statbuf)]];
_library._functions['_php_stream_stat'] = _library._php_stream_stat;

_library._php_stream_stat_path = ['int', [ref.refType('char'), 'int', ref.refType(_library.php_stream_statbuf), ref.refType(_library.php_stream_context)]];
_library._functions['_php_stream_stat_path'] = _library._php_stream_stat_path;

_library._php_stream_mkdir = ['int', [ref.refType('char'), 'int', 'int', ref.refType(_library.php_stream_context)]];
_library._functions['_php_stream_mkdir'] = _library._php_stream_mkdir;

_library._php_stream_rmdir = ['int', [ref.refType('char'), 'int', ref.refType(_library.php_stream_context)]];
_library._functions['_php_stream_rmdir'] = _library._php_stream_rmdir;

_library._php_stream_opendir = [ref.refType(_library.php_stream), [ref.refType('char'), 'int', ref.refType(_library.php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_opendir'] = _library._php_stream_opendir;

_library._php_stream_readdir = [ref.refType(_library.php_stream_dirent), [ref.refType(_library.php_stream), ref.refType(_library.php_stream_dirent)]];
_library._functions['_php_stream_readdir'] = _library._php_stream_readdir;

_library.php_stream_dirent_alphasort = ['int', [ref.refType(ref.refType('char')), ref.refType(ref.refType('char'))]];
_library._functions['php_stream_dirent_alphasort'] = _library.php_stream_dirent_alphasort;

_library.php_stream_dirent_alphasortr = ['int', [ref.refType(ref.refType('char')), ref.refType(ref.refType('char'))]];
_library._functions['php_stream_dirent_alphasortr'] = _library.php_stream_dirent_alphasortr;

_library._php_stream_scandir = ['int', [ref.refType('char'), ref.refType(ref.refType(ref.refType('char'))), 'int', ref.refType(_library.php_stream_context), ffi.Function('int', [ref.refType(ref.refType('char')), ref.refType(ref.refType('char'))])]];
_library._functions['_php_stream_scandir'] = _library._php_stream_scandir;

_library._php_stream_set_option = ['int', [ref.refType(_library.php_stream), 'int', 'int', ref.refType('void')]];
_library._functions['_php_stream_set_option'] = _library._php_stream_set_option;

_library._php_stream_truncate_set_size = ['int', [ref.refType(_library.php_stream), 'ulong']];
_library._functions['_php_stream_truncate_set_size'] = _library._php_stream_truncate_set_size;

_library._php_stream_copy_to_stream = ['ulong', [ref.refType(_library.php_stream), ref.refType(_library.php_stream), 'ulong', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_copy_to_stream'] = _library._php_stream_copy_to_stream;

_library._php_stream_copy_to_stream_ex = ['int', [ref.refType(_library.php_stream), ref.refType(_library.php_stream), 'ulong', ref.refType('ulong'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_copy_to_stream_ex'] = _library._php_stream_copy_to_stream_ex;

_library._php_stream_copy_to_mem = ['ulong', [ref.refType(_library.php_stream), ref.refType(ref.refType('char')), 'ulong', 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_copy_to_mem'] = _library._php_stream_copy_to_mem;

_library._php_stream_passthru = ['ulong', [ref.refType(_library.php_stream), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_passthru'] = _library._php_stream_passthru;

_library._php_stream_cast = ['int', [ref.refType(_library.php_stream), 'int', ref.refType(ref.refType('void')), 'int']];
_library._functions['_php_stream_cast'] = _library._php_stream_cast;

_library.php_init_stream_wrappers = ['int', ['int']];
_library._functions['php_init_stream_wrappers'] = _library.php_init_stream_wrappers;

_library.php_shutdown_stream_wrappers = ['int', ['int']];
_library._functions['php_shutdown_stream_wrappers'] = _library.php_shutdown_stream_wrappers;

_library.php_shutdown_stream_hashes = ['void', []];
_library._functions['php_shutdown_stream_hashes'] = _library.php_shutdown_stream_hashes;

_library.zm_deactivate_streams = ['int', ['int', 'int']];
_library._functions['zm_deactivate_streams'] = _library.zm_deactivate_streams;

_library.php_register_url_stream_wrapper = ['int', [ref.refType('char'), ref.refType(_library.php_stream_wrapper)]];
_library._functions['php_register_url_stream_wrapper'] = _library.php_register_url_stream_wrapper;

_library.php_unregister_url_stream_wrapper = ['int', [ref.refType('char')]];
_library._functions['php_unregister_url_stream_wrapper'] = _library.php_unregister_url_stream_wrapper;

_library.php_register_url_stream_wrapper_volatile = ['int', [ref.refType('char'), ref.refType(_library.php_stream_wrapper)]];
_library._functions['php_register_url_stream_wrapper_volatile'] = _library.php_register_url_stream_wrapper_volatile;

_library.php_unregister_url_stream_wrapper_volatile = ['int', [ref.refType('char')]];
_library._functions['php_unregister_url_stream_wrapper_volatile'] = _library.php_unregister_url_stream_wrapper_volatile;

_library._php_stream_open_wrapper_ex = [ref.refType(_library.php_stream), [ref.refType('char'), ref.refType('char'), 'int', ref.refType(ref.refType('char')), ref.refType(_library.php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_open_wrapper_ex'] = _library._php_stream_open_wrapper_ex;

_library.php_stream_locate_url_wrapper = [ref.refType(_library.php_stream_wrapper), [ref.refType('char'), ref.refType(ref.refType('char')), 'int']];
_library._functions['php_stream_locate_url_wrapper'] = _library.php_stream_locate_url_wrapper;

_library.php_stream_locate_eol = [ref.refType('char'), [ref.refType(_library.php_stream), ref.refType('char'), 'ulong']];
_library._functions['php_stream_locate_eol'] = _library.php_stream_locate_eol;

_library._php_stream_make_seekable = ['int', [ref.refType(_library.php_stream), ref.refType(ref.refType(_library.php_stream)), 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_make_seekable'] = _library._php_stream_make_seekable;

_library._php_stream_get_url_stream_wrappers_hash = [ref.refType(_library.HashTable), []];
_library._functions['_php_stream_get_url_stream_wrappers_hash'] = _library._php_stream_get_url_stream_wrappers_hash;

_library.php_stream_get_url_stream_wrappers_hash_global = [ref.refType(_library.HashTable), []];
_library._functions['php_stream_get_url_stream_wrappers_hash_global'] = _library.php_stream_get_url_stream_wrappers_hash_global;

_library._php_get_stream_filters_hash = [ref.refType(_library.HashTable), []];
_library._functions['_php_get_stream_filters_hash'] = _library._php_get_stream_filters_hash;

_library.php_get_stream_filters_hash_global = [ref.refType(_library.HashTable), []];
_library._functions['php_get_stream_filters_hash_global'] = _library.php_get_stream_filters_hash_global;

function loadDependentSymbols() {
    require('./../Zend/zend.js');
    require('./../Zend/zend_API.js');
    require('./../Zend/zend_ast.js');
    require('./../Zend/zend_compile.js');
    require('./../Zend/zend_hash.js');
    require('./../Zend/zend_ini.js');
    require('./../Zend/zend_iterators.js');
    require('./../Zend/zend_modules.js');
    require('./../Zend/zend_object_handlers.js');
    require('./../Zend/zend_types.js');
    require('./streams/php_stream_context.js');
    require('./streams/php_stream_filter_api.js');
}
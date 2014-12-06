var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_file_le_stream = ['int', []];
_library._functions.push(_library.php_file_le_stream);

_library.php_file_le_pstream = ['int', []];
_library._functions.push(_library.php_file_le_pstream);

_library.php_file_le_stream_filter = ['int', []];
_library._functions.push(_library.php_file_le_stream_filter);

_library.php_stream_context = _library._php_stream_context;

_library._php_stream_statbuf = Struct({
    "sb": _library.stat
});

_library._php_stream_ops = Struct({
    "cast": ffi.Function('int', [_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', 'int', ref.refType(ref.refType('void'))]),
    "close": ffi.Function('int', [_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', 'int']),
    "flush": ffi.Function('int', [_library._php_stream ? ref.refType(_library._php_stream) : 'pointer']),
    "label": ref.refType('char'),
    "read": ffi.Function('ulong', [_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', ref.refType('char'), 'ulong']),
    "seek": ffi.Function('int', [_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', 'long', 'int', ref.refType('long')]),
    "set_option": ffi.Function('int', [_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', 'int', 'int', ref.refType('void')]),
    "stat": ffi.Function('int', [_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', _library._php_stream_statbuf ? ref.refType(_library._php_stream_statbuf) : 'pointer']),
    "write": ffi.Function('ulong', [_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', ref.refType('char'), 'ulong'])
});

_library.php_stream_ops = _library._php_stream_ops;

_library.php_stream_filter = _library._php_stream_filter;

_library.php_stream = _library._php_stream;

_library._php_stream_wrapper_ops = Struct({
    "dir_opener": ffi.Function(_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', ref.refType('char'), ref.refType('char'), 'int', ref.refType(ref.refType('char')), _library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']),
    "label": ref.refType('char'),
    "rename": ffi.Function('int', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', ref.refType('char'), ref.refType('char'), 'int', _library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer']),
    "stream_closer": ffi.Function('int', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', _library._php_stream ? ref.refType(_library._php_stream) : 'pointer']),
    "stream_metadata": ffi.Function('int', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', ref.refType('char'), 'int', ref.refType('void'), _library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer']),
    "stream_mkdir": ffi.Function('int', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', ref.refType('char'), 'int', 'int', _library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer']),
    "stream_opener": ffi.Function(_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', ref.refType('char'), ref.refType('char'), 'int', ref.refType(ref.refType('char')), _library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']),
    "stream_rmdir": ffi.Function('int', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', ref.refType('char'), 'int', _library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer']),
    "stream_stat": ffi.Function('int', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', _library._php_stream ? ref.refType(_library._php_stream) : 'pointer', _library._php_stream_statbuf ? ref.refType(_library._php_stream_statbuf) : 'pointer']),
    "unlink": ffi.Function('int', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', ref.refType('char'), 'int', _library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer']),
    "url_stat": ffi.Function('int', [_library._php_stream_wrapper ? ref.refType(_library._php_stream_wrapper) : 'pointer', ref.refType('char'), 'int', _library._php_stream_statbuf ? ref.refType(_library._php_stream_statbuf) : 'pointer', _library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer'])
});

_library.php_stream_wrapper_ops = _library._php_stream_wrapper_ops;

_library._php_stream_wrapper = Struct({
    "abstract": ref.refType('void'),
    "is_url": 'int',
    "wops": _library.php_stream_wrapper_ops ? ref.refType(_library.php_stream_wrapper_ops) : 'pointer'
});

_library.php_stream_wrapper = _library._php_stream_wrapper;

_library._php_stream = Struct({
    "__exposed": 'int',
    "abstract": ref.refType('void'),
    "chunk_size": 'ulong',
    "context": _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer',
    "enclosing_stream": _library._php_stream ? ref.refType(_library._php_stream) : 'pointer',
    "eof": 'int',
    "fclose_stdiocast": 'int',
    "fgetss_state": 'int',
    "flags": 'int',
    "in_free": 'int',
    "is_persistent": 'int',
    "mode": RefArray('char', 16),
    "open_filename": ref.refType('char'),
    "open_lineno": 'uint',
    "ops": _library.php_stream_ops ? ref.refType(_library.php_stream_ops) : 'pointer',
    "orig_path": ref.refType('char'),
    "position": _library.off_t,
    "readbuf": ref.refType('uchar'),
    "readbuflen": 'ulong',
    "readfilters": _library.php_stream_filter_chain,
    "readpos": _library.off_t,
    "rsrc_id": 'int',
    "stdiocast": _library.FILE ? ref.refType(_library.FILE) : 'pointer',
    "wrapper": _library.php_stream_wrapper ? ref.refType(_library.php_stream_wrapper) : 'pointer',
    "wrapperdata": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "wrapperthis": ref.refType('void'),
    "writefilters": _library.php_stream_filter_chain,
    "writepos": _library.off_t
});

_library._php_stream = Struct({
    "__exposed": 'int',
    "abstract": ref.refType('void'),
    "chunk_size": 'ulong',
    "context": _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer',
    "enclosing_stream": _library._php_stream ? ref.refType(_library._php_stream) : 'pointer',
    "eof": 'int',
    "fclose_stdiocast": 'int',
    "fgetss_state": 'int',
    "flags": 'int',
    "in_free": 'int',
    "is_persistent": 'int',
    "mode": RefArray('char', 16),
    "open_filename": ref.refType('char'),
    "open_lineno": 'uint',
    "ops": _library.php_stream_ops ? ref.refType(_library.php_stream_ops) : 'pointer',
    "orig_path": ref.refType('char'),
    "position": _library.off_t,
    "readbuf": ref.refType('uchar'),
    "readbuflen": 'ulong',
    "readfilters": _library.php_stream_filter_chain,
    "readpos": _library.off_t,
    "rsrc_id": 'int',
    "stdiocast": _library.FILE ? ref.refType(_library.FILE) : 'pointer',
    "wrapper": _library.php_stream_wrapper ? ref.refType(_library.php_stream_wrapper) : 'pointer',
    "wrapperdata": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "wrapperthis": ref.refType('void'),
    "writefilters": _library.php_stream_filter_chain,
    "writepos": _library.off_t
});

_library._php_stream_wrapper = Struct({
    "abstract": ref.refType('void'),
    "is_url": 'int',
    "wops": _library.php_stream_wrapper_ops ? ref.refType(_library.php_stream_wrapper_ops) : 'pointer'
});

_library.php_stream_statbuf = _library._php_stream_statbuf;

_library._php_stream_dirent = Struct({
    "d_name": RefArray('char', 4096)
});

_library.php_stream_dirent = _library._php_stream_dirent;

_library._php_stream_alloc = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [_library.php_stream_ops ? ref.refType(_library.php_stream_ops) : 'pointer', ref.refType('void'), ref.refType('char'), ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_alloc);

_library.php_stream_encloses = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.php_stream ? ref.refType(_library.php_stream) : 'pointer']];
_library._functions.push(_library.php_stream_encloses);

_library._php_stream_free_enclosed = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int']];
_library._functions.push(_library._php_stream_free_enclosed);

_library.php_stream_from_persistent_id = ['int', [ref.refType('char'), _library.php_stream ? ref.refType(_library.php_stream) : 'pointer' ? ref.refType(_library.php_stream ? ref.refType(_library.php_stream) : 'pointer') : 'pointer']];
_library._functions.push(_library.php_stream_from_persistent_id);

_library._php_stream_free = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int']];
_library._functions.push(_library._php_stream_free);

_library._php_stream_seek = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.off_t, 'int']];
_library._functions.push(_library._php_stream_seek);

_library._php_stream_tell = [_library.off_t, [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer']];
_library._functions.push(_library._php_stream_tell);

_library._php_stream_read = ['ulong', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char'), 'ulong']];
_library._functions.push(_library._php_stream_read);

_library._php_stream_write = ['ulong', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char'), 'ulong']];
_library._functions.push(_library._php_stream_write);

_library._php_stream_eof = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer']];
_library._functions.push(_library._php_stream_eof);

_library._php_stream_getc = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer']];
_library._functions.push(_library._php_stream_getc);

_library._php_stream_putc = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int']];
_library._functions.push(_library._php_stream_putc);

_library._php_stream_flush = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int']];
_library._functions.push(_library._php_stream_flush);

_library._php_stream_get_line = [ref.refType('char'), [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char'), 'ulong', ref.refType('ulong')]];
_library._functions.push(_library._php_stream_get_line);

_library.php_stream_get_record = [ref.refType('char'), [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'ulong', ref.refType('ulong'), ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_stream_get_record);

_library._php_stream_puts = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char')]];
_library._functions.push(_library._php_stream_puts);

_library._php_stream_stat = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.php_stream_statbuf ? ref.refType(_library.php_stream_statbuf) : 'pointer']];
_library._functions.push(_library._php_stream_stat);

_library._php_stream_stat_path = ['int', [ref.refType('char'), 'int', _library.php_stream_statbuf ? ref.refType(_library.php_stream_statbuf) : 'pointer', _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer']];
_library._functions.push(_library._php_stream_stat_path);

_library._php_stream_mkdir = ['int', [ref.refType('char'), 'int', 'int', _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer']];
_library._functions.push(_library._php_stream_mkdir);

_library._php_stream_rmdir = ['int', [ref.refType('char'), 'int', _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer']];
_library._functions.push(_library._php_stream_rmdir);

_library._php_stream_opendir = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [ref.refType('char'), 'int', _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_opendir);

_library._php_stream_readdir = [_library.php_stream_dirent ? ref.refType(_library.php_stream_dirent) : 'pointer', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.php_stream_dirent ? ref.refType(_library.php_stream_dirent) : 'pointer']];
_library._functions.push(_library._php_stream_readdir);

_library.php_stream_dirent_alphasort = ['int', [ref.refType(ref.refType('char')), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_stream_dirent_alphasort);

_library.php_stream_dirent_alphasortr = ['int', [ref.refType(ref.refType('char')), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_stream_dirent_alphasortr);

_library._php_stream_scandir = ['int', [ref.refType('char'), ref.refType(ref.refType(ref.refType('char'))), 'int', _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', ffi.Function('int', [ref.refType(ref.refType('char')), ref.refType(ref.refType('char'))])]];
_library._functions.push(_library._php_stream_scandir);

_library._php_stream_set_option = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int', 'int', ref.refType('void')]];
_library._functions.push(_library._php_stream_set_option);

_library._php_stream_truncate_set_size = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'ulong']];
_library._functions.push(_library._php_stream_truncate_set_size);

_library._php_stream_copy_to_stream = ['ulong', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'ulong', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_copy_to_stream);

_library._php_stream_copy_to_stream_ex = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'ulong', ref.refType('ulong'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_copy_to_stream_ex);

_library._php_stream_copy_to_mem = ['ulong', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType(ref.refType('char')), 'ulong', 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_copy_to_mem);

_library._php_stream_passthru = ['ulong', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_passthru);

_library._php_stream_cast = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int', ref.refType(ref.refType('void')), 'int']];
_library._functions.push(_library._php_stream_cast);

_library.php_init_stream_wrappers = ['int', ['int']];
_library._functions.push(_library.php_init_stream_wrappers);

_library.php_shutdown_stream_wrappers = ['int', ['int']];
_library._functions.push(_library.php_shutdown_stream_wrappers);

_library.php_shutdown_stream_hashes = ['void', []];
_library._functions.push(_library.php_shutdown_stream_hashes);

_library.zm_deactivate_streams = ['int', ['int', 'int']];
_library._functions.push(_library.zm_deactivate_streams);

_library.php_register_url_stream_wrapper = ['int', [ref.refType('char'), _library.php_stream_wrapper ? ref.refType(_library.php_stream_wrapper) : 'pointer']];
_library._functions.push(_library.php_register_url_stream_wrapper);

_library.php_unregister_url_stream_wrapper = ['int', [ref.refType('char')]];
_library._functions.push(_library.php_unregister_url_stream_wrapper);

_library.php_register_url_stream_wrapper_volatile = ['int', [ref.refType('char'), _library.php_stream_wrapper ? ref.refType(_library.php_stream_wrapper) : 'pointer']];
_library._functions.push(_library.php_register_url_stream_wrapper_volatile);

_library.php_unregister_url_stream_wrapper_volatile = ['int', [ref.refType('char')]];
_library._functions.push(_library.php_unregister_url_stream_wrapper_volatile);

_library._php_stream_open_wrapper_ex = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [ref.refType('char'), ref.refType('char'), 'int', ref.refType(ref.refType('char')), _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_open_wrapper_ex);

_library.php_stream_locate_url_wrapper = [_library.php_stream_wrapper ? ref.refType(_library.php_stream_wrapper) : 'pointer', [ref.refType('char'), ref.refType(ref.refType('char')), 'int']];
_library._functions.push(_library.php_stream_locate_url_wrapper);

_library.php_stream_locate_eol = [ref.refType('char'), [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_stream_locate_eol);

_library._php_stream_make_seekable = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.php_stream ? ref.refType(_library.php_stream) : 'pointer' ? ref.refType(_library.php_stream ? ref.refType(_library.php_stream) : 'pointer') : 'pointer', 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_make_seekable);

_library._php_stream_get_url_stream_wrappers_hash = [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', []];
_library._functions.push(_library._php_stream_get_url_stream_wrappers_hash);

_library.php_stream_get_url_stream_wrappers_hash_global = [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', []];
_library._functions.push(_library.php_stream_get_url_stream_wrappers_hash_global);

_library._php_get_stream_filters_hash = [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', []];
_library._functions.push(_library._php_get_stream_filters_hash);

_library.php_get_stream_filters_hash_global = [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', []];
_library._functions.push(_library.php_get_stream_filters_hash_global);

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
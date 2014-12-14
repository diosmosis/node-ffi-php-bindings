var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['zif_fclose'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_fclose = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_fclose'] = _library.zif_fclose;
}];

_library._preload['zif_feof'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_feof = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_feof'] = _library.zif_feof;
}];

_library._preload['zif_fread'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_fread = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_fread'] = _library.zif_fread;
}];

_library._preload['zif_fgetc'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_fgetc = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_fgetc'] = _library.zif_fgetc;
}];

_library._preload['zif_fgets'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_fgets = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_fgets'] = _library.zif_fgets;
}];

_library._preload['zif_fgetss'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_fgetss = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_fgetss'] = _library.zif_fgetss;
}];

_library._preload['zif_fwrite'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_fwrite = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_fwrite'] = _library.zif_fwrite;
}];

_library._preload['zif_fflush'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_fflush = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_fflush'] = _library.zif_fflush;
}];

_library._preload['zif_rewind'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_rewind = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_rewind'] = _library.zif_rewind;
}];

_library._preload['zif_ftell'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_ftell = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_ftell'] = _library.zif_ftell;
}];

_library._preload['zif_fseek'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_fseek = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_fseek'] = _library.zif_fseek;
}];

_library._preload['zif_fpassthru'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_fpassthru = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_fpassthru'] = _library.zif_fpassthru;
}];

_library._preload['php_le_stream_context'] = [function () {
    _library.php_le_stream_context = ['int', []];
    _library._functions['php_le_stream_context'] = _library.php_le_stream_context;
}];

_library._preload['php_set_sock_blocking'] = [function () {
    _library.php_set_sock_blocking = ['int', ['int', 'int']];
    _library._functions['php_set_sock_blocking'] = _library.php_set_sock_blocking;
}];

_library._preload['php_copy_file'] = [function () {
    _library.php_copy_file = ['int', [ref.refType('char'), ref.refType('char')]];
    _library._functions['php_copy_file'] = _library.php_copy_file;
}];

_library._preload['php_copy_file_ex'] = [function () {
    _library.php_copy_file_ex = ['int', [ref.refType('char'), ref.refType('char'), 'int']];
    _library._functions['php_copy_file_ex'] = _library.php_copy_file_ex;
}];

_library._preload['php_copy_file_ctx'] = ['php_stream_context', function () {
    _library.php_copy_file_ctx = ['int', [ref.refType('char'), ref.refType('char'), 'int', ref.refType(_library.php_stream_context)]];
    _library._functions['php_copy_file_ctx'] = _library.php_copy_file_ctx;
}];

_library._preload['php_mkdir_ex'] = [function () {
    _library.php_mkdir_ex = ['int', [ref.refType('char'), 'long', 'int']];
    _library._functions['php_mkdir_ex'] = _library.php_mkdir_ex;
}];

_library._preload['php_mkdir'] = [function () {
    _library.php_mkdir = ['int', [ref.refType('char'), 'long']];
    _library._functions['php_mkdir'] = _library.php_mkdir;
}];

_library._preload['php_fgetcsv'] = ['php_stream', 'zval', function () {
    _library.php_fgetcsv = ['void', [ref.refType(_library.php_stream), 'char', 'char', 'char', 'ulong', ref.refType('char'), ref.refType(_library.zval)]];
    _library._functions['php_fgetcsv'] = _library.php_fgetcsv;
}];

_library._preload['php_fputcsv'] = ['php_stream', 'zval', function () {
    _library.php_fputcsv = ['int', [ref.refType(_library.php_stream), ref.refType(_library.zval), 'char', 'char', 'char']];
    _library._functions['php_fputcsv'] = _library.php_fputcsv;
}];

_library._php_meta_tags_token = {
    TOK_ID: 6,
    TOK_EQUAL: 4,
    TOK_SLASH: 3,
    TOK_CLOSETAG: 2,
    TOK_OTHER: 8,
    TOK_SPACE: 5,
    TOK_OPENTAG: 1,
    TOK_STRING: 7,
    TOK_EOF: 0
};

_library._preload['php_meta_tags_token'] = [function () {
    _library.php_meta_tags_token = 'int32';
}];

_library._php_meta_tags_data = Struct({});
_library._php_meta_tags_data.size = 1;

_library._preload['_php_meta_tags_data'] = ['php_stream', function () {
    _library._php_meta_tags_data.size = 0;
    _library._php_meta_tags_data.defineProperty("stream", ref.refType(_library.php_stream));
    _library._php_meta_tags_data.defineProperty("ulc", 'int');
    _library._php_meta_tags_data.defineProperty("lc", 'int');
    _library._php_meta_tags_data.defineProperty("input_buffer", ref.refType('char'));
    _library._php_meta_tags_data.defineProperty("token_data", ref.refType('char'));
    _library._php_meta_tags_data.defineProperty("token_len", 'int');
    _library._php_meta_tags_data.defineProperty("in_meta", 'int');
}];

_library._preload['php_meta_tags_data'] = [function () {
    _library.php_meta_tags_data = _library._php_meta_tags_data;
}];

_library.php_file_globals = Struct({});
_library.php_file_globals.size = 1;

_library._preload['php_file_globals'] = ['php_stream_context', 'HashTable', 'HashTable', 'HashTable', function () {
    _library.php_file_globals.size = 0;
    _library.php_file_globals.defineProperty("pclose_ret", 'int');
    _library.php_file_globals.defineProperty("def_chunk_size", 'ulong');
    _library.php_file_globals.defineProperty("auto_detect_line_endings", 'long');
    _library.php_file_globals.defineProperty("default_socket_timeout", 'long');
    _library.php_file_globals.defineProperty("user_agent", ref.refType('char'));
    _library.php_file_globals.defineProperty("from_address", ref.refType('char'));
    _library.php_file_globals.defineProperty("user_stream_current_filename", ref.refType('char'));
    _library.php_file_globals.defineProperty("default_context", ref.refType(_library.php_stream_context));
    _library.php_file_globals.defineProperty("stream_wrappers", ref.refType(_library.HashTable));
    _library.php_file_globals.defineProperty("stream_filters", ref.refType(_library.HashTable));
    _library.php_file_globals.defineProperty("wrapper_errors", ref.refType(_library.HashTable));
    _library.php_file_globals.defineProperty("pclose_wait", 'int');
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
    require('./../../main/php_streams.js');
    require('./../../main/streams/php_stream_context.js');
    require('./../../main/streams/php_stream_filter_api.js');
}

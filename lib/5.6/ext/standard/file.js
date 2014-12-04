var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zm_startup_file = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_file);

_library.zm_shutdown_file = ['int', ['int', 'int']];
_library._functions.push(_library.zm_shutdown_file);

_library.zif_tempnam = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_tempnam);

_library.php_if_tmpfile = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_if_tmpfile);

_library.php_if_fopen = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_if_fopen);

_library.zif_fclose = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fclose);

_library.zif_popen = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_popen);

_library.zif_pclose = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_pclose);

_library.zif_feof = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_feof);

_library.zif_fread = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fread);

_library.zif_fgetc = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fgetc);

_library.zif_fgets = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fgets);

_library.zif_fscanf = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fscanf);

_library.zif_fgetss = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fgetss);

_library.zif_fgetcsv = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fgetcsv);

_library.zif_fputcsv = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fputcsv);

_library.zif_fwrite = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fwrite);

_library.zif_fflush = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fflush);

_library.zif_rewind = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_rewind);

_library.zif_ftell = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ftell);

_library.zif_fseek = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fseek);

_library.zif_mkdir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_mkdir);

_library.zif_rmdir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_rmdir);

_library.zif_fpassthru = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fpassthru);

_library.zif_readfile = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_readfile);

_library.zif_umask = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_umask);

_library.zif_rename = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_rename);

_library.zif_unlink = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_unlink);

_library.zif_copy = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_copy);

_library.zif_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_file);

_library.zif_file_get_contents = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_file_get_contents);

_library.zif_file_put_contents = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_file_put_contents);

_library.zif_get_meta_tags = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_get_meta_tags);

_library.zif_flock = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_flock);

_library.zif_fd_set = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fd_set);

_library.zif_fd_isset = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fd_isset);

_library.zif_realpath = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_realpath);

_library.zif_fnmatch = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_fnmatch);

_library.php_if_ftruncate = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_if_ftruncate);

_library.php_if_fstat = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_if_fstat);

_library.zif_sys_get_temp_dir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_sys_get_temp_dir);

_library.zm_startup_user_streams = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_user_streams);

_library.php_le_stream_context = ['int', []];
_library._functions.push(_library.php_le_stream_context);

_library.php_set_sock_blocking = ['int', ['int', 'int']];
_library._functions.push(_library.php_set_sock_blocking);

_library.php_copy_file = ['int', [ref.refType('char'), ref.refType('char')]];
_library._functions.push(_library.php_copy_file);

_library.php_copy_file_ex = ['int', [ref.refType('char'), ref.refType('char'), 'int']];
_library._functions.push(_library.php_copy_file_ex);

_library.php_copy_file_ctx = ['int', [ref.refType('char'), ref.refType('char'), 'int', ref.refType(_library.php_stream_context)]];
_library._functions.push(_library.php_copy_file_ctx);

_library.php_mkdir_ex = ['int', [ref.refType('char'), 'long', 'int']];
_library._functions.push(_library.php_mkdir_ex);

_library.php_mkdir = ['int', [ref.refType('char'), 'long']];
_library._functions.push(_library.php_mkdir);

_library.php_fgetcsv = ['void', [ref.refType(_library.php_stream), 'char', 'char', 'char', 'ulong', ref.refType('char'), ref.refType(_library.zval)]];
_library._functions.push(_library.php_fgetcsv);

_library.php_fputcsv = ['int', [ref.refType(_library.php_stream), ref.refType(_library.zval), 'char', 'char', 'char']];
_library._functions.push(_library.php_fputcsv);

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

_library.php_meta_tags_token = 'int32';

_library._php_meta_tags_data = Struct({
    "in_meta": 'int',
    "input_buffer": ref.refType('char'),
    "lc": 'int',
    "stream": ref.refType(_library.php_stream),
    "token_data": ref.refType('char'),
    "token_len": 'int',
    "ulc": 'int'
});

_library.php_meta_tags_data = _library._php_meta_tags_data;

_library.php_next_meta_token = [_library.php_meta_tags_token, [ref.refType(_library.php_meta_tags_data)]];
_library._functions.push(_library.php_next_meta_token);

_library.php_file_globals = Struct({
    "auto_detect_line_endings": 'long',
    "def_chunk_size": 'ulong',
    "default_context": ref.refType(_library.php_stream_context),
    "default_socket_timeout": 'long',
    "from_address": ref.refType('char'),
    "pclose_ret": 'int',
    "pclose_wait": 'int',
    "stream_filters": ref.refType(_library.HashTable),
    "stream_wrappers": ref.refType(_library.HashTable),
    "user_agent": ref.refType('char'),
    "user_stream_current_filename": ref.refType('char'),
    "wrapper_errors": ref.refType(_library.HashTable)
});


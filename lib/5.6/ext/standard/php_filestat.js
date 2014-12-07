var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zm_activate_filestat = ['int', ['int', 'int']];
_library._functions['zm_activate_filestat'] = _library.zm_activate_filestat;

_library.zm_deactivate_filestat = ['int', ['int', 'int']];
_library._functions['zm_deactivate_filestat'] = _library.zm_deactivate_filestat;

_library.zif_realpath_cache_size = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_realpath_cache_size'] = _library.zif_realpath_cache_size;

_library.zif_realpath_cache_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_realpath_cache_get'] = _library.zif_realpath_cache_get;

_library.zif_clearstatcache = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_clearstatcache'] = _library.zif_clearstatcache;

_library.zif_fileatime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_fileatime'] = _library.zif_fileatime;

_library.zif_filectime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_filectime'] = _library.zif_filectime;

_library.zif_filegroup = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_filegroup'] = _library.zif_filegroup;

_library.zif_fileinode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_fileinode'] = _library.zif_fileinode;

_library.zif_filemtime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_filemtime'] = _library.zif_filemtime;

_library.zif_fileowner = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_fileowner'] = _library.zif_fileowner;

_library.zif_fileperms = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_fileperms'] = _library.zif_fileperms;

_library.zif_filesize = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_filesize'] = _library.zif_filesize;

_library.zif_filetype = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_filetype'] = _library.zif_filetype;

_library.zif_is_writable = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_is_writable'] = _library.zif_is_writable;

_library.zif_is_readable = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_is_readable'] = _library.zif_is_readable;

_library.zif_is_executable = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_is_executable'] = _library.zif_is_executable;

_library.zif_is_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_is_file'] = _library.zif_is_file;

_library.zif_is_dir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_is_dir'] = _library.zif_is_dir;

_library.zif_is_link = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_is_link'] = _library.zif_is_link;

_library.zif_file_exists = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_file_exists'] = _library.zif_file_exists;

_library.php_if_stat = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['php_if_stat'] = _library.php_if_stat;

_library.php_if_lstat = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['php_if_lstat'] = _library.php_if_lstat;

_library.zif_disk_total_space = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_disk_total_space'] = _library.zif_disk_total_space;

_library.zif_disk_free_space = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_disk_free_space'] = _library.zif_disk_free_space;

_library.zif_chown = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_chown'] = _library.zif_chown;

_library.zif_chgrp = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_chgrp'] = _library.zif_chgrp;

_library.zif_lchown = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_lchown'] = _library.zif_lchown;

_library.zif_lchgrp = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_lchgrp'] = _library.zif_lchgrp;

_library.zif_chmod = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_chmod'] = _library.zif_chmod;

_library.zif_touch = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_touch'] = _library.zif_touch;

_library.php_clear_stat_cache = ['void', ['uchar', ref.refType('char'), 'int']];
_library._functions['php_clear_stat_cache'] = _library.php_clear_stat_cache;

_library.php_stat = ['void', [ref.refType('char'), 'int', 'int', ref.refType(_library.zval)]];
_library._functions['php_stat'] = _library.php_stat;


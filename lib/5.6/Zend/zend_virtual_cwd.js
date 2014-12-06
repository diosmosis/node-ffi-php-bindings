var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._cwd_state = Struct({
    "cwd": 'char' ? ref.refType('char') : 'pointer',
    "cwd_length": 'int'
});

_library.cwd_state = _library._cwd_state;

_library.verify_path_func = ffi.Function('int', [ref.refType(_library._cwd_state)]);

_library.virtual_cwd_startup = ['void', []];
_library._functions.push(_library.virtual_cwd_startup);

_library.virtual_cwd_shutdown = ['void', []];
_library._functions.push(_library.virtual_cwd_shutdown);

_library.virtual_cwd_activate = ['int', []];
_library._functions.push(_library.virtual_cwd_activate);

_library.virtual_cwd_deactivate = ['int', []];
_library._functions.push(_library.virtual_cwd_deactivate);

_library.virtual_getcwd_ex = ['char' ? ref.refType('char') : 'pointer', ['ulong' ? ref.refType('ulong') : 'pointer']];
_library._functions.push(_library.virtual_getcwd_ex);

_library.virtual_getcwd = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'ulong']];
_library._functions.push(_library.virtual_getcwd);

_library.virtual_chdir = ['int', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.virtual_chdir);

_library.virtual_chdir_file = ['int', ['char' ? ref.refType('char') : 'pointer', ffi.Function('int', ['char' ? ref.refType('char') : 'pointer'])]];
_library._functions.push(_library.virtual_chdir_file);

_library.virtual_filepath = ['int', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.virtual_filepath);

_library.virtual_filepath_ex = ['int', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', _library.verify_path_func]];
_library._functions.push(_library.virtual_filepath_ex);

_library.virtual_realpath = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.virtual_realpath);

_library.virtual_fopen = [ref.refType(_library.FILE), ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.virtual_fopen);

_library.virtual_creat = ['int', ['char' ? ref.refType('char') : 'pointer', _library.mode_t]];
_library._functions.push(_library.virtual_creat);

_library.virtual_rename = ['int', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.virtual_rename);

_library.virtual_stat = ['int', ['char' ? ref.refType('char') : 'pointer', ref.refType(_library.stat)]];
_library._functions.push(_library.virtual_stat);

_library.virtual_lstat = ['int', ['char' ? ref.refType('char') : 'pointer', ref.refType(_library.stat)]];
_library._functions.push(_library.virtual_lstat);

_library.virtual_unlink = ['int', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.virtual_unlink);

_library.virtual_mkdir = ['int', ['char' ? ref.refType('char') : 'pointer', _library.mode_t]];
_library._functions.push(_library.virtual_mkdir);

_library.virtual_rmdir = ['int', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.virtual_rmdir);

_library.virtual_opendir = [ref.refType(_library.DIR), ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.virtual_opendir);

_library.virtual_popen = [ref.refType(_library.FILE), ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.virtual_popen);

_library.virtual_access = ['int', ['char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.virtual_access);

_library.virtual_utime = ['int', ['char' ? ref.refType('char') : 'pointer', ref.refType(_library.utimbuf)]];
_library._functions.push(_library.virtual_utime);

_library.virtual_chmod = ['int', ['char' ? ref.refType('char') : 'pointer', _library.mode_t]];
_library._functions.push(_library.virtual_chmod);

_library.virtual_chown = ['int', ['char' ? ref.refType('char') : 'pointer', _library.uid_t, _library.gid_t, 'int']];
_library._functions.push(_library.virtual_chown);

_library.virtual_file_ex = ['int', [ref.refType(_library.cwd_state), 'char' ? ref.refType('char') : 'pointer', _library.verify_path_func, 'int']];
_library._functions.push(_library.virtual_file_ex);

_library.tsrm_realpath = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.tsrm_realpath);

_library._realpath_cache_bucket = Struct({
    "expires": _library.time_t,
    "is_dir": 'int',
    "key": 'ulong',
    "next": ref.refType(_library._realpath_cache_bucket),
    "path": 'char' ? ref.refType('char') : 'pointer',
    "path_len": 'int',
    "realpath": 'char' ? ref.refType('char') : 'pointer',
    "realpath_len": 'int'
});

_library.realpath_cache_bucket = _library._realpath_cache_bucket;

_library._virtual_cwd_globals = Struct({
    "cwd": _library.cwd_state,
    "realpath_cache": RefArray(ref.refType(_library.realpath_cache_bucket), 1024),
    "realpath_cache_size": 'long',
    "realpath_cache_size_limit": 'long',
    "realpath_cache_ttl": 'long'
});

_library.virtual_cwd_globals = _library._virtual_cwd_globals;

_library.realpath_cache_clean = ['void', []];
_library._functions.push(_library.realpath_cache_clean);

_library.realpath_cache_del = ['void', ['char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.realpath_cache_del);

_library.realpath_cache_lookup = [ref.refType(_library.realpath_cache_bucket), ['char' ? ref.refType('char') : 'pointer', 'int', _library.time_t]];
_library._functions.push(_library.realpath_cache_lookup);

_library.realpath_cache_size = ['int', []];
_library._functions.push(_library.realpath_cache_size);

_library.realpath_cache_max_buckets = ['int', []];
_library._functions.push(_library.realpath_cache_max_buckets);

_library.realpath_cache_get_buckets = [ref.refType(_library.realpath_cache_bucket) ? ref.refType(ref.refType(_library.realpath_cache_bucket)) : 'pointer', []];
_library._functions.push(_library.realpath_cache_get_buckets);

function loadDependentSymbols() {
}
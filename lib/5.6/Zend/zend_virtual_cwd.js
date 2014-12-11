var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._cwd_state = Struct({});
_library._cwd_state.size = 1;

_library._preload['_cwd_state'] = [function () {
    _library._cwd_state.size = 0;
    _library._cwd_state.defineProperty("cwd", ref.refType('char'));
    _library._cwd_state.defineProperty("cwd_length", 'int');
}];

_library._preload['cwd_state'] = [function () {
    _library.cwd_state = _library._cwd_state;
}];

_library._preload['verify_path_func'] = ['int (const cwd_state *)', function () {
    _library.verify_path_func = ffi.Function('int', [ref.refType(_library._cwd_state)]);
}];

_library._preload['virtual_cwd_startup'] = [function () {
    _library.virtual_cwd_startup = ['void', []];
    _library._functions['virtual_cwd_startup'] = _library.virtual_cwd_startup;
}];

_library._preload['virtual_cwd_shutdown'] = [function () {
    _library.virtual_cwd_shutdown = ['void', []];
    _library._functions['virtual_cwd_shutdown'] = _library.virtual_cwd_shutdown;
}];

_library._preload['virtual_cwd_activate'] = [function () {
    _library.virtual_cwd_activate = ['int', []];
    _library._functions['virtual_cwd_activate'] = _library.virtual_cwd_activate;
}];

_library._preload['virtual_cwd_deactivate'] = [function () {
    _library.virtual_cwd_deactivate = ['int', []];
    _library._functions['virtual_cwd_deactivate'] = _library.virtual_cwd_deactivate;
}];

_library._preload['virtual_getcwd_ex'] = [function () {
    _library.virtual_getcwd_ex = [ref.refType('char'), [ref.refType('ulong')]];
    _library._functions['virtual_getcwd_ex'] = _library.virtual_getcwd_ex;
}];

_library._preload['virtual_getcwd'] = [function () {
    _library.virtual_getcwd = [ref.refType('char'), [ref.refType('char'), 'ulong']];
    _library._functions['virtual_getcwd'] = _library.virtual_getcwd;
}];

_library._preload['virtual_chdir'] = [function () {
    _library.virtual_chdir = ['int', [ref.refType('char')]];
    _library._functions['virtual_chdir'] = _library.virtual_chdir;
}];

_library._preload['virtual_chdir_file'] = ['int (const char *)', function () {
    _library.virtual_chdir_file = ['int', [ref.refType('char'), ffi.Function('int', [ref.refType('char')])]];
    _library._functions['virtual_chdir_file'] = _library.virtual_chdir_file;
}];

_library._preload['virtual_filepath'] = ['pointer', function () {
    _library.virtual_filepath = ['int', [ref.refType('char'), ref.refType(ref.refType('char'))]];
    _library._functions['virtual_filepath'] = _library.virtual_filepath;
}];

_library._preload['virtual_filepath_ex'] = ['pointer', 'verify_path_func', function () {
    _library.virtual_filepath_ex = ['int', [ref.refType('char'), ref.refType(ref.refType('char')), _library.verify_path_func]];
    _library._functions['virtual_filepath_ex'] = _library.virtual_filepath_ex;
}];

_library._preload['virtual_realpath'] = [function () {
    _library.virtual_realpath = [ref.refType('char'), [ref.refType('char'), ref.refType('char')]];
    _library._functions['virtual_realpath'] = _library.virtual_realpath;
}];

_library._preload['virtual_fopen'] = ['FILE', function () {
    _library.virtual_fopen = [ref.refType(_library.FILE), [ref.refType('char'), ref.refType('char')]];
    _library._functions['virtual_fopen'] = _library.virtual_fopen;
}];

_library._preload['virtual_creat'] = ['mode_t', function () {
    _library.virtual_creat = ['int', [ref.refType('char'), _library.mode_t]];
    _library._functions['virtual_creat'] = _library.virtual_creat;
}];

_library._preload['virtual_rename'] = [function () {
    _library.virtual_rename = ['int', [ref.refType('char'), ref.refType('char')]];
    _library._functions['virtual_rename'] = _library.virtual_rename;
}];

_library._preload['virtual_stat'] = ['stat', function () {
    _library.virtual_stat = ['int', [ref.refType('char'), ref.refType(_library.stat)]];
    _library._functions['virtual_stat'] = _library.virtual_stat;
}];

_library._preload['virtual_lstat'] = ['stat', function () {
    _library.virtual_lstat = ['int', [ref.refType('char'), ref.refType(_library.stat)]];
    _library._functions['virtual_lstat'] = _library.virtual_lstat;
}];

_library._preload['virtual_unlink'] = [function () {
    _library.virtual_unlink = ['int', [ref.refType('char')]];
    _library._functions['virtual_unlink'] = _library.virtual_unlink;
}];

_library._preload['virtual_mkdir'] = ['mode_t', function () {
    _library.virtual_mkdir = ['int', [ref.refType('char'), _library.mode_t]];
    _library._functions['virtual_mkdir'] = _library.virtual_mkdir;
}];

_library._preload['virtual_rmdir'] = [function () {
    _library.virtual_rmdir = ['int', [ref.refType('char')]];
    _library._functions['virtual_rmdir'] = _library.virtual_rmdir;
}];

_library._preload['virtual_opendir'] = ['DIR', function () {
    _library.virtual_opendir = [ref.refType(_library.DIR), [ref.refType('char')]];
    _library._functions['virtual_opendir'] = _library.virtual_opendir;
}];

_library._preload['virtual_popen'] = ['FILE', function () {
    _library.virtual_popen = [ref.refType(_library.FILE), [ref.refType('char'), ref.refType('char')]];
    _library._functions['virtual_popen'] = _library.virtual_popen;
}];

_library._preload['virtual_access'] = [function () {
    _library.virtual_access = ['int', [ref.refType('char'), 'int']];
    _library._functions['virtual_access'] = _library.virtual_access;
}];

_library._preload['virtual_utime'] = ['utimbuf', function () {
    _library.virtual_utime = ['int', [ref.refType('char'), ref.refType(_library.utimbuf)]];
    _library._functions['virtual_utime'] = _library.virtual_utime;
}];

_library._preload['virtual_chmod'] = ['mode_t', function () {
    _library.virtual_chmod = ['int', [ref.refType('char'), _library.mode_t]];
    _library._functions['virtual_chmod'] = _library.virtual_chmod;
}];

_library._preload['virtual_chown'] = ['uid_t', 'gid_t', function () {
    _library.virtual_chown = ['int', [ref.refType('char'), _library.uid_t, _library.gid_t, 'int']];
    _library._functions['virtual_chown'] = _library.virtual_chown;
}];

_library._preload['virtual_file_ex'] = ['cwd_state', 'verify_path_func', function () {
    _library.virtual_file_ex = ['int', [ref.refType(_library.cwd_state), ref.refType('char'), _library.verify_path_func, 'int']];
    _library._functions['virtual_file_ex'] = _library.virtual_file_ex;
}];

_library._preload['tsrm_realpath'] = [function () {
    _library.tsrm_realpath = [ref.refType('char'), [ref.refType('char'), ref.refType('char')]];
    _library._functions['tsrm_realpath'] = _library.tsrm_realpath;
}];

_library._realpath_cache_bucket = Struct({});
_library._realpath_cache_bucket.size = 1;

_library._preload['_realpath_cache_bucket'] = ['time_t', '_realpath_cache_bucket', function () {
    _library._realpath_cache_bucket.size = 0;
    _library._realpath_cache_bucket.defineProperty("expires", _library.time_t);
    _library._realpath_cache_bucket.defineProperty("is_dir", 'int');
    _library._realpath_cache_bucket.defineProperty("key", 'ulong');
    _library._realpath_cache_bucket.defineProperty("next", ref.refType(_library._realpath_cache_bucket));
    _library._realpath_cache_bucket.defineProperty("path", ref.refType('char'));
    _library._realpath_cache_bucket.defineProperty("path_len", 'int');
    _library._realpath_cache_bucket.defineProperty("realpath", ref.refType('char'));
    _library._realpath_cache_bucket.defineProperty("realpath_len", 'int');
}];

_library._preload['realpath_cache_bucket'] = [function () {
    _library.realpath_cache_bucket = _library._realpath_cache_bucket;
}];

_library._virtual_cwd_globals = Struct({});
_library._virtual_cwd_globals.size = 1;

_library._preload['_virtual_cwd_globals'] = ['cwd_state', '_cwd_state', 'pointer', function () {
    _library._virtual_cwd_globals.size = 0;
    _library._virtual_cwd_globals.defineProperty("cwd", _library.cwd_state);
    _library._virtual_cwd_globals.defineProperty("realpath_cache", _library.__RefArray(ref.refType(_library.realpath_cache_bucket), 1024));
    _library._virtual_cwd_globals.defineProperty("realpath_cache_size", 'long');
    _library._virtual_cwd_globals.defineProperty("realpath_cache_size_limit", 'long');
    _library._virtual_cwd_globals.defineProperty("realpath_cache_ttl", 'long');
}];

_library._preload['virtual_cwd_globals'] = [function () {
    _library.virtual_cwd_globals = _library._virtual_cwd_globals;
}];

_library._preload['realpath_cache_clean'] = [function () {
    _library.realpath_cache_clean = ['void', []];
    _library._functions['realpath_cache_clean'] = _library.realpath_cache_clean;
}];

_library._preload['realpath_cache_del'] = [function () {
    _library.realpath_cache_del = ['void', [ref.refType('char'), 'int']];
    _library._functions['realpath_cache_del'] = _library.realpath_cache_del;
}];

_library._preload['realpath_cache_lookup'] = ['realpath_cache_bucket', 'time_t', function () {
    _library.realpath_cache_lookup = [ref.refType(_library.realpath_cache_bucket), [ref.refType('char'), 'int', _library.time_t]];
    _library._functions['realpath_cache_lookup'] = _library.realpath_cache_lookup;
}];

_library._preload['realpath_cache_size'] = [function () {
    _library.realpath_cache_size = ['int', []];
    _library._functions['realpath_cache_size'] = _library.realpath_cache_size;
}];

_library._preload['realpath_cache_max_buckets'] = [function () {
    _library.realpath_cache_max_buckets = ['int', []];
    _library._functions['realpath_cache_max_buckets'] = _library.realpath_cache_max_buckets;
}];

_library._preload['realpath_cache_get_buckets'] = ['pointer', function () {
    _library.realpath_cache_get_buckets = [ref.refType(ref.refType(_library.realpath_cache_bucket)), []];
    _library._functions['realpath_cache_get_buckets'] = _library.realpath_cache_get_buckets;
}];

function loadDependentSymbols() {
}

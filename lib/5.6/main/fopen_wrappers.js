var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.php_fopen_primary_script = ['int', [ref.refType(_library.zend_file_handle)]];
_library._functions['php_fopen_primary_script'] = _library.php_fopen_primary_script;

_library.expand_filepath = [ref.refType('char'), [ref.refType('char'), ref.refType('char')]];
_library._functions['expand_filepath'] = _library.expand_filepath;

_library.expand_filepath_ex = [ref.refType('char'), [ref.refType('char'), ref.refType('char'), ref.refType('char'), 'ulong']];
_library._functions['expand_filepath_ex'] = _library.expand_filepath_ex;

_library.expand_filepath_with_mode = [ref.refType('char'), [ref.refType('char'), ref.refType('char'), ref.refType('char'), 'ulong', 'int']];
_library._functions['expand_filepath_with_mode'] = _library.expand_filepath_with_mode;

_library.php_check_open_basedir = ['int', [ref.refType('char')]];
_library._functions['php_check_open_basedir'] = _library.php_check_open_basedir;

_library.php_check_open_basedir_ex = ['int', [ref.refType('char'), 'int']];
_library._functions['php_check_open_basedir_ex'] = _library.php_check_open_basedir_ex;

_library.php_check_specific_open_basedir = ['int', [ref.refType('char'), ref.refType('char')]];
_library._functions['php_check_specific_open_basedir'] = _library.php_check_specific_open_basedir;

_library.php_check_safe_mode_include_dir = ['int', [ref.refType('char')]];
_library._functions['php_check_safe_mode_include_dir'] = _library.php_check_safe_mode_include_dir;

_library.php_resolve_path = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('char')]];
_library._functions['php_resolve_path'] = _library.php_resolve_path;

_library.php_fopen_with_path = [ref.refType(_library.FILE), [ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char'))]];
_library._functions['php_fopen_with_path'] = _library.php_fopen_with_path;

_library.php_strip_url_passwd = [ref.refType('char'), [ref.refType('char')]];
_library._functions['php_strip_url_passwd'] = _library.php_strip_url_passwd;

_library.OnUpdateBaseDir = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
_library._functions['OnUpdateBaseDir'] = _library.OnUpdateBaseDir;


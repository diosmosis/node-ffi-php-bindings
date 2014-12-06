var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_fopen_primary_script = ['int', [ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.php_fopen_primary_script);

_library.expand_filepath = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.expand_filepath);

_library.expand_filepath_ex = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'ulong']];
_library._functions.push(_library.expand_filepath_ex);

_library.expand_filepath_with_mode = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'ulong', 'int']];
_library._functions.push(_library.expand_filepath_with_mode);

_library.php_check_open_basedir = ['int', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_check_open_basedir);

_library.php_check_open_basedir_ex = ['int', ['char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.php_check_open_basedir_ex);

_library.php_check_specific_open_basedir = ['int', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_check_specific_open_basedir);

_library.php_check_safe_mode_include_dir = ['int', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_check_safe_mode_include_dir);

_library.php_resolve_path = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_resolve_path);

_library.php_fopen_with_path = [ref.refType(_library.FILE), ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.php_fopen_with_path);

_library.php_strip_url_passwd = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_strip_url_passwd);

_library.OnUpdateBaseDir = ['int', [ref.refType(_library.zend_ini_entry), 'char' ? ref.refType('char') : 'pointer', 'uint', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'int']];
_library._functions.push(_library.OnUpdateBaseDir);

function loadDependentSymbols() {
    require('./../Zend/zend_globals.js');
    require('./../Zend/zend_ini.js');
    require('./../Zend/zend_stream.js');
}
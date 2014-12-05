var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zif_system = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_system);

_library.zif_exec = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_exec);

_library.zif_escapeshellcmd = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_escapeshellcmd);

_library.zif_escapeshellarg = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_escapeshellarg);

_library.zif_passthru = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_passthru);

_library.zif_shell_exec = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_shell_exec);

_library.zif_proc_open = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_proc_open);

_library.zif_proc_get_status = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_proc_get_status);

_library.zif_proc_close = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_proc_close);

_library.zif_proc_terminate = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_proc_terminate);

_library.zif_proc_nice = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_proc_nice);

_library.zm_startup_proc_open = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_proc_open);

_library.php_escape_shell_cmd = [ref.refType('char'), [ref.refType('char')]];
_library._functions.push(_library.php_escape_shell_cmd);

_library.php_escape_shell_arg = [ref.refType('char'), [ref.refType('char')]];
_library._functions.push(_library.php_escape_shell_arg);

_library.php_exec = ['int', ['int', ref.refType('char'), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.php_exec);

var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.boolean_e = 'int32';

_library.ap_php_vslprintf = ['int', ['char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.ap_php_vslprintf);

_library.ap_php_vsnprintf = ['int', ['char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.ap_php_vsnprintf);

_library.ap_php_vasprintf = ['int', ['char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.ap_php_vasprintf);

_library.php_gcvt = ['char' ? ref.refType('char') : 'pointer', ['double', 'int', 'char', 'char', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_gcvt);

_library.php_conv_fp = ['char' ? ref.refType('char') : 'pointer', ['char', 'double', _library.boolean_e, 'int', 'char', 'int' ? ref.refType('int') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_conv_fp);

_library.length_modifier_e = 'int32';

_library.ap_php_conv_10 = ['char' ? ref.refType('char') : 'pointer', ['longlong', 'int', 'int' ? ref.refType('int') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.ap_php_conv_10);

_library.ap_php_conv_p2 = ['char' ? ref.refType('char') : 'pointer', ['ulonglong', 'int', 'char', 'char' ? ref.refType('char') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.ap_php_conv_p2);

function loadDependentSymbols() {
}
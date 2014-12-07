var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.boolean_e = 'int32';

_library.ap_php_vslprintf = ['int', [ref.refType('char'), 'ulong', ref.refType('char'), ref.refType('void')]];
_library._functions['ap_php_vslprintf'] = _library.ap_php_vslprintf;

_library.ap_php_vsnprintf = ['int', [ref.refType('char'), 'ulong', ref.refType('char'), ref.refType('void')]];
_library._functions['ap_php_vsnprintf'] = _library.ap_php_vsnprintf;

_library.ap_php_vasprintf = ['int', [ref.refType(ref.refType('char')), ref.refType('char'), ref.refType('void')]];
_library._functions['ap_php_vasprintf'] = _library.ap_php_vasprintf;

_library.php_gcvt = [ref.refType('char'), ['double', 'int', 'char', 'char', ref.refType('char')]];
_library._functions['php_gcvt'] = _library.php_gcvt;

require('./snprintf.js');
_library.php_conv_fp = [ref.refType('char'), ['char', 'double', _library.boolean_e, 'int', 'char', ref.refType('int'), ref.refType('char'), ref.refType('int')]];
_library._functions['php_conv_fp'] = _library.php_conv_fp;

_library.length_modifier_e = 'int32';

_library.ap_php_conv_10 = [ref.refType('char'), ['longlong', 'int', ref.refType('int'), ref.refType('char'), ref.refType('int')]];
_library._functions['ap_php_conv_10'] = _library.ap_php_conv_10;

_library.ap_php_conv_p2 = [ref.refType('char'), ['ulonglong', 'int', 'char', ref.refType('char'), ref.refType('int')]];
_library._functions['ap_php_conv_p2'] = _library.ap_php_conv_p2;


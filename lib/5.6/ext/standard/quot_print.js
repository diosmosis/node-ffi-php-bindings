var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_quot_print_decode = [ref.refType('uchar'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int']];
_library._functions['php_quot_print_decode'] = _library.php_quot_print_decode;

_library.php_quot_print_encode = [ref.refType('uchar'), [ref.refType('uchar'), 'ulong', ref.refType('ulong')]];
_library._functions['php_quot_print_encode'] = _library.php_quot_print_encode;

_library.zif_quoted_printable_decode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_quoted_printable_decode'] = _library.zif_quoted_printable_decode;

_library.zif_quoted_printable_encode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_quoted_printable_encode'] = _library.zif_quoted_printable_encode;


var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zif_base64_decode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_base64_decode);

_library.zif_base64_encode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_base64_encode);

_library.php_base64_encode = [ref.refType('uchar'), [ref.refType('uchar'), 'int', ref.refType('int')]];
_library._functions.push(_library.php_base64_encode);

_library.php_base64_decode_ex = [ref.refType('uchar'), [ref.refType('uchar'), 'int', ref.refType('int'), 'uchar']];
_library._functions.push(_library.php_base64_decode_ex);

_library.php_base64_decode = [ref.refType('uchar'), [ref.refType('uchar'), 'int', ref.refType('int')]];
_library._functions.push(_library.php_base64_decode);

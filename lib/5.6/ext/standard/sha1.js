var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.PHP_SHA1_CTX = Struct({});
_library.PHP_SHA1_CTX.size = 1;

_library._preload.push(function () {
    _library.PHP_SHA1_CTX.size = 0;
    _library.PHP_SHA1_CTX.defineProperty("buffer", RefArray('uchar', 64));
    _library.PHP_SHA1_CTX.defineProperty("count", RefArray('uint', 2));
    _library.PHP_SHA1_CTX.defineProperty("state", RefArray('uint', 5));
});

_library.PHP_SHA1Init = ['void', [ref.refType(_library.PHP_SHA1_CTX)]];
_library._functions['PHP_SHA1Init'] = _library.PHP_SHA1Init;

_library.PHP_SHA1Update = ['void', [ref.refType(_library.PHP_SHA1_CTX), ref.refType('uchar'), 'uint']];
_library._functions['PHP_SHA1Update'] = _library.PHP_SHA1Update;

_library.PHP_SHA1Final = ['void', [ref.refType('uchar'), ref.refType(_library.PHP_SHA1_CTX)]];
_library._functions['PHP_SHA1Final'] = _library.PHP_SHA1Final;

_library.make_sha1_digest = ['void', [ref.refType('char'), ref.refType('uchar')]];
_library._functions['make_sha1_digest'] = _library.make_sha1_digest;

require('./zend_types.js');
_library.zif_sha1 = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_sha1'] = _library.zif_sha1;

_library.zif_sha1_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_sha1_file'] = _library.zif_sha1_file;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['make_digest'] = [function () {
    _library.make_digest = ['void', [ref.refType('char'), ref.refType('uchar')]];
    _library._functions['make_digest'] = _library.make_digest;
}];

_library._preload['make_digest_ex'] = [function () {
    _library.make_digest_ex = ['void', [ref.refType('char'), ref.refType('uchar'), 'int']];
    _library._functions['make_digest_ex'] = _library.make_digest_ex;
}];

_library.PHP_MD5_CTX = Struct({});
_library.PHP_MD5_CTX.size = 1;

_library._preload['PHP_MD5_CTX'] = [function () {
    _library.PHP_MD5_CTX.size = 0;
    _library.PHP_MD5_CTX.defineProperty("a", 'uint');
    _library.PHP_MD5_CTX.defineProperty("b", 'uint');
    _library.PHP_MD5_CTX.defineProperty("block", _library.__RefArray('uint', 16));
    _library.PHP_MD5_CTX.defineProperty("buffer", _library.__RefArray('uchar', 64));
    _library.PHP_MD5_CTX.defineProperty("c", 'uint');
    _library.PHP_MD5_CTX.defineProperty("d", 'uint');
    _library.PHP_MD5_CTX.defineProperty("hi", 'uint');
    _library.PHP_MD5_CTX.defineProperty("lo", 'uint');
}];

_library._preload['PHP_MD5Init'] = ['PHP_MD5_CTX', function () {
    _library.PHP_MD5Init = ['void', [ref.refType(_library.PHP_MD5_CTX)]];
    _library._functions['PHP_MD5Init'] = _library.PHP_MD5Init;
}];

_library._preload['PHP_MD5Update'] = ['PHP_MD5_CTX', function () {
    _library.PHP_MD5Update = ['void', [ref.refType(_library.PHP_MD5_CTX), ref.refType('void'), 'ulong']];
    _library._functions['PHP_MD5Update'] = _library.PHP_MD5Update;
}];

_library._preload['PHP_MD5Final'] = ['PHP_MD5_CTX', function () {
    _library.PHP_MD5Final = ['void', [ref.refType('uchar'), ref.refType(_library.PHP_MD5_CTX)]];
    _library._functions['PHP_MD5Final'] = _library.PHP_MD5Final;
}];

function loadDependentSymbols() {
}

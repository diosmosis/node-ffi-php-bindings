var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.PHP_SHA1_CTX = Struct({});
_library.PHP_SHA1_CTX.size = 1;

_library._preload['PHP_SHA1_CTX'] = [function () {
    _library.PHP_SHA1_CTX.size = 0;
    _library.PHP_SHA1_CTX.defineProperty("state", _library.__RefArray('uint', 5));
    _library.PHP_SHA1_CTX.defineProperty("count", _library.__RefArray('uint', 2));
    _library.PHP_SHA1_CTX.defineProperty("buffer", _library.__RefArray('uchar', 64));
}];

_library._preload['PHP_SHA1Init'] = ['PHP_SHA1_CTX', function () {
    _library.PHP_SHA1Init = ['void', [ref.refType(_library.PHP_SHA1_CTX)]];
    _library._functions['PHP_SHA1Init'] = _library.PHP_SHA1Init;
}];

_library._preload['PHP_SHA1Update'] = ['PHP_SHA1_CTX', function () {
    _library.PHP_SHA1Update = ['void', [ref.refType(_library.PHP_SHA1_CTX), ref.refType('uchar'), 'uint']];
    _library._functions['PHP_SHA1Update'] = _library.PHP_SHA1Update;
}];

_library._preload['PHP_SHA1Final'] = ['PHP_SHA1_CTX', function () {
    _library.PHP_SHA1Final = ['void', [ref.refType('uchar'), ref.refType(_library.PHP_SHA1_CTX)]];
    _library._functions['PHP_SHA1Final'] = _library.PHP_SHA1Final;
}];

_library._preload['make_sha1_digest'] = [function () {
    _library.make_sha1_digest = ['void', [ref.refType('char'), ref.refType('uchar')]];
    _library._functions['make_sha1_digest'] = _library.make_sha1_digest;
}];

function loadDependentSymbols() {
}

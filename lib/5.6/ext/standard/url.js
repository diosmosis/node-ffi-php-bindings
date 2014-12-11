var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_url = Struct({});
_library.php_url.size = 1;

_library._preload['php_url'] = [function () {
    _library.php_url.size = 0;
    _library.php_url.defineProperty("fragment", ref.refType('char'));
    _library.php_url.defineProperty("host", ref.refType('char'));
    _library.php_url.defineProperty("pass", ref.refType('char'));
    _library.php_url.defineProperty("path", ref.refType('char'));
    _library.php_url.defineProperty("port", 'ushort');
    _library.php_url.defineProperty("query", ref.refType('char'));
    _library.php_url.defineProperty("scheme", ref.refType('char'));
    _library.php_url.defineProperty("user", ref.refType('char'));
}];

_library._preload['php_url'] = [function () {
    _library.php_url = _library.php_url;
}];

_library._preload['php_url_free'] = ['php_url', function () {
    _library.php_url_free = ['void', [ref.refType(_library.php_url)]];
    _library._functions['php_url_free'] = _library.php_url_free;
}];

_library._preload['php_url_parse'] = ['php_url', function () {
    _library.php_url_parse = [ref.refType(_library.php_url), [ref.refType('char')]];
    _library._functions['php_url_parse'] = _library.php_url_parse;
}];

_library._preload['php_url_parse_ex'] = ['php_url', function () {
    _library.php_url_parse_ex = [ref.refType(_library.php_url), [ref.refType('char'), 'int']];
    _library._functions['php_url_parse_ex'] = _library.php_url_parse_ex;
}];

_library._preload['php_url_decode'] = [function () {
    _library.php_url_decode = ['int', [ref.refType('char'), 'int']];
    _library._functions['php_url_decode'] = _library.php_url_decode;
}];

_library._preload['php_raw_url_decode'] = [function () {
    _library.php_raw_url_decode = ['int', [ref.refType('char'), 'int']];
    _library._functions['php_raw_url_decode'] = _library.php_raw_url_decode;
}];

_library._preload['php_url_encode'] = [function () {
    _library.php_url_encode = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('int')]];
    _library._functions['php_url_encode'] = _library.php_url_encode;
}];

_library._preload['php_raw_url_encode'] = [function () {
    _library.php_raw_url_encode = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('int')]];
    _library._functions['php_raw_url_encode'] = _library.php_raw_url_encode;
}];

function loadDependentSymbols() {
}

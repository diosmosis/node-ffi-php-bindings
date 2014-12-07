var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_url = Struct({});

_library._preload.push(function () {
    _library.php_url.defineProperty("fragment", ref.refType('char'));
    _library.php_url.defineProperty("host", ref.refType('char'));
    _library.php_url.defineProperty("pass", ref.refType('char'));
    _library.php_url.defineProperty("path", ref.refType('char'));
    _library.php_url.defineProperty("port", 'ushort');
    _library.php_url.defineProperty("query", ref.refType('char'));
    _library.php_url.defineProperty("scheme", ref.refType('char'));
    _library.php_url.defineProperty("user", ref.refType('char'));
});

_library.php_url = _library.php_url;

_library.php_url_free = ['void', [ref.refType(_library.php_url)]];
_library._functions['php_url_free'] = _library.php_url_free;

_library.php_url_parse = [ref.refType(_library.php_url), [ref.refType('char')]];
_library._functions['php_url_parse'] = _library.php_url_parse;

_library.php_url_parse_ex = [ref.refType(_library.php_url), [ref.refType('char'), 'int']];
_library._functions['php_url_parse_ex'] = _library.php_url_parse_ex;

_library.php_url_decode = ['int', [ref.refType('char'), 'int']];
_library._functions['php_url_decode'] = _library.php_url_decode;

_library.php_raw_url_decode = ['int', [ref.refType('char'), 'int']];
_library._functions['php_raw_url_decode'] = _library.php_raw_url_decode;

_library.php_url_encode = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('int')]];
_library._functions['php_url_encode'] = _library.php_url_encode;

_library.php_raw_url_encode = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('int')]];
_library._functions['php_raw_url_encode'] = _library.php_raw_url_encode;

require('./zend_types.js');
_library.zif_parse_url = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_parse_url'] = _library.zif_parse_url;

_library.zif_urlencode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_urlencode'] = _library.zif_urlencode;

_library.zif_urldecode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_urldecode'] = _library.zif_urldecode;

_library.zif_rawurlencode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_rawurlencode'] = _library.zif_rawurlencode;

_library.zif_rawurldecode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_rawurldecode'] = _library.zif_rawurldecode;

_library.zif_get_headers = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_get_headers'] = _library.zif_get_headers;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zm_activate_head = ['int', ['int', 'int']];
_library._functions.push(_library.zm_activate_head);

_library.zif_header = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_header);

_library.zif_header_remove = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_header_remove);

_library.zif_setcookie = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_setcookie);

_library.zif_setrawcookie = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_setrawcookie);

_library.zif_headers_sent = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_headers_sent);

_library.zif_headers_list = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_headers_list);

_library.zif_http_response_code = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_http_response_code);

_library.php_header = ['int', []];
_library._functions.push(_library.php_header);

_library.php_setcookie = ['int', [ref.refType('char'), 'int', ref.refType('char'), 'int', _library.time_t, ref.refType('char'), 'int', ref.refType('char'), 'int', 'int', 'int', 'int']];
_library._functions.push(_library.php_setcookie);

function loadDependentSymbols() {
};
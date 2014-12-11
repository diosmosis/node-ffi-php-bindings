var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_base64_encode'] = [function () {
    _library.php_base64_encode = [ref.refType('uchar'), [ref.refType('uchar'), 'int', ref.refType('int')]];
    _library._functions['php_base64_encode'] = _library.php_base64_encode;
}];

_library._preload['php_base64_decode_ex'] = [function () {
    _library.php_base64_decode_ex = [ref.refType('uchar'), [ref.refType('uchar'), 'int', ref.refType('int'), 'uchar']];
    _library._functions['php_base64_decode_ex'] = _library.php_base64_decode_ex;
}];

_library._preload['php_base64_decode'] = [function () {
    _library.php_base64_decode = [ref.refType('uchar'), [ref.refType('uchar'), 'int', ref.refType('int')]];
    _library._functions['php_base64_decode'] = _library.php_base64_decode;
}];

function loadDependentSymbols() {
}

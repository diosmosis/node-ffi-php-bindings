var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_quot_print_decode'] = [function () {
    _library.php_quot_print_decode = [ref.refType('uchar'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int']];
    _library._functions['php_quot_print_decode'] = _library.php_quot_print_decode;
}];

_library._preload['php_quot_print_encode'] = [function () {
    _library.php_quot_print_encode = [ref.refType('uchar'), [ref.refType('uchar'), 'ulong', ref.refType('ulong')]];
    _library._functions['php_quot_print_encode'] = _library.php_quot_print_encode;
}];

function loadDependentSymbols() {
}

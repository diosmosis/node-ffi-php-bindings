var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_freedtoa'] = [function () {
    _library.zend_freedtoa = ['void', [ref.refType('char')]];
    _library._functions['zend_freedtoa'] = _library.zend_freedtoa;
}];

_library._preload['zend_dtoa'] = ['pointer', function () {
    _library.zend_dtoa = [ref.refType('char'), ['double', 'int', 'int', ref.refType('int'), ref.refType('int'), ref.refType(ref.refType('char'))]];
    _library._functions['zend_dtoa'] = _library.zend_dtoa;
}];

_library._preload['zend_strtod'] = ['pointer', function () {
    _library.zend_strtod = ['double', [ref.refType('char'), ref.refType(ref.refType('char'))]];
    _library._functions['zend_strtod'] = _library.zend_strtod;
}];

_library._preload['zend_hex_strtod'] = ['pointer', function () {
    _library.zend_hex_strtod = ['double', [ref.refType('char'), ref.refType(ref.refType('char'))]];
    _library._functions['zend_hex_strtod'] = _library.zend_hex_strtod;
}];

_library._preload['zend_oct_strtod'] = ['pointer', function () {
    _library.zend_oct_strtod = ['double', [ref.refType('char'), ref.refType(ref.refType('char'))]];
    _library._functions['zend_oct_strtod'] = _library.zend_oct_strtod;
}];

_library._preload['zend_bin_strtod'] = ['pointer', function () {
    _library.zend_bin_strtod = ['double', [ref.refType('char'), ref.refType(ref.refType('char'))]];
    _library._functions['zend_bin_strtod'] = _library.zend_bin_strtod;
}];

_library._preload['zend_startup_strtod'] = [function () {
    _library.zend_startup_strtod = ['int', []];
    _library._functions['zend_startup_strtod'] = _library.zend_startup_strtod;
}];

_library._preload['zend_shutdown_strtod'] = [function () {
    _library.zend_shutdown_strtod = ['int', []];
    _library._functions['zend_shutdown_strtod'] = _library.zend_shutdown_strtod;
}];

function loadDependentSymbols() {
}

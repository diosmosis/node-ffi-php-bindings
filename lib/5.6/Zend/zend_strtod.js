var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_freedtoa = ['void', [ref.refType('char')]];
_library._functions.push(_library.zend_freedtoa);

_library.zend_dtoa = [ref.refType('char'), ['double', 'int', 'int', ref.refType('int'), ref.refType('int'), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.zend_dtoa);

_library.zend_strtod = ['double', [ref.refType('char'), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.zend_strtod);

_library.zend_hex_strtod = ['double', [ref.refType('char'), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.zend_hex_strtod);

_library.zend_oct_strtod = ['double', [ref.refType('char'), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.zend_oct_strtod);

_library.zend_bin_strtod = ['double', [ref.refType('char'), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.zend_bin_strtod);

_library.zend_startup_strtod = ['int', []];
_library._functions.push(_library.zend_startup_strtod);

_library.zend_shutdown_strtod = ['int', []];
_library._functions.push(_library.zend_shutdown_strtod);

function loadDependentSymbols() {
}
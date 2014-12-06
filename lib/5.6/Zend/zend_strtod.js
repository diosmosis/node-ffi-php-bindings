var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_freedtoa = ['void', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.zend_freedtoa);

_library.zend_dtoa = ['char' ? ref.refType('char') : 'pointer', ['double', 'int', 'int', 'int' ? ref.refType('int') : 'pointer', 'int' ? ref.refType('int') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_dtoa);

_library.zend_strtod = ['double', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_strtod);

_library.zend_hex_strtod = ['double', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_hex_strtod);

_library.zend_oct_strtod = ['double', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_oct_strtod);

_library.zend_bin_strtod = ['double', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_bin_strtod);

_library.zend_startup_strtod = ['int', []];
_library._functions.push(_library.zend_startup_strtod);

_library.zend_shutdown_strtod = ['int', []];
_library._functions.push(_library.zend_shutdown_strtod);

function loadDependentSymbols() {
}
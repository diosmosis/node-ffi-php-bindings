var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_init_fpu = ['void', []];
_library._functions['zend_init_fpu'] = _library.zend_init_fpu;

_library.zend_shutdown_fpu = ['void', []];
_library._functions['zend_shutdown_fpu'] = _library.zend_shutdown_fpu;

_library.zend_ensure_fpu_mode = ['void', []];
_library._functions['zend_ensure_fpu_mode'] = _library.zend_ensure_fpu_mode;

function loadDependentSymbols() {
}
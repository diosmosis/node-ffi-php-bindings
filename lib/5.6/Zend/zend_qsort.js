var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.compare_r_func_t = ffi.Function('int', ['void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer']);

_library.zend_qsort = ['void', ['void' ? ref.refType('void') : 'pointer', 'ulong', 'ulong', _library.compare_func_t]];
_library._functions.push(_library.zend_qsort);

_library.zend_qsort_r = ['void', ['void' ? ref.refType('void') : 'pointer', 'ulong', 'ulong', _library.compare_r_func_t, 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_qsort_r);

function loadDependentSymbols() {
    require('./zend_hash.js');
}
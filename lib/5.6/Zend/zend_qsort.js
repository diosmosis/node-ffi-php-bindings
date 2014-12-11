var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['compare_r_func_t'] = ['int (const void *, const void *, void *)', function () {
    _library.compare_r_func_t = ffi.Function('int', [ref.refType('void'), ref.refType('void'), ref.refType('void')]);
}];

_library._preload['zend_qsort'] = ['compare_func_t', function () {
    _library.zend_qsort = ['void', [ref.refType('void'), 'ulong', 'ulong', _library.compare_func_t]];
    _library._functions['zend_qsort'] = _library.zend_qsort;
}];

_library._preload['zend_qsort_r'] = ['compare_r_func_t', function () {
    _library.zend_qsort_r = ['void', [ref.refType('void'), 'ulong', 'ulong', _library.compare_r_func_t, ref.refType('void')]];
    _library._functions['zend_qsort_r'] = _library.zend_qsort_r;
}];

function loadDependentSymbols() {
    require('./zend_hash.js');
}

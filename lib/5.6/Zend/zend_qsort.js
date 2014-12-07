var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.compare_r_func_t = ffi.Function('int', [ref.refType('void'), ref.refType('void'), ref.refType('void')]);

require('./zend_hash.js');
_library.zend_qsort = ['void', [ref.refType('void'), 'ulong', 'ulong', _library.compare_func_t]];
_library._functions['zend_qsort'] = _library.zend_qsort;

_library.zend_qsort_r = ['void', [ref.refType('void'), 'ulong', 'ulong', _library.compare_r_func_t, ref.refType('void')]];
_library._functions['zend_qsort_r'] = _library.zend_qsort_r;


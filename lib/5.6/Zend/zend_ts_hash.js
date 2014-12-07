var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend_hash.js');
_library._zend_ts_hashtable = Struct({});

_library._preload.push(function () {
    _library._zend_ts_hashtable.defineProperty("hash", _library.HashTable);
    _library._zend_ts_hashtable.defineProperty("reader", 'uint');
});

require('./zend_ts_hash.js');
_library.TsHashTable = _library._zend_ts_hashtable;

_library._zend_ts_hash_init = ['int', [ref.refType(_library.TsHashTable), 'uint', _library.dtor_func_t, 'uchar', ref.refType('char'), 'uint']];
_library._functions['_zend_ts_hash_init'] = _library._zend_ts_hash_init;

_library._zend_ts_hash_init_ex = ['int', [ref.refType(_library.TsHashTable), 'uint', _library.dtor_func_t, 'uchar', 'uchar', ref.refType('char'), 'uint']];
_library._functions['_zend_ts_hash_init_ex'] = _library._zend_ts_hash_init_ex;

_library.zend_ts_hash_destroy = ['void', [ref.refType(_library.TsHashTable)]];
_library._functions['zend_ts_hash_destroy'] = _library.zend_ts_hash_destroy;

_library.zend_ts_hash_clean = ['void', [ref.refType(_library.TsHashTable)]];
_library._functions['zend_ts_hash_clean'] = _library.zend_ts_hash_clean;

_library._zend_ts_hash_add_or_update = ['int', [ref.refType(_library.TsHashTable), ref.refType('char'), 'uint', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions['_zend_ts_hash_add_or_update'] = _library._zend_ts_hash_add_or_update;

_library._zend_ts_hash_quick_add_or_update = ['int', [ref.refType(_library.TsHashTable), ref.refType('char'), 'uint', 'ulong', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions['_zend_ts_hash_quick_add_or_update'] = _library._zend_ts_hash_quick_add_or_update;

_library._zend_ts_hash_index_update_or_next_insert = ['int', [ref.refType(_library.TsHashTable), 'ulong', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions['_zend_ts_hash_index_update_or_next_insert'] = _library._zend_ts_hash_index_update_or_next_insert;

_library.zend_ts_hash_add_empty_element = ['int', [ref.refType(_library.TsHashTable), ref.refType('char'), 'uint']];
_library._functions['zend_ts_hash_add_empty_element'] = _library.zend_ts_hash_add_empty_element;

_library.zend_ts_hash_graceful_destroy = ['void', [ref.refType(_library.TsHashTable)]];
_library._functions['zend_ts_hash_graceful_destroy'] = _library.zend_ts_hash_graceful_destroy;

_library.zend_ts_hash_apply = ['void', [ref.refType(_library.TsHashTable), _library.apply_func_t]];
_library._functions['zend_ts_hash_apply'] = _library.zend_ts_hash_apply;

_library.zend_ts_hash_apply_with_argument = ['void', [ref.refType(_library.TsHashTable), _library.apply_func_arg_t, ref.refType('void')]];
_library._functions['zend_ts_hash_apply_with_argument'] = _library.zend_ts_hash_apply_with_argument;

_library.zend_ts_hash_reverse_apply = ['void', [ref.refType(_library.TsHashTable), _library.apply_func_t]];
_library._functions['zend_ts_hash_reverse_apply'] = _library.zend_ts_hash_reverse_apply;

_library.zend_ts_hash_del_key_or_index = ['int', [ref.refType(_library.TsHashTable), ref.refType('char'), 'uint', 'ulong', 'int']];
_library._functions['zend_ts_hash_del_key_or_index'] = _library.zend_ts_hash_del_key_or_index;

_library.zend_ts_get_hash_value = ['ulong', [ref.refType(_library.TsHashTable), ref.refType('char'), 'uint']];
_library._functions['zend_ts_get_hash_value'] = _library.zend_ts_get_hash_value;

_library.zend_ts_hash_find = ['int', [ref.refType(_library.TsHashTable), ref.refType('char'), 'uint', ref.refType(ref.refType('void'))]];
_library._functions['zend_ts_hash_find'] = _library.zend_ts_hash_find;

_library.zend_ts_hash_quick_find = ['int', [ref.refType(_library.TsHashTable), ref.refType('char'), 'uint', 'ulong', ref.refType(ref.refType('void'))]];
_library._functions['zend_ts_hash_quick_find'] = _library.zend_ts_hash_quick_find;

_library.zend_ts_hash_index_find = ['int', [ref.refType(_library.TsHashTable), 'ulong', ref.refType(ref.refType('void'))]];
_library._functions['zend_ts_hash_index_find'] = _library.zend_ts_hash_index_find;

_library.zend_ts_hash_exists = ['int', [ref.refType(_library.TsHashTable), ref.refType('char'), 'uint']];
_library._functions['zend_ts_hash_exists'] = _library.zend_ts_hash_exists;

_library.zend_ts_hash_index_exists = ['int', [ref.refType(_library.TsHashTable), 'ulong']];
_library._functions['zend_ts_hash_index_exists'] = _library.zend_ts_hash_index_exists;

_library.zend_ts_hash_copy = ['void', [ref.refType(_library.TsHashTable), ref.refType(_library.TsHashTable), _library.copy_ctor_func_t, ref.refType('void'), 'uint']];
_library._functions['zend_ts_hash_copy'] = _library.zend_ts_hash_copy;

_library.zend_ts_hash_copy_to_hash = ['void', [ref.refType(_library.HashTable), ref.refType(_library.TsHashTable), _library.copy_ctor_func_t, ref.refType('void'), 'uint']];
_library._functions['zend_ts_hash_copy_to_hash'] = _library.zend_ts_hash_copy_to_hash;

_library.zend_ts_hash_merge = ['void', [ref.refType(_library.TsHashTable), ref.refType(_library.TsHashTable), _library.copy_ctor_func_t, ref.refType('void'), 'uint', 'int']];
_library._functions['zend_ts_hash_merge'] = _library.zend_ts_hash_merge;

_library.zend_ts_hash_merge_ex = ['void', [ref.refType(_library.TsHashTable), ref.refType(_library.TsHashTable), _library.copy_ctor_func_t, 'uint', _library.merge_checker_func_t, ref.refType('void')]];
_library._functions['zend_ts_hash_merge_ex'] = _library.zend_ts_hash_merge_ex;

_library.zend_ts_hash_sort = ['int', [ref.refType(_library.TsHashTable), _library.sort_func_t, _library.compare_func_t, 'int']];
_library._functions['zend_ts_hash_sort'] = _library.zend_ts_hash_sort;

_library.zend_ts_hash_compare = ['int', [ref.refType(_library.TsHashTable), ref.refType(_library.TsHashTable), _library.compare_func_t, 'uchar']];
_library._functions['zend_ts_hash_compare'] = _library.zend_ts_hash_compare;

_library.zend_ts_hash_minmax = ['int', [ref.refType(_library.TsHashTable), _library.compare_func_t, 'int', ref.refType(ref.refType('void'))]];
_library._functions['zend_ts_hash_minmax'] = _library.zend_ts_hash_minmax;

_library.zend_ts_hash_num_elements = ['int', [ref.refType(_library.TsHashTable)]];
_library._functions['zend_ts_hash_num_elements'] = _library.zend_ts_hash_num_elements;

_library.zend_ts_hash_rehash = ['int', [ref.refType(_library.TsHashTable)]];
_library._functions['zend_ts_hash_rehash'] = _library.zend_ts_hash_rehash;

_library.zend_ts_hash_func = ['ulong', [ref.refType('char'), 'uint']];
_library._functions['zend_ts_hash_func'] = _library.zend_ts_hash_func;

_library.zend_ts_hash_display_pListTail = ['void', [ref.refType(_library.TsHashTable)]];
_library._functions['zend_ts_hash_display_pListTail'] = _library.zend_ts_hash_display_pListTail;

_library.zend_ts_hash_display = ['void', [ref.refType(_library.TsHashTable)]];
_library._functions['zend_ts_hash_display'] = _library.zend_ts_hash_display;


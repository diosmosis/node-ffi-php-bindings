var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_ts_hashtable = Struct({
    "hash": _library.HashTable,
    "reader": 'uint'
});

_library.TsHashTable = _library._zend_ts_hashtable;

_library._zend_ts_hash_init = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', 'uint', _library.dtor_func_t, 'uchar', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_ts_hash_init);

_library._zend_ts_hash_init_ex = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', 'uint', _library.dtor_func_t, 'uchar', 'uchar', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_ts_hash_init_ex);

_library.zend_ts_hash_destroy = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer']];
_library._functions.push(_library.zend_ts_hash_destroy);

_library.zend_ts_hash_clean = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer']];
_library._functions.push(_library.zend_ts_hash_clean);

_library._zend_ts_hash_add_or_update = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', ref.refType('char'), 'uint', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_ts_hash_add_or_update);

_library._zend_ts_hash_quick_add_or_update = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', ref.refType('char'), 'uint', 'ulong', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_ts_hash_quick_add_or_update);

_library._zend_ts_hash_index_update_or_next_insert = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', 'ulong', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_ts_hash_index_update_or_next_insert);

_library.zend_ts_hash_add_empty_element = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_ts_hash_add_empty_element);

_library.zend_ts_hash_graceful_destroy = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer']];
_library._functions.push(_library.zend_ts_hash_graceful_destroy);

_library.zend_ts_hash_apply = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.apply_func_t]];
_library._functions.push(_library.zend_ts_hash_apply);

_library.zend_ts_hash_apply_with_argument = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.apply_func_arg_t, ref.refType('void')]];
_library._functions.push(_library.zend_ts_hash_apply_with_argument);

_library.zend_ts_hash_reverse_apply = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.apply_func_t]];
_library._functions.push(_library.zend_ts_hash_reverse_apply);

_library.zend_ts_hash_del_key_or_index = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', ref.refType('char'), 'uint', 'ulong', 'int']];
_library._functions.push(_library.zend_ts_hash_del_key_or_index);

_library.zend_ts_get_hash_value = ['ulong', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_ts_get_hash_value);

_library.zend_ts_hash_find = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', ref.refType('char'), 'uint', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_ts_hash_find);

_library.zend_ts_hash_quick_find = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', ref.refType('char'), 'uint', 'ulong', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_ts_hash_quick_find);

_library.zend_ts_hash_index_find = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', 'ulong', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_ts_hash_index_find);

_library.zend_ts_hash_exists = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_ts_hash_exists);

_library.zend_ts_hash_index_exists = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', 'ulong']];
_library._functions.push(_library.zend_ts_hash_index_exists);

_library.zend_ts_hash_copy = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.copy_ctor_func_t, ref.refType('void'), 'uint']];
_library._functions.push(_library.zend_ts_hash_copy);

_library.zend_ts_hash_copy_to_hash = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.copy_ctor_func_t, ref.refType('void'), 'uint']];
_library._functions.push(_library.zend_ts_hash_copy_to_hash);

_library.zend_ts_hash_merge = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.copy_ctor_func_t, ref.refType('void'), 'uint', 'int']];
_library._functions.push(_library.zend_ts_hash_merge);

_library.zend_ts_hash_merge_ex = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.copy_ctor_func_t, 'uint', _library.merge_checker_func_t, ref.refType('void')]];
_library._functions.push(_library.zend_ts_hash_merge_ex);

_library.zend_ts_hash_sort = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.sort_func_t, _library.compare_func_t, 'int']];
_library._functions.push(_library.zend_ts_hash_sort);

_library.zend_ts_hash_compare = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.compare_func_t, 'uchar']];
_library._functions.push(_library.zend_ts_hash_compare);

_library.zend_ts_hash_minmax = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer', _library.compare_func_t, 'int', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_ts_hash_minmax);

_library.zend_ts_hash_num_elements = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer']];
_library._functions.push(_library.zend_ts_hash_num_elements);

_library.zend_ts_hash_rehash = ['int', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer']];
_library._functions.push(_library.zend_ts_hash_rehash);

_library.zend_ts_hash_func = ['ulong', [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_ts_hash_func);

_library.zend_ts_hash_display_pListTail = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer']];
_library._functions.push(_library.zend_ts_hash_display_pListTail);

_library.zend_ts_hash_display = ['void', [_library.TsHashTable ? ref.refType(_library.TsHashTable) : 'pointer']];
_library._functions.push(_library.zend_ts_hash_display);

function loadDependentSymbols() {
    require('./zend_hash.js');
}
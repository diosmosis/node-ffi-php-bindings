var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.hash_func_t = ffi.Function('ulong', [ref.refType('char'), 'uint']);

_library.compare_func_t = ffi.Function('int', [ref.refType('void'), ref.refType('void')]);

_library.sort_func_t = ffi.Function('void', [ref.refType('void'), 'ulong', 'ulong', ffi.Function('int', [ref.refType('void'), ref.refType('void')])]);

_library.dtor_func_t = ffi.Function('void', [ref.refType('void')]);

_library.copy_ctor_func_t = ffi.Function('void', [ref.refType('void')]);

_library.copy_ctor_param_func_t = ffi.Function('void', [ref.refType('void'), ref.refType('void')]);

_library.bucket = Struct({});
_library.bucket.size = 1;

_library._preload.push(function () {
    _library.bucket.size = 0;
    _library.bucket.defineProperty("arKey", ref.refType('char'));
    _library.bucket.defineProperty("h", 'ulong');
    _library.bucket.defineProperty("nKeyLength", 'uint');
    _library.bucket.defineProperty("pData", ref.refType('void'));
    _library.bucket.defineProperty("pDataPtr", ref.refType('void'));
    _library.bucket.defineProperty("pLast", ref.refType(_library.bucket));
    _library.bucket.defineProperty("pListLast", ref.refType(_library.bucket));
    _library.bucket.defineProperty("pListNext", ref.refType(_library.bucket));
    _library.bucket.defineProperty("pNext", ref.refType(_library.bucket));
});

_library.Bucket = _library.bucket;

_library._hashtable = Struct({});
_library._hashtable.size = 1;

_library._preload.push(function () {
    _library._hashtable.size = 0;
    _library._hashtable.defineProperty("arBuckets", ref.refType(ref.refType(_library.Bucket)));
    _library._hashtable.defineProperty("bApplyProtection", 'uchar');
    _library._hashtable.defineProperty("inconsistent", 'int');
    _library._hashtable.defineProperty("nApplyCount", 'uchar');
    _library._hashtable.defineProperty("nNextFreeElement", 'ulong');
    _library._hashtable.defineProperty("nNumOfElements", 'uint');
    _library._hashtable.defineProperty("nTableMask", 'uint');
    _library._hashtable.defineProperty("nTableSize", 'uint');
    _library._hashtable.defineProperty("pDestructor", _library.dtor_func_t);
    _library._hashtable.defineProperty("pInternalPointer", ref.refType(_library.Bucket));
    _library._hashtable.defineProperty("pListHead", ref.refType(_library.Bucket));
    _library._hashtable.defineProperty("pListTail", ref.refType(_library.Bucket));
    _library._hashtable.defineProperty("persistent", 'uchar');
});

_library.HashTable = _library._hashtable;

_library._zend_hash_key = Struct({});
_library._zend_hash_key.size = 1;

_library._preload.push(function () {
    _library._zend_hash_key.size = 0;
    _library._zend_hash_key.defineProperty("arKey", ref.refType('char'));
    _library._zend_hash_key.defineProperty("h", 'ulong');
    _library._zend_hash_key.defineProperty("nKeyLength", 'uint');
});

_library.zend_hash_key = _library._zend_hash_key;

_library.merge_checker_func_t = ffi.Function('uchar', [ref.refType(_library._hashtable), ref.refType('void'), ref.refType(_library._zend_hash_key), ref.refType('void')]);

_library.HashPosition = ref.refType(_library.Bucket);

_library._zend_hash_init = ['int', [ref.refType(_library.HashTable), 'uint', _library.dtor_func_t, 'uchar', ref.refType('char'), 'uint']];
_library._functions['_zend_hash_init'] = _library._zend_hash_init;

_library._zend_hash_init_ex = ['int', [ref.refType(_library.HashTable), 'uint', _library.dtor_func_t, 'uchar', 'uchar', ref.refType('char'), 'uint']];
_library._functions['_zend_hash_init_ex'] = _library._zend_hash_init_ex;

_library.zend_hash_destroy = ['void', [ref.refType(_library.HashTable)]];
_library._functions['zend_hash_destroy'] = _library.zend_hash_destroy;

_library.zend_hash_clean = ['void', [ref.refType(_library.HashTable)]];
_library._functions['zend_hash_clean'] = _library.zend_hash_clean;

_library._zend_hash_add_or_update = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions['_zend_hash_add_or_update'] = _library._zend_hash_add_or_update;

_library._zend_hash_quick_add_or_update = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint', 'ulong', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions['_zend_hash_quick_add_or_update'] = _library._zend_hash_quick_add_or_update;

_library._zend_hash_index_update_or_next_insert = ['int', [ref.refType(_library.HashTable), 'ulong', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions['_zend_hash_index_update_or_next_insert'] = _library._zend_hash_index_update_or_next_insert;

_library.zend_hash_add_empty_element = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint']];
_library._functions['zend_hash_add_empty_element'] = _library.zend_hash_add_empty_element;

_library.apply_func_t = ffi.Function('int', [ref.refType('void')]);

_library.apply_func_arg_t = ffi.Function('int', [ref.refType('void'), ref.refType('void')]);

_library.apply_func_args_t = ffi.Function('int', [ref.refType('void'), 'int', ref.refType('void'), ref.refType(_library._zend_hash_key)]);

_library.zend_hash_graceful_destroy = ['void', [ref.refType(_library.HashTable)]];
_library._functions['zend_hash_graceful_destroy'] = _library.zend_hash_graceful_destroy;

_library.zend_hash_graceful_reverse_destroy = ['void', [ref.refType(_library.HashTable)]];
_library._functions['zend_hash_graceful_reverse_destroy'] = _library.zend_hash_graceful_reverse_destroy;

_library.zend_hash_apply = ['void', [ref.refType(_library.HashTable), _library.apply_func_t]];
_library._functions['zend_hash_apply'] = _library.zend_hash_apply;

_library.zend_hash_apply_with_argument = ['void', [ref.refType(_library.HashTable), _library.apply_func_arg_t, ref.refType('void')]];
_library._functions['zend_hash_apply_with_argument'] = _library.zend_hash_apply_with_argument;

_library.zend_hash_reverse_apply = ['void', [ref.refType(_library.HashTable), _library.apply_func_t]];
_library._functions['zend_hash_reverse_apply'] = _library.zend_hash_reverse_apply;

_library.zend_hash_del_key_or_index = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint', 'ulong', 'int']];
_library._functions['zend_hash_del_key_or_index'] = _library.zend_hash_del_key_or_index;

_library.zend_hash_find = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint', ref.refType(ref.refType('void'))]];
_library._functions['zend_hash_find'] = _library.zend_hash_find;

_library.zend_hash_quick_find = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint', 'ulong', ref.refType(ref.refType('void'))]];
_library._functions['zend_hash_quick_find'] = _library.zend_hash_quick_find;

_library.zend_hash_index_find = ['int', [ref.refType(_library.HashTable), 'ulong', ref.refType(ref.refType('void'))]];
_library._functions['zend_hash_index_find'] = _library.zend_hash_index_find;

_library.zend_hash_exists = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint']];
_library._functions['zend_hash_exists'] = _library.zend_hash_exists;

_library.zend_hash_quick_exists = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint', 'ulong']];
_library._functions['zend_hash_quick_exists'] = _library.zend_hash_quick_exists;

_library.zend_hash_index_exists = ['int', [ref.refType(_library.HashTable), 'ulong']];
_library._functions['zend_hash_index_exists'] = _library.zend_hash_index_exists;

_library.zend_hash_next_free_element = ['ulong', [ref.refType(_library.HashTable)]];
_library._functions['zend_hash_next_free_element'] = _library.zend_hash_next_free_element;

_library.zend_hash_move_forward_ex = ['int', [ref.refType(_library.HashTable), ref.refType(_library.HashPosition)]];
_library._functions['zend_hash_move_forward_ex'] = _library.zend_hash_move_forward_ex;

_library.zend_hash_move_backwards_ex = ['int', [ref.refType(_library.HashTable), ref.refType(_library.HashPosition)]];
_library._functions['zend_hash_move_backwards_ex'] = _library.zend_hash_move_backwards_ex;

_library.zend_hash_get_current_key_ex = ['int', [ref.refType(_library.HashTable), ref.refType(ref.refType('char')), ref.refType('uint'), ref.refType('ulong'), 'uchar', ref.refType(_library.HashPosition)]];
_library._functions['zend_hash_get_current_key_ex'] = _library.zend_hash_get_current_key_ex;

require('./zend_types.js');
_library.zend_hash_get_current_key_zval_ex = ['void', [ref.refType(_library.HashTable), ref.refType(_library.zval), ref.refType(_library.HashPosition)]];
_library._functions['zend_hash_get_current_key_zval_ex'] = _library.zend_hash_get_current_key_zval_ex;

_library.zend_hash_get_current_key_type_ex = ['int', [ref.refType(_library.HashTable), ref.refType(_library.HashPosition)]];
_library._functions['zend_hash_get_current_key_type_ex'] = _library.zend_hash_get_current_key_type_ex;

_library.zend_hash_get_current_data_ex = ['int', [ref.refType(_library.HashTable), ref.refType(ref.refType('void')), ref.refType(_library.HashPosition)]];
_library._functions['zend_hash_get_current_data_ex'] = _library.zend_hash_get_current_data_ex;

_library.zend_hash_internal_pointer_reset_ex = ['void', [ref.refType(_library.HashTable), ref.refType(_library.HashPosition)]];
_library._functions['zend_hash_internal_pointer_reset_ex'] = _library.zend_hash_internal_pointer_reset_ex;

_library.zend_hash_internal_pointer_end_ex = ['void', [ref.refType(_library.HashTable), ref.refType(_library.HashPosition)]];
_library._functions['zend_hash_internal_pointer_end_ex'] = _library.zend_hash_internal_pointer_end_ex;

_library.zend_hash_update_current_key_ex = ['int', [ref.refType(_library.HashTable), 'int', ref.refType('char'), 'uint', 'ulong', 'int', ref.refType(_library.HashPosition)]];
_library._functions['zend_hash_update_current_key_ex'] = _library.zend_hash_update_current_key_ex;

_library._HashPointer = Struct({});
_library._HashPointer.size = 1;

_library._preload.push(function () {
    _library._HashPointer.size = 0;
    _library._HashPointer.defineProperty("h", 'ulong');
    _library._HashPointer.defineProperty("pos", _library.HashPosition);
});

_library.HashPointer = _library._HashPointer;

_library.zend_hash_get_pointer = ['int', [ref.refType(_library.HashTable), ref.refType(_library.HashPointer)]];
_library._functions['zend_hash_get_pointer'] = _library.zend_hash_get_pointer;

_library.zend_hash_set_pointer = ['int', [ref.refType(_library.HashTable), ref.refType(_library.HashPointer)]];
_library._functions['zend_hash_set_pointer'] = _library.zend_hash_set_pointer;

_library.zend_hash_copy = ['void', [ref.refType(_library.HashTable), ref.refType(_library.HashTable), _library.copy_ctor_func_t, ref.refType('void'), 'uint']];
_library._functions['zend_hash_copy'] = _library.zend_hash_copy;

_library._zend_hash_merge = ['void', [ref.refType(_library.HashTable), ref.refType(_library.HashTable), _library.copy_ctor_func_t, ref.refType('void'), 'uint', 'int', ref.refType('char'), 'uint']];
_library._functions['_zend_hash_merge'] = _library._zend_hash_merge;

_library.zend_hash_merge_ex = ['void', [ref.refType(_library.HashTable), ref.refType(_library.HashTable), _library.copy_ctor_func_t, 'uint', _library.merge_checker_func_t, ref.refType('void')]];
_library._functions['zend_hash_merge_ex'] = _library.zend_hash_merge_ex;

_library.zend_hash_sort = ['int', [ref.refType(_library.HashTable), _library.sort_func_t, _library.compare_func_t, 'int']];
_library._functions['zend_hash_sort'] = _library.zend_hash_sort;

_library.zend_hash_compare = ['int', [ref.refType(_library.HashTable), ref.refType(_library.HashTable), _library.compare_func_t, 'uchar']];
_library._functions['zend_hash_compare'] = _library.zend_hash_compare;

_library.zend_hash_minmax = ['int', [ref.refType(_library.HashTable), _library.compare_func_t, 'int', ref.refType(ref.refType('void'))]];
_library._functions['zend_hash_minmax'] = _library.zend_hash_minmax;

_library.zend_hash_num_elements = ['int', [ref.refType(_library.HashTable)]];
_library._functions['zend_hash_num_elements'] = _library.zend_hash_num_elements;

_library.zend_hash_rehash = ['int', [ref.refType(_library.HashTable)]];
_library._functions['zend_hash_rehash'] = _library.zend_hash_rehash;

_library.zend_hash_reindex = ['void', [ref.refType(_library.HashTable), 'uchar']];
_library._functions['zend_hash_reindex'] = _library.zend_hash_reindex;

_library._zend_hash_splice = ['void', [ref.refType(_library.HashTable), 'uint', _library.copy_ctor_func_t, 'uint', 'uint', ref.refType(ref.refType('void')), 'uint', ref.refType(_library.HashTable), ref.refType('char'), 'uint']];
_library._functions['_zend_hash_splice'] = _library._zend_hash_splice;

_library.zend_inline_hash_func = ['ulong', [ref.refType('char'), 'uint']];
_library._functions['zend_inline_hash_func'] = _library.zend_inline_hash_func;

_library.zend_hash_func = ['ulong', [ref.refType('char'), 'uint']];
_library._functions['zend_hash_func'] = _library.zend_hash_func;

_library.zend_hash_display_pListTail = ['void', [ref.refType(_library.HashTable)]];
_library._functions['zend_hash_display_pListTail'] = _library.zend_hash_display_pListTail;

_library.zend_hash_display = ['void', [ref.refType(_library.HashTable)]];
_library._functions['zend_hash_display'] = _library.zend_hash_display;

_library.zend_symtable_update = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint', ref.refType('void'), 'uint', ref.refType(ref.refType('void'))]];
_library._functions['zend_symtable_update'] = _library.zend_symtable_update;

_library.zend_symtable_del = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint']];
_library._functions['zend_symtable_del'] = _library.zend_symtable_del;

_library.zend_symtable_find = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint', ref.refType(ref.refType('void'))]];
_library._functions['zend_symtable_find'] = _library.zend_symtable_find;

_library.zend_symtable_exists = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint']];
_library._functions['zend_symtable_exists'] = _library.zend_symtable_exists;

_library.zend_symtable_update_current_key_ex = ['int', [ref.refType(_library.HashTable), ref.refType('char'), 'uint', 'int', ref.refType(_library.HashPosition)]];
_library._functions['zend_symtable_update_current_key_ex'] = _library.zend_symtable_update_current_key_ex;


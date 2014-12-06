var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.hash_func_t = ffi.Function('ulong', [ref.refType('char'), 'uint']);

_library.compare_func_t = ffi.Function('int', [ref.refType('void'), ref.refType('void')]);

_library.sort_func_t = ffi.Function('void', [ref.refType('void'), 'ulong', 'ulong', ffi.Function('int', [ref.refType('void'), ref.refType('void')])]);

_library.dtor_func_t = ffi.Function('void', [ref.refType('void')]);

_library.copy_ctor_func_t = ffi.Function('void', [ref.refType('void')]);

_library.copy_ctor_param_func_t = ffi.Function('void', [ref.refType('void'), ref.refType('void')]);

_library.bucket = Struct({
    "arKey": ref.refType('char'),
    "h": 'ulong',
    "nKeyLength": 'uint',
    "pData": ref.refType('void'),
    "pDataPtr": ref.refType('void'),
    "pLast": _library.bucket ? ref.refType(_library.bucket) : 'pointer',
    "pListLast": _library.bucket ? ref.refType(_library.bucket) : 'pointer',
    "pListNext": _library.bucket ? ref.refType(_library.bucket) : 'pointer',
    "pNext": _library.bucket ? ref.refType(_library.bucket) : 'pointer'
});

_library.Bucket = _library.bucket;

_library._hashtable = Struct({
    "arBuckets": ref.refType(_library.Bucket ? ref.refType(_library.Bucket) : 'pointer'),
    "bApplyProtection": 'uchar',
    "inconsistent": 'int',
    "nApplyCount": 'uchar',
    "nNextFreeElement": 'ulong',
    "nNumOfElements": 'uint',
    "nTableMask": 'uint',
    "nTableSize": 'uint',
    "pDestructor": _library.dtor_func_t,
    "pInternalPointer": _library.Bucket ? ref.refType(_library.Bucket) : 'pointer',
    "pListHead": _library.Bucket ? ref.refType(_library.Bucket) : 'pointer',
    "pListTail": _library.Bucket ? ref.refType(_library.Bucket) : 'pointer',
    "persistent": 'uchar'
});

_library.HashTable = _library._hashtable;

_library._zend_hash_key = Struct({
    "arKey": ref.refType('char'),
    "h": 'ulong',
    "nKeyLength": 'uint'
});

_library.zend_hash_key = _library._zend_hash_key;

_library.merge_checker_func_t = ffi.Function('uchar', [_library._hashtable ? ref.refType(_library._hashtable) : 'pointer', ref.refType('void'), _library._zend_hash_key ? ref.refType(_library._zend_hash_key) : 'pointer', ref.refType('void')]);

_library.HashPosition = _library.Bucket ? ref.refType(_library.Bucket) : 'pointer';

_library._zend_hash_init = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'uint', _library.dtor_func_t, 'uchar', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_hash_init);

_library._zend_hash_init_ex = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'uint', _library.dtor_func_t, 'uchar', 'uchar', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_hash_init_ex);

_library.zend_hash_destroy = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_hash_destroy);

_library.zend_hash_clean = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_hash_clean);

_library._zend_hash_add_or_update = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_hash_add_or_update);

_library._zend_hash_quick_add_or_update = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint', 'ulong', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_hash_quick_add_or_update);

_library._zend_hash_index_update_or_next_insert = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'ulong', ref.refType('void'), 'uint', ref.refType(ref.refType('void')), 'int', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_hash_index_update_or_next_insert);

_library.zend_hash_add_empty_element = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_hash_add_empty_element);

_library.apply_func_t = ffi.Function('int', [ref.refType('void')]);

_library.apply_func_arg_t = ffi.Function('int', [ref.refType('void'), ref.refType('void')]);

_library.apply_func_args_t = ffi.Function('int', [ref.refType('void'), 'int', ref.refType('void'), _library._zend_hash_key ? ref.refType(_library._zend_hash_key) : 'pointer']);

_library.zend_hash_graceful_destroy = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_hash_graceful_destroy);

_library.zend_hash_graceful_reverse_destroy = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_hash_graceful_reverse_destroy);

_library.zend_hash_apply = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.apply_func_t]];
_library._functions.push(_library.zend_hash_apply);

_library.zend_hash_apply_with_argument = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.apply_func_arg_t, ref.refType('void')]];
_library._functions.push(_library.zend_hash_apply_with_argument);

_library.zend_hash_reverse_apply = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.apply_func_t]];
_library._functions.push(_library.zend_hash_reverse_apply);

_library.zend_hash_del_key_or_index = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint', 'ulong', 'int']];
_library._functions.push(_library.zend_hash_del_key_or_index);

_library.zend_hash_find = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_hash_find);

_library.zend_hash_quick_find = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint', 'ulong', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_hash_quick_find);

_library.zend_hash_index_find = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'ulong', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_hash_index_find);

_library.zend_hash_exists = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_hash_exists);

_library.zend_hash_quick_exists = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint', 'ulong']];
_library._functions.push(_library.zend_hash_quick_exists);

_library.zend_hash_index_exists = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'ulong']];
_library._functions.push(_library.zend_hash_index_exists);

_library.zend_hash_next_free_element = ['ulong', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_hash_next_free_element);

_library.zend_hash_move_forward_ex = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_hash_move_forward_ex);

_library.zend_hash_move_backwards_ex = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_hash_move_backwards_ex);

_library.zend_hash_get_current_key_ex = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType(ref.refType('char')), ref.refType('uint'), ref.refType('ulong'), 'uchar', _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_hash_get_current_key_ex);

_library.zend_hash_get_current_key_zval_ex = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_hash_get_current_key_zval_ex);

_library.zend_hash_get_current_key_type_ex = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_hash_get_current_key_type_ex);

_library.zend_hash_get_current_data_ex = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType(ref.refType('void')), _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_hash_get_current_data_ex);

_library.zend_hash_internal_pointer_reset_ex = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_hash_internal_pointer_reset_ex);

_library.zend_hash_internal_pointer_end_ex = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_hash_internal_pointer_end_ex);

_library.zend_hash_update_current_key_ex = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'int', ref.refType('char'), 'uint', 'ulong', 'int', _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_hash_update_current_key_ex);

_library._HashPointer = Struct({
    "h": 'ulong',
    "pos": _library.HashPosition
});

_library.HashPointer = _library._HashPointer;

_library.zend_hash_get_pointer = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashPointer ? ref.refType(_library.HashPointer) : 'pointer']];
_library._functions.push(_library.zend_hash_get_pointer);

_library.zend_hash_set_pointer = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashPointer ? ref.refType(_library.HashPointer) : 'pointer']];
_library._functions.push(_library.zend_hash_set_pointer);

_library.zend_hash_copy = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.copy_ctor_func_t, ref.refType('void'), 'uint']];
_library._functions.push(_library.zend_hash_copy);

_library._zend_hash_merge = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.copy_ctor_func_t, ref.refType('void'), 'uint', 'int', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_hash_merge);

_library.zend_hash_merge_ex = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.copy_ctor_func_t, 'uint', _library.merge_checker_func_t, ref.refType('void')]];
_library._functions.push(_library.zend_hash_merge_ex);

_library.zend_hash_sort = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.sort_func_t, _library.compare_func_t, 'int']];
_library._functions.push(_library.zend_hash_sort);

_library.zend_hash_compare = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.compare_func_t, 'uchar']];
_library._functions.push(_library.zend_hash_compare);

_library.zend_hash_minmax = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.compare_func_t, 'int', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_hash_minmax);

_library.zend_hash_num_elements = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_hash_num_elements);

_library.zend_hash_rehash = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_hash_rehash);

_library.zend_hash_reindex = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'uchar']];
_library._functions.push(_library.zend_hash_reindex);

_library._zend_hash_splice = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'uint', _library.copy_ctor_func_t, 'uint', 'uint', ref.refType(ref.refType('void')), 'uint', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._zend_hash_splice);

_library.zend_inline_hash_func = ['ulong', [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_inline_hash_func);

_library.zend_hash_func = ['ulong', [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_hash_func);

_library.zend_hash_display_pListTail = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_hash_display_pListTail);

_library.zend_hash_display = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_hash_display);

_library.zend_symtable_update = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint', ref.refType('void'), 'uint', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_symtable_update);

_library.zend_symtable_del = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_symtable_del);

_library.zend_symtable_find = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_symtable_find);

_library.zend_symtable_exists = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_symtable_exists);

_library.zend_symtable_update_current_key_ex = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint', 'int', _library.HashPosition ? ref.refType(_library.HashPosition) : 'pointer']];
_library._functions.push(_library.zend_symtable_update_current_key_ex);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}
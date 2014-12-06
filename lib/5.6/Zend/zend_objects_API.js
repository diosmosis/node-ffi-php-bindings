var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_objects_store_dtor_t = ffi.Function('void', [ref.refType('void'), 'uint']);

_library.zend_objects_free_object_storage_t = ffi.Function('void', [ref.refType('void')]);

_library.zend_objects_store_clone_t = ffi.Function('void', [ref.refType('void'), ref.refType(ref.refType('void'))]);

_library._store_object = Struct({
    "buffered": _library.gc_root_buffer ? ref.refType(_library.gc_root_buffer) : 'pointer',
    "clone": _library.zend_objects_store_clone_t,
    "dtor": _library.zend_objects_store_dtor_t,
    "free_storage": _library.zend_objects_free_object_storage_t,
    "handlers": _library.zend_object_handlers ? ref.refType(_library.zend_object_handlers) : 'pointer',
    "object": ref.refType('void'),
    "refcount": 'uint'
});

_library._store_bucket = Union({
    "free_list": Struct({
        "next": 'int'
    }),
    "obj": _library._store_object
});

_library._zend_object_store_bucket = Struct({
    "apply_count": 'uchar',
    "bucket": _library._store_bucket,
    "destructor_called": 'uchar',
    "valid": 'uchar'
});

_library.zend_object_store_bucket = _library._zend_object_store_bucket;

_library._zend_objects_store = Struct({
    "free_list_head": 'int',
    "object_buckets": _library.zend_object_store_bucket ? ref.refType(_library.zend_object_store_bucket) : 'pointer',
    "size": 'uint',
    "top": 'uint'
});

_library.zend_objects_store = _library._zend_objects_store;

_library.zend_objects_store_init = ['void', [_library.zend_objects_store ? ref.refType(_library.zend_objects_store) : 'pointer', 'uint']];
_library._functions.push(_library.zend_objects_store_init);

_library.zend_objects_store_call_destructors = ['void', [_library.zend_objects_store ? ref.refType(_library.zend_objects_store) : 'pointer']];
_library._functions.push(_library.zend_objects_store_call_destructors);

_library.zend_objects_store_mark_destructed = ['void', [_library.zend_objects_store ? ref.refType(_library.zend_objects_store) : 'pointer']];
_library._functions.push(_library.zend_objects_store_mark_destructed);

_library.zend_objects_store_destroy = ['void', [_library.zend_objects_store ? ref.refType(_library.zend_objects_store) : 'pointer']];
_library._functions.push(_library.zend_objects_store_destroy);

_library.zend_objects_store_put = ['uint', [ref.refType('void'), _library.zend_objects_store_dtor_t, _library.zend_objects_free_object_storage_t, _library.zend_objects_store_clone_t]];
_library._functions.push(_library.zend_objects_store_put);

_library.zend_objects_store_add_ref = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_objects_store_add_ref);

_library.zend_objects_store_del_ref = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_objects_store_del_ref);

_library.zend_objects_store_add_ref_by_handle = ['void', ['uint']];
_library._functions.push(_library.zend_objects_store_add_ref_by_handle);

_library.zend_objects_store_del_ref_by_handle_ex = ['void', ['uint', _library.zend_object_handlers ? ref.refType(_library.zend_object_handlers) : 'pointer']];
_library._functions.push(_library.zend_objects_store_del_ref_by_handle_ex);

_library.zend_objects_store_del_ref_by_handle = ['void', ['uint']];
_library._functions.push(_library.zend_objects_store_del_ref_by_handle);

_library.zend_objects_store_get_refcount = ['uint', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_objects_store_get_refcount);

_library.zend_objects_store_clone_obj = [_library.zend_object_value, [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_objects_store_clone_obj);

_library.zend_object_store_get_object = [ref.refType('void'), [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_object_store_get_object);

_library.zend_object_store_get_object_by_handle = [ref.refType('void'), ['uint']];
_library._functions.push(_library.zend_object_store_get_object_by_handle);

_library.zend_object_store_set_object = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('void')]];
_library._functions.push(_library.zend_object_store_set_object);

_library.zend_object_store_ctor_failed = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_object_store_ctor_failed);

_library.zend_objects_store_free_object_storage = ['void', [_library.zend_objects_store ? ref.refType(_library.zend_objects_store) : 'pointer']];
_library._functions.push(_library.zend_objects_store_free_object_storage);

_library.zend_object_create_proxy = [_library.zval ? ref.refType(_library.zval) : 'pointer', [_library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_object_create_proxy);

_library.zend_get_std_object_handlers = [_library.zend_object_handlers ? ref.refType(_library.zend_object_handlers) : 'pointer', []];
_library._functions.push(_library.zend_get_std_object_handlers);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_gc.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}
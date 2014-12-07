var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.zend_objects_store_dtor_t = ffi.Function('void', [ref.refType('void'), 'uint']);

_library.zend_objects_free_object_storage_t = ffi.Function('void', [ref.refType('void')]);

_library.zend_objects_store_clone_t = ffi.Function('void', [ref.refType('void'), ref.refType(ref.refType('void'))]);

require('./zend_gc.js');
require('./zend_types.js');
_library._store_object = Struct({});

_library._preload.push(function () {
    _library._store_object.defineProperty("buffered", ref.refType(_library.gc_root_buffer));
    _library._store_object.defineProperty("clone", _library.zend_objects_store_clone_t);
    _library._store_object.defineProperty("dtor", _library.zend_objects_store_dtor_t);
    _library._store_object.defineProperty("free_storage", _library.zend_objects_free_object_storage_t);
    _library._store_object.defineProperty("handlers", ref.refType(_library.zend_object_handlers));
    _library._store_object.defineProperty("object", ref.refType('void'));
    _library._store_object.defineProperty("refcount", 'uint');
});

_library._store_bucket = Union({});

_library._preload.push(function () {
    _library._store_bucket.defineProperty("free_list", Struct({}));
    _library._store_bucket.fields.free_list.type.defineProperty("next", 'int');
    _library._store_bucket.defineProperty("obj", _library._store_object);
});

_library._zend_object_store_bucket = Struct({});

_library._preload.push(function () {
    _library._zend_object_store_bucket.defineProperty("apply_count", 'uchar');
    _library._zend_object_store_bucket.defineProperty("bucket", _library._store_bucket);
    _library._zend_object_store_bucket.defineProperty("destructor_called", 'uchar');
    _library._zend_object_store_bucket.defineProperty("valid", 'uchar');
});

_library.zend_object_store_bucket = _library._zend_object_store_bucket;

_library._zend_objects_store = Struct({});

_library._preload.push(function () {
    _library._zend_objects_store.defineProperty("free_list_head", 'int');
    _library._zend_objects_store.defineProperty("object_buckets", ref.refType(_library.zend_object_store_bucket));
    _library._zend_objects_store.defineProperty("size", 'uint');
    _library._zend_objects_store.defineProperty("top", 'uint');
});

_library.zend_objects_store = _library._zend_objects_store;

_library.zend_objects_store_init = ['void', [ref.refType(_library.zend_objects_store), 'uint']];
_library._functions['zend_objects_store_init'] = _library.zend_objects_store_init;

_library.zend_objects_store_call_destructors = ['void', [ref.refType(_library.zend_objects_store)]];
_library._functions['zend_objects_store_call_destructors'] = _library.zend_objects_store_call_destructors;

_library.zend_objects_store_mark_destructed = ['void', [ref.refType(_library.zend_objects_store)]];
_library._functions['zend_objects_store_mark_destructed'] = _library.zend_objects_store_mark_destructed;

_library.zend_objects_store_destroy = ['void', [ref.refType(_library.zend_objects_store)]];
_library._functions['zend_objects_store_destroy'] = _library.zend_objects_store_destroy;

_library.zend_objects_store_put = ['uint', [ref.refType('void'), _library.zend_objects_store_dtor_t, _library.zend_objects_free_object_storage_t, _library.zend_objects_store_clone_t]];
_library._functions['zend_objects_store_put'] = _library.zend_objects_store_put;

_library.zend_objects_store_add_ref = ['void', [ref.refType(_library.zval)]];
_library._functions['zend_objects_store_add_ref'] = _library.zend_objects_store_add_ref;

_library.zend_objects_store_del_ref = ['void', [ref.refType(_library.zval)]];
_library._functions['zend_objects_store_del_ref'] = _library.zend_objects_store_del_ref;

_library.zend_objects_store_add_ref_by_handle = ['void', ['uint']];
_library._functions['zend_objects_store_add_ref_by_handle'] = _library.zend_objects_store_add_ref_by_handle;

_library.zend_objects_store_del_ref_by_handle_ex = ['void', ['uint', ref.refType(_library.zend_object_handlers)]];
_library._functions['zend_objects_store_del_ref_by_handle_ex'] = _library.zend_objects_store_del_ref_by_handle_ex;

_library.zend_objects_store_del_ref_by_handle = ['void', ['uint']];
_library._functions['zend_objects_store_del_ref_by_handle'] = _library.zend_objects_store_del_ref_by_handle;

_library.zend_objects_store_get_refcount = ['uint', [ref.refType(_library.zval)]];
_library._functions['zend_objects_store_get_refcount'] = _library.zend_objects_store_get_refcount;

_library.zend_objects_store_clone_obj = [_library.zend_object_value, [ref.refType(_library.zval)]];
_library._functions['zend_objects_store_clone_obj'] = _library.zend_objects_store_clone_obj;

_library.zend_object_store_get_object = [ref.refType('void'), [ref.refType(_library.zval)]];
_library._functions['zend_object_store_get_object'] = _library.zend_object_store_get_object;

_library.zend_object_store_get_object_by_handle = [ref.refType('void'), ['uint']];
_library._functions['zend_object_store_get_object_by_handle'] = _library.zend_object_store_get_object_by_handle;

_library.zend_object_store_set_object = ['void', [ref.refType(_library.zval), ref.refType('void')]];
_library._functions['zend_object_store_set_object'] = _library.zend_object_store_set_object;

_library.zend_object_store_ctor_failed = ['void', [ref.refType(_library.zval)]];
_library._functions['zend_object_store_ctor_failed'] = _library.zend_object_store_ctor_failed;

_library.zend_objects_store_free_object_storage = ['void', [ref.refType(_library.zend_objects_store)]];
_library._functions['zend_objects_store_free_object_storage'] = _library.zend_objects_store_free_object_storage;

_library.zend_object_create_proxy = [ref.refType(_library.zval), [ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions['zend_object_create_proxy'] = _library.zend_object_create_proxy;

_library.zend_get_std_object_handlers = [ref.refType(_library.zend_object_handlers), []];
_library._functions['zend_get_std_object_handlers'] = _library.zend_get_std_object_handlers;


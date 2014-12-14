var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_objects_store_dtor_t'] = ['void (void *, zend_object_handle)', function () {
    _library.zend_objects_store_dtor_t = ffi.Function('void', [ref.refType('void'), 'uint']);
}];

_library._preload['zend_objects_free_object_storage_t'] = ['void (void *)', function () {
    _library.zend_objects_free_object_storage_t = ffi.Function('void', [ref.refType('void')]);
}];

_library._preload['zend_objects_store_clone_t'] = ['void (void *, void **)', function () {
    _library.zend_objects_store_clone_t = ffi.Function('void', [ref.refType('void'), ref.refType(ref.refType('void'))]);
}];

_library._store_object = Struct({});
_library._store_object.size = 1;

_library._preload['_store_object'] = ['zend_objects_store_dtor_t', 'zend_objects_free_object_storage_t', 'zend_objects_store_clone_t', 'zend_object_handlers', 'gc_root_buffer', function () {
    _library._store_object.size = 0;
    _library._store_object.defineProperty("object", ref.refType('void'));
    _library._store_object.defineProperty("dtor", _library.zend_objects_store_dtor_t);
    _library._store_object.defineProperty("free_storage", _library.zend_objects_free_object_storage_t);
    _library._store_object.defineProperty("clone", _library.zend_objects_store_clone_t);
    _library._store_object.defineProperty("handlers", ref.refType(_library.zend_object_handlers));
    _library._store_object.defineProperty("refcount", 'uint');
    _library._store_object.defineProperty("buffered", ref.refType(_library.gc_root_buffer));
}];

_library._store_bucket = Union({});
_library._store_bucket.size = 1;

_library._preload['_store_bucket'] = ['_store_object', function () {
    _library._store_bucket.size = 0;
    _library._store_bucket.defineProperty("obj", _library._store_object);
    _library._store_bucket.defineProperty("free_list", (function () {
        var temp = Struct({});
        temp.defineProperty("next", 'int');
        return temp;
    })());
}];

_library._zend_object_store_bucket = Struct({});
_library._zend_object_store_bucket.size = 1;

_library._preload['_zend_object_store_bucket'] = ['_store_bucket', function () {
    _library._zend_object_store_bucket.size = 0;
    _library._zend_object_store_bucket.defineProperty("destructor_called", 'uchar');
    _library._zend_object_store_bucket.defineProperty("valid", 'uchar');
    _library._zend_object_store_bucket.defineProperty("apply_count", 'uchar');
    _library._zend_object_store_bucket.defineProperty("bucket", _library._store_bucket);
}];

_library._preload['zend_object_store_bucket'] = [function () {
    _library.zend_object_store_bucket = _library._zend_object_store_bucket;
}];

_library._zend_objects_store = Struct({});
_library._zend_objects_store.size = 1;

_library._preload['_zend_objects_store'] = ['zend_object_store_bucket', function () {
    _library._zend_objects_store.size = 0;
    _library._zend_objects_store.defineProperty("object_buckets", ref.refType(_library.zend_object_store_bucket));
    _library._zend_objects_store.defineProperty("top", 'uint');
    _library._zend_objects_store.defineProperty("size", 'uint');
    _library._zend_objects_store.defineProperty("free_list_head", 'int');
}];

_library._preload['zend_objects_store'] = [function () {
    _library.zend_objects_store = _library._zend_objects_store;
}];

_library._preload['zend_objects_store_init'] = ['zend_objects_store', function () {
    _library.zend_objects_store_init = ['void', [ref.refType(_library.zend_objects_store), 'uint']];
    _library._functions['zend_objects_store_init'] = _library.zend_objects_store_init;
}];

_library._preload['zend_objects_store_call_destructors'] = ['zend_objects_store', function () {
    _library.zend_objects_store_call_destructors = ['void', [ref.refType(_library.zend_objects_store)]];
    _library._functions['zend_objects_store_call_destructors'] = _library.zend_objects_store_call_destructors;
}];

_library._preload['zend_objects_store_mark_destructed'] = ['zend_objects_store', function () {
    _library.zend_objects_store_mark_destructed = ['void', [ref.refType(_library.zend_objects_store)]];
    _library._functions['zend_objects_store_mark_destructed'] = _library.zend_objects_store_mark_destructed;
}];

_library._preload['zend_objects_store_destroy'] = ['zend_objects_store', function () {
    _library.zend_objects_store_destroy = ['void', [ref.refType(_library.zend_objects_store)]];
    _library._functions['zend_objects_store_destroy'] = _library.zend_objects_store_destroy;
}];

_library._preload['zend_objects_store_put'] = ['zend_objects_store_dtor_t', 'zend_objects_free_object_storage_t', 'zend_objects_store_clone_t', function () {
    _library.zend_objects_store_put = ['uint', [ref.refType('void'), _library.zend_objects_store_dtor_t, _library.zend_objects_free_object_storage_t, _library.zend_objects_store_clone_t]];
    _library._functions['zend_objects_store_put'] = _library.zend_objects_store_put;
}];

_library._preload['zend_objects_store_add_ref'] = ['zval', function () {
    _library.zend_objects_store_add_ref = ['void', [ref.refType(_library.zval)]];
    _library._functions['zend_objects_store_add_ref'] = _library.zend_objects_store_add_ref;
}];

_library._preload['zend_objects_store_del_ref'] = ['zval', function () {
    _library.zend_objects_store_del_ref = ['void', [ref.refType(_library.zval)]];
    _library._functions['zend_objects_store_del_ref'] = _library.zend_objects_store_del_ref;
}];

_library._preload['zend_objects_store_add_ref_by_handle'] = [function () {
    _library.zend_objects_store_add_ref_by_handle = ['void', ['uint']];
    _library._functions['zend_objects_store_add_ref_by_handle'] = _library.zend_objects_store_add_ref_by_handle;
}];

_library._preload['zend_objects_store_del_ref_by_handle_ex'] = ['zend_object_handlers', function () {
    _library.zend_objects_store_del_ref_by_handle_ex = ['void', ['uint', ref.refType(_library.zend_object_handlers)]];
    _library._functions['zend_objects_store_del_ref_by_handle_ex'] = _library.zend_objects_store_del_ref_by_handle_ex;
}];

_library._preload['zend_objects_store_get_refcount'] = ['zval', function () {
    _library.zend_objects_store_get_refcount = ['uint', [ref.refType(_library.zval)]];
    _library._functions['zend_objects_store_get_refcount'] = _library.zend_objects_store_get_refcount;
}];

_library._preload['zend_objects_store_clone_obj'] = ['zend_object_value', 'zval', function () {
    _library.zend_objects_store_clone_obj = [_library.zend_object_value, [ref.refType(_library.zval)]];
    _library._functions['zend_objects_store_clone_obj'] = _library.zend_objects_store_clone_obj;
}];

_library._preload['zend_object_store_get_object'] = ['zval', function () {
    _library.zend_object_store_get_object = [ref.refType('void'), [ref.refType(_library.zval)]];
    _library._functions['zend_object_store_get_object'] = _library.zend_object_store_get_object;
}];

_library._preload['zend_object_store_get_object_by_handle'] = [function () {
    _library.zend_object_store_get_object_by_handle = [ref.refType('void'), ['uint']];
    _library._functions['zend_object_store_get_object_by_handle'] = _library.zend_object_store_get_object_by_handle;
}];

_library._preload['zend_object_store_set_object'] = ['zval', function () {
    _library.zend_object_store_set_object = ['void', [ref.refType(_library.zval), ref.refType('void')]];
    _library._functions['zend_object_store_set_object'] = _library.zend_object_store_set_object;
}];

_library._preload['zend_object_store_ctor_failed'] = ['zval', function () {
    _library.zend_object_store_ctor_failed = ['void', [ref.refType(_library.zval)]];
    _library._functions['zend_object_store_ctor_failed'] = _library.zend_object_store_ctor_failed;
}];

_library._preload['zend_objects_store_free_object_storage'] = ['zend_objects_store', function () {
    _library.zend_objects_store_free_object_storage = ['void', [ref.refType(_library.zend_objects_store)]];
    _library._functions['zend_objects_store_free_object_storage'] = _library.zend_objects_store_free_object_storage;
}];

_library._preload['zend_object_create_proxy'] = ['zval', 'zval', 'zval', function () {
    _library.zend_object_create_proxy = [ref.refType(_library.zval), [ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zend_object_create_proxy'] = _library.zend_object_create_proxy;
}];

_library._preload['zend_get_std_object_handlers'] = ['zend_object_handlers', function () {
    _library.zend_get_std_object_handlers = [ref.refType(_library.zend_object_handlers), []];
    _library._functions['zend_get_std_object_handlers'] = _library.zend_get_std_object_handlers;
}];

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

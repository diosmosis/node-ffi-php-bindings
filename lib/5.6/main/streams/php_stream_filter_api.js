var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library._php_stream_bucket = Struct({});

_library._preload.push(function () {
    _library._php_stream_bucket.defineProperty("brigade", ref.refType(_library.php_stream_bucket_brigade));
    _library._php_stream_bucket.defineProperty("buf", ref.refType('char'));
    _library._php_stream_bucket.defineProperty("buflen", 'ulong');
    _library._php_stream_bucket.defineProperty("is_persistent", 'int');
    _library._php_stream_bucket.defineProperty("next", ref.refType(_library.php_stream_bucket));
    _library._php_stream_bucket.defineProperty("own_buf", 'int');
    _library._php_stream_bucket.defineProperty("prev", ref.refType(_library.php_stream_bucket));
    _library._php_stream_bucket.defineProperty("refcount", 'int');
});

_library.php_stream_bucket = _library._php_stream_bucket;

_library._php_stream_bucket_brigade = Struct({});

_library._preload.push(function () {
    _library._php_stream_bucket_brigade.defineProperty("head", ref.refType(_library.php_stream_bucket));
    _library._php_stream_bucket_brigade.defineProperty("tail", ref.refType(_library.php_stream_bucket));
});

_library.php_stream_bucket_brigade = _library._php_stream_bucket_brigade;

require('./php_streams.js');
_library._php_stream_filter_chain = Struct({});

_library._preload.push(function () {
    _library._php_stream_filter_chain.defineProperty("head", ref.refType(_library.php_stream_filter));
    _library._php_stream_filter_chain.defineProperty("stream", ref.refType(_library.php_stream));
    _library._php_stream_filter_chain.defineProperty("tail", ref.refType(_library.php_stream_filter));
});

_library.php_stream_filter_chain = _library._php_stream_filter_chain;

_library.php_stream_filter_status_t = 'int32';

_library._php_stream_filter_ops = Struct({});

_library._preload.push(function () {
    _library._php_stream_filter_ops.defineProperty("dtor", ffi.Function('void', [ref.refType(_library._php_stream_filter)]));
    _library._php_stream_filter_ops.defineProperty("filter", ffi.Function(_library.php_stream_filter_status_t, [ref.refType(_library._php_stream), ref.refType(_library._php_stream_filter), ref.refType(_library._php_stream_bucket_brigade), ref.refType(_library._php_stream_bucket_brigade), ref.refType('ulong'), 'int']));
    _library._php_stream_filter_ops.defineProperty("label", ref.refType('char'));
});

_library.php_stream_filter_ops = _library._php_stream_filter_ops;

_library._php_stream_filter = Struct({});

_library._preload.push(function () {
    _library._php_stream_filter.defineProperty("abstract", ref.refType('void'));
    _library._php_stream_filter.defineProperty("buffer", _library.php_stream_bucket_brigade);
    _library._php_stream_filter.defineProperty("chain", ref.refType(_library.php_stream_filter_chain));
    _library._php_stream_filter.defineProperty("fops", ref.refType(_library.php_stream_filter_ops));
    _library._php_stream_filter.defineProperty("is_persistent", 'int');
    _library._php_stream_filter.defineProperty("next", ref.refType(_library.php_stream_filter));
    _library._php_stream_filter.defineProperty("prev", ref.refType(_library.php_stream_filter));
    _library._php_stream_filter.defineProperty("rsrc_id", 'int');
});

_library.php_stream_bucket_new = [ref.refType(_library.php_stream_bucket), [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'int', 'int']];
_library._functions['php_stream_bucket_new'] = _library.php_stream_bucket_new;

_library.php_stream_bucket_split = ['int', [ref.refType(_library.php_stream_bucket), ref.refType(ref.refType(_library.php_stream_bucket)), ref.refType(ref.refType(_library.php_stream_bucket)), 'ulong']];
_library._functions['php_stream_bucket_split'] = _library.php_stream_bucket_split;

_library.php_stream_bucket_delref = ['void', [ref.refType(_library.php_stream_bucket)]];
_library._functions['php_stream_bucket_delref'] = _library.php_stream_bucket_delref;

_library.php_stream_bucket_prepend = ['void', [ref.refType(_library.php_stream_bucket_brigade), ref.refType(_library.php_stream_bucket)]];
_library._functions['php_stream_bucket_prepend'] = _library.php_stream_bucket_prepend;

_library.php_stream_bucket_append = ['void', [ref.refType(_library.php_stream_bucket_brigade), ref.refType(_library.php_stream_bucket)]];
_library._functions['php_stream_bucket_append'] = _library.php_stream_bucket_append;

_library.php_stream_bucket_unlink = ['void', [ref.refType(_library.php_stream_bucket)]];
_library._functions['php_stream_bucket_unlink'] = _library.php_stream_bucket_unlink;

_library.php_stream_bucket_make_writeable = [ref.refType(_library.php_stream_bucket), [ref.refType(_library.php_stream_bucket)]];
_library._functions['php_stream_bucket_make_writeable'] = _library.php_stream_bucket_make_writeable;

_library._php_stream_filter_prepend = ['void', [ref.refType(_library.php_stream_filter_chain), ref.refType(_library.php_stream_filter)]];
_library._functions['_php_stream_filter_prepend'] = _library._php_stream_filter_prepend;

_library.php_stream_filter_prepend_ex = ['int', [ref.refType(_library.php_stream_filter_chain), ref.refType(_library.php_stream_filter)]];
_library._functions['php_stream_filter_prepend_ex'] = _library.php_stream_filter_prepend_ex;

_library._php_stream_filter_append = ['void', [ref.refType(_library.php_stream_filter_chain), ref.refType(_library.php_stream_filter)]];
_library._functions['_php_stream_filter_append'] = _library._php_stream_filter_append;

_library.php_stream_filter_append_ex = ['int', [ref.refType(_library.php_stream_filter_chain), ref.refType(_library.php_stream_filter)]];
_library._functions['php_stream_filter_append_ex'] = _library.php_stream_filter_append_ex;

_library._php_stream_filter_flush = ['int', [ref.refType(_library.php_stream_filter), 'int']];
_library._functions['_php_stream_filter_flush'] = _library._php_stream_filter_flush;

_library.php_stream_filter_remove = [ref.refType(_library.php_stream_filter), [ref.refType(_library.php_stream_filter), 'int']];
_library._functions['php_stream_filter_remove'] = _library.php_stream_filter_remove;

_library.php_stream_filter_free = ['void', [ref.refType(_library.php_stream_filter)]];
_library._functions['php_stream_filter_free'] = _library.php_stream_filter_free;

_library._php_stream_filter_alloc = [ref.refType(_library.php_stream_filter), [ref.refType(_library.php_stream_filter_ops), ref.refType('void'), 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_filter_alloc'] = _library._php_stream_filter_alloc;

_library._php_stream_filter_factory = Struct({});

_library._preload.push(function () {
    _library._php_stream_filter_factory.defineProperty("create_filter", ffi.Function(ref.refType(_library._php_stream_filter), [ref.refType('char'), ref.refType(_library._zval_struct), 'int']));
});

_library.php_stream_filter_factory = _library._php_stream_filter_factory;

_library.php_stream_filter_register_factory = ['int', [ref.refType('char'), ref.refType(_library.php_stream_filter_factory)]];
_library._functions['php_stream_filter_register_factory'] = _library.php_stream_filter_register_factory;

_library.php_stream_filter_unregister_factory = ['int', [ref.refType('char')]];
_library._functions['php_stream_filter_unregister_factory'] = _library.php_stream_filter_unregister_factory;

_library.php_stream_filter_register_factory_volatile = ['int', [ref.refType('char'), ref.refType(_library.php_stream_filter_factory)]];
_library._functions['php_stream_filter_register_factory_volatile'] = _library.php_stream_filter_register_factory_volatile;

require('./zend_types.js');
_library.php_stream_filter_create = [ref.refType(_library.php_stream_filter), [ref.refType('char'), ref.refType(_library.zval), 'int']];
_library._functions['php_stream_filter_create'] = _library.php_stream_filter_create;


var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._php_stream_bucket_brigade = Struct({
    "head": ref.refType(_library.php_stream_bucket),
    "tail": ref.refType(_library.php_stream_bucket)
});

_library.php_stream_bucket_brigade = _library._php_stream_bucket_brigade;

_library._php_stream_filter = Struct({
    "abstract": ref.refType('void'),
    "buffer": _library.php_stream_bucket_brigade,
    "chain": ref.refType(_library.php_stream_filter_chain),
    "fops": ref.refType(_library.php_stream_filter_ops),
    "is_persistent": 'int',
    "next": ref.refType(_library.php_stream_filter),
    "prev": ref.refType(_library.php_stream_filter),
    "rsrc_id": 'int'
});

_library._php_stream_bucket = Struct({
    "brigade": ref.refType(_library.php_stream_bucket_brigade),
    "buf": ref.refType('char'),
    "buflen": 'ulong',
    "is_persistent": 'int',
    "next": ref.refType(_library.php_stream_bucket),
    "own_buf": 'int',
    "prev": ref.refType(_library.php_stream_bucket),
    "refcount": 'int'
});

_library._php_stream_bucket = Struct({
    "brigade": ref.refType(_library.php_stream_bucket_brigade),
    "buf": ref.refType('char'),
    "buflen": 'ulong',
    "is_persistent": 'int',
    "next": ref.refType(_library.php_stream_bucket),
    "own_buf": 'int',
    "prev": ref.refType(_library.php_stream_bucket),
    "refcount": 'int'
});

_library.php_stream_bucket = _library._php_stream_bucket;

_library._php_stream_bucket_brigade = Struct({
    "head": ref.refType(_library.php_stream_bucket),
    "tail": ref.refType(_library.php_stream_bucket)
});

_library.php_stream_filter_status_t = 'int32';

_library.php_stream_bucket_new = [ref.refType(_library.php_stream_bucket), [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'int', 'int']];
_library._functions.push(_library.php_stream_bucket_new);

_library.php_stream_bucket_split = ['int', [ref.refType(_library.php_stream_bucket), ref.refType(ref.refType(_library.php_stream_bucket)), ref.refType(ref.refType(_library.php_stream_bucket)), 'ulong']];
_library._functions.push(_library.php_stream_bucket_split);

_library.php_stream_bucket_delref = ['void', [ref.refType(_library.php_stream_bucket)]];
_library._functions.push(_library.php_stream_bucket_delref);

_library.php_stream_bucket_prepend = ['void', [ref.refType(_library.php_stream_bucket_brigade), ref.refType(_library.php_stream_bucket)]];
_library._functions.push(_library.php_stream_bucket_prepend);

_library.php_stream_bucket_append = ['void', [ref.refType(_library.php_stream_bucket_brigade), ref.refType(_library.php_stream_bucket)]];
_library._functions.push(_library.php_stream_bucket_append);

_library.php_stream_bucket_unlink = ['void', [ref.refType(_library.php_stream_bucket)]];
_library._functions.push(_library.php_stream_bucket_unlink);

_library.php_stream_bucket_make_writeable = [ref.refType(_library.php_stream_bucket), [ref.refType(_library.php_stream_bucket)]];
_library._functions.push(_library.php_stream_bucket_make_writeable);

_library._php_stream_filter_ops = Struct({
    "dtor": ffi.Function('void', [ref.refType(_library._php_stream_filter)]),
    "filter": ffi.Function(_library.php_stream_filter_status_t, [ref.refType(_library._php_stream), ref.refType(_library._php_stream_filter), ref.refType(_library._php_stream_bucket_brigade), ref.refType(_library._php_stream_bucket_brigade), ref.refType('ulong'), 'int']),
    "label": ref.refType('char')
});

_library.php_stream_filter_ops = _library._php_stream_filter_ops;

_library._php_stream_filter_chain = Struct({
    "head": ref.refType(_library.php_stream_filter),
    "stream": ref.refType(_library.php_stream),
    "tail": ref.refType(_library.php_stream_filter)
});

_library.php_stream_filter_chain = _library._php_stream_filter_chain;

_library._php_stream_filter_prepend = ['void', [ref.refType(_library.php_stream_filter_chain), ref.refType(_library.php_stream_filter)]];
_library._functions.push(_library._php_stream_filter_prepend);

_library.php_stream_filter_prepend_ex = ['int', [ref.refType(_library.php_stream_filter_chain), ref.refType(_library.php_stream_filter)]];
_library._functions.push(_library.php_stream_filter_prepend_ex);

_library._php_stream_filter_append = ['void', [ref.refType(_library.php_stream_filter_chain), ref.refType(_library.php_stream_filter)]];
_library._functions.push(_library._php_stream_filter_append);

_library.php_stream_filter_append_ex = ['int', [ref.refType(_library.php_stream_filter_chain), ref.refType(_library.php_stream_filter)]];
_library._functions.push(_library.php_stream_filter_append_ex);

_library._php_stream_filter_flush = ['int', [ref.refType(_library.php_stream_filter), 'int']];
_library._functions.push(_library._php_stream_filter_flush);

_library.php_stream_filter_remove = [ref.refType(_library.php_stream_filter), [ref.refType(_library.php_stream_filter), 'int']];
_library._functions.push(_library.php_stream_filter_remove);

_library.php_stream_filter_free = ['void', [ref.refType(_library.php_stream_filter)]];
_library._functions.push(_library.php_stream_filter_free);

_library._php_stream_filter_alloc = [ref.refType(_library.php_stream_filter), [ref.refType(_library.php_stream_filter_ops), ref.refType('void'), 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_filter_alloc);

_library._php_stream_filter_factory = Struct({
    "create_filter": ffi.Function(ref.refType(_library._php_stream_filter), [ref.refType('char'), ref.refType(_library._zval_struct), 'int'])
});

_library.php_stream_filter_factory = _library._php_stream_filter_factory;

_library.php_stream_filter_register_factory = ['int', [ref.refType('char'), ref.refType(_library.php_stream_filter_factory)]];
_library._functions.push(_library.php_stream_filter_register_factory);

_library.php_stream_filter_unregister_factory = ['int', [ref.refType('char')]];
_library._functions.push(_library.php_stream_filter_unregister_factory);

_library.php_stream_filter_register_factory_volatile = ['int', [ref.refType('char'), ref.refType(_library.php_stream_filter_factory)]];
_library._functions.push(_library.php_stream_filter_register_factory_volatile);

_library.php_stream_filter_create = [ref.refType(_library.php_stream_filter), [ref.refType('char'), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_stream_filter_create);

function loadDependentSymbols() {
};
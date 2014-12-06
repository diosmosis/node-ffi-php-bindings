var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._php_stream_bucket = Struct({
    "brigade": _library.php_stream_bucket_brigade ? ref.refType(_library.php_stream_bucket_brigade) : 'pointer',
    "buf": ref.refType('char'),
    "buflen": 'ulong',
    "is_persistent": 'int',
    "next": _library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer',
    "own_buf": 'int',
    "prev": _library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer',
    "refcount": 'int'
});

_library.php_stream_bucket = _library._php_stream_bucket;

_library._php_stream_bucket_brigade = Struct({
    "head": _library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer',
    "tail": _library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer'
});

_library.php_stream_bucket_brigade = _library._php_stream_bucket_brigade;

_library._php_stream_filter_chain = Struct({
    "head": _library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer',
    "stream": _library.php_stream ? ref.refType(_library.php_stream) : 'pointer',
    "tail": _library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer'
});

_library.php_stream_filter_chain = _library._php_stream_filter_chain;

_library.php_stream_filter_status_t = 'int32';

_library._php_stream_filter_ops = Struct({
    "dtor": ffi.Function('void', [_library._php_stream_filter ? ref.refType(_library._php_stream_filter) : 'pointer']),
    "filter": ffi.Function(_library.php_stream_filter_status_t, [_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', _library._php_stream_filter ? ref.refType(_library._php_stream_filter) : 'pointer', _library._php_stream_bucket_brigade ? ref.refType(_library._php_stream_bucket_brigade) : 'pointer', _library._php_stream_bucket_brigade ? ref.refType(_library._php_stream_bucket_brigade) : 'pointer', ref.refType('ulong'), 'int']),
    "label": ref.refType('char')
});

_library.php_stream_filter_ops = _library._php_stream_filter_ops;

_library._php_stream_filter = Struct({
    "abstract": ref.refType('void'),
    "buffer": _library.php_stream_bucket_brigade,
    "chain": _library.php_stream_filter_chain ? ref.refType(_library.php_stream_filter_chain) : 'pointer',
    "fops": _library.php_stream_filter_ops ? ref.refType(_library.php_stream_filter_ops) : 'pointer',
    "is_persistent": 'int',
    "next": _library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer',
    "prev": _library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer',
    "rsrc_id": 'int'
});

_library.php_stream_bucket_new = [_library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char'), 'ulong', 'int', 'int']];
_library._functions.push(_library.php_stream_bucket_new);

_library.php_stream_bucket_split = ['int', [_library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer', ref.refType(_library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer'), ref.refType(_library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer'), 'ulong']];
_library._functions.push(_library.php_stream_bucket_split);

_library.php_stream_bucket_delref = ['void', [_library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer']];
_library._functions.push(_library.php_stream_bucket_delref);

_library.php_stream_bucket_prepend = ['void', [_library.php_stream_bucket_brigade ? ref.refType(_library.php_stream_bucket_brigade) : 'pointer', _library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer']];
_library._functions.push(_library.php_stream_bucket_prepend);

_library.php_stream_bucket_append = ['void', [_library.php_stream_bucket_brigade ? ref.refType(_library.php_stream_bucket_brigade) : 'pointer', _library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer']];
_library._functions.push(_library.php_stream_bucket_append);

_library.php_stream_bucket_unlink = ['void', [_library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer']];
_library._functions.push(_library.php_stream_bucket_unlink);

_library.php_stream_bucket_make_writeable = [_library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer', [_library.php_stream_bucket ? ref.refType(_library.php_stream_bucket) : 'pointer']];
_library._functions.push(_library.php_stream_bucket_make_writeable);

_library._php_stream_filter_prepend = ['void', [_library.php_stream_filter_chain ? ref.refType(_library.php_stream_filter_chain) : 'pointer', _library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer']];
_library._functions.push(_library._php_stream_filter_prepend);

_library.php_stream_filter_prepend_ex = ['int', [_library.php_stream_filter_chain ? ref.refType(_library.php_stream_filter_chain) : 'pointer', _library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer']];
_library._functions.push(_library.php_stream_filter_prepend_ex);

_library._php_stream_filter_append = ['void', [_library.php_stream_filter_chain ? ref.refType(_library.php_stream_filter_chain) : 'pointer', _library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer']];
_library._functions.push(_library._php_stream_filter_append);

_library.php_stream_filter_append_ex = ['int', [_library.php_stream_filter_chain ? ref.refType(_library.php_stream_filter_chain) : 'pointer', _library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer']];
_library._functions.push(_library.php_stream_filter_append_ex);

_library._php_stream_filter_flush = ['int', [_library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer', 'int']];
_library._functions.push(_library._php_stream_filter_flush);

_library.php_stream_filter_remove = [_library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer', [_library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer', 'int']];
_library._functions.push(_library.php_stream_filter_remove);

_library.php_stream_filter_free = ['void', [_library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer']];
_library._functions.push(_library.php_stream_filter_free);

_library._php_stream_filter_alloc = [_library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer', [_library.php_stream_filter_ops ? ref.refType(_library.php_stream_filter_ops) : 'pointer', ref.refType('void'), 'int', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_filter_alloc);

_library._php_stream_filter_factory = Struct({
    "create_filter": ffi.Function(_library._php_stream_filter ? ref.refType(_library._php_stream_filter) : 'pointer', [ref.refType('char'), _library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer', 'int'])
});

_library.php_stream_filter_factory = _library._php_stream_filter_factory;

_library.php_stream_filter_register_factory = ['int', [ref.refType('char'), _library.php_stream_filter_factory ? ref.refType(_library.php_stream_filter_factory) : 'pointer']];
_library._functions.push(_library.php_stream_filter_register_factory);

_library.php_stream_filter_unregister_factory = ['int', [ref.refType('char')]];
_library._functions.push(_library.php_stream_filter_unregister_factory);

_library.php_stream_filter_register_factory_volatile = ['int', [ref.refType('char'), _library.php_stream_filter_factory ? ref.refType(_library.php_stream_filter_factory) : 'pointer']];
_library._functions.push(_library.php_stream_filter_register_factory_volatile);

_library.php_stream_filter_create = [_library.php_stream_filter ? ref.refType(_library.php_stream_filter) : 'pointer', [ref.refType('char'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.php_stream_filter_create);

function loadDependentSymbols() {
    require('./../../Zend/zend.js');
    require('./../../Zend/zend_API.js');
    require('./../../Zend/zend_ast.js');
    require('./../../Zend/zend_compile.js');
    require('./../../Zend/zend_hash.js');
    require('./../../Zend/zend_ini.js');
    require('./../../Zend/zend_iterators.js');
    require('./../../Zend/zend_modules.js');
    require('./../../Zend/zend_object_handlers.js');
    require('./../../Zend/zend_types.js');
    require('./../php_streams.js');
    require('./php_stream_context.js');
}
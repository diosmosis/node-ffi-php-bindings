var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_stream_notification_func = ffi.Function('void', [_library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer', 'int', 'int', ref.refType('char'), 'int', 'ulong', 'ulong', ref.refType('void')]);

_library._php_stream_notifier = Struct({
    "dtor": ffi.Function('void', [_library._php_stream_notifier ? ref.refType(_library._php_stream_notifier) : 'pointer']),
    "func": _library.php_stream_notification_func,
    "mask": 'int',
    "progress": 'ulong',
    "progress_max": 'ulong',
    "ptr": ref.refType('void')
});

_library.php_stream_notifier = _library._php_stream_notifier;

_library._php_stream_context = Struct({
    "notifier": _library.php_stream_notifier ? ref.refType(_library.php_stream_notifier) : 'pointer',
    "options": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "rsrc_id": 'int'
});

_library.php_stream_context_free = ['void', [_library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer']];
_library._functions.push(_library.php_stream_context_free);

_library.php_stream_context_alloc = [_library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', []];
_library._functions.push(_library.php_stream_context_alloc);

_library.php_stream_context_get_option = ['int', [_library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', ref.refType('char'), ref.refType('char'), _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer') : 'pointer']];
_library._functions.push(_library.php_stream_context_get_option);

_library.php_stream_context_set_option = ['int', [_library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', ref.refType('char'), ref.refType('char'), _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.php_stream_context_set_option);

_library.php_stream_notification_alloc = [_library.php_stream_notifier ? ref.refType(_library.php_stream_notifier) : 'pointer', []];
_library._functions.push(_library.php_stream_notification_alloc);

_library.php_stream_notification_free = ['void', [_library.php_stream_notifier ? ref.refType(_library.php_stream_notifier) : 'pointer']];
_library._functions.push(_library.php_stream_notification_free);

_library.php_stream_notification_notify = ['void', [_library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', 'int', 'int', ref.refType('char'), 'int', 'ulong', 'ulong', ref.refType('void')]];
_library._functions.push(_library.php_stream_notification_notify);

_library.php_stream_context_set = [_library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer']];
_library._functions.push(_library.php_stream_context_set);

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
    require('./php_stream_filter_api.js');
}
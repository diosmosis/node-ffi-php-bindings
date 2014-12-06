var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_stream_notification_func = ffi.Function('void', [ref.refType(_library._php_stream_context), 'int', 'int', 'char' ? ref.refType('char') : 'pointer', 'int', 'ulong', 'ulong', 'void' ? ref.refType('void') : 'pointer']);

_library._php_stream_notifier = Struct({
    "dtor": ffi.Function('void', [ref.refType(_library._php_stream_notifier)]),
    "func": _library.php_stream_notification_func,
    "mask": 'int',
    "progress": 'ulong',
    "progress_max": 'ulong',
    "ptr": 'void' ? ref.refType('void') : 'pointer'
});

_library.php_stream_notifier = _library._php_stream_notifier;

_library._php_stream_context = Struct({
    "notifier": ref.refType(_library.php_stream_notifier),
    "options": ref.refType(_library.zval),
    "rsrc_id": 'int'
});

_library.php_stream_context_free = ['void', [ref.refType(_library.php_stream_context)]];
_library._functions.push(_library.php_stream_context_free);

_library.php_stream_context_alloc = [ref.refType(_library.php_stream_context), []];
_library._functions.push(_library.php_stream_context_alloc);

_library.php_stream_context_get_option = ['int', [ref.refType(_library.php_stream_context), 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer' ? ref.refType(ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer') : 'pointer']];
_library._functions.push(_library.php_stream_context_get_option);

_library.php_stream_context_set_option = ['int', [ref.refType(_library.php_stream_context), 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', ref.refType(_library.zval)]];
_library._functions.push(_library.php_stream_context_set_option);

_library.php_stream_notification_alloc = [ref.refType(_library.php_stream_notifier), []];
_library._functions.push(_library.php_stream_notification_alloc);

_library.php_stream_notification_free = ['void', [ref.refType(_library.php_stream_notifier)]];
_library._functions.push(_library.php_stream_notification_free);

_library.php_stream_notification_notify = ['void', [ref.refType(_library.php_stream_context), 'int', 'int', 'char' ? ref.refType('char') : 'pointer', 'int', 'ulong', 'ulong', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.php_stream_notification_notify);

_library.php_stream_context_set = [ref.refType(_library.php_stream_context), [ref.refType(_library.php_stream), ref.refType(_library.php_stream_context)]];
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
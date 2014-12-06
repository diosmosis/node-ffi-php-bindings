var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._php_stream_context = Struct({
    "notifier": ref.refType(_library.php_stream_notifier),
    "options": ref.refType(_library.zval),
    "rsrc_id": 'int'
});

_library.php_stream_notification_func = ffi.Function('void', [ref.refType(_library._php_stream_context), 'int', 'int', ref.refType('char'), 'int', 'ulong', 'ulong', ref.refType('void')]);

_library._php_stream_notifier = Struct({
    "dtor": ffi.Function('void', [ref.refType(_library._php_stream_notifier)]),
    "func": _library.php_stream_notification_func,
    "mask": 'int',
    "progress": 'ulong',
    "progress_max": 'ulong',
    "ptr": ref.refType('void')
});

_library._php_stream_notifier = Struct({
    "dtor": ffi.Function('void', [ref.refType(_library._php_stream_notifier)]),
    "func": _library.php_stream_notification_func,
    "mask": 'int',
    "progress": 'ulong',
    "progress_max": 'ulong',
    "ptr": ref.refType('void')
});

_library.php_stream_notifier = _library._php_stream_notifier;

_library.php_stream_context_free = ['void', [ref.refType(_library.php_stream_context)]];
_library._functions.push(_library.php_stream_context_free);

_library.php_stream_context_alloc = [ref.refType(_library.php_stream_context), []];
_library._functions.push(_library.php_stream_context_alloc);

_library.php_stream_context_get_option = ['int', [ref.refType(_library.php_stream_context), ref.refType('char'), ref.refType('char'), ref.refType(ref.refType(ref.refType(_library.zval)))]];
_library._functions.push(_library.php_stream_context_get_option);

_library.php_stream_context_set_option = ['int', [ref.refType(_library.php_stream_context), ref.refType('char'), ref.refType('char'), ref.refType(_library.zval)]];
_library._functions.push(_library.php_stream_context_set_option);

_library.php_stream_notification_alloc = [ref.refType(_library.php_stream_notifier), []];
_library._functions.push(_library.php_stream_notification_alloc);

_library.php_stream_notification_free = ['void', [ref.refType(_library.php_stream_notifier)]];
_library._functions.push(_library.php_stream_notification_free);

_library.php_stream_notification_notify = ['void', [ref.refType(_library.php_stream_context), 'int', 'int', ref.refType('char'), 'int', 'ulong', 'ulong', ref.refType('void')]];
_library._functions.push(_library.php_stream_notification_notify);

_library.php_stream_context_set = [ref.refType(_library.php_stream_context), [ref.refType(_library.php_stream), ref.refType(_library.php_stream_context)]];
_library._functions.push(_library.php_stream_context_set);

function loadDependentSymbols() {
};
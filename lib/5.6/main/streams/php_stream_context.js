var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_stream_notification_func = ffi.Function('void', [ref.refType(_library._php_stream_context), 'int', 'int', ref.refType('char'), 'int', 'ulong', 'ulong', ref.refType('void')]);

_library._php_stream_notifier = Struct({});

_library._preload.push(function () {
    _library._php_stream_notifier.defineProperty("dtor", ffi.Function('void', [ref.refType(_library._php_stream_notifier)]));
    _library._php_stream_notifier.defineProperty("func", _library.php_stream_notification_func);
    _library._php_stream_notifier.defineProperty("mask", 'int');
    _library._php_stream_notifier.defineProperty("progress", 'ulong');
    _library._php_stream_notifier.defineProperty("progress_max", 'ulong');
    _library._php_stream_notifier.defineProperty("ptr", ref.refType('void'));
});

_library.php_stream_notifier = _library._php_stream_notifier;

require('./zend_types.js');
_library._php_stream_context = Struct({});

_library._preload.push(function () {
    _library._php_stream_context.defineProperty("notifier", ref.refType(_library.php_stream_notifier));
    _library._php_stream_context.defineProperty("options", ref.refType(_library.zval));
    _library._php_stream_context.defineProperty("rsrc_id", 'int');
});

require('./php_streams.js');
_library.php_stream_context_free = ['void', [ref.refType(_library.php_stream_context)]];
_library._functions['php_stream_context_free'] = _library.php_stream_context_free;

_library.php_stream_context_alloc = [ref.refType(_library.php_stream_context), []];
_library._functions['php_stream_context_alloc'] = _library.php_stream_context_alloc;

_library.php_stream_context_get_option = ['int', [ref.refType(_library.php_stream_context), ref.refType('char'), ref.refType('char'), ref.refType(ref.refType(ref.refType(_library.zval)))]];
_library._functions['php_stream_context_get_option'] = _library.php_stream_context_get_option;

_library.php_stream_context_set_option = ['int', [ref.refType(_library.php_stream_context), ref.refType('char'), ref.refType('char'), ref.refType(_library.zval)]];
_library._functions['php_stream_context_set_option'] = _library.php_stream_context_set_option;

_library.php_stream_notification_alloc = [ref.refType(_library.php_stream_notifier), []];
_library._functions['php_stream_notification_alloc'] = _library.php_stream_notification_alloc;

_library.php_stream_notification_free = ['void', [ref.refType(_library.php_stream_notifier)]];
_library._functions['php_stream_notification_free'] = _library.php_stream_notification_free;

_library.php_stream_notification_notify = ['void', [ref.refType(_library.php_stream_context), 'int', 'int', ref.refType('char'), 'int', 'ulong', 'ulong', ref.refType('void')]];
_library._functions['php_stream_notification_notify'] = _library.php_stream_notification_notify;

_library.php_stream_context_set = [ref.refType(_library.php_stream_context), [ref.refType(_library.php_stream), ref.refType(_library.php_stream_context)]];
_library._functions['php_stream_context_set'] = _library.php_stream_context_set;


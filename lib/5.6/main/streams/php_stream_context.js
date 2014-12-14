var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_stream_notification_func'] = ['void (php_stream_context *, int, int, char *, int, size_t, size_t, void *)', function () {
    _library.php_stream_notification_func = ffi.Function('void', [ref.refType(_library._php_stream_context), 'int', 'int', ref.refType('char'), 'int', 'ulong', 'ulong', ref.refType('void')]);
}];

_library._php_stream_notifier = Struct({});
_library._php_stream_notifier.size = 1;

_library._preload['_php_stream_notifier'] = ['php_stream_notification_func', 'void (php_stream_notifier *)', function () {
    _library._php_stream_notifier.size = 0;
    _library._php_stream_notifier.defineProperty("func", _library.php_stream_notification_func);
    _library._php_stream_notifier.defineProperty("dtor", ffi.Function('void', [ref.refType(_library._php_stream_notifier)]));
    _library._php_stream_notifier.defineProperty("ptr", ref.refType('void'));
    _library._php_stream_notifier.defineProperty("mask", 'int');
    _library._php_stream_notifier.defineProperty("progress", 'ulong');
    _library._php_stream_notifier.defineProperty("progress_max", 'ulong');
}];

_library._preload['php_stream_notifier'] = [function () {
    _library.php_stream_notifier = _library._php_stream_notifier;
}];

_library._php_stream_context = Struct({});
_library._php_stream_context.size = 1;

_library._preload['_php_stream_context'] = ['php_stream_notifier', 'zval', function () {
    _library._php_stream_context.size = 0;
    _library._php_stream_context.defineProperty("notifier", ref.refType(_library.php_stream_notifier));
    _library._php_stream_context.defineProperty("options", ref.refType(_library.zval));
    _library._php_stream_context.defineProperty("rsrc_id", 'int');
}];

_library._preload['php_stream_context_free'] = ['php_stream_context', function () {
    _library.php_stream_context_free = ['void', [ref.refType(_library.php_stream_context)]];
    _library._functions['php_stream_context_free'] = _library.php_stream_context_free;
}];

_library._preload['php_stream_context_alloc'] = ['php_stream_context', function () {
    _library.php_stream_context_alloc = [ref.refType(_library.php_stream_context), []];
    _library._functions['php_stream_context_alloc'] = _library.php_stream_context_alloc;
}];

_library._preload['php_stream_context_get_option'] = ['php_stream_context', 'pointer', function () {
    _library.php_stream_context_get_option = ['int', [ref.refType(_library.php_stream_context), ref.refType('char'), ref.refType('char'), ref.refType(ref.refType(ref.refType(_library.zval)))]];
    _library._functions['php_stream_context_get_option'] = _library.php_stream_context_get_option;
}];

_library._preload['php_stream_context_set_option'] = ['php_stream_context', 'zval', function () {
    _library.php_stream_context_set_option = ['int', [ref.refType(_library.php_stream_context), ref.refType('char'), ref.refType('char'), ref.refType(_library.zval)]];
    _library._functions['php_stream_context_set_option'] = _library.php_stream_context_set_option;
}];

_library._preload['php_stream_notification_alloc'] = ['php_stream_notifier', function () {
    _library.php_stream_notification_alloc = [ref.refType(_library.php_stream_notifier), []];
    _library._functions['php_stream_notification_alloc'] = _library.php_stream_notification_alloc;
}];

_library._preload['php_stream_notification_free'] = ['php_stream_notifier', function () {
    _library.php_stream_notification_free = ['void', [ref.refType(_library.php_stream_notifier)]];
    _library._functions['php_stream_notification_free'] = _library.php_stream_notification_free;
}];

_library._preload['php_stream_notification_notify'] = ['php_stream_context', function () {
    _library.php_stream_notification_notify = ['void', [ref.refType(_library.php_stream_context), 'int', 'int', ref.refType('char'), 'int', 'ulong', 'ulong', ref.refType('void')]];
    _library._functions['php_stream_notification_notify'] = _library.php_stream_notification_notify;
}];

_library._preload['php_stream_context_set'] = ['php_stream_context', 'php_stream', 'php_stream_context', function () {
    _library.php_stream_context_set = [ref.refType(_library.php_stream_context), [ref.refType(_library.php_stream), ref.refType(_library.php_stream_context)]];
    _library._functions['php_stream_context_set'] = _library.php_stream_context_set;
}];

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

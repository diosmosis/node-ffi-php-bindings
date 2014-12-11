var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._php_output_handler_status_t = {
    PHP_OUTPUT_HANDLER_NO_DATA: 2,
    PHP_OUTPUT_HANDLER_SUCCESS: 1,
    PHP_OUTPUT_HANDLER_FAILURE: 0
};

_library._preload['php_output_handler_status_t'] = [function () {
    _library.php_output_handler_status_t = 'int32';
}];

_library._php_output_handler_hook_t = {
    PHP_OUTPUT_HANDLER_HOOK_LAST: 5,
    PHP_OUTPUT_HANDLER_HOOK_DISABLE: 4,
    PHP_OUTPUT_HANDLER_HOOK_IMMUTABLE: 3,
    PHP_OUTPUT_HANDLER_HOOK_GET_LEVEL: 2,
    PHP_OUTPUT_HANDLER_HOOK_GET_FLAGS: 1,
    PHP_OUTPUT_HANDLER_HOOK_GET_OPAQ: 0
};

_library._preload['php_output_handler_hook_t'] = [function () {
    _library.php_output_handler_hook_t = 'int32';
}];

_library._php_output_buffer = Struct({});
_library._php_output_buffer.size = 1;

_library._preload['_php_output_buffer'] = [function () {
    _library._php_output_buffer.size = 0;
    _library._php_output_buffer.defineProperty("_res", 'uint');
    _library._php_output_buffer.defineProperty("data", ref.refType('char'));
    _library._php_output_buffer.defineProperty("free", 'uint');
    _library._php_output_buffer.defineProperty("size", 'ulong');
    _library._php_output_buffer.defineProperty("used", 'ulong');
}];

_library._preload['php_output_buffer'] = [function () {
    _library.php_output_buffer = _library._php_output_buffer;
}];

_library._php_output_context = Struct({});
_library._php_output_context.size = 1;

_library._preload['_php_output_context'] = ['php_output_buffer', '_php_output_buffer', 'php_output_buffer', '_php_output_buffer', function () {
    _library._php_output_context.size = 0;
    _library._php_output_context.defineProperty("in", _library.php_output_buffer);
    _library._php_output_context.defineProperty("op", 'int');
    _library._php_output_context.defineProperty("out", _library.php_output_buffer);
}];

_library._preload['php_output_context'] = [function () {
    _library.php_output_context = _library._php_output_context;
}];

_library._preload['php_output_handler_func_t'] = ['void (char *, uint, char **, uint *, int)', function () {
    _library.php_output_handler_func_t = ffi.Function('void', [ref.refType('char'), 'uint', ref.refType(ref.refType('char')), ref.refType('uint'), 'int']);
}];

_library._preload['php_output_handler_context_func_t'] = ['int (void **, php_output_context *)', function () {
    _library.php_output_handler_context_func_t = ffi.Function('int', [ref.refType(ref.refType('void')), ref.refType(_library._php_output_context)]);
}];

_library._preload['php_output_handler_context_dtor_t'] = ['void (void *)', function () {
    _library.php_output_handler_context_dtor_t = ffi.Function('void', [ref.refType('void')]);
}];

_library._preload['php_output_handler_conflict_check_t'] = ['int (const char *, size_t)', function () {
    _library.php_output_handler_conflict_check_t = ffi.Function('int', [ref.refType('char'), 'ulong']);
}];

_library._php_output_handler_user_func_t = Struct({});
_library._php_output_handler_user_func_t.size = 1;

_library._preload['_php_output_handler_user_func_t'] = ['zend_fcall_info_cache', '_zend_fcall_info_cache', 'zend_fcall_info', '_zend_fcall_info', 'zval', function () {
    _library._php_output_handler_user_func_t.size = 0;
    _library._php_output_handler_user_func_t.defineProperty("fcc", _library.zend_fcall_info_cache);
    _library._php_output_handler_user_func_t.defineProperty("fci", _library.zend_fcall_info);
    _library._php_output_handler_user_func_t.defineProperty("zoh", ref.refType(_library.zval));
}];

_library._preload['php_output_handler_user_func_t'] = [function () {
    _library.php_output_handler_user_func_t = _library._php_output_handler_user_func_t;
}];

_library._php_output_handler = Struct({});
_library._php_output_handler.size = 1;

_library._preload['_php_output_handler'] = ['php_output_buffer', '_php_output_buffer', 'void (void *)', 'php_output_handler_context_func_t', 'php_output_handler_user_func_t', function () {
    _library._php_output_handler.size = 0;
    _library._php_output_handler.defineProperty("buffer", _library.php_output_buffer);
    _library._php_output_handler.defineProperty("dtor", ffi.Function('void', [ref.refType('void')]));
    _library._php_output_handler.defineProperty("flags", 'int');
    _library._php_output_handler.defineProperty("func", (function () {
        var temp = Union({});
        temp.defineProperty("internal", _library.php_output_handler_context_func_t);
        temp.defineProperty("user", ref.refType(_library.php_output_handler_user_func_t));
        return temp;
    })());
    _library._php_output_handler.defineProperty("level", 'int');
    _library._php_output_handler.defineProperty("name", ref.refType('char'));
    _library._php_output_handler.defineProperty("name_len", 'ulong');
    _library._php_output_handler.defineProperty("opaq", ref.refType('void'));
    _library._php_output_handler.defineProperty("size", 'ulong');
}];

_library._preload['php_output_handler_alias_ctor_t'] = ['_php_output_handler *(const char *, size_t, size_t, int)', function () {
    _library.php_output_handler_alias_ctor_t = ffi.Function(ref.refType(_library._php_output_handler), [ref.refType('char'), 'ulong', 'ulong', 'int']);
}];

_library._preload['php_output_handler'] = [function () {
    _library.php_output_handler = _library._php_output_handler;
}];

_library._zend_output_globals = Struct({});
_library._zend_output_globals.size = 1;

_library._preload['_zend_output_globals'] = ['php_output_handler', 'zend_stack', '_zend_stack', 'php_output_handler', function () {
    _library._zend_output_globals.size = 0;
    _library._zend_output_globals.defineProperty("active", ref.refType(_library.php_output_handler));
    _library._zend_output_globals.defineProperty("flags", 'int');
    _library._zend_output_globals.defineProperty("handlers", _library.zend_stack);
    _library._zend_output_globals.defineProperty("output_start_filename", ref.refType('char'));
    _library._zend_output_globals.defineProperty("output_start_lineno", 'int');
    _library._zend_output_globals.defineProperty("running", ref.refType(_library.php_output_handler));
}];

_library._preload['zend_output_globals'] = [function () {
    _library.zend_output_globals = _library._zend_output_globals;
}];

_library._preload['php_output_startup'] = [function () {
    _library.php_output_startup = ['void', []];
    _library._functions['php_output_startup'] = _library.php_output_startup;
}];

_library._preload['php_output_shutdown'] = [function () {
    _library.php_output_shutdown = ['void', []];
    _library._functions['php_output_shutdown'] = _library.php_output_shutdown;
}];

_library._preload['php_output_register_constants'] = [function () {
    _library.php_output_register_constants = ['void', []];
    _library._functions['php_output_register_constants'] = _library.php_output_register_constants;
}];

_library._preload['php_output_activate'] = [function () {
    _library.php_output_activate = ['int', []];
    _library._functions['php_output_activate'] = _library.php_output_activate;
}];

_library._preload['php_output_deactivate'] = [function () {
    _library.php_output_deactivate = ['void', []];
    _library._functions['php_output_deactivate'] = _library.php_output_deactivate;
}];

_library._preload['php_output_set_status'] = [function () {
    _library.php_output_set_status = ['void', ['int']];
    _library._functions['php_output_set_status'] = _library.php_output_set_status;
}];

_library._preload['php_output_get_status'] = [function () {
    _library.php_output_get_status = ['int', []];
    _library._functions['php_output_get_status'] = _library.php_output_get_status;
}];

_library._preload['php_output_set_implicit_flush'] = [function () {
    _library.php_output_set_implicit_flush = ['void', ['int']];
    _library._functions['php_output_set_implicit_flush'] = _library.php_output_set_implicit_flush;
}];

_library._preload['php_output_get_start_filename'] = [function () {
    _library.php_output_get_start_filename = [ref.refType('char'), []];
    _library._functions['php_output_get_start_filename'] = _library.php_output_get_start_filename;
}];

_library._preload['php_output_get_start_lineno'] = [function () {
    _library.php_output_get_start_lineno = ['int', []];
    _library._functions['php_output_get_start_lineno'] = _library.php_output_get_start_lineno;
}];

_library._preload['php_output_write_unbuffered'] = [function () {
    _library.php_output_write_unbuffered = ['int', [ref.refType('char'), 'ulong']];
    _library._functions['php_output_write_unbuffered'] = _library.php_output_write_unbuffered;
}];

_library._preload['php_output_write'] = [function () {
    _library.php_output_write = ['int', [ref.refType('char'), 'ulong']];
    _library._functions['php_output_write'] = _library.php_output_write;
}];

_library._preload['php_output_flush'] = [function () {
    _library.php_output_flush = ['int', []];
    _library._functions['php_output_flush'] = _library.php_output_flush;
}];

_library._preload['php_output_flush_all'] = [function () {
    _library.php_output_flush_all = ['void', []];
    _library._functions['php_output_flush_all'] = _library.php_output_flush_all;
}];

_library._preload['php_output_clean'] = [function () {
    _library.php_output_clean = ['int', []];
    _library._functions['php_output_clean'] = _library.php_output_clean;
}];

_library._preload['php_output_clean_all'] = [function () {
    _library.php_output_clean_all = ['void', []];
    _library._functions['php_output_clean_all'] = _library.php_output_clean_all;
}];

_library._preload['php_output_end'] = [function () {
    _library.php_output_end = ['int', []];
    _library._functions['php_output_end'] = _library.php_output_end;
}];

_library._preload['php_output_end_all'] = [function () {
    _library.php_output_end_all = ['void', []];
    _library._functions['php_output_end_all'] = _library.php_output_end_all;
}];

_library._preload['php_output_discard'] = [function () {
    _library.php_output_discard = ['int', []];
    _library._functions['php_output_discard'] = _library.php_output_discard;
}];

_library._preload['php_output_discard_all'] = [function () {
    _library.php_output_discard_all = ['void', []];
    _library._functions['php_output_discard_all'] = _library.php_output_discard_all;
}];

_library._preload['php_output_get_contents'] = ['zval', function () {
    _library.php_output_get_contents = ['int', [ref.refType(_library.zval)]];
    _library._functions['php_output_get_contents'] = _library.php_output_get_contents;
}];

_library._preload['php_output_get_length'] = ['zval', function () {
    _library.php_output_get_length = ['int', [ref.refType(_library.zval)]];
    _library._functions['php_output_get_length'] = _library.php_output_get_length;
}];

_library._preload['php_output_get_level'] = [function () {
    _library.php_output_get_level = ['int', []];
    _library._functions['php_output_get_level'] = _library.php_output_get_level;
}];

_library._preload['php_output_get_active_handler'] = ['php_output_handler', function () {
    _library.php_output_get_active_handler = [ref.refType(_library.php_output_handler), []];
    _library._functions['php_output_get_active_handler'] = _library.php_output_get_active_handler;
}];

_library._preload['php_output_start_default'] = [function () {
    _library.php_output_start_default = ['int', []];
    _library._functions['php_output_start_default'] = _library.php_output_start_default;
}];

_library._preload['php_output_start_devnull'] = [function () {
    _library.php_output_start_devnull = ['int', []];
    _library._functions['php_output_start_devnull'] = _library.php_output_start_devnull;
}];

_library._preload['php_output_start_user'] = ['zval', function () {
    _library.php_output_start_user = ['int', [ref.refType(_library.zval), 'ulong', 'int']];
    _library._functions['php_output_start_user'] = _library.php_output_start_user;
}];

_library._preload['php_output_start_internal'] = ['php_output_handler_func_t', function () {
    _library.php_output_start_internal = ['int', [ref.refType('char'), 'ulong', _library.php_output_handler_func_t, 'ulong', 'int']];
    _library._functions['php_output_start_internal'] = _library.php_output_start_internal;
}];

_library._preload['php_output_handler_create_user'] = ['php_output_handler', 'zval', function () {
    _library.php_output_handler_create_user = [ref.refType(_library.php_output_handler), [ref.refType(_library.zval), 'ulong', 'int']];
    _library._functions['php_output_handler_create_user'] = _library.php_output_handler_create_user;
}];

_library._preload['php_output_handler_create_internal'] = ['php_output_handler', 'php_output_handler_context_func_t', function () {
    _library.php_output_handler_create_internal = [ref.refType(_library.php_output_handler), [ref.refType('char'), 'ulong', _library.php_output_handler_context_func_t, 'ulong', 'int']];
    _library._functions['php_output_handler_create_internal'] = _library.php_output_handler_create_internal;
}];

_library._preload['php_output_handler_set_context'] = ['php_output_handler', 'void (void *)', function () {
    _library.php_output_handler_set_context = ['void', [ref.refType(_library.php_output_handler), ref.refType('void'), ffi.Function('void', [ref.refType('void')])]];
    _library._functions['php_output_handler_set_context'] = _library.php_output_handler_set_context;
}];

_library._preload['php_output_handler_start'] = ['php_output_handler', function () {
    _library.php_output_handler_start = ['int', [ref.refType(_library.php_output_handler)]];
    _library._functions['php_output_handler_start'] = _library.php_output_handler_start;
}];

_library._preload['php_output_handler_started'] = [function () {
    _library.php_output_handler_started = ['int', [ref.refType('char'), 'ulong']];
    _library._functions['php_output_handler_started'] = _library.php_output_handler_started;
}];

_library._preload['php_output_handler_hook'] = ['php_output_handler_hook_t', function () {
    _library.php_output_handler_hook = ['int', [_library.php_output_handler_hook_t, ref.refType('void')]];
    _library._functions['php_output_handler_hook'] = _library.php_output_handler_hook;
}];

_library._preload['php_output_handler_dtor'] = ['php_output_handler', function () {
    _library.php_output_handler_dtor = ['void', [ref.refType(_library.php_output_handler)]];
    _library._functions['php_output_handler_dtor'] = _library.php_output_handler_dtor;
}];

_library._preload['php_output_handler_free'] = ['pointer', function () {
    _library.php_output_handler_free = ['void', [ref.refType(ref.refType(_library.php_output_handler))]];
    _library._functions['php_output_handler_free'] = _library.php_output_handler_free;
}];

_library._preload['php_output_handler_conflict'] = [function () {
    _library.php_output_handler_conflict = ['int', [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong']];
    _library._functions['php_output_handler_conflict'] = _library.php_output_handler_conflict;
}];

_library._preload['php_output_handler_conflict_register'] = ['php_output_handler_conflict_check_t', function () {
    _library.php_output_handler_conflict_register = ['int', [ref.refType('char'), 'ulong', _library.php_output_handler_conflict_check_t]];
    _library._functions['php_output_handler_conflict_register'] = _library.php_output_handler_conflict_register;
}];

_library._preload['php_output_handler_reverse_conflict_register'] = ['php_output_handler_conflict_check_t', function () {
    _library.php_output_handler_reverse_conflict_register = ['int', [ref.refType('char'), 'ulong', _library.php_output_handler_conflict_check_t]];
    _library._functions['php_output_handler_reverse_conflict_register'] = _library.php_output_handler_reverse_conflict_register;
}];

_library._preload['php_output_handler_alias'] = ['php_output_handler_alias_ctor_t', function () {
    _library.php_output_handler_alias = [ref.refType(_library.php_output_handler_alias_ctor_t), [ref.refType('char'), 'ulong']];
    _library._functions['php_output_handler_alias'] = _library.php_output_handler_alias;
}];

_library._preload['php_output_handler_alias_register'] = ['php_output_handler_alias_ctor_t', function () {
    _library.php_output_handler_alias_register = ['int', [ref.refType('char'), 'ulong', _library.php_output_handler_alias_ctor_t]];
    _library._functions['php_output_handler_alias_register'] = _library.php_output_handler_alias_register;
}];

function loadDependentSymbols() {
    require('./../Zend/zend.js');
    require('./../Zend/zend_API.js');
    require('./../Zend/zend_ast.js');
    require('./../Zend/zend_compile.js');
    require('./../Zend/zend_hash.js');
    require('./../Zend/zend_ini.js');
    require('./../Zend/zend_iterators.js');
    require('./../Zend/zend_modules.js');
    require('./../Zend/zend_object_handlers.js');
    require('./../Zend/zend_stack.js');
    require('./../Zend/zend_types.js');
}

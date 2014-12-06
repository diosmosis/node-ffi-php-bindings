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

_library.php_output_handler_status_t = 'int32';

_library._php_output_handler_hook_t = {
    PHP_OUTPUT_HANDLER_HOOK_LAST: 5,
    PHP_OUTPUT_HANDLER_HOOK_DISABLE: 4,
    PHP_OUTPUT_HANDLER_HOOK_IMMUTABLE: 3,
    PHP_OUTPUT_HANDLER_HOOK_GET_LEVEL: 2,
    PHP_OUTPUT_HANDLER_HOOK_GET_FLAGS: 1,
    PHP_OUTPUT_HANDLER_HOOK_GET_OPAQ: 0
};

_library.php_output_handler_hook_t = 'int32';

_library._php_output_buffer = Struct({
    "_res": 'uint',
    "data": ref.refType('char'),
    "free": 'uint',
    "size": 'ulong',
    "used": 'ulong'
});

_library.php_output_buffer = _library._php_output_buffer;

_library._php_output_context = Struct({
    "in": _library.php_output_buffer,
    "op": 'int',
    "out": _library.php_output_buffer
});

_library.php_output_context = _library._php_output_context;

_library.php_output_handler_func_t = ffi.Function('void', [ref.refType('char'), 'uint', ref.refType(ref.refType('char')), ref.refType('uint'), 'int']);

_library.php_output_handler_context_func_t = ffi.Function('int', [ref.refType(ref.refType('void')), ref.refType(_library._php_output_context)]);

_library.php_output_handler_context_dtor_t = ffi.Function('void', [ref.refType('void')]);

_library.php_output_handler_conflict_check_t = ffi.Function('int', [ref.refType('char'), 'ulong']);

_library._php_output_handler_user_func_t = Struct({
    "fcc": _library.zend_fcall_info_cache,
    "fci": _library.zend_fcall_info,
    "zoh": ref.refType(_library.zval)
});

_library.php_output_handler_user_func_t = _library._php_output_handler_user_func_t;

_library._php_output_handler = Struct({
    "buffer": _library.php_output_buffer,
    "dtor": ffi.Function('void', [ref.refType('void')]),
    "flags": 'int',
    "func": Union({
        "internal": _library.php_output_handler_context_func_t,
        "user": ref.refType(_library.php_output_handler_user_func_t)
    }),
    "level": 'int',
    "name": ref.refType('char'),
    "name_len": 'ulong',
    "opaq": ref.refType('void'),
    "size": 'ulong'
});

_library._php_output_handler = Struct({
    "buffer": _library.php_output_buffer,
    "dtor": ffi.Function('void', [ref.refType('void')]),
    "flags": 'int',
    "func": Union({
        "internal": _library.php_output_handler_context_func_t,
        "user": ref.refType(_library.php_output_handler_user_func_t)
    }),
    "level": 'int',
    "name": ref.refType('char'),
    "name_len": 'ulong',
    "opaq": ref.refType('void'),
    "size": 'ulong'
});

_library.php_output_handler_alias_ctor_t = ffi.Function(ref.refType(_library._php_output_handler), [ref.refType('char'), 'ulong', 'ulong', 'int']);

_library.php_output_handler = _library._php_output_handler;

_library._zend_output_globals = Struct({
    "active": ref.refType(_library.php_output_handler),
    "flags": 'int',
    "handlers": _library.zend_stack,
    "output_start_filename": ref.refType('char'),
    "output_start_lineno": 'int',
    "running": ref.refType(_library.php_output_handler)
});

_library.zend_output_globals = _library._zend_output_globals;

_library.php_output_startup = ['void', []];
_library._functions.push(_library.php_output_startup);

_library.php_output_shutdown = ['void', []];
_library._functions.push(_library.php_output_shutdown);

_library.php_output_register_constants = ['void', []];
_library._functions.push(_library.php_output_register_constants);

_library.php_output_activate = ['int', []];
_library._functions.push(_library.php_output_activate);

_library.php_output_deactivate = ['void', []];
_library._functions.push(_library.php_output_deactivate);

_library.php_output_set_status = ['void', ['int']];
_library._functions.push(_library.php_output_set_status);

_library.php_output_get_status = ['int', []];
_library._functions.push(_library.php_output_get_status);

_library.php_output_set_implicit_flush = ['void', ['int']];
_library._functions.push(_library.php_output_set_implicit_flush);

_library.php_output_get_start_filename = [ref.refType('char'), []];
_library._functions.push(_library.php_output_get_start_filename);

_library.php_output_get_start_lineno = ['int', []];
_library._functions.push(_library.php_output_get_start_lineno);

_library.php_output_write_unbuffered = ['int', [ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_output_write_unbuffered);

_library.php_output_write = ['int', [ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_output_write);

_library.php_output_flush = ['int', []];
_library._functions.push(_library.php_output_flush);

_library.php_output_flush_all = ['void', []];
_library._functions.push(_library.php_output_flush_all);

_library.php_output_clean = ['int', []];
_library._functions.push(_library.php_output_clean);

_library.php_output_clean_all = ['void', []];
_library._functions.push(_library.php_output_clean_all);

_library.php_output_end = ['int', []];
_library._functions.push(_library.php_output_end);

_library.php_output_end_all = ['void', []];
_library._functions.push(_library.php_output_end_all);

_library.php_output_discard = ['int', []];
_library._functions.push(_library.php_output_discard);

_library.php_output_discard_all = ['void', []];
_library._functions.push(_library.php_output_discard_all);

_library.php_output_get_contents = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.php_output_get_contents);

_library.php_output_get_length = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.php_output_get_length);

_library.php_output_get_level = ['int', []];
_library._functions.push(_library.php_output_get_level);

_library.php_output_get_active_handler = [ref.refType(_library.php_output_handler), []];
_library._functions.push(_library.php_output_get_active_handler);

_library.php_output_start_default = ['int', []];
_library._functions.push(_library.php_output_start_default);

_library.php_output_start_devnull = ['int', []];
_library._functions.push(_library.php_output_start_devnull);

_library.php_output_start_user = ['int', [ref.refType(_library.zval), 'ulong', 'int']];
_library._functions.push(_library.php_output_start_user);

_library.php_output_start_internal = ['int', [ref.refType('char'), 'ulong', _library.php_output_handler_func_t, 'ulong', 'int']];
_library._functions.push(_library.php_output_start_internal);

_library.php_output_handler_create_user = [ref.refType(_library.php_output_handler), [ref.refType(_library.zval), 'ulong', 'int']];
_library._functions.push(_library.php_output_handler_create_user);

_library.php_output_handler_create_internal = [ref.refType(_library.php_output_handler), [ref.refType('char'), 'ulong', _library.php_output_handler_context_func_t, 'ulong', 'int']];
_library._functions.push(_library.php_output_handler_create_internal);

_library.php_output_handler_set_context = ['void', [ref.refType(_library.php_output_handler), ref.refType('void'), ffi.Function('void', [ref.refType('void')])]];
_library._functions.push(_library.php_output_handler_set_context);

_library.php_output_handler_start = ['int', [ref.refType(_library.php_output_handler)]];
_library._functions.push(_library.php_output_handler_start);

_library.php_output_handler_started = ['int', [ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_output_handler_started);

_library.php_output_handler_hook = ['int', [_library.php_output_handler_hook_t, ref.refType('void')]];
_library._functions.push(_library.php_output_handler_hook);

_library.php_output_handler_dtor = ['void', [ref.refType(_library.php_output_handler)]];
_library._functions.push(_library.php_output_handler_dtor);

_library.php_output_handler_free = ['void', [ref.refType(ref.refType(_library.php_output_handler))]];
_library._functions.push(_library.php_output_handler_free);

_library.php_output_handler_conflict = ['int', [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_output_handler_conflict);

_library.php_output_handler_conflict_register = ['int', [ref.refType('char'), 'ulong', _library.php_output_handler_conflict_check_t]];
_library._functions.push(_library.php_output_handler_conflict_register);

_library.php_output_handler_reverse_conflict_register = ['int', [ref.refType('char'), 'ulong', _library.php_output_handler_conflict_check_t]];
_library._functions.push(_library.php_output_handler_reverse_conflict_register);

_library.php_output_handler_alias = [ref.refType(_library.php_output_handler_alias_ctor_t), [ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_output_handler_alias);

_library.php_output_handler_alias_register = ['int', [ref.refType('char'), 'ulong', _library.php_output_handler_alias_ctor_t]];
_library._functions.push(_library.php_output_handler_alias_register);

_library.zif_ob_start = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_start);

_library.zif_ob_flush = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_flush);

_library.zif_ob_clean = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_clean);

_library.zif_ob_end_flush = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_end_flush);

_library.zif_ob_end_clean = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_end_clean);

_library.zif_ob_get_flush = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_get_flush);

_library.zif_ob_get_clean = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_get_clean);

_library.zif_ob_get_contents = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_get_contents);

_library.zif_ob_get_length = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_get_length);

_library.zif_ob_get_level = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_get_level);

_library.zif_ob_get_status = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_get_status);

_library.zif_ob_implicit_flush = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_implicit_flush);

_library.zif_ob_list_handlers = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ob_list_handlers);

_library.zif_output_add_rewrite_var = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_output_add_rewrite_var);

_library.zif_output_reset_rewrite_vars = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_output_reset_rewrite_vars);

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
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_extension_version_info = Struct({});
_library._zend_extension_version_info.size = 1;

_library._preload['_zend_extension_version_info'] = [function () {
    _library._zend_extension_version_info.size = 0;
    _library._zend_extension_version_info.defineProperty("zend_extension_api_no", 'int');
    _library._zend_extension_version_info.defineProperty("build_id", ref.refType('char'));
}];

_library._preload['zend_extension_version_info'] = [function () {
    _library.zend_extension_version_info = _library._zend_extension_version_info;
}];

_library._preload['startup_func_t'] = ['int (zend_extension *)', function () {
    _library.startup_func_t = ffi.Function('int', [ref.refType(_library._zend_extension)]);
}];

_library._preload['shutdown_func_t'] = ['void (zend_extension *)', function () {
    _library.shutdown_func_t = ffi.Function('void', [ref.refType(_library._zend_extension)]);
}];

_library._preload['activate_func_t'] = ['void (void)', function () {
    _library.activate_func_t = ffi.Function('void', []);
}];

_library._preload['deactivate_func_t'] = ['void (void)', function () {
    _library.deactivate_func_t = ffi.Function('void', []);
}];

_library._preload['message_handler_func_t'] = ['void (int, void *)', function () {
    _library.message_handler_func_t = ffi.Function('void', ['int', ref.refType('void')]);
}];

_library._preload['op_array_handler_func_t'] = ['void (zend_op_array *)', function () {
    _library.op_array_handler_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);
}];

_library._preload['statement_handler_func_t'] = ['void (zend_op_array *)', function () {
    _library.statement_handler_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);
}];

_library._preload['fcall_begin_handler_func_t'] = ['void (zend_op_array *)', function () {
    _library.fcall_begin_handler_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);
}];

_library._preload['fcall_end_handler_func_t'] = ['void (zend_op_array *)', function () {
    _library.fcall_end_handler_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);
}];

_library._preload['op_array_ctor_func_t'] = ['void (zend_op_array *)', function () {
    _library.op_array_ctor_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);
}];

_library._preload['op_array_dtor_func_t'] = ['void (zend_op_array *)', function () {
    _library.op_array_dtor_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);
}];

_library._zend_extension = Struct({});
_library._zend_extension.size = 1;

_library._preload['_zend_extension'] = ['startup_func_t', 'shutdown_func_t', 'activate_func_t', 'deactivate_func_t', 'message_handler_func_t', 'op_array_handler_func_t', 'statement_handler_func_t', 'fcall_begin_handler_func_t', 'fcall_end_handler_func_t', 'op_array_ctor_func_t', 'op_array_dtor_func_t', 'int (int)', 'int (const char *)', function () {
    _library._zend_extension.size = 0;
    _library._zend_extension.defineProperty("name", ref.refType('char'));
    _library._zend_extension.defineProperty("version", ref.refType('char'));
    _library._zend_extension.defineProperty("author", ref.refType('char'));
    _library._zend_extension.defineProperty("URL", ref.refType('char'));
    _library._zend_extension.defineProperty("copyright", ref.refType('char'));
    _library._zend_extension.defineProperty("startup", _library.startup_func_t);
    _library._zend_extension.defineProperty("shutdown", _library.shutdown_func_t);
    _library._zend_extension.defineProperty("activate", _library.activate_func_t);
    _library._zend_extension.defineProperty("deactivate", _library.deactivate_func_t);
    _library._zend_extension.defineProperty("message_handler", _library.message_handler_func_t);
    _library._zend_extension.defineProperty("op_array_handler", _library.op_array_handler_func_t);
    _library._zend_extension.defineProperty("statement_handler", _library.statement_handler_func_t);
    _library._zend_extension.defineProperty("fcall_begin_handler", _library.fcall_begin_handler_func_t);
    _library._zend_extension.defineProperty("fcall_end_handler", _library.fcall_end_handler_func_t);
    _library._zend_extension.defineProperty("op_array_ctor", _library.op_array_ctor_func_t);
    _library._zend_extension.defineProperty("op_array_dtor", _library.op_array_dtor_func_t);
    _library._zend_extension.defineProperty("api_no_check", ffi.Function('int', ['int']));
    _library._zend_extension.defineProperty("build_id_check", ffi.Function('int', [ref.refType('char')]));
    _library._zend_extension.defineProperty("reserved3", ref.refType('void'));
    _library._zend_extension.defineProperty("reserved4", ref.refType('void'));
    _library._zend_extension.defineProperty("reserved5", ref.refType('void'));
    _library._zend_extension.defineProperty("reserved6", ref.refType('void'));
    _library._zend_extension.defineProperty("reserved7", ref.refType('void'));
    _library._zend_extension.defineProperty("reserved8", ref.refType('void'));
    _library._zend_extension.defineProperty("handle", ref.refType('void'));
    _library._zend_extension.defineProperty("resource_number", 'int');
}];

_library._preload['zend_extension'] = [function () {
    _library.zend_extension = _library._zend_extension;
}];

_library._preload['zend_get_resource_handle'] = ['zend_extension', function () {
    _library.zend_get_resource_handle = ['int', [ref.refType(_library.zend_extension)]];
    _library._functions['zend_get_resource_handle'] = _library.zend_get_resource_handle;
}];

_library._preload['zend_extension_dispatch_message'] = [function () {
    _library.zend_extension_dispatch_message = ['void', ['int', ref.refType('void')]];
    _library._functions['zend_extension_dispatch_message'] = _library.zend_extension_dispatch_message;
}];

_library._preload['zend_load_extension'] = [function () {
    _library.zend_load_extension = ['int', [ref.refType('char')]];
    _library._functions['zend_load_extension'] = _library.zend_load_extension;
}];

_library._preload['zend_register_extension'] = ['zend_extension', function () {
    _library.zend_register_extension = ['int', [ref.refType(_library.zend_extension), ref.refType('void')]];
    _library._functions['zend_register_extension'] = _library.zend_register_extension;
}];

_library._preload['zend_get_extension'] = ['zend_extension', function () {
    _library.zend_get_extension = [ref.refType(_library.zend_extension), [ref.refType('char')]];
    _library._functions['zend_get_extension'] = _library.zend_get_extension;
}];

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}

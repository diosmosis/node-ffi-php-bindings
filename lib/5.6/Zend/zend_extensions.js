var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_extension_version_info = Struct({
    "build_id": 'char' ? ref.refType('char') : 'pointer',
    "zend_extension_api_no": 'int'
});

_library.zend_extension_version_info = _library._zend_extension_version_info;

_library.activate_func_t = ffi.Function('void', []);

_library.deactivate_func_t = ffi.Function('void', []);

_library.fcall_begin_handler_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);

_library.fcall_end_handler_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);

_library.message_handler_func_t = ffi.Function('void', ['int', 'void' ? ref.refType('void') : 'pointer']);

_library.op_array_ctor_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);

_library.op_array_dtor_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);

_library.op_array_handler_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);

_library.shutdown_func_t = ffi.Function('void', [ref.refType(_library._zend_extension)]);

_library.startup_func_t = ffi.Function('int', [ref.refType(_library._zend_extension)]);

_library.statement_handler_func_t = ffi.Function('void', [ref.refType(_library._zend_op_array)]);

_library._zend_extension = Struct({
    "URL": 'char' ? ref.refType('char') : 'pointer',
    "activate": _library.activate_func_t,
    "api_no_check": ffi.Function('int', ['int']),
    "author": 'char' ? ref.refType('char') : 'pointer',
    "build_id_check": ffi.Function('int', ['char' ? ref.refType('char') : 'pointer']),
    "copyright": 'char' ? ref.refType('char') : 'pointer',
    "deactivate": _library.deactivate_func_t,
    "fcall_begin_handler": _library.fcall_begin_handler_func_t,
    "fcall_end_handler": _library.fcall_end_handler_func_t,
    "handle": 'void' ? ref.refType('void') : 'pointer',
    "message_handler": _library.message_handler_func_t,
    "name": 'char' ? ref.refType('char') : 'pointer',
    "op_array_ctor": _library.op_array_ctor_func_t,
    "op_array_dtor": _library.op_array_dtor_func_t,
    "op_array_handler": _library.op_array_handler_func_t,
    "reserved3": 'void' ? ref.refType('void') : 'pointer',
    "reserved4": 'void' ? ref.refType('void') : 'pointer',
    "reserved5": 'void' ? ref.refType('void') : 'pointer',
    "reserved6": 'void' ? ref.refType('void') : 'pointer',
    "reserved7": 'void' ? ref.refType('void') : 'pointer',
    "reserved8": 'void' ? ref.refType('void') : 'pointer',
    "resource_number": 'int',
    "shutdown": _library.shutdown_func_t,
    "startup": _library.startup_func_t,
    "statement_handler": _library.statement_handler_func_t,
    "version": 'char' ? ref.refType('char') : 'pointer'
});

_library.zend_extension = _library._zend_extension;

_library.zend_get_resource_handle = ['int', [ref.refType(_library.zend_extension)]];
_library._functions.push(_library.zend_get_resource_handle);

_library.zend_extension_dispatch_message = ['void', ['int', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_extension_dispatch_message);

_library.zend_extension_dtor = ['void', [ref.refType(_library.zend_extension)]];
_library._functions.push(_library.zend_extension_dtor);

_library.zend_append_version_info = ['void', [ref.refType(_library.zend_extension)]];
_library._functions.push(_library.zend_append_version_info);

_library.zend_startup_extensions_mechanism = ['int', []];
_library._functions.push(_library.zend_startup_extensions_mechanism);

_library.zend_startup_extensions = ['int', []];
_library._functions.push(_library.zend_startup_extensions);

_library.zend_shutdown_extensions = ['void', []];
_library._functions.push(_library.zend_shutdown_extensions);

_library.zend_load_extension = ['int', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.zend_load_extension);

_library.zend_register_extension = ['int', [ref.refType(_library.zend_extension), 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_register_extension);

_library.zend_get_extension = [ref.refType(_library.zend_extension), ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.zend_get_extension);

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
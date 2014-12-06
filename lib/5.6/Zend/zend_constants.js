var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_constant = Struct({
    "flags": 'int',
    "module_number": 'int',
    "name": ref.refType('char'),
    "name_len": 'uint',
    "value": _library.zval
});

_library.zend_constant = _library._zend_constant;

_library.clean_module_constants = ['void', ['int']];
_library._functions.push(_library.clean_module_constants);

_library.free_zend_constant = ['void', [_library.zend_constant ? ref.refType(_library.zend_constant) : 'pointer']];
_library._functions.push(_library.free_zend_constant);

_library.zend_startup_constants = ['int', []];
_library._functions.push(_library.zend_startup_constants);

_library.zend_shutdown_constants = ['int', []];
_library._functions.push(_library.zend_shutdown_constants);

_library.zend_register_standard_constants = ['void', []];
_library._functions.push(_library.zend_register_standard_constants);

_library.clean_non_persistent_constants = ['void', []];
_library._functions.push(_library.clean_non_persistent_constants);

_library.zend_get_constant = ['int', [ref.refType('char'), 'uint', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_get_constant);

_library.zend_get_constant_ex = ['int', [ref.refType('char'), 'uint', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', 'ulong']];
_library._functions.push(_library.zend_get_constant_ex);

_library.zend_register_bool_constant = ['void', [ref.refType('char'), 'uint', 'uchar', 'int', 'int']];
_library._functions.push(_library.zend_register_bool_constant);

_library.zend_register_null_constant = ['void', [ref.refType('char'), 'uint', 'int', 'int']];
_library._functions.push(_library.zend_register_null_constant);

_library.zend_register_long_constant = ['void', [ref.refType('char'), 'uint', 'long', 'int', 'int']];
_library._functions.push(_library.zend_register_long_constant);

_library.zend_register_double_constant = ['void', [ref.refType('char'), 'uint', 'double', 'int', 'int']];
_library._functions.push(_library.zend_register_double_constant);

_library.zend_register_string_constant = ['void', [ref.refType('char'), 'uint', ref.refType('char'), 'int', 'int']];
_library._functions.push(_library.zend_register_string_constant);

_library.zend_register_stringl_constant = ['void', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int', 'int']];
_library._functions.push(_library.zend_register_stringl_constant);

_library.zend_register_constant = ['int', [_library.zend_constant ? ref.refType(_library.zend_constant) : 'pointer']];
_library._functions.push(_library.zend_register_constant);

_library.zend_copy_constants = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_copy_constants);

_library.copy_zend_constant = ['void', [_library.zend_constant ? ref.refType(_library.zend_constant) : 'pointer']];
_library._functions.push(_library.copy_zend_constant);

_library.zend_quick_get_constant = [_library.zend_constant ? ref.refType(_library.zend_constant) : 'pointer', [_library.zend_literal ? ref.refType(_library.zend_literal) : 'pointer', 'ulong']];
_library._functions.push(_library.zend_quick_get_constant);

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
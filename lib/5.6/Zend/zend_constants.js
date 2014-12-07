var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend_types.js');
_library._zend_constant = Struct({});

_library._preload.push(function () {
    _library._zend_constant.defineProperty("flags", 'int');
    _library._zend_constant.defineProperty("module_number", 'int');
    _library._zend_constant.defineProperty("name", ref.refType('char'));
    _library._zend_constant.defineProperty("name_len", 'uint');
    _library._zend_constant.defineProperty("value", _library.zval);
});

_library.zend_constant = _library._zend_constant;

_library.clean_module_constants = ['void', ['int']];
_library._functions['clean_module_constants'] = _library.clean_module_constants;

_library.free_zend_constant = ['void', [ref.refType(_library.zend_constant)]];
_library._functions['free_zend_constant'] = _library.free_zend_constant;

_library.zend_startup_constants = ['int', []];
_library._functions['zend_startup_constants'] = _library.zend_startup_constants;

_library.zend_shutdown_constants = ['int', []];
_library._functions['zend_shutdown_constants'] = _library.zend_shutdown_constants;

_library.zend_register_standard_constants = ['void', []];
_library._functions['zend_register_standard_constants'] = _library.zend_register_standard_constants;

_library.clean_non_persistent_constants = ['void', []];
_library._functions['clean_non_persistent_constants'] = _library.clean_non_persistent_constants;

_library.zend_get_constant = ['int', [ref.refType('char'), 'uint', ref.refType(_library.zval)]];
_library._functions['zend_get_constant'] = _library.zend_get_constant;

require('./zend.js');
_library.zend_get_constant_ex = ['int', [ref.refType('char'), 'uint', ref.refType(_library.zval), ref.refType(_library.zend_class_entry), 'ulong']];
_library._functions['zend_get_constant_ex'] = _library.zend_get_constant_ex;

_library.zend_register_bool_constant = ['void', [ref.refType('char'), 'uint', 'uchar', 'int', 'int']];
_library._functions['zend_register_bool_constant'] = _library.zend_register_bool_constant;

_library.zend_register_null_constant = ['void', [ref.refType('char'), 'uint', 'int', 'int']];
_library._functions['zend_register_null_constant'] = _library.zend_register_null_constant;

_library.zend_register_long_constant = ['void', [ref.refType('char'), 'uint', 'long', 'int', 'int']];
_library._functions['zend_register_long_constant'] = _library.zend_register_long_constant;

_library.zend_register_double_constant = ['void', [ref.refType('char'), 'uint', 'double', 'int', 'int']];
_library._functions['zend_register_double_constant'] = _library.zend_register_double_constant;

_library.zend_register_string_constant = ['void', [ref.refType('char'), 'uint', ref.refType('char'), 'int', 'int']];
_library._functions['zend_register_string_constant'] = _library.zend_register_string_constant;

_library.zend_register_stringl_constant = ['void', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int', 'int']];
_library._functions['zend_register_stringl_constant'] = _library.zend_register_stringl_constant;

_library.zend_register_constant = ['int', [ref.refType(_library.zend_constant)]];
_library._functions['zend_register_constant'] = _library.zend_register_constant;

require('./zend_hash.js');
_library.zend_copy_constants = ['void', [ref.refType(_library.HashTable), ref.refType(_library.HashTable)]];
_library._functions['zend_copy_constants'] = _library.zend_copy_constants;

_library.copy_zend_constant = ['void', [ref.refType(_library.zend_constant)]];
_library._functions['copy_zend_constant'] = _library.copy_zend_constant;

require('./zend_compile.js');
_library.zend_quick_get_constant = [ref.refType(_library.zend_constant), [ref.refType(_library.zend_literal), 'ulong']];
_library._functions['zend_quick_get_constant'] = _library.zend_quick_get_constant;


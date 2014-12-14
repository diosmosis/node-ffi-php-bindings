var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_constant = Struct({});
_library._zend_constant.size = 1;

_library._preload['_zend_constant'] = ['zval', '_zval_struct', function () {
    _library._zend_constant.size = 0;
    _library._zend_constant.defineProperty("value", _library.zval);
    _library._zend_constant.defineProperty("flags", 'int');
    _library._zend_constant.defineProperty("name", ref.refType('char'));
    _library._zend_constant.defineProperty("name_len", 'uint');
    _library._zend_constant.defineProperty("module_number", 'int');
}];

_library._preload['zend_constant'] = [function () {
    _library.zend_constant = _library._zend_constant;
}];

_library._preload['zend_get_constant'] = ['zval', function () {
    _library.zend_get_constant = ['int', [ref.refType('char'), 'uint', ref.refType(_library.zval)]];
    _library._functions['zend_get_constant'] = _library.zend_get_constant;
}];

_library._preload['zend_get_constant_ex'] = ['zval', 'zend_class_entry', function () {
    _library.zend_get_constant_ex = ['int', [ref.refType('char'), 'uint', ref.refType(_library.zval), ref.refType(_library.zend_class_entry), 'ulong']];
    _library._functions['zend_get_constant_ex'] = _library.zend_get_constant_ex;
}];

_library._preload['zend_register_bool_constant'] = [function () {
    _library.zend_register_bool_constant = ['void', [ref.refType('char'), 'uint', 'uchar', 'int', 'int']];
    _library._functions['zend_register_bool_constant'] = _library.zend_register_bool_constant;
}];

_library._preload['zend_register_null_constant'] = [function () {
    _library.zend_register_null_constant = ['void', [ref.refType('char'), 'uint', 'int', 'int']];
    _library._functions['zend_register_null_constant'] = _library.zend_register_null_constant;
}];

_library._preload['zend_register_long_constant'] = [function () {
    _library.zend_register_long_constant = ['void', [ref.refType('char'), 'uint', 'long', 'int', 'int']];
    _library._functions['zend_register_long_constant'] = _library.zend_register_long_constant;
}];

_library._preload['zend_register_double_constant'] = [function () {
    _library.zend_register_double_constant = ['void', [ref.refType('char'), 'uint', 'double', 'int', 'int']];
    _library._functions['zend_register_double_constant'] = _library.zend_register_double_constant;
}];

_library._preload['zend_register_string_constant'] = [function () {
    _library.zend_register_string_constant = ['void', [ref.refType('char'), 'uint', ref.refType('char'), 'int', 'int']];
    _library._functions['zend_register_string_constant'] = _library.zend_register_string_constant;
}];

_library._preload['zend_register_stringl_constant'] = [function () {
    _library.zend_register_stringl_constant = ['void', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int', 'int']];
    _library._functions['zend_register_stringl_constant'] = _library.zend_register_stringl_constant;
}];

_library._preload['zend_register_constant'] = ['zend_constant', function () {
    _library.zend_register_constant = ['int', [ref.refType(_library.zend_constant)]];
    _library._functions['zend_register_constant'] = _library.zend_register_constant;
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

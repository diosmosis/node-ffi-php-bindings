var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['zif_intval'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_intval = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_intval'] = _library.zif_intval;
}];

_library._preload['zif_floatval'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_floatval = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_floatval'] = _library.zif_floatval;
}];

_library._preload['zif_strval'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_strval = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_strval'] = _library.zif_strval;
}];

_library._preload['zif_boolval'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_boolval = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_boolval'] = _library.zif_boolval;
}];

_library._preload['zif_gettype'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_gettype = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_gettype'] = _library.zif_gettype;
}];

_library._preload['zif_settype'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_settype = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_settype'] = _library.zif_settype;
}];

_library._preload['zif_is_null'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_null = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_null'] = _library.zif_is_null;
}];

_library._preload['zif_is_resource'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_resource = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_resource'] = _library.zif_is_resource;
}];

_library._preload['zif_is_bool'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_bool = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_bool'] = _library.zif_is_bool;
}];

_library._preload['zif_is_long'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_long = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_long'] = _library.zif_is_long;
}];

_library._preload['zif_is_float'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_float = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_float'] = _library.zif_is_float;
}];

_library._preload['zif_is_numeric'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_numeric = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_numeric'] = _library.zif_is_numeric;
}];

_library._preload['zif_is_string'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_string = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_string'] = _library.zif_is_string;
}];

_library._preload['zif_is_array'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_array = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_array'] = _library.zif_is_array;
}];

_library._preload['zif_is_object'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_object = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_object'] = _library.zif_is_object;
}];

_library._preload['zif_is_scalar'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_scalar = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_scalar'] = _library.zif_is_scalar;
}];

_library._preload['zif_is_callable'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_is_callable = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_is_callable'] = _library.zif_is_callable;
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
}

var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zif_intval = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_intval);

_library.zif_floatval = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_floatval);

_library.zif_strval = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_strval);

_library.zif_boolval = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_boolval);

_library.zif_gettype = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_gettype);

_library.zif_settype = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_settype);

_library.zif_is_null = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_null);

_library.zif_is_resource = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_resource);

_library.zif_is_bool = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_bool);

_library.zif_is_long = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_long);

_library.zif_is_float = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_float);

_library.zif_is_numeric = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_numeric);

_library.zif_is_string = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_string);

_library.zif_is_array = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_array);

_library.zif_is_object = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_object);

_library.zif_is_scalar = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_scalar);

_library.zif_is_callable = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_callable);

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
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._php_math_number_format = [ref.refType('char'), ['double', 'int', 'char', 'char']];
_library._functions.push(_library._php_math_number_format);

_library._php_math_number_format_ex = [ref.refType('char'), ['double', 'int', ref.refType('char'), 'ulong', ref.refType('char'), 'ulong']];
_library._functions.push(_library._php_math_number_format_ex);

_library._php_math_longtobase = [ref.refType('char'), [_library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library._php_math_longtobase);

_library._php_math_basetolong = ['long', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library._php_math_basetolong);

_library._php_math_basetozval = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'int', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library._php_math_basetozval);

_library._php_math_zvaltobase = [ref.refType('char'), [_library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library._php_math_zvaltobase);

_library.zif_sin = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_sin);

_library.zif_cos = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_cos);

_library.zif_tan = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_tan);

_library.zif_asin = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_asin);

_library.zif_acos = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_acos);

_library.zif_atan = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_atan);

_library.zif_atan2 = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_atan2);

_library.zif_pi = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_pi);

_library.zif_exp = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_exp);

_library.zif_log = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_log);

_library.zif_log10 = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_log10);

_library.zif_is_finite = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_finite);

_library.zif_is_infinite = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_infinite);

_library.zif_is_nan = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_is_nan);

_library.zif_pow = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_pow);

_library.zif_sqrt = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_sqrt);

_library.zif_srand = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_srand);

_library.zif_rand = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_rand);

_library.zif_getrandmax = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_getrandmax);

_library.zif_mt_srand = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_mt_srand);

_library.zif_mt_rand = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_mt_rand);

_library.zif_mt_getrandmax = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_mt_getrandmax);

_library.zif_abs = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_abs);

_library.zif_ceil = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_ceil);

_library.zif_floor = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_floor);

_library.zif_round = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_round);

_library.zif_decbin = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_decbin);

_library.zif_dechex = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_dechex);

_library.zif_decoct = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_decoct);

_library.zif_bindec = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_bindec);

_library.zif_hexdec = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_hexdec);

_library.zif_octdec = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_octdec);

_library.zif_base_convert = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_base_convert);

_library.zif_number_format = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_number_format);

_library.zif_fmod = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_fmod);

_library.zif_deg2rad = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_deg2rad);

_library.zif_rad2deg = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_rad2deg);

_library.zif_hypot = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_hypot);

_library.zif_expm1 = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_expm1);

_library.zif_log1p = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_log1p);

_library.zif_sinh = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_sinh);

_library.zif_cosh = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_cosh);

_library.zif_tanh = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_tanh);

_library.zif_asinh = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_asinh);

_library.zif_acosh = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_acosh);

_library.zif_atanh = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_atanh);

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
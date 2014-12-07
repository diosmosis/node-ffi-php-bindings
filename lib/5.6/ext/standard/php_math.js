var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library._php_math_number_format = [ref.refType('char'), ['double', 'int', 'char', 'char']];
_library._functions['_php_math_number_format'] = _library._php_math_number_format;

_library._php_math_number_format_ex = [ref.refType('char'), ['double', 'int', ref.refType('char'), 'ulong', ref.refType('char'), 'ulong']];
_library._functions['_php_math_number_format_ex'] = _library._php_math_number_format_ex;

_library._php_math_longtobase = [ref.refType('char'), [ref.refType(_library.zval), 'int']];
_library._functions['_php_math_longtobase'] = _library._php_math_longtobase;

_library._php_math_basetolong = ['long', [ref.refType(_library.zval), 'int']];
_library._functions['_php_math_basetolong'] = _library._php_math_basetolong;

_library._php_math_basetozval = ['int', [ref.refType(_library.zval), 'int', ref.refType(_library.zval)]];
_library._functions['_php_math_basetozval'] = _library._php_math_basetozval;

_library._php_math_zvaltobase = [ref.refType('char'), [ref.refType(_library.zval), 'int']];
_library._functions['_php_math_zvaltobase'] = _library._php_math_zvaltobase;

_library.zif_sin = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_sin'] = _library.zif_sin;

_library.zif_cos = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_cos'] = _library.zif_cos;

_library.zif_tan = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_tan'] = _library.zif_tan;

_library.zif_asin = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_asin'] = _library.zif_asin;

_library.zif_acos = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_acos'] = _library.zif_acos;

_library.zif_atan = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_atan'] = _library.zif_atan;

_library.zif_atan2 = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_atan2'] = _library.zif_atan2;

_library.zif_pi = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_pi'] = _library.zif_pi;

_library.zif_exp = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_exp'] = _library.zif_exp;

_library.zif_log = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_log'] = _library.zif_log;

_library.zif_log10 = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_log10'] = _library.zif_log10;

_library.zif_is_finite = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_is_finite'] = _library.zif_is_finite;

_library.zif_is_infinite = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_is_infinite'] = _library.zif_is_infinite;

_library.zif_is_nan = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_is_nan'] = _library.zif_is_nan;

_library.zif_pow = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_pow'] = _library.zif_pow;

_library.zif_sqrt = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_sqrt'] = _library.zif_sqrt;

_library.zif_srand = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_srand'] = _library.zif_srand;

_library.zif_rand = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_rand'] = _library.zif_rand;

_library.zif_getrandmax = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_getrandmax'] = _library.zif_getrandmax;

_library.zif_mt_srand = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_mt_srand'] = _library.zif_mt_srand;

_library.zif_mt_rand = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_mt_rand'] = _library.zif_mt_rand;

_library.zif_mt_getrandmax = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_mt_getrandmax'] = _library.zif_mt_getrandmax;

_library.zif_abs = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_abs'] = _library.zif_abs;

_library.zif_ceil = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_ceil'] = _library.zif_ceil;

_library.zif_floor = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_floor'] = _library.zif_floor;

_library.zif_round = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_round'] = _library.zif_round;

_library.zif_decbin = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_decbin'] = _library.zif_decbin;

_library.zif_dechex = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_dechex'] = _library.zif_dechex;

_library.zif_decoct = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_decoct'] = _library.zif_decoct;

_library.zif_bindec = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_bindec'] = _library.zif_bindec;

_library.zif_hexdec = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_hexdec'] = _library.zif_hexdec;

_library.zif_octdec = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_octdec'] = _library.zif_octdec;

_library.zif_base_convert = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_base_convert'] = _library.zif_base_convert;

_library.zif_number_format = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_number_format'] = _library.zif_number_format;

_library.zif_fmod = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_fmod'] = _library.zif_fmod;

_library.zif_deg2rad = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_deg2rad'] = _library.zif_deg2rad;

_library.zif_rad2deg = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_rad2deg'] = _library.zif_rad2deg;

_library.zif_hypot = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_hypot'] = _library.zif_hypot;

_library.zif_expm1 = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_expm1'] = _library.zif_expm1;

_library.zif_log1p = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_log1p'] = _library.zif_log1p;

_library.zif_sinh = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_sinh'] = _library.zif_sinh;

_library.zif_cosh = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_cosh'] = _library.zif_cosh;

_library.zif_tanh = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_tanh'] = _library.zif_tanh;

_library.zif_asinh = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_asinh'] = _library.zif_asinh;

_library.zif_acosh = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_acosh'] = _library.zif_acosh;

_library.zif_atanh = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_atanh'] = _library.zif_atanh;


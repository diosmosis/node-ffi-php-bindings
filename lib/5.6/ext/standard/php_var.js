var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

require('./zend_types.js');
_library.zif_var_dump = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_var_dump'] = _library.zif_var_dump;

_library.zif_var_export = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_var_export'] = _library.zif_var_export;

_library.zif_debug_zval_dump = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_debug_zval_dump'] = _library.zif_debug_zval_dump;

_library.zif_serialize = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_serialize'] = _library.zif_serialize;

_library.zif_unserialize = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_unserialize'] = _library.zif_unserialize;

_library.zif_memory_get_usage = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_memory_get_usage'] = _library.zif_memory_get_usage;

_library.zif_memory_get_peak_usage = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_memory_get_peak_usage'] = _library.zif_memory_get_peak_usage;

_library.php_var_dump = ['void', [ref.refType(ref.refType(_library.zval)), 'int']];
_library._functions['php_var_dump'] = _library.php_var_dump;

_library.php_var_export = ['void', [ref.refType(ref.refType(_library.zval)), 'int']];
_library._functions['php_var_export'] = _library.php_var_export;

require('./php_smart_str_public.js');
_library.php_var_export_ex = ['void', [ref.refType(ref.refType(_library.zval)), 'int', ref.refType(_library.smart_str)]];
_library._functions['php_var_export_ex'] = _library.php_var_export_ex;

_library.php_debug_zval_dump = ['void', [ref.refType(ref.refType(_library.zval)), 'int']];
_library._functions['php_debug_zval_dump'] = _library.php_debug_zval_dump;

require('./zend_hash.js');
_library.php_serialize_data_t = ref.refType(_library.HashTable);

_library.php_unserialize_data = Struct({});
_library.php_unserialize_data.size = 1;

_library._preload.push(function () {
    _library.php_unserialize_data.size = 0;
    _library.php_unserialize_data.defineProperty("first", ref.refType('void'));
    _library.php_unserialize_data.defineProperty("first_dtor", ref.refType('void'));
    _library.php_unserialize_data.defineProperty("last", ref.refType('void'));
    _library.php_unserialize_data.defineProperty("last_dtor", ref.refType('void'));
});

_library.php_unserialize_data_t = ref.refType(_library.php_unserialize_data);

_library.php_var_serialize = ['void', [ref.refType(_library.smart_str), ref.refType(ref.refType(_library.zval)), ref.refType(_library.php_serialize_data_t)]];
_library._functions['php_var_serialize'] = _library.php_var_serialize;

_library.php_var_unserialize = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(ref.refType('uchar')), ref.refType('uchar'), ref.refType(_library.php_unserialize_data_t)]];
_library._functions['php_var_unserialize'] = _library.php_var_unserialize;

_library.var_replace = ['void', [ref.refType(_library.php_unserialize_data_t), ref.refType(_library.zval), ref.refType(ref.refType(_library.zval))]];
_library._functions['var_replace'] = _library.var_replace;

_library.var_push_dtor = ['void', [ref.refType(_library.php_unserialize_data_t), ref.refType(ref.refType(_library.zval))]];
_library._functions['var_push_dtor'] = _library.var_push_dtor;

_library.var_push_dtor_no_addref = ['void', [ref.refType(_library.php_unserialize_data_t), ref.refType(ref.refType(_library.zval))]];
_library._functions['var_push_dtor_no_addref'] = _library.var_push_dtor_no_addref;

_library.var_destroy = ['void', [ref.refType(_library.php_unserialize_data_t)]];
_library._functions['var_destroy'] = _library.var_destroy;

require('./zend.js');
_library.php_create_empty_class = [ref.refType(_library.zend_class_entry), [ref.refType('char'), 'int']];
_library._functions['php_create_empty_class'] = _library.php_create_empty_class;

_library.php_varname_check = ['int', [ref.refType('char'), 'int', 'uchar']];
_library._functions['php_varname_check'] = _library.php_varname_check;


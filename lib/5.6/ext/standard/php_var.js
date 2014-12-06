var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zif_var_dump = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_var_dump);

_library.zif_var_export = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_var_export);

_library.zif_debug_zval_dump = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_debug_zval_dump);

_library.zif_serialize = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_serialize);

_library.zif_unserialize = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_unserialize);

_library.zif_memory_get_usage = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_memory_get_usage);

_library.zif_memory_get_peak_usage = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_memory_get_peak_usage);

_library.php_var_dump = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', 'int']];
_library._functions.push(_library.php_var_dump);

_library.php_var_export = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', 'int']];
_library._functions.push(_library.php_var_export);

_library.php_var_export_ex = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', 'int', _library.smart_str ? ref.refType(_library.smart_str) : 'pointer']];
_library._functions.push(_library.php_var_export_ex);

_library.php_debug_zval_dump = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', 'int']];
_library._functions.push(_library.php_debug_zval_dump);

_library.php_serialize_data_t = _library.HashTable ? ref.refType(_library.HashTable) : 'pointer';

_library.php_unserialize_data = Struct({
    "first": ref.refType('void'),
    "first_dtor": ref.refType('void'),
    "last": ref.refType('void'),
    "last_dtor": ref.refType('void')
});

_library.php_unserialize_data_t = _library.php_unserialize_data ? ref.refType(_library.php_unserialize_data) : 'pointer';

_library.php_var_serialize = ['void', [_library.smart_str ? ref.refType(_library.smart_str) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.php_serialize_data_t ? ref.refType(_library.php_serialize_data_t) : 'pointer']];
_library._functions.push(_library.php_var_serialize);

_library.php_var_unserialize = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', ref.refType(ref.refType('uchar')), ref.refType('uchar'), _library.php_unserialize_data_t ? ref.refType(_library.php_unserialize_data_t) : 'pointer']];
_library._functions.push(_library.php_var_unserialize);

_library.var_replace = ['void', [_library.php_unserialize_data_t ? ref.refType(_library.php_unserialize_data_t) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer']];
_library._functions.push(_library.var_replace);

_library.var_push_dtor = ['void', [_library.php_unserialize_data_t ? ref.refType(_library.php_unserialize_data_t) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer']];
_library._functions.push(_library.var_push_dtor);

_library.var_push_dtor_no_addref = ['void', [_library.php_unserialize_data_t ? ref.refType(_library.php_unserialize_data_t) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer']];
_library._functions.push(_library.var_push_dtor_no_addref);

_library.var_destroy = ['void', [_library.php_unserialize_data_t ? ref.refType(_library.php_unserialize_data_t) : 'pointer']];
_library._functions.push(_library.var_destroy);

_library.php_create_empty_class = [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', [ref.refType('char'), 'int']];
_library._functions.push(_library.php_create_empty_class);

_library.php_varname_check = ['int', [ref.refType('char'), 'int', 'uchar']];
_library._functions.push(_library.php_varname_check);

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
    require('./php_smart_str_public.js');
}
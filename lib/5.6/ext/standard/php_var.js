var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zif_var_dump = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_var_dump);

_library.zif_var_export = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_var_export);

_library.zif_debug_zval_dump = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_debug_zval_dump);

_library.zif_serialize = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_serialize);

_library.zif_unserialize = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_unserialize);

_library.zif_memory_get_usage = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_memory_get_usage);

_library.zif_memory_get_peak_usage = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_memory_get_peak_usage);

_library.php_var_dump = ['void', [ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', 'int']];
_library._functions.push(_library.php_var_dump);

_library.php_var_export = ['void', [ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', 'int']];
_library._functions.push(_library.php_var_export);

_library.php_var_export_ex = ['void', [ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', 'int', ref.refType(_library.smart_str)]];
_library._functions.push(_library.php_var_export_ex);

_library.php_debug_zval_dump = ['void', [ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', 'int']];
_library._functions.push(_library.php_debug_zval_dump);

_library.php_serialize_data_t = ref.refType(_library.HashTable);

_library.php_unserialize_data = Struct({
    "first": 'void' ? ref.refType('void') : 'pointer',
    "first_dtor": 'void' ? ref.refType('void') : 'pointer',
    "last": 'void' ? ref.refType('void') : 'pointer',
    "last_dtor": 'void' ? ref.refType('void') : 'pointer'
});

_library.php_unserialize_data_t = ref.refType(_library.php_unserialize_data);

_library.php_var_serialize = ['void', [ref.refType(_library.smart_str), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.php_serialize_data_t)]];
_library._functions.push(_library.php_var_serialize);

_library.php_var_unserialize = ['int', [ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', 'uchar' ? ref.refType('uchar') : 'pointer' ? ref.refType('uchar' ? ref.refType('uchar') : 'pointer') : 'pointer', 'uchar' ? ref.refType('uchar') : 'pointer', ref.refType(_library.php_unserialize_data_t)]];
_library._functions.push(_library.php_var_unserialize);

_library.var_replace = ['void', [ref.refType(_library.php_unserialize_data_t), ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer']];
_library._functions.push(_library.var_replace);

_library.var_push_dtor = ['void', [ref.refType(_library.php_unserialize_data_t), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer']];
_library._functions.push(_library.var_push_dtor);

_library.var_push_dtor_no_addref = ['void', [ref.refType(_library.php_unserialize_data_t), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer']];
_library._functions.push(_library.var_push_dtor_no_addref);

_library.var_destroy = ['void', [ref.refType(_library.php_unserialize_data_t)]];
_library._functions.push(_library.var_destroy);

_library.php_create_empty_class = [ref.refType(_library.zend_class_entry), ['char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.php_create_empty_class);

_library.php_varname_check = ['int', ['char' ? ref.refType('char') : 'pointer', 'int', 'uchar']];
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
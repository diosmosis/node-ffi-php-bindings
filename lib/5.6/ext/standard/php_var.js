var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_var_dump'] = ['pointer', function () {
    _library.php_var_dump = ['void', [ref.refType(ref.refType(_library.zval)), 'int']];
    _library._functions['php_var_dump'] = _library.php_var_dump;
}];

_library._preload['php_var_export'] = ['pointer', function () {
    _library.php_var_export = ['void', [ref.refType(ref.refType(_library.zval)), 'int']];
    _library._functions['php_var_export'] = _library.php_var_export;
}];

_library._preload['php_var_export_ex'] = ['pointer', 'smart_str', function () {
    _library.php_var_export_ex = ['void', [ref.refType(ref.refType(_library.zval)), 'int', ref.refType(_library.smart_str)]];
    _library._functions['php_var_export_ex'] = _library.php_var_export_ex;
}];

_library._preload['php_debug_zval_dump'] = ['pointer', function () {
    _library.php_debug_zval_dump = ['void', [ref.refType(ref.refType(_library.zval)), 'int']];
    _library._functions['php_debug_zval_dump'] = _library.php_debug_zval_dump;
}];

_library._preload['php_serialize_data_t'] = ['HashTable', function () {
    _library.php_serialize_data_t = ref.refType(_library.HashTable);
}];

_library.php_unserialize_data = Struct({});
_library.php_unserialize_data.size = 1;

_library._preload['php_unserialize_data'] = [function () {
    _library.php_unserialize_data.size = 0;
    _library.php_unserialize_data.defineProperty("first", ref.refType('void'));
    _library.php_unserialize_data.defineProperty("last", ref.refType('void'));
    _library.php_unserialize_data.defineProperty("first_dtor", ref.refType('void'));
    _library.php_unserialize_data.defineProperty("last_dtor", ref.refType('void'));
}];

_library._preload['php_unserialize_data_t'] = [function () {
    _library.php_unserialize_data_t = ref.refType(_library.php_unserialize_data);
}];

_library._preload['php_var_serialize'] = ['smart_str', 'pointer', 'php_serialize_data_t', function () {
    _library.php_var_serialize = ['void', [ref.refType(_library.smart_str), ref.refType(ref.refType(_library.zval)), ref.refType(_library.php_serialize_data_t)]];
    _library._functions['php_var_serialize'] = _library.php_var_serialize;
}];

_library._preload['php_var_unserialize'] = ['pointer', 'pointer', 'php_unserialize_data_t', function () {
    _library.php_var_unserialize = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(ref.refType('uchar')), ref.refType('uchar'), ref.refType(_library.php_unserialize_data_t)]];
    _library._functions['php_var_unserialize'] = _library.php_var_unserialize;
}];

_library._preload['var_replace'] = ['php_unserialize_data_t', 'zval', 'pointer', function () {
    _library.var_replace = ['void', [ref.refType(_library.php_unserialize_data_t), ref.refType(_library.zval), ref.refType(ref.refType(_library.zval))]];
    _library._functions['var_replace'] = _library.var_replace;
}];

_library._preload['var_push_dtor'] = ['php_unserialize_data_t', 'pointer', function () {
    _library.var_push_dtor = ['void', [ref.refType(_library.php_unserialize_data_t), ref.refType(ref.refType(_library.zval))]];
    _library._functions['var_push_dtor'] = _library.var_push_dtor;
}];

_library._preload['var_push_dtor_no_addref'] = ['php_unserialize_data_t', 'pointer', function () {
    _library.var_push_dtor_no_addref = ['void', [ref.refType(_library.php_unserialize_data_t), ref.refType(ref.refType(_library.zval))]];
    _library._functions['var_push_dtor_no_addref'] = _library.var_push_dtor_no_addref;
}];

_library._preload['var_destroy'] = ['php_unserialize_data_t', function () {
    _library.var_destroy = ['void', [ref.refType(_library.php_unserialize_data_t)]];
    _library._functions['var_destroy'] = _library.var_destroy;
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
    require('./php_smart_str_public.js');
}

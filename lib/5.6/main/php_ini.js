var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['config_zval_dtor'] = ['zval', function () {
    _library.config_zval_dtor = ['void', [ref.refType(_library.zval)]];
    _library._functions['config_zval_dtor'] = _library.config_zval_dtor;
}];

_library._preload['cfg_get_entry'] = ['zval', function () {
    _library.cfg_get_entry = [ref.refType(_library.zval), [ref.refType('char'), 'uint']];
    _library._functions['cfg_get_entry'] = _library.cfg_get_entry;
}];

_library._preload['cfg_get_long'] = [function () {
    _library.cfg_get_long = ['int', [ref.refType('char'), ref.refType('long')]];
    _library._functions['cfg_get_long'] = _library.cfg_get_long;
}];

_library._preload['cfg_get_double'] = [function () {
    _library.cfg_get_double = ['int', [ref.refType('char'), ref.refType('double')]];
    _library._functions['cfg_get_double'] = _library.cfg_get_double;
}];

_library._preload['cfg_get_string'] = ['pointer', function () {
    _library.cfg_get_string = ['int', [ref.refType('char'), ref.refType(ref.refType('char'))]];
    _library._functions['cfg_get_string'] = _library.cfg_get_string;
}];

_library._preload['php_parse_user_ini_file'] = ['HashTable', function () {
    _library.php_parse_user_ini_file = ['int', [ref.refType('char'), ref.refType('char'), ref.refType(_library.HashTable)]];
    _library._functions['php_parse_user_ini_file'] = _library.php_parse_user_ini_file;
}];

_library._preload['php_ini_activate_config'] = ['HashTable', function () {
    _library.php_ini_activate_config = ['void', [ref.refType(_library.HashTable), 'int', 'int']];
    _library._functions['php_ini_activate_config'] = _library.php_ini_activate_config;
}];

_library._preload['php_ini_has_per_dir_config'] = [function () {
    _library.php_ini_has_per_dir_config = ['int', []];
    _library._functions['php_ini_has_per_dir_config'] = _library.php_ini_has_per_dir_config;
}];

_library._preload['php_ini_has_per_host_config'] = [function () {
    _library.php_ini_has_per_host_config = ['int', []];
    _library._functions['php_ini_has_per_host_config'] = _library.php_ini_has_per_host_config;
}];

_library._preload['php_ini_activate_per_dir_config'] = [function () {
    _library.php_ini_activate_per_dir_config = ['void', [ref.refType('char'), 'uint']];
    _library._functions['php_ini_activate_per_dir_config'] = _library.php_ini_activate_per_dir_config;
}];

_library._preload['php_ini_activate_per_host_config'] = [function () {
    _library.php_ini_activate_per_host_config = ['void', [ref.refType('char'), 'uint']];
    _library._functions['php_ini_activate_per_host_config'] = _library.php_ini_activate_per_host_config;
}];

_library._preload['php_ini_get_configuration_hash'] = ['HashTable', function () {
    _library.php_ini_get_configuration_hash = [ref.refType(_library.HashTable), []];
    _library._functions['php_ini_get_configuration_hash'] = _library.php_ini_get_configuration_hash;
}];

function loadDependentSymbols() {
    require('./../Zend/zend.js');
    require('./../Zend/zend_API.js');
    require('./../Zend/zend_ast.js');
    require('./../Zend/zend_compile.js');
    require('./../Zend/zend_hash.js');
    require('./../Zend/zend_ini.js');
    require('./../Zend/zend_iterators.js');
    require('./../Zend/zend_modules.js');
    require('./../Zend/zend_object_handlers.js');
    require('./../Zend/zend_types.js');
}

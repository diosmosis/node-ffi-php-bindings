var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_startup_auto_globals = ['void', []];
_library._functions['php_startup_auto_globals'] = _library.php_startup_auto_globals;

_library.php_register_variable = ['void', [ref.refType('char'), ref.refType('char'), ref.refType(_library.zval)]];
_library._functions['php_register_variable'] = _library.php_register_variable;

_library.php_register_variable_safe = ['void', [ref.refType('char'), ref.refType('char'), 'int', ref.refType(_library.zval)]];
_library._functions['php_register_variable_safe'] = _library.php_register_variable_safe;

_library.php_register_variable_ex = ['void', [ref.refType('char'), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions['php_register_variable_ex'] = _library.php_register_variable_ex;

_library.php_hash_environment = ['int', []];
_library._functions['php_hash_environment'] = _library.php_hash_environment;

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
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_escape_shell_cmd'] = [function () {
    _library.php_escape_shell_cmd = [ref.refType('char'), [ref.refType('char')]];
    _library._functions['php_escape_shell_cmd'] = _library.php_escape_shell_cmd;
}];

_library._preload['php_escape_shell_arg'] = [function () {
    _library.php_escape_shell_arg = [ref.refType('char'), [ref.refType('char')]];
    _library._functions['php_escape_shell_arg'] = _library.php_escape_shell_arg;
}];

_library._preload['php_exec'] = ['zval', 'zval', function () {
    _library.php_exec = ['int', ['int', ref.refType('char'), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['php_exec'] = _library.php_exec;
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

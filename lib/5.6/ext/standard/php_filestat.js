var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_clear_stat_cache'] = [function () {
    _library.php_clear_stat_cache = ['void', ['uchar', ref.refType('char'), 'int']];
    _library._functions['php_clear_stat_cache'] = _library.php_clear_stat_cache;
}];

_library._preload['php_stat'] = ['zval', function () {
    _library.php_stat = ['void', [ref.refType('char'), 'int', 'int', ref.refType(_library.zval)]];
    _library._functions['php_stat'] = _library.php_stat;
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

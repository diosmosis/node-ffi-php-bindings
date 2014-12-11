var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_load_extension'] = [function () {
    _library.php_load_extension = ['int', [ref.refType('char'), 'int', 'int']];
    _library._functions['php_load_extension'] = _library.php_load_extension;
}];

_library._preload['php_dl'] = ['zval', function () {
    _library.php_dl = ['void', [ref.refType('char'), 'int', ref.refType(_library.zval), 'int']];
    _library._functions['php_dl'] = _library.php_dl;
}];

_library._preload['zif_dl'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_dl = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_dl'] = _library.zif_dl;
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

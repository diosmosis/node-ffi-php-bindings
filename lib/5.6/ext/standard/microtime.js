var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['zif_microtime'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_microtime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_microtime'] = _library.zif_microtime;
}];

_library._preload['zif_gettimeofday'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_gettimeofday = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_gettimeofday'] = _library.zif_gettimeofday;
}];

_library._preload['zif_getrusage'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_getrusage = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_getrusage'] = _library.zif_getrusage;
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

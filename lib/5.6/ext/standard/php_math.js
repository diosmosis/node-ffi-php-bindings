var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['_php_math_number_format'] = [function () {
    _library._php_math_number_format = [ref.refType('char'), ['double', 'int', 'char', 'char']];
    _library._functions['_php_math_number_format'] = _library._php_math_number_format;
}];

_library._preload['_php_math_number_format_ex'] = [function () {
    _library._php_math_number_format_ex = [ref.refType('char'), ['double', 'int', ref.refType('char'), 'ulong', ref.refType('char'), 'ulong']];
    _library._functions['_php_math_number_format_ex'] = _library._php_math_number_format_ex;
}];

_library._preload['_php_math_longtobase'] = ['zval', function () {
    _library._php_math_longtobase = [ref.refType('char'), [ref.refType(_library.zval), 'int']];
    _library._functions['_php_math_longtobase'] = _library._php_math_longtobase;
}];

_library._preload['_php_math_basetolong'] = ['zval', function () {
    _library._php_math_basetolong = ['long', [ref.refType(_library.zval), 'int']];
    _library._functions['_php_math_basetolong'] = _library._php_math_basetolong;
}];

_library._preload['_php_math_basetozval'] = ['zval', 'zval', function () {
    _library._php_math_basetozval = ['int', [ref.refType(_library.zval), 'int', ref.refType(_library.zval)]];
    _library._functions['_php_math_basetozval'] = _library._php_math_basetozval;
}];

_library._preload['_php_math_zvaltobase'] = ['zval', function () {
    _library._php_math_zvaltobase = [ref.refType('char'), [ref.refType(_library.zval), 'int']];
    _library._functions['_php_math_zvaltobase'] = _library._php_math_zvaltobase;
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

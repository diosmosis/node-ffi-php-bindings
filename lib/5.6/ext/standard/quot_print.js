var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_quot_print_decode = [ref.refType('uchar'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int']];
_library._functions.push(_library.php_quot_print_decode);

_library.php_quot_print_encode = [ref.refType('uchar'), [ref.refType('uchar'), 'ulong', ref.refType('ulong')]];
_library._functions.push(_library.php_quot_print_encode);

_library.zif_quoted_printable_decode = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_quoted_printable_decode);

_library.zif_quoted_printable_encode = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_quoted_printable_encode);

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
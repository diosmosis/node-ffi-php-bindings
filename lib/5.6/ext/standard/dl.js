var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_load_extension = ['int', ['char' ? ref.refType('char') : 'pointer', 'int', 'int']];
_library._functions.push(_library.php_load_extension);

_library.php_dl = ['void', ['char' ? ref.refType('char') : 'pointer', 'int', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_dl);

_library.zif_dl = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_dl);

_library.zm_info_dl = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.zm_info_dl);

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
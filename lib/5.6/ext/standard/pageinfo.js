var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zif_getmyuid = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_getmyuid'] = _library.zif_getmyuid;

_library.zif_getmygid = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_getmygid'] = _library.zif_getmygid;

_library.zif_getmypid = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_getmypid'] = _library.zif_getmypid;

_library.zif_getmyinode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_getmyinode'] = _library.zif_getmyinode;

_library.zif_getlastmod = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_getlastmod'] = _library.zif_getlastmod;

_library.php_statpage = ['void', []];
_library._functions['php_statpage'] = _library.php_statpage;

_library.php_getlastmod = ['long', []];
_library._functions['php_getlastmod'] = _library.php_getlastmod;

_library.php_getuid = ['long', []];
_library._functions['php_getuid'] = _library.php_getuid;

_library.php_getgid = ['long', []];
_library._functions['php_getgid'] = _library.php_getgid;

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
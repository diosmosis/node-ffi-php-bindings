var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zif_gethostbyaddr = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_gethostbyaddr);

_library.zif_gethostbyname = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_gethostbyname);

_library.zif_gethostbynamel = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_gethostbynamel);

_library.zif_gethostname = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_gethostname);

_library.zif_dns_check_record = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_dns_check_record);

_library.zif_dns_get_mx = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_dns_get_mx);

_library.zif_dns_get_record = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_dns_get_record);

_library.zm_startup_dns = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_dns);

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
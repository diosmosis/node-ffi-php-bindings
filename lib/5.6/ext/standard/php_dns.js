var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['zif_gethostbyaddr'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_gethostbyaddr = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_gethostbyaddr'] = _library.zif_gethostbyaddr;
}];

_library._preload['zif_gethostbyname'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_gethostbyname = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_gethostbyname'] = _library.zif_gethostbyname;
}];

_library._preload['zif_gethostbynamel'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_gethostbynamel = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_gethostbynamel'] = _library.zif_gethostbynamel;
}];

_library._preload['zif_gethostname'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_gethostname = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_gethostname'] = _library.zif_gethostname;
}];

_library._preload['zif_dns_check_record'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_dns_check_record = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_dns_check_record'] = _library.zif_dns_check_record;
}];

_library._preload['zif_dns_get_mx'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_dns_get_mx = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_dns_get_mx'] = _library.zif_dns_get_mx;
}];

_library._preload['zif_dns_get_record'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_dns_get_record = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_dns_get_record'] = _library.zif_dns_get_record;
}];

_library._preload['zm_startup_dns'] = [function () {
    _library.zm_startup_dns = ['int', ['int', 'int']];
    _library._functions['zm_startup_dns'] = _library.zm_startup_dns;
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

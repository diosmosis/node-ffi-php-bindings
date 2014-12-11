var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['zm_startup_syslog'] = [function () {
    _library.zm_startup_syslog = ['int', ['int', 'int']];
    _library._functions['zm_startup_syslog'] = _library.zm_startup_syslog;
}];

_library._preload['zm_activate_syslog'] = [function () {
    _library.zm_activate_syslog = ['int', ['int', 'int']];
    _library._functions['zm_activate_syslog'] = _library.zm_activate_syslog;
}];

_library._preload['zm_shutdown_syslog'] = [function () {
    _library.zm_shutdown_syslog = ['int', ['int', 'int']];
    _library._functions['zm_shutdown_syslog'] = _library.zm_shutdown_syslog;
}];

_library._preload['zif_openlog'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_openlog = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_openlog'] = _library.zif_openlog;
}];

_library._preload['zif_syslog'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_syslog = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_syslog'] = _library.zif_syslog;
}];

_library._preload['zif_closelog'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_closelog = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_closelog'] = _library.zif_closelog;
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

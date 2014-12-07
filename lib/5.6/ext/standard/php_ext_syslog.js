var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zm_startup_syslog = ['int', ['int', 'int']];
_library._functions['zm_startup_syslog'] = _library.zm_startup_syslog;

_library.zm_activate_syslog = ['int', ['int', 'int']];
_library._functions['zm_activate_syslog'] = _library.zm_activate_syslog;

_library.zm_shutdown_syslog = ['int', ['int', 'int']];
_library._functions['zm_shutdown_syslog'] = _library.zm_shutdown_syslog;

_library.zif_openlog = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_openlog'] = _library.zif_openlog;

_library.zif_syslog = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_syslog'] = _library.zif_syslog;

_library.zif_closelog = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_closelog'] = _library.zif_closelog;


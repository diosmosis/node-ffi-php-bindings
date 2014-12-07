var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zm_startup_browscap = ['int', ['int', 'int']];
_library._functions['zm_startup_browscap'] = _library.zm_startup_browscap;

_library.zm_shutdown_browscap = ['int', ['int', 'int']];
_library._functions['zm_shutdown_browscap'] = _library.zm_shutdown_browscap;

_library.zif_get_browser = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_get_browser'] = _library.zif_get_browser;


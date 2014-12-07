var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zm_startup_pack = ['int', ['int', 'int']];
_library._functions['zm_startup_pack'] = _library.zm_startup_pack;

_library.zif_pack = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_pack'] = _library.zif_pack;

_library.zif_unpack = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_unpack'] = _library.zif_unpack;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zif_gethostbyaddr = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_gethostbyaddr'] = _library.zif_gethostbyaddr;

_library.zif_gethostbyname = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_gethostbyname'] = _library.zif_gethostbyname;

_library.zif_gethostbynamel = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_gethostbynamel'] = _library.zif_gethostbynamel;

_library.zif_gethostname = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_gethostname'] = _library.zif_gethostname;

_library.zif_dns_check_record = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_dns_check_record'] = _library.zif_dns_check_record;

_library.zif_dns_get_mx = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_dns_get_mx'] = _library.zif_dns_get_mx;

_library.zif_dns_get_record = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_dns_get_record'] = _library.zif_dns_get_record;

_library.zm_startup_dns = ['int', ['int', 'int']];
_library._functions['zm_startup_dns'] = _library.zm_startup_dns;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

require('./zend_types.js');
_library.zif_mail = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_mail'] = _library.zif_mail;

require('./zend_modules.js');
_library.zm_info_mail = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions['zm_info_mail'] = _library.zm_info_mail;

_library.zif_ezmlm_hash = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_ezmlm_hash'] = _library.zif_ezmlm_hash;

_library.php_mail = ['int', [ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char')]];
_library._functions['php_mail'] = _library.php_mail;


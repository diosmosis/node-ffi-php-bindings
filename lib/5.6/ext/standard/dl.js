var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_load_extension = ['int', [ref.refType('char'), 'int', 'int']];
_library._functions['php_load_extension'] = _library.php_load_extension;

_library.php_dl = ['void', [ref.refType('char'), 'int', ref.refType(_library.zval), 'int']];
_library._functions['php_dl'] = _library.php_dl;

_library.zif_dl = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_dl'] = _library.zif_dl;

_library.zm_info_dl = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions['zm_info_dl'] = _library.zm_info_dl;


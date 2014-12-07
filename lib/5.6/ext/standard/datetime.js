var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

require('./zend_types.js');
_library.zif_strptime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_strptime'] = _library.zif_strptime;

_library.php_std_date = [ref.refType('char'), [_library.time_t]];
_library._functions['php_std_date'] = _library.php_std_date;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_canonicalize_version = [ref.refType('char'), [ref.refType('char')]];
_library._functions['php_canonicalize_version'] = _library.php_canonicalize_version;

_library.php_version_compare = ['int', [ref.refType('char'), ref.refType('char')]];
_library._functions['php_version_compare'] = _library.php_version_compare;

require('./zend_types.js');
_library.zif_version_compare = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_version_compare'] = _library.zif_version_compare;


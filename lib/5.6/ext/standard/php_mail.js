var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zif_mail = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_mail);

_library.zm_info_mail = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.zm_info_mail);

_library.zif_ezmlm_hash = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ezmlm_hash);

_library.php_mail = ['int', [ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char')]];
_library._functions.push(_library.php_mail);

function loadDependentSymbols() {
};
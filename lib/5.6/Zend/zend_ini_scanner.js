var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.zend_ini_scanner_get_lineno = ['int', []];
_library._functions.push(_library.zend_ini_scanner_get_lineno);

_library.zend_ini_scanner_get_filename = [ref.refType('char'), []];
_library._functions.push(_library.zend_ini_scanner_get_filename);

_library.zend_ini_open_file_for_scanning = ['int', [ref.refType(_library.zend_file_handle), 'int']];
_library._functions.push(_library.zend_ini_open_file_for_scanning);

_library.zend_ini_prepare_string_for_scanning = ['int', [ref.refType('char'), 'int']];
_library._functions.push(_library.zend_ini_prepare_string_for_scanning);

_library.ini_lex = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.ini_lex);

_library.shutdown_ini_scanner = ['void', []];
_library._functions.push(_library.shutdown_ini_scanner);


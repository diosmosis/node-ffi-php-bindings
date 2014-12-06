var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_ini_scanner_get_lineno = ['int', []];
_library._functions.push(_library.zend_ini_scanner_get_lineno);

_library.zend_ini_scanner_get_filename = [ref.refType('char'), []];
_library._functions.push(_library.zend_ini_scanner_get_filename);

_library.zend_ini_open_file_for_scanning = ['int', [_library.zend_file_handle ? ref.refType(_library.zend_file_handle) : 'pointer', 'int']];
_library._functions.push(_library.zend_ini_open_file_for_scanning);

_library.zend_ini_prepare_string_for_scanning = ['int', [ref.refType('char'), 'int']];
_library._functions.push(_library.zend_ini_prepare_string_for_scanning);

_library.ini_lex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.ini_lex);

_library.shutdown_ini_scanner = ['void', []];
_library._functions.push(_library.shutdown_ini_scanner);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_stream.js');
    require('./zend_types.js');
}
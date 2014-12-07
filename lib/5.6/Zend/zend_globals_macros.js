var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend_globals.js');
_library.zend_compiler_globals = _library._zend_compiler_globals;

_library.zend_executor_globals = _library._zend_executor_globals;

_library.zend_php_scanner_globals = _library._zend_php_scanner_globals;

_library.zend_ini_scanner_globals = _library._zend_ini_scanner_globals;

_library.zendparse = ['int', []];
_library._functions['zendparse'] = _library.zendparse;


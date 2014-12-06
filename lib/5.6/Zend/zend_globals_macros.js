var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_compiler_globals = _library._zend_compiler_globals;

_library.zend_executor_globals = _library._zend_executor_globals;

_library.zend_php_scanner_globals = _library._zend_php_scanner_globals;

_library.zend_ini_scanner_globals = _library._zend_ini_scanner_globals;

_library.zendparse = ['int', []];
_library._functions.push(_library.zendparse);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_execute.js');
    require('./zend_gc.js');
    require('./zend_globals.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_llist.js');
    require('./zend_modules.js');
    require('./zend_multibyte.js');
    require('./zend_object_handlers.js');
    require('./zend_objects_API.js');
    require('./zend_ptr_stack.js');
    require('./zend_stack.js');
    require('./zend_stream.js');
    require('./zend_types.js');
}
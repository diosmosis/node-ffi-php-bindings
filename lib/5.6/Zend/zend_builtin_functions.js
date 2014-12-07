var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_startup_builtin_functions = ['int', []];
_library._functions['zend_startup_builtin_functions'] = _library.zend_startup_builtin_functions;

_library.zend_fetch_debug_backtrace = ['void', [ref.refType(_library.zval), 'int', 'int', 'int']];
_library._functions['zend_fetch_debug_backtrace'] = _library.zend_fetch_debug_backtrace;

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
    require('./zend_types.js');
}
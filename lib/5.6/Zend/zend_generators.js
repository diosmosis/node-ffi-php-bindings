var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_generator_iterator = Struct({
    "intern": _library.zend_object_iterator,
    "object": _library.zval ? ref.refType(_library.zval) : 'pointer'
});

_library.zend_generator_iterator = _library._zend_generator_iterator;

_library._zend_generator = Struct({
    "execute_data": _library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer',
    "flags": 'uchar',
    "iterator": _library.zend_generator_iterator,
    "key": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "largest_used_integer_key": 'long',
    "send_target": _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer',
    "stack": _library.zend_vm_stack,
    "std": _library.zend_object,
    "value": _library.zval ? ref.refType(_library.zval) : 'pointer'
});

_library.zend_generator = _library._zend_generator;

_library.zend_register_generator_ce = ['void', []];
_library._functions.push(_library.zend_register_generator_ce);

_library.zend_generator_create_zval = [_library.zval ? ref.refType(_library.zval) : 'pointer', [_library.zend_op_array ? ref.refType(_library.zend_op_array) : 'pointer']];
_library._functions.push(_library.zend_generator_create_zval);

_library.zend_generator_close = ['void', [_library.zend_generator ? ref.refType(_library.zend_generator) : 'pointer', 'uchar']];
_library._functions.push(_library.zend_generator_close);

_library.zend_generator_resume = ['void', [_library.zend_generator ? ref.refType(_library.zend_generator) : 'pointer']];
_library._functions.push(_library.zend_generator_resume);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_execute.js');
    require('./zend_globals.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}
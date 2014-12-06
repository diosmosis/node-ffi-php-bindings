var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_generator_iterator = Struct({
    "intern": _library.zend_object_iterator,
    "object": ref.refType(_library.zval)
});

_library.zend_generator_iterator = _library._zend_generator_iterator;

_library._zend_generator = Struct({
    "execute_data": ref.refType(_library.zend_execute_data),
    "flags": 'uchar',
    "iterator": _library.zend_generator_iterator,
    "key": ref.refType(_library.zval),
    "largest_used_integer_key": 'long',
    "send_target": ref.refType(ref.refType(_library.zval)),
    "stack": _library.zend_vm_stack,
    "std": _library.zend_object,
    "value": ref.refType(_library.zval)
});

_library.zend_generator = _library._zend_generator;

_library.zend_register_generator_ce = ['void', []];
_library._functions.push(_library.zend_register_generator_ce);

_library.zend_generator_create_zval = [ref.refType(_library.zval), [ref.refType(_library.zend_op_array)]];
_library._functions.push(_library.zend_generator_create_zval);

_library.zend_generator_close = ['void', [ref.refType(_library.zend_generator), 'uchar']];
_library._functions.push(_library.zend_generator_close);

_library.zend_generator_resume = ['void', [ref.refType(_library.zend_generator)]];
_library._functions.push(_library.zend_generator_resume);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_globals.js');
    require('./zend_iterators.js');
};
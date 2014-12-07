var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend_iterators.js');
_library._zend_generator_iterator = Struct({});

_library._preload.push(function () {
    _library._zend_generator_iterator.defineProperty("intern", _library.zend_object_iterator);
    _library._zend_generator_iterator.defineProperty("object", ref.refType(_library.zval));
});

require('./zend_generators.js');
_library.zend_generator_iterator = _library._zend_generator_iterator;

require('./zend_globals.js');
require('./zend.js');
_library._zend_generator = Struct({});

_library._preload.push(function () {
    _library._zend_generator.defineProperty("execute_data", ref.refType(_library.zend_execute_data));
    _library._zend_generator.defineProperty("flags", 'uchar');
    _library._zend_generator.defineProperty("iterator", _library.zend_generator_iterator);
    _library._zend_generator.defineProperty("key", ref.refType(_library.zval));
    _library._zend_generator.defineProperty("largest_used_integer_key", 'long');
    _library._zend_generator.defineProperty("send_target", ref.refType(ref.refType(_library.zval)));
    _library._zend_generator.defineProperty("stack", _library.zend_vm_stack);
    _library._zend_generator.defineProperty("std", _library.zend_object);
    _library._zend_generator.defineProperty("value", ref.refType(_library.zval));
});

_library.zend_generator = _library._zend_generator;

_library.zend_register_generator_ce = ['void', []];
_library._functions['zend_register_generator_ce'] = _library.zend_register_generator_ce;

_library.zend_generator_create_zval = [ref.refType(_library.zval), [ref.refType(_library.zend_op_array)]];
_library._functions['zend_generator_create_zval'] = _library.zend_generator_create_zval;

_library.zend_generator_close = ['void', [ref.refType(_library.zend_generator), 'uchar']];
_library._functions['zend_generator_close'] = _library.zend_generator_close;

_library.zend_generator_resume = ['void', [ref.refType(_library.zend_generator)]];
_library._functions['zend_generator_resume'] = _library.zend_generator_resume;


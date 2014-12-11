var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_generator_iterator = Struct({});
_library._zend_generator_iterator.size = 1;

_library._preload['_zend_generator_iterator'] = ['zend_object_iterator', '_zend_object_iterator', 'zval', function () {
    _library._zend_generator_iterator.size = 0;
    _library._zend_generator_iterator.defineProperty("intern", _library.zend_object_iterator);
    _library._zend_generator_iterator.defineProperty("object", ref.refType(_library.zval));
}];

_library._preload['zend_generator_iterator'] = [function () {
    _library.zend_generator_iterator = _library._zend_generator_iterator;
}];

_library._zend_generator = Struct({});
_library._zend_generator.size = 1;

_library._preload['_zend_generator'] = ['zend_execute_data', 'zend_generator_iterator', '_zend_generator_iterator', 'zval', 'pointer', 'zend_vm_stack', 'zend_object', '_zend_object', 'zval', function () {
    _library._zend_generator.size = 0;
    _library._zend_generator.defineProperty("execute_data", ref.refType(_library.zend_execute_data));
    _library._zend_generator.defineProperty("flags", 'uchar');
    _library._zend_generator.defineProperty("iterator", _library.zend_generator_iterator);
    _library._zend_generator.defineProperty("key", ref.refType(_library.zval));
    _library._zend_generator.defineProperty("largest_used_integer_key", 'long');
    _library._zend_generator.defineProperty("send_target", ref.refType(ref.refType(_library.zval)));
    _library._zend_generator.defineProperty("stack", _library.zend_vm_stack);
    _library._zend_generator.defineProperty("std", _library.zend_object);
    _library._zend_generator.defineProperty("value", ref.refType(_library.zval));
}];

_library._preload['zend_generator'] = [function () {
    _library.zend_generator = _library._zend_generator;
}];

_library._preload['zend_generator_create_zval'] = ['zval', 'zend_op_array', function () {
    _library.zend_generator_create_zval = [ref.refType(_library.zval), [ref.refType(_library.zend_op_array)]];
    _library._functions['zend_generator_create_zval'] = _library.zend_generator_create_zval;
}];

_library._preload['zend_generator_close'] = ['zend_generator', function () {
    _library.zend_generator_close = ['void', [ref.refType(_library.zend_generator), 'uchar']];
    _library._functions['zend_generator_close'] = _library.zend_generator_close;
}];

_library._preload['zend_generator_resume'] = ['zend_generator', function () {
    _library.zend_generator_resume = ['void', [ref.refType(_library.zend_generator)]];
    _library._functions['zend_generator_resume'] = _library.zend_generator_resume;
}];

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

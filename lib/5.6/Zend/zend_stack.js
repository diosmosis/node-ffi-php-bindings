var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_stack = Struct({
    "elements": ref.refType(ref.refType('void')),
    "max": 'int',
    "top": 'int'
});

_library.zend_stack = _library._zend_stack;

_library.zend_stack_init = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_init);

_library.zend_stack_push = ['int', [ref.refType(_library.zend_stack), ref.refType('void'), 'int']];
_library._functions.push(_library.zend_stack_push);

_library.zend_stack_top = ['int', [ref.refType(_library.zend_stack), ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_stack_top);

_library.zend_stack_del_top = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_del_top);

_library.zend_stack_int_top = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_int_top);

_library.zend_stack_is_empty = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_is_empty);

_library.zend_stack_destroy = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_destroy);

_library.zend_stack_base = [ref.refType(ref.refType('void')), [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_base);

_library.zend_stack_count = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_count);

_library.zend_stack_apply = ['void', [ref.refType(_library.zend_stack), 'int', ffi.Function('int', [ref.refType('void')])]];
_library._functions.push(_library.zend_stack_apply);

_library.zend_stack_apply_with_argument = ['void', [ref.refType(_library.zend_stack), 'int', ffi.Function('int', [ref.refType('void'), ref.refType('void')]), ref.refType('void')]];
_library._functions.push(_library.zend_stack_apply_with_argument);

function loadDependentSymbols() {
};
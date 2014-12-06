var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_stack = Struct({
    "elements": 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer',
    "max": 'int',
    "top": 'int'
});

_library.zend_stack = _library._zend_stack;

_library.zend_stack_init = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_init);

_library.zend_stack_push = ['int', [ref.refType(_library.zend_stack), 'void' ? ref.refType('void') : 'pointer', 'int']];
_library._functions.push(_library.zend_stack_push);

_library.zend_stack_top = ['int', [ref.refType(_library.zend_stack), 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_stack_top);

_library.zend_stack_del_top = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_del_top);

_library.zend_stack_int_top = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_int_top);

_library.zend_stack_is_empty = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_is_empty);

_library.zend_stack_destroy = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_destroy);

_library.zend_stack_base = ['void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_base);

_library.zend_stack_count = ['int', [ref.refType(_library.zend_stack)]];
_library._functions.push(_library.zend_stack_count);

_library.zend_stack_apply = ['void', [ref.refType(_library.zend_stack), 'int', ffi.Function('int', ['void' ? ref.refType('void') : 'pointer'])]];
_library._functions.push(_library.zend_stack_apply);

_library.zend_stack_apply_with_argument = ['void', [ref.refType(_library.zend_stack), 'int', ffi.Function('int', ['void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer']), 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_stack_apply_with_argument);

function loadDependentSymbols() {
}
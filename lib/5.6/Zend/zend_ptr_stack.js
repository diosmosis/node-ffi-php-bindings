var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_ptr_stack = Struct({
    "elements": 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer',
    "max": 'int',
    "persistent": 'uchar',
    "top": 'int',
    "top_element": 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer'
});

_library.zend_ptr_stack = _library._zend_ptr_stack;

_library.zend_ptr_stack_init = ['void', [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_init);

_library.zend_ptr_stack_init_ex = ['void', [ref.refType(_library.zend_ptr_stack), 'uchar']];
_library._functions.push(_library.zend_ptr_stack_init_ex);

_library.zend_ptr_stack_destroy = ['void', [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_destroy);

_library.zend_ptr_stack_apply = ['void', [ref.refType(_library.zend_ptr_stack), ffi.Function('void', ['void' ? ref.refType('void') : 'pointer'])]];
_library._functions.push(_library.zend_ptr_stack_apply);

_library.zend_ptr_stack_clean = ['void', [ref.refType(_library.zend_ptr_stack), ffi.Function('void', ['void' ? ref.refType('void') : 'pointer']), 'uchar']];
_library._functions.push(_library.zend_ptr_stack_clean);

_library.zend_ptr_stack_num_elements = ['int', [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_num_elements);

_library.zend_ptr_stack_3_push = ['void', [ref.refType(_library.zend_ptr_stack), 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_3_push);

_library.zend_ptr_stack_2_push = ['void', [ref.refType(_library.zend_ptr_stack), 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_2_push);

_library.zend_ptr_stack_3_pop = ['void', [ref.refType(_library.zend_ptr_stack), 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer', 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer', 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_3_pop);

_library.zend_ptr_stack_2_pop = ['void', [ref.refType(_library.zend_ptr_stack), 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer', 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_2_pop);

_library.zend_ptr_stack_push = ['void', [ref.refType(_library.zend_ptr_stack), 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_push);

_library.zend_ptr_stack_pop = ['void' ? ref.refType('void') : 'pointer', [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_pop);

_library.zend_ptr_stack_top = ['void' ? ref.refType('void') : 'pointer', [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_top);

function loadDependentSymbols() {
}
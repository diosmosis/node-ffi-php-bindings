var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_ptr_stack = Struct({
    "elements": ref.refType(ref.refType('void')),
    "max": 'int',
    "persistent": 'uchar',
    "top": 'int',
    "top_element": ref.refType(ref.refType('void'))
});

_library.zend_ptr_stack = _library._zend_ptr_stack;

_library.zend_ptr_stack_init = ['void', [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_init);

_library.zend_ptr_stack_init_ex = ['void', [ref.refType(_library.zend_ptr_stack), 'uchar']];
_library._functions.push(_library.zend_ptr_stack_init_ex);

_library.zend_ptr_stack_destroy = ['void', [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_destroy);

_library.zend_ptr_stack_apply = ['void', [ref.refType(_library.zend_ptr_stack), ffi.Function('void', [ref.refType('void')])]];
_library._functions.push(_library.zend_ptr_stack_apply);

_library.zend_ptr_stack_clean = ['void', [ref.refType(_library.zend_ptr_stack), ffi.Function('void', [ref.refType('void')]), 'uchar']];
_library._functions.push(_library.zend_ptr_stack_clean);

_library.zend_ptr_stack_num_elements = ['int', [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_num_elements);

_library.zend_ptr_stack_3_push = ['void', [ref.refType(_library.zend_ptr_stack), ref.refType('void'), ref.refType('void'), ref.refType('void')]];
_library._functions.push(_library.zend_ptr_stack_3_push);

_library.zend_ptr_stack_2_push = ['void', [ref.refType(_library.zend_ptr_stack), ref.refType('void'), ref.refType('void')]];
_library._functions.push(_library.zend_ptr_stack_2_push);

_library.zend_ptr_stack_3_pop = ['void', [ref.refType(_library.zend_ptr_stack), ref.refType(ref.refType('void')), ref.refType(ref.refType('void')), ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_ptr_stack_3_pop);

_library.zend_ptr_stack_2_pop = ['void', [ref.refType(_library.zend_ptr_stack), ref.refType(ref.refType('void')), ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_ptr_stack_2_pop);

_library.zend_ptr_stack_push = ['void', [ref.refType(_library.zend_ptr_stack), ref.refType('void')]];
_library._functions.push(_library.zend_ptr_stack_push);

_library.zend_ptr_stack_pop = [ref.refType('void'), [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_pop);

_library.zend_ptr_stack_top = [ref.refType('void'), [ref.refType(_library.zend_ptr_stack)]];
_library._functions.push(_library.zend_ptr_stack_top);

function loadDependentSymbols() {
};
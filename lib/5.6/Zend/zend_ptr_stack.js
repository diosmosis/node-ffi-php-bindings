var ffi = require('ffi'),
    ref = require('ref'),
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

_library.zend_ptr_stack_init = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_init);

_library.zend_ptr_stack_init_ex = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer', 'uchar']];
_library._functions.push(_library.zend_ptr_stack_init_ex);

_library.zend_ptr_stack_destroy = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_destroy);

_library.zend_ptr_stack_apply = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer', ffi.Function('void', [ref.refType('void')])]];
_library._functions.push(_library.zend_ptr_stack_apply);

_library.zend_ptr_stack_clean = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer', ffi.Function('void', [ref.refType('void')]), 'uchar']];
_library._functions.push(_library.zend_ptr_stack_clean);

_library.zend_ptr_stack_num_elements = ['int', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_num_elements);

_library.zend_ptr_stack_3_push = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer', ref.refType('void'), ref.refType('void'), ref.refType('void')]];
_library._functions.push(_library.zend_ptr_stack_3_push);

_library.zend_ptr_stack_2_push = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer', ref.refType('void'), ref.refType('void')]];
_library._functions.push(_library.zend_ptr_stack_2_push);

_library.zend_ptr_stack_3_pop = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer', ref.refType(ref.refType('void')), ref.refType(ref.refType('void')), ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_ptr_stack_3_pop);

_library.zend_ptr_stack_2_pop = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer', ref.refType(ref.refType('void')), ref.refType(ref.refType('void'))]];
_library._functions.push(_library.zend_ptr_stack_2_pop);

_library.zend_ptr_stack_push = ['void', [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer', ref.refType('void')]];
_library._functions.push(_library.zend_ptr_stack_push);

_library.zend_ptr_stack_pop = [ref.refType('void'), [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_pop);

_library.zend_ptr_stack_top = [ref.refType('void'), [_library.zend_ptr_stack ? ref.refType(_library.zend_ptr_stack) : 'pointer']];
_library._functions.push(_library.zend_ptr_stack_top);

function loadDependentSymbols() {
}
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_ptr_stack = Struct({});
_library._zend_ptr_stack.size = 1;

_library._preload['_zend_ptr_stack'] = ['pointer', 'pointer', function () {
    _library._zend_ptr_stack.size = 0;
    _library._zend_ptr_stack.defineProperty("elements", ref.refType(ref.refType('void')));
    _library._zend_ptr_stack.defineProperty("max", 'int');
    _library._zend_ptr_stack.defineProperty("persistent", 'uchar');
    _library._zend_ptr_stack.defineProperty("top", 'int');
    _library._zend_ptr_stack.defineProperty("top_element", ref.refType(ref.refType('void')));
}];

_library._preload['zend_ptr_stack'] = [function () {
    _library.zend_ptr_stack = _library._zend_ptr_stack;
}];

_library._preload['zend_ptr_stack_init'] = ['zend_ptr_stack', function () {
    _library.zend_ptr_stack_init = ['void', [ref.refType(_library.zend_ptr_stack)]];
    _library._functions['zend_ptr_stack_init'] = _library.zend_ptr_stack_init;
}];

_library._preload['zend_ptr_stack_init_ex'] = ['zend_ptr_stack', function () {
    _library.zend_ptr_stack_init_ex = ['void', [ref.refType(_library.zend_ptr_stack), 'uchar']];
    _library._functions['zend_ptr_stack_init_ex'] = _library.zend_ptr_stack_init_ex;
}];

_library._preload['zend_ptr_stack_destroy'] = ['zend_ptr_stack', function () {
    _library.zend_ptr_stack_destroy = ['void', [ref.refType(_library.zend_ptr_stack)]];
    _library._functions['zend_ptr_stack_destroy'] = _library.zend_ptr_stack_destroy;
}];

_library._preload['zend_ptr_stack_apply'] = ['zend_ptr_stack', 'void (void *)', function () {
    _library.zend_ptr_stack_apply = ['void', [ref.refType(_library.zend_ptr_stack), ffi.Function('void', [ref.refType('void')])]];
    _library._functions['zend_ptr_stack_apply'] = _library.zend_ptr_stack_apply;
}];

_library._preload['zend_ptr_stack_clean'] = ['zend_ptr_stack', 'void (void *)', function () {
    _library.zend_ptr_stack_clean = ['void', [ref.refType(_library.zend_ptr_stack), ffi.Function('void', [ref.refType('void')]), 'uchar']];
    _library._functions['zend_ptr_stack_clean'] = _library.zend_ptr_stack_clean;
}];

_library._preload['zend_ptr_stack_num_elements'] = ['zend_ptr_stack', function () {
    _library.zend_ptr_stack_num_elements = ['int', [ref.refType(_library.zend_ptr_stack)]];
    _library._functions['zend_ptr_stack_num_elements'] = _library.zend_ptr_stack_num_elements;
}];

function loadDependentSymbols() {
}

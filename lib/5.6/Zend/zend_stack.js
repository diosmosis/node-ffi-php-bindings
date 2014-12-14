var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_stack = Struct({});
_library._zend_stack.size = 1;

_library._preload['_zend_stack'] = ['pointer', function () {
    _library._zend_stack.size = 0;
    _library._zend_stack.defineProperty("top", 'int');
    _library._zend_stack.defineProperty("max", 'int');
    _library._zend_stack.defineProperty("elements", ref.refType(ref.refType('void')));
}];

_library._preload['zend_stack'] = [function () {
    _library.zend_stack = _library._zend_stack;
}];

_library._preload['zend_stack_init'] = ['zend_stack', function () {
    _library.zend_stack_init = ['int', [ref.refType(_library.zend_stack)]];
    _library._functions['zend_stack_init'] = _library.zend_stack_init;
}];

_library._preload['zend_stack_push'] = ['zend_stack', function () {
    _library.zend_stack_push = ['int', [ref.refType(_library.zend_stack), ref.refType('void'), 'int']];
    _library._functions['zend_stack_push'] = _library.zend_stack_push;
}];

_library._preload['zend_stack_top'] = ['zend_stack', 'pointer', function () {
    _library.zend_stack_top = ['int', [ref.refType(_library.zend_stack), ref.refType(ref.refType('void'))]];
    _library._functions['zend_stack_top'] = _library.zend_stack_top;
}];

_library._preload['zend_stack_del_top'] = ['zend_stack', function () {
    _library.zend_stack_del_top = ['int', [ref.refType(_library.zend_stack)]];
    _library._functions['zend_stack_del_top'] = _library.zend_stack_del_top;
}];

_library._preload['zend_stack_int_top'] = ['zend_stack', function () {
    _library.zend_stack_int_top = ['int', [ref.refType(_library.zend_stack)]];
    _library._functions['zend_stack_int_top'] = _library.zend_stack_int_top;
}];

_library._preload['zend_stack_is_empty'] = ['zend_stack', function () {
    _library.zend_stack_is_empty = ['int', [ref.refType(_library.zend_stack)]];
    _library._functions['zend_stack_is_empty'] = _library.zend_stack_is_empty;
}];

_library._preload['zend_stack_destroy'] = ['zend_stack', function () {
    _library.zend_stack_destroy = ['int', [ref.refType(_library.zend_stack)]];
    _library._functions['zend_stack_destroy'] = _library.zend_stack_destroy;
}];

_library._preload['zend_stack_base'] = ['pointer', 'zend_stack', function () {
    _library.zend_stack_base = [ref.refType(ref.refType('void')), [ref.refType(_library.zend_stack)]];
    _library._functions['zend_stack_base'] = _library.zend_stack_base;
}];

_library._preload['zend_stack_count'] = ['zend_stack', function () {
    _library.zend_stack_count = ['int', [ref.refType(_library.zend_stack)]];
    _library._functions['zend_stack_count'] = _library.zend_stack_count;
}];

_library._preload['zend_stack_apply'] = ['zend_stack', 'int (void *)', function () {
    _library.zend_stack_apply = ['void', [ref.refType(_library.zend_stack), 'int', ffi.Function('int', [ref.refType('void')])]];
    _library._functions['zend_stack_apply'] = _library.zend_stack_apply;
}];

_library._preload['zend_stack_apply_with_argument'] = ['zend_stack', 'int (void *, void *)', function () {
    _library.zend_stack_apply_with_argument = ['void', [ref.refType(_library.zend_stack), 'int', ffi.Function('int', [ref.refType('void'), ref.refType('void')]), ref.refType('void')]];
    _library._functions['zend_stack_apply_with_argument'] = _library.zend_stack_apply_with_argument;
}];

function loadDependentSymbols() {
}

var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_interned_strings_init'] = [function () {
    _library.zend_interned_strings_init = ['void', []];
    _library._functions['zend_interned_strings_init'] = _library.zend_interned_strings_init;
}];

_library._preload['zend_interned_strings_dtor'] = [function () {
    _library.zend_interned_strings_dtor = ['void', []];
    _library._functions['zend_interned_strings_dtor'] = _library.zend_interned_strings_dtor;
}];

_library._preload['_str_erealloc'] = [function () {
    _library._str_erealloc = [ref.refType('char'), [ref.refType('char'), 'ulong', 'ulong']];
    _library._functions['_str_erealloc'] = _library._str_erealloc;
}];

function loadDependentSymbols() {
}

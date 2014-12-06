var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_interned_strings_init = ['void', []];
_library._functions.push(_library.zend_interned_strings_init);

_library.zend_interned_strings_dtor = ['void', []];
_library._functions.push(_library.zend_interned_strings_dtor);

_library._str_erealloc = [ref.refType('char'), [ref.refType('char'), 'ulong', 'ulong']];
_library._functions.push(_library._str_erealloc);

function loadDependentSymbols() {
};
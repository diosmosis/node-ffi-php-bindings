var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.smart_str = Struct({});
_library.smart_str.size = 1;

_library._preload['smart_str'] = [function () {
    _library.smart_str.size = 0;
    _library.smart_str.defineProperty("c", ref.refType('char'));
    _library.smart_str.defineProperty("len", 'ulong');
    _library.smart_str.defineProperty("a", 'ulong');
}];

function loadDependentSymbols() {
}

var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.smart_str = Struct({});

_library._preload.push(function () {
    _library.smart_str.defineProperty("a", 'ulong');
    _library.smart_str.defineProperty("c", ref.refType('char'));
    _library.smart_str.defineProperty("len", 'ulong');
});


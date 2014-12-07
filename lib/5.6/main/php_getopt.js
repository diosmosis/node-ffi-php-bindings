var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._opt_struct = Struct({});
_library._opt_struct.size = 1;

_library._preload.push(function () {
    _library._opt_struct.size = 0;
    _library._opt_struct.defineProperty("need_param", 'int');
    _library._opt_struct.defineProperty("opt_char", 'char');
    _library._opt_struct.defineProperty("opt_name", ref.refType('char'));
});

_library.opt_struct = _library._opt_struct;

_library.php_getopt = ['int', ['int', ref.refType(ref.refType('char')), ref.refType(_library.opt_struct), ref.refType(ref.refType('char')), ref.refType('int'), 'int', 'int']];
_library._functions['php_getopt'] = _library.php_getopt;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['smart_str_print_long'] = [function () {
    _library.smart_str_print_long = [ref.refType('char'), [ref.refType('char'), 'long']];
    _library._functions['smart_str_print_long'] = _library.smart_str_print_long;
}];

_library._preload['smart_str_print_unsigned'] = [function () {
    _library.smart_str_print_unsigned = [ref.refType('char'), [ref.refType('char'), 'long']];
    _library._functions['smart_str_print_unsigned'] = _library.smart_str_print_unsigned;
}];

function loadDependentSymbols() {
}

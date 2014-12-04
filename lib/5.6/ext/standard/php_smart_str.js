var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.smart_str_print_long = [ref.refType('char'), [ref.refType('char'), 'long']];
_library._functions.push(_library.smart_str_print_long);

_library.smart_str_print_unsigned = [ref.refType('char'), [ref.refType('char'), 'long']];
_library._functions.push(_library.smart_str_print_unsigned);


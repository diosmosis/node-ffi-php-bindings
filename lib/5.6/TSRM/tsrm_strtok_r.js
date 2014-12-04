var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.tsrm_strtok_r = [ref.refType('char'), [ref.refType('char'), ref.refType('char'), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.tsrm_strtok_r);


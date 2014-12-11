var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../../');

loadDependentSymbols();

_library._preload['timelib_tz_get_wrapper'] = ['timelib_tzinfo *(char *, const timelib_tzdb *)', function () {
    _library.timelib_tz_get_wrapper = ffi.Function(ref.refType(_library.timelib_tzinfo), [ref.refType('char'), ref.refType(_library._timelib_tzdb)]);
}];

function loadDependentSymbols() {
    require('./timelib_structs.js');
}

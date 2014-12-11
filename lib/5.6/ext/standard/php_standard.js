var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['zm_startup_standard_filters'] = [function () {
    _library.zm_startup_standard_filters = ['int', ['int', 'int']];
    _library._functions['zm_startup_standard_filters'] = _library.zm_startup_standard_filters;
}];

_library._preload['zm_shutdown_standard_filters'] = [function () {
    _library.zm_shutdown_standard_filters = ['int', ['int', 'int']];
    _library._functions['zm_shutdown_standard_filters'] = _library.zm_shutdown_standard_filters;
}];

function loadDependentSymbols() {
}

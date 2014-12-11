var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['php_add_tick_function'] = ['void (int)', function () {
    _library.php_add_tick_function = ['void', [ffi.Function('void', ['int'])]];
    _library._functions['php_add_tick_function'] = _library.php_add_tick_function;
}];

_library._preload['php_remove_tick_function'] = ['void (int)', function () {
    _library.php_remove_tick_function = ['void', [ffi.Function('void', ['int'])]];
    _library._functions['php_remove_tick_function'] = _library.php_remove_tick_function;
}];

function loadDependentSymbols() {
}

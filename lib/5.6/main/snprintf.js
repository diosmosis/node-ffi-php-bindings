var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['boolean_e'] = [function () {
    _library.boolean_e = 'int32';
}];

_library._preload['ap_php_vslprintf'] = [function () {
    _library.ap_php_vslprintf = ['int', [ref.refType('char'), 'ulong', ref.refType('char'), ref.refType('void')]];
    _library._functions['ap_php_vslprintf'] = _library.ap_php_vslprintf;
}];

_library._preload['ap_php_vsnprintf'] = [function () {
    _library.ap_php_vsnprintf = ['int', [ref.refType('char'), 'ulong', ref.refType('char'), ref.refType('void')]];
    _library._functions['ap_php_vsnprintf'] = _library.ap_php_vsnprintf;
}];

_library._preload['ap_php_vasprintf'] = ['pointer', function () {
    _library.ap_php_vasprintf = ['int', [ref.refType(ref.refType('char')), ref.refType('char'), ref.refType('void')]];
    _library._functions['ap_php_vasprintf'] = _library.ap_php_vasprintf;
}];

_library._preload['php_gcvt'] = [function () {
    _library.php_gcvt = [ref.refType('char'), ['double', 'int', 'char', 'char', ref.refType('char')]];
    _library._functions['php_gcvt'] = _library.php_gcvt;
}];

_library._preload['php_conv_fp'] = ['boolean_e', function () {
    _library.php_conv_fp = [ref.refType('char'), ['char', 'double', _library.boolean_e, 'int', 'char', ref.refType('int'), ref.refType('char'), ref.refType('int')]];
    _library._functions['php_conv_fp'] = _library.php_conv_fp;
}];

_library._preload['length_modifier_e'] = [function () {
    _library.length_modifier_e = 'int32';
}];

function loadDependentSymbols() {
}

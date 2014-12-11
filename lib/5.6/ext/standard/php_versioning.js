var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_canonicalize_version'] = [function () {
    _library.php_canonicalize_version = [ref.refType('char'), [ref.refType('char')]];
    _library._functions['php_canonicalize_version'] = _library.php_canonicalize_version;
}];

_library._preload['php_version_compare'] = [function () {
    _library.php_version_compare = ['int', [ref.refType('char'), ref.refType('char')]];
    _library._functions['php_version_compare'] = _library.php_version_compare;
}];

function loadDependentSymbols() {
}

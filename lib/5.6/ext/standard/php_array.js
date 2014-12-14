var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_splice'] = ['HashTable', 'pointer', 'HashTable', function () {
    _library.php_splice = ['void', [ref.refType(_library.HashTable), 'uint', 'uint', ref.refType(ref.refType(ref.refType(_library.zval))), 'uint', ref.refType(_library.HashTable)]];
    _library._functions['php_splice'] = _library.php_splice;
}];

_library._preload['php_array_merge'] = ['HashTable', 'HashTable', function () {
    _library.php_array_merge = ['int', [ref.refType(_library.HashTable), ref.refType(_library.HashTable), 'int']];
    _library._functions['php_array_merge'] = _library.php_array_merge;
}];

_library._preload['php_array_replace_recursive'] = ['HashTable', 'HashTable', function () {
    _library.php_array_replace_recursive = ['int', [ref.refType(_library.HashTable), ref.refType(_library.HashTable)]];
    _library._functions['php_array_replace_recursive'] = _library.php_array_replace_recursive;
}];

_library._preload['php_multisort_compare'] = [function () {
    _library.php_multisort_compare = ['int', [ref.refType('void'), ref.refType('void')]];
    _library._functions['php_multisort_compare'] = _library.php_multisort_compare;
}];

_library._preload['php_count_recursive'] = ['zval', function () {
    _library.php_count_recursive = ['int', [ref.refType(_library.zval), 'long']];
    _library._functions['php_count_recursive'] = _library.php_count_recursive;
}];

_library._zend_array_globals = Struct({});
_library._zend_array_globals.size = 1;

_library._preload['_zend_array_globals'] = ['pointer', 'int (zval *, zval *, zval *)', function () {
    _library._zend_array_globals.size = 0;
    _library._zend_array_globals.defineProperty("multisort_flags", _library.__RefArray(ref.refType('int'), 2));
    _library._zend_array_globals.defineProperty("compare_func", ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]));
}];

_library._preload['zend_array_globals'] = [function () {
    _library.zend_array_globals = _library._zend_array_globals;
}];

function loadDependentSymbols() {
    require('./../../Zend/zend.js');
    require('./../../Zend/zend_API.js');
    require('./../../Zend/zend_ast.js');
    require('./../../Zend/zend_compile.js');
    require('./../../Zend/zend_hash.js');
    require('./../../Zend/zend_ini.js');
    require('./../../Zend/zend_iterators.js');
    require('./../../Zend/zend_modules.js');
    require('./../../Zend/zend_object_handlers.js');
    require('./../../Zend/zend_types.js');
}

var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['zm_startup_assert'] = [function () {
    _library.zm_startup_assert = ['int', ['int', 'int']];
    _library._functions['zm_startup_assert'] = _library.zm_startup_assert;
}];

_library._preload['zm_shutdown_assert'] = [function () {
    _library.zm_shutdown_assert = ['int', ['int', 'int']];
    _library._functions['zm_shutdown_assert'] = _library.zm_shutdown_assert;
}];

_library._preload['zm_activate_assert'] = [function () {
    _library.zm_activate_assert = ['int', ['int', 'int']];
    _library._functions['zm_activate_assert'] = _library.zm_activate_assert;
}];

_library._preload['zm_deactivate_assert'] = [function () {
    _library.zm_deactivate_assert = ['int', ['int', 'int']];
    _library._functions['zm_deactivate_assert'] = _library.zm_deactivate_assert;
}];

_library._preload['zm_info_assert'] = ['zend_module_entry', function () {
    _library.zm_info_assert = ['void', [ref.refType(_library.zend_module_entry)]];
    _library._functions['zm_info_assert'] = _library.zm_info_assert;
}];

_library._preload['zif_assert'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_assert = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_assert'] = _library.zif_assert;
}];

_library._preload['zif_assert_options'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_assert_options = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_assert_options'] = _library.zif_assert_options;
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

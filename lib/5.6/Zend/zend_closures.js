var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_create_closure'] = ['zval', 'zend_function', 'zend_class_entry', 'zval', function () {
    _library.zend_create_closure = ['void', [ref.refType(_library.zval), ref.refType(_library.zend_function), ref.refType(_library.zend_class_entry), ref.refType(_library.zval)]];
    _library._functions['zend_create_closure'] = _library.zend_create_closure;
}];

_library._preload['zend_get_closure_invoke_method'] = ['zend_function', 'zval', function () {
    _library.zend_get_closure_invoke_method = [ref.refType(_library.zend_function), [ref.refType(_library.zval)]];
    _library._functions['zend_get_closure_invoke_method'] = _library.zend_get_closure_invoke_method;
}];

_library._preload['zend_get_closure_method_def'] = ['zend_function', 'zval', function () {
    _library.zend_get_closure_method_def = [ref.refType(_library.zend_function), [ref.refType(_library.zval)]];
    _library._functions['zend_get_closure_method_def'] = _library.zend_get_closure_method_def;
}];

_library._preload['zend_get_closure_this_ptr'] = ['zval', 'zval', function () {
    _library.zend_get_closure_this_ptr = [ref.refType(_library.zval), [ref.refType(_library.zval)]];
    _library._functions['zend_get_closure_this_ptr'] = _library.zend_get_closure_this_ptr;
}];

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}

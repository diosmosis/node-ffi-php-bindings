var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_object_std_init'] = ['zend_object', 'zend_class_entry', function () {
    _library.zend_object_std_init = ['void', [ref.refType(_library.zend_object), ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_object_std_init'] = _library.zend_object_std_init;
}];

_library._preload['zend_object_std_dtor'] = ['zend_object', function () {
    _library.zend_object_std_dtor = ['void', [ref.refType(_library.zend_object)]];
    _library._functions['zend_object_std_dtor'] = _library.zend_object_std_dtor;
}];

_library._preload['zend_objects_new'] = ['zend_object_value', 'pointer', 'zend_class_entry', function () {
    _library.zend_objects_new = [_library.zend_object_value, [ref.refType(ref.refType(_library.zend_object)), ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_objects_new'] = _library.zend_objects_new;
}];

_library._preload['zend_objects_destroy_object'] = ['zend_object', function () {
    _library.zend_objects_destroy_object = ['void', [ref.refType(_library.zend_object), 'uint']];
    _library._functions['zend_objects_destroy_object'] = _library.zend_objects_destroy_object;
}];

_library._preload['zend_objects_get_address'] = ['zend_object', 'zval', function () {
    _library.zend_objects_get_address = [ref.refType(_library.zend_object), [ref.refType(_library.zval)]];
    _library._functions['zend_objects_get_address'] = _library.zend_objects_get_address;
}];

_library._preload['zend_objects_clone_members'] = ['zend_object', 'zend_object_value', 'zend_object', function () {
    _library.zend_objects_clone_members = ['void', [ref.refType(_library.zend_object), _library.zend_object_value, ref.refType(_library.zend_object), 'uint']];
    _library._functions['zend_objects_clone_members'] = _library.zend_objects_clone_members;
}];

_library._preload['zend_objects_clone_obj'] = ['zend_object_value', 'zval', function () {
    _library.zend_objects_clone_obj = [_library.zend_object_value, [ref.refType(_library.zval)]];
    _library._functions['zend_objects_clone_obj'] = _library.zend_objects_clone_obj;
}];

_library._preload['zend_objects_free_object_storage'] = ['zend_object', function () {
    _library.zend_objects_free_object_storage = ['void', [ref.refType(_library.zend_object)]];
    _library._functions['zend_objects_free_object_storage'] = _library.zend_objects_free_object_storage;
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

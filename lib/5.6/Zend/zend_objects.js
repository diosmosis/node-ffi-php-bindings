var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_object_std_init = ['void', [_library.zend_object ? ref.refType(_library.zend_object) : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zend_object_std_init);

_library.zend_object_std_dtor = ['void', [_library.zend_object ? ref.refType(_library.zend_object) : 'pointer']];
_library._functions.push(_library.zend_object_std_dtor);

_library.zend_objects_new = [_library.zend_object_value, [_library.zend_object ? ref.refType(_library.zend_object) : 'pointer' ? ref.refType(_library.zend_object ? ref.refType(_library.zend_object) : 'pointer') : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zend_objects_new);

_library.zend_objects_destroy_object = ['void', [_library.zend_object ? ref.refType(_library.zend_object) : 'pointer', 'uint']];
_library._functions.push(_library.zend_objects_destroy_object);

_library.zend_objects_get_address = [_library.zend_object ? ref.refType(_library.zend_object) : 'pointer', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_objects_get_address);

_library.zend_objects_clone_members = ['void', [_library.zend_object ? ref.refType(_library.zend_object) : 'pointer', _library.zend_object_value, _library.zend_object ? ref.refType(_library.zend_object) : 'pointer', 'uint']];
_library._functions.push(_library.zend_objects_clone_members);

_library.zend_objects_clone_obj = [_library.zend_object_value, [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_objects_clone_obj);

_library.zend_objects_free_object_storage = ['void', [_library.zend_object ? ref.refType(_library.zend_object) : 'pointer']];
_library._functions.push(_library.zend_objects_free_object_storage);

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
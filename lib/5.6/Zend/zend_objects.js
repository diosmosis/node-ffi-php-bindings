var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.zend_object_std_init = ['void', [ref.refType(_library.zend_object), ref.refType(_library.zend_class_entry)]];
_library._functions['zend_object_std_init'] = _library.zend_object_std_init;

_library.zend_object_std_dtor = ['void', [ref.refType(_library.zend_object)]];
_library._functions['zend_object_std_dtor'] = _library.zend_object_std_dtor;

require('./zend_types.js');
_library.zend_objects_new = [_library.zend_object_value, [ref.refType(ref.refType(_library.zend_object)), ref.refType(_library.zend_class_entry)]];
_library._functions['zend_objects_new'] = _library.zend_objects_new;

_library.zend_objects_destroy_object = ['void', [ref.refType(_library.zend_object), 'uint']];
_library._functions['zend_objects_destroy_object'] = _library.zend_objects_destroy_object;

_library.zend_objects_get_address = [ref.refType(_library.zend_object), [ref.refType(_library.zval)]];
_library._functions['zend_objects_get_address'] = _library.zend_objects_get_address;

_library.zend_objects_clone_members = ['void', [ref.refType(_library.zend_object), _library.zend_object_value, ref.refType(_library.zend_object), 'uint']];
_library._functions['zend_objects_clone_members'] = _library.zend_objects_clone_members;

_library.zend_objects_clone_obj = [_library.zend_object_value, [ref.refType(_library.zval)]];
_library._functions['zend_objects_clone_obj'] = _library.zend_objects_clone_obj;

_library.zend_objects_free_object_storage = ['void', [ref.refType(_library.zend_object)]];
_library._functions['zend_objects_free_object_storage'] = _library.zend_objects_free_object_storage;


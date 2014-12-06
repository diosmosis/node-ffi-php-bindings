var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_user_iterator = Struct({
    "ce": ref.refType(_library.zend_class_entry),
    "it": _library.zend_object_iterator,
    "value": ref.refType(_library.zval)
});

_library.zend_user_iterator = _library._zend_user_iterator;

_library.zend_call_method = [ref.refType(_library.zval), [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry), ref.refType(ref.refType(_library.zend_function)), ref.refType('char'), 'int', ref.refType(ref.refType(_library.zval)), 'int', ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_call_method);

_library.zend_user_it_rewind = ['void', [ref.refType(_library.zend_object_iterator)]];
_library._functions.push(_library.zend_user_it_rewind);

_library.zend_user_it_valid = ['int', [ref.refType(_library.zend_object_iterator)]];
_library._functions.push(_library.zend_user_it_valid);

_library.zend_user_it_get_current_key = ['void', [ref.refType(_library.zend_object_iterator), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_user_it_get_current_key);

_library.zend_user_it_get_current_data = ['void', [ref.refType(_library.zend_object_iterator), ref.refType(ref.refType(ref.refType(_library.zval)))]];
_library._functions.push(_library.zend_user_it_get_current_data);

_library.zend_user_it_move_forward = ['void', [ref.refType(_library.zend_object_iterator)]];
_library._functions.push(_library.zend_user_it_move_forward);

_library.zend_user_it_invalidate_current = ['void', [ref.refType(_library.zend_object_iterator)]];
_library._functions.push(_library.zend_user_it_invalidate_current);

_library.zend_user_it_new_iterator = [ref.refType(_library.zval), [ref.refType(_library.zend_class_entry), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_user_it_new_iterator);

_library.zend_user_it_get_new_iterator = [ref.refType(_library.zend_object_iterator), [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zend_user_it_get_new_iterator);

_library.zend_register_interfaces = ['void', []];
_library._functions.push(_library.zend_register_interfaces);

_library.zend_user_serialize = ['int', [ref.refType(_library.zval), ref.refType(ref.refType('uchar')), ref.refType('uint'), ref.refType(_library.zend_serialize_data)]];
_library._functions.push(_library.zend_user_serialize);

_library.zend_user_unserialize = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry), ref.refType('uchar'), 'uint', ref.refType(_library.zend_unserialize_data)]];
_library._functions.push(_library.zend_user_unserialize);

_library.zend_class_serialize_deny = ['int', [ref.refType(_library.zval), ref.refType(ref.refType('uchar')), ref.refType('uint'), ref.refType(_library.zend_serialize_data)]];
_library._functions.push(_library.zend_class_serialize_deny);

_library.zend_class_unserialize_deny = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry), ref.refType('uchar'), 'uint', ref.refType(_library.zend_unserialize_data)]];
_library._functions.push(_library.zend_class_unserialize_deny);

function loadDependentSymbols() {
    require('./zend_iterators.js');
};
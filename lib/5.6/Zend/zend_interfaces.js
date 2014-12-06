var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_user_iterator = Struct({
    "ce": _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer',
    "it": _library.zend_object_iterator,
    "value": _library.zval ? ref.refType(_library.zval) : 'pointer'
});

_library.zend_user_iterator = _library._zend_user_iterator;

_library.zend_call_method = [_library.zval ? ref.refType(_library.zval) : 'pointer', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zend_function ? ref.refType(_library.zend_function) : 'pointer' ? ref.refType(_library.zend_function ? ref.refType(_library.zend_function) : 'pointer') : 'pointer', ref.refType('char'), 'int', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', 'int', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_call_method);

_library.zend_user_it_rewind = ['void', [_library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer']];
_library._functions.push(_library.zend_user_it_rewind);

_library.zend_user_it_valid = ['int', [_library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer']];
_library._functions.push(_library.zend_user_it_valid);

_library.zend_user_it_get_current_key = ['void', [_library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_user_it_get_current_key);

_library.zend_user_it_get_current_data = ['void', [_library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_user_it_get_current_data);

_library.zend_user_it_move_forward = ['void', [_library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer']];
_library._functions.push(_library.zend_user_it_move_forward);

_library.zend_user_it_invalidate_current = ['void', [_library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer']];
_library._functions.push(_library.zend_user_it_invalidate_current);

_library.zend_user_it_new_iterator = [_library.zval ? ref.refType(_library.zval) : 'pointer', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_user_it_new_iterator);

_library.zend_user_it_get_new_iterator = [_library.zend_object_iterator ? ref.refType(_library.zend_object_iterator) : 'pointer', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zend_user_it_get_new_iterator);

_library.zend_register_interfaces = ['void', []];
_library._functions.push(_library.zend_register_interfaces);

_library.zend_user_serialize = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(ref.refType('uchar')), ref.refType('uint'), _library.zend_serialize_data ? ref.refType(_library.zend_serialize_data) : 'pointer']];
_library._functions.push(_library.zend_user_serialize);

_library.zend_user_unserialize = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('uchar'), 'uint', _library.zend_unserialize_data ? ref.refType(_library.zend_unserialize_data) : 'pointer']];
_library._functions.push(_library.zend_user_unserialize);

_library.zend_class_serialize_deny = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(ref.refType('uchar')), ref.refType('uint'), _library.zend_serialize_data ? ref.refType(_library.zend_serialize_data) : 'pointer']];
_library._functions.push(_library.zend_class_serialize_deny);

_library.zend_class_unserialize_deny = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('uchar'), 'uint', _library.zend_unserialize_data ? ref.refType(_library.zend_unserialize_data) : 'pointer']];
_library._functions.push(_library.zend_class_unserialize_deny);

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
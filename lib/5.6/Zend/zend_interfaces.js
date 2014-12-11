var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_user_iterator = Struct({});
_library._zend_user_iterator.size = 1;

_library._preload['_zend_user_iterator'] = ['zend_class_entry', 'zend_object_iterator', '_zend_object_iterator', 'zval', function () {
    _library._zend_user_iterator.size = 0;
    _library._zend_user_iterator.defineProperty("ce", ref.refType(_library.zend_class_entry));
    _library._zend_user_iterator.defineProperty("it", _library.zend_object_iterator);
    _library._zend_user_iterator.defineProperty("value", ref.refType(_library.zval));
}];

_library._preload['zend_user_iterator'] = [function () {
    _library.zend_user_iterator = _library._zend_user_iterator;
}];

_library._preload['zend_call_method'] = ['zval', 'pointer', 'zend_class_entry', 'pointer', 'pointer', 'zval', 'zval', function () {
    _library.zend_call_method = [ref.refType(_library.zval), [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry), ref.refType(ref.refType(_library.zend_function)), ref.refType('char'), 'int', ref.refType(ref.refType(_library.zval)), 'int', ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zend_call_method'] = _library.zend_call_method;
}];

_library._preload['zend_user_it_rewind'] = ['zend_object_iterator', function () {
    _library.zend_user_it_rewind = ['void', [ref.refType(_library.zend_object_iterator)]];
    _library._functions['zend_user_it_rewind'] = _library.zend_user_it_rewind;
}];

_library._preload['zend_user_it_valid'] = ['zend_object_iterator', function () {
    _library.zend_user_it_valid = ['int', [ref.refType(_library.zend_object_iterator)]];
    _library._functions['zend_user_it_valid'] = _library.zend_user_it_valid;
}];

_library._preload['zend_user_it_get_current_key'] = ['zend_object_iterator', 'zval', function () {
    _library.zend_user_it_get_current_key = ['void', [ref.refType(_library.zend_object_iterator), ref.refType(_library.zval)]];
    _library._functions['zend_user_it_get_current_key'] = _library.zend_user_it_get_current_key;
}];

_library._preload['zend_user_it_get_current_data'] = ['zend_object_iterator', 'pointer', function () {
    _library.zend_user_it_get_current_data = ['void', [ref.refType(_library.zend_object_iterator), ref.refType(ref.refType(ref.refType(_library.zval)))]];
    _library._functions['zend_user_it_get_current_data'] = _library.zend_user_it_get_current_data;
}];

_library._preload['zend_user_it_move_forward'] = ['zend_object_iterator', function () {
    _library.zend_user_it_move_forward = ['void', [ref.refType(_library.zend_object_iterator)]];
    _library._functions['zend_user_it_move_forward'] = _library.zend_user_it_move_forward;
}];

_library._preload['zend_user_it_invalidate_current'] = ['zend_object_iterator', function () {
    _library.zend_user_it_invalidate_current = ['void', [ref.refType(_library.zend_object_iterator)]];
    _library._functions['zend_user_it_invalidate_current'] = _library.zend_user_it_invalidate_current;
}];

_library._preload['zend_user_it_new_iterator'] = ['zval', 'zend_class_entry', 'zval', function () {
    _library.zend_user_it_new_iterator = [ref.refType(_library.zval), [ref.refType(_library.zend_class_entry), ref.refType(_library.zval)]];
    _library._functions['zend_user_it_new_iterator'] = _library.zend_user_it_new_iterator;
}];

_library._preload['zend_user_it_get_new_iterator'] = ['zend_object_iterator', 'zend_class_entry', 'zval', function () {
    _library.zend_user_it_get_new_iterator = [ref.refType(_library.zend_object_iterator), [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), 'int']];
    _library._functions['zend_user_it_get_new_iterator'] = _library.zend_user_it_get_new_iterator;
}];

_library._preload['zend_register_interfaces'] = [function () {
    _library.zend_register_interfaces = ['void', []];
    _library._functions['zend_register_interfaces'] = _library.zend_register_interfaces;
}];

_library._preload['zend_user_serialize'] = ['zval', 'pointer', 'zend_serialize_data', function () {
    _library.zend_user_serialize = ['int', [ref.refType(_library.zval), ref.refType(ref.refType('uchar')), ref.refType('uint'), ref.refType(_library.zend_serialize_data)]];
    _library._functions['zend_user_serialize'] = _library.zend_user_serialize;
}];

_library._preload['zend_user_unserialize'] = ['pointer', 'zend_class_entry', 'zend_unserialize_data', function () {
    _library.zend_user_unserialize = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry), ref.refType('uchar'), 'uint', ref.refType(_library.zend_unserialize_data)]];
    _library._functions['zend_user_unserialize'] = _library.zend_user_unserialize;
}];

_library._preload['zend_class_serialize_deny'] = ['zval', 'pointer', 'zend_serialize_data', function () {
    _library.zend_class_serialize_deny = ['int', [ref.refType(_library.zval), ref.refType(ref.refType('uchar')), ref.refType('uint'), ref.refType(_library.zend_serialize_data)]];
    _library._functions['zend_class_serialize_deny'] = _library.zend_class_serialize_deny;
}];

_library._preload['zend_class_unserialize_deny'] = ['pointer', 'zend_class_entry', 'zend_unserialize_data', function () {
    _library.zend_class_unserialize_deny = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry), ref.refType('uchar'), 'uint', ref.refType(_library.zend_unserialize_data)]];
    _library._functions['zend_class_unserialize_deny'] = _library.zend_class_unserialize_deny;
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

var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_object_add_ref_t = ffi.Function('void', [ref.refType(_library._zval_struct)]);

_library.zend_object_call_method_t = ffi.Function('int', [ref.refType('char'), 'int', ref.refType(_library._zval_struct), ref.refType(ref.refType(_library._zval_struct)), ref.refType(_library._zval_struct), 'int']);

_library.zend_object_cast_t = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), 'int']);

_library.zend_object_clone_obj_t = ffi.Function(_library._zend_object_value, [ref.refType(_library._zval_struct)]);

_library.zend_object_compare_zvals_t = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);

_library.zend_object_compare_t = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);

_library.zend_object_count_elements_t = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType('long')]);

_library.zend_object_del_ref_t = ffi.Function('void', [ref.refType(_library._zval_struct)]);

_library.zend_object_do_operation_t = ffi.Function('int', ['uchar', ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);

_library.zend_object_get_t = ffi.Function(ref.refType(_library._zval_struct), [ref.refType(_library._zval_struct)]);

_library.zend_object_get_class_entry_t = ffi.Function(ref.refType(_library._zend_class_entry), [ref.refType(_library._zval_struct)]);

_library.zend_object_get_class_name_t = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(ref.refType('char')), ref.refType('uint'), 'int']);

_library.zend_object_get_closure_t = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(ref.refType(_library._zend_class_entry)), ref.refType(ref.refType(_library._zend_function)), ref.refType(ref.refType(_library._zval_struct))]);

_library.zend_object_get_constructor_t = ffi.Function(ref.refType(_library._zend_function), [ref.refType(_library._zval_struct)]);

_library.zend_object_get_debug_info_t = ffi.Function(ref.refType(_library._hashtable), [ref.refType(_library._zval_struct), ref.refType('int')]);

_library.zend_object_get_gc_t = ffi.Function(ref.refType(_library._hashtable), [ref.refType(_library._zval_struct), ref.refType(ref.refType(ref.refType(_library._zval_struct))), ref.refType('int')]);

_library.zend_object_get_method_t = ffi.Function(ref.refType(_library._zend_function), [ref.refType(ref.refType(_library._zval_struct)), ref.refType('char'), 'int', ref.refType(_library._zend_literal)]);

_library.zend_object_get_properties_t = ffi.Function(ref.refType(_library._hashtable), [ref.refType(_library._zval_struct)]);

_library.zend_object_get_property_ptr_ptr_t = ffi.Function(ref.refType(ref.refType(_library._zval_struct)), [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), 'int', ref.refType(_library._zend_literal)]);

_library.zend_object_has_dimension_t = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), 'int']);

_library.zend_object_has_property_t = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), 'int', ref.refType(_library._zend_literal)]);

_library.zend_object_read_dimension_t = ffi.Function(ref.refType(_library._zval_struct), [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), 'int']);

_library.zend_object_read_property_t = ffi.Function(ref.refType(_library._zval_struct), [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), 'int', ref.refType(_library._zend_literal)]);

_library.zend_object_set_t = ffi.Function('void', [ref.refType(ref.refType(_library._zval_struct)), ref.refType(_library._zval_struct)]);

_library.zend_object_unset_dimension_t = ffi.Function('void', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);

_library.zend_object_unset_property_t = ffi.Function('void', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zend_literal)]);

_library.zend_object_write_dimension_t = ffi.Function('void', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);

_library.zend_object_write_property_t = ffi.Function('void', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zend_literal)]);

_library._zend_object_handlers = Struct({});

_library._preload.push(function () {
    _library._zend_object_handlers.defineProperty("add_ref", _library.zend_object_add_ref_t);
    _library._zend_object_handlers.defineProperty("call_method", _library.zend_object_call_method_t);
    _library._zend_object_handlers.defineProperty("cast_object", _library.zend_object_cast_t);
    _library._zend_object_handlers.defineProperty("clone_obj", _library.zend_object_clone_obj_t);
    _library._zend_object_handlers.defineProperty("compare", _library.zend_object_compare_zvals_t);
    _library._zend_object_handlers.defineProperty("compare_objects", _library.zend_object_compare_t);
    _library._zend_object_handlers.defineProperty("count_elements", _library.zend_object_count_elements_t);
    _library._zend_object_handlers.defineProperty("del_ref", _library.zend_object_del_ref_t);
    _library._zend_object_handlers.defineProperty("do_operation", _library.zend_object_do_operation_t);
    _library._zend_object_handlers.defineProperty("get", _library.zend_object_get_t);
    _library._zend_object_handlers.defineProperty("get_class_entry", _library.zend_object_get_class_entry_t);
    _library._zend_object_handlers.defineProperty("get_class_name", _library.zend_object_get_class_name_t);
    _library._zend_object_handlers.defineProperty("get_closure", _library.zend_object_get_closure_t);
    _library._zend_object_handlers.defineProperty("get_constructor", _library.zend_object_get_constructor_t);
    _library._zend_object_handlers.defineProperty("get_debug_info", _library.zend_object_get_debug_info_t);
    _library._zend_object_handlers.defineProperty("get_gc", _library.zend_object_get_gc_t);
    _library._zend_object_handlers.defineProperty("get_method", _library.zend_object_get_method_t);
    _library._zend_object_handlers.defineProperty("get_properties", _library.zend_object_get_properties_t);
    _library._zend_object_handlers.defineProperty("get_property_ptr_ptr", _library.zend_object_get_property_ptr_ptr_t);
    _library._zend_object_handlers.defineProperty("has_dimension", _library.zend_object_has_dimension_t);
    _library._zend_object_handlers.defineProperty("has_property", _library.zend_object_has_property_t);
    _library._zend_object_handlers.defineProperty("read_dimension", _library.zend_object_read_dimension_t);
    _library._zend_object_handlers.defineProperty("read_property", _library.zend_object_read_property_t);
    _library._zend_object_handlers.defineProperty("set", _library.zend_object_set_t);
    _library._zend_object_handlers.defineProperty("unset_dimension", _library.zend_object_unset_dimension_t);
    _library._zend_object_handlers.defineProperty("unset_property", _library.zend_object_unset_property_t);
    _library._zend_object_handlers.defineProperty("write_dimension", _library.zend_object_write_dimension_t);
    _library._zend_object_handlers.defineProperty("write_property", _library.zend_object_write_property_t);
});

_library.zend_object_delete_obj_t = ffi.Function('void', [ref.refType(_library._zval_struct)]);

_library.zend_std_get_static_method = [ref.refType(_library._zend_function), [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', ref.refType(_library._zend_literal)]];
_library._functions['zend_std_get_static_method'] = _library.zend_std_get_static_method;

_library.zend_std_get_static_property = [ref.refType(ref.refType(_library.zval)), [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', 'uchar', ref.refType(_library._zend_literal)]];
_library._functions['zend_std_get_static_property'] = _library.zend_std_get_static_property;

_library.zend_std_unset_static_property = ['uchar', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', ref.refType(_library._zend_literal)]];
_library._functions['zend_std_unset_static_property'] = _library.zend_std_unset_static_property;

_library.zend_std_get_constructor = [ref.refType(_library._zend_function), [ref.refType(_library.zval)]];
_library._functions['zend_std_get_constructor'] = _library.zend_std_get_constructor;

_library.zend_get_property_info = [ref.refType(_library._zend_property_info), [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), 'int']];
_library._functions['zend_get_property_info'] = _library.zend_get_property_info;

_library.zend_std_get_properties = [ref.refType(_library.HashTable), [ref.refType(_library.zval)]];
_library._functions['zend_std_get_properties'] = _library.zend_std_get_properties;

_library.zend_std_get_debug_info = [ref.refType(_library.HashTable), [ref.refType(_library.zval), ref.refType('int')]];
_library._functions['zend_std_get_debug_info'] = _library.zend_std_get_debug_info;

_library.zend_std_cast_object_tostring = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), 'int']];
_library._functions['zend_std_cast_object_tostring'] = _library.zend_std_cast_object_tostring;

_library.zend_std_write_property = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library._zend_literal)]];
_library._functions['zend_std_write_property'] = _library.zend_std_write_property;

_library.rebuild_object_properties = ['void', [ref.refType(_library.zend_object)]];
_library._functions['rebuild_object_properties'] = _library.rebuild_object_properties;

_library.zend_check_private = ['int', [ref.refType(_library._zend_function), ref.refType(_library.zend_class_entry), ref.refType('char'), 'int']];
_library._functions['zend_check_private'] = _library.zend_check_private;

_library.zend_check_protected = ['int', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions['zend_check_protected'] = _library.zend_check_protected;

_library.zend_check_property_access = ['int', [ref.refType(_library.zend_object), ref.refType('char'), 'int']];
_library._functions['zend_check_property_access'] = _library.zend_check_property_access;

_library.zend_std_call_user_call = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zend_std_call_user_call'] = _library.zend_std_call_user_call;

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_types.js');
}
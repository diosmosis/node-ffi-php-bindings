var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_function_entry = Struct({
    "arg_info": _library._zend_arg_info ? ref.refType(_library._zend_arg_info) : 'pointer',
    "flags": 'uint',
    "fname": ref.refType('char'),
    "handler": ffi.Function('void', ['int', _library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer', ref.refType(_library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer'), _library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer', 'int']),
    "num_args": 'uint'
});

_library._zend_fcall_info = Struct({
    "function_name": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "function_table": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "no_separation": 'uchar',
    "object_ptr": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "param_count": 'uint',
    "params": ref.refType(ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer')),
    "retval_ptr_ptr": ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'),
    "size": 'ulong',
    "symbol_table": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer'
});

_library.zend_function_entry = _library._zend_function_entry;

_library.zend_fcall_info = _library._zend_fcall_info;

_library._zend_fcall_info_cache = Struct({
    "called_scope": _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer',
    "calling_scope": _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer',
    "function_handler": _library.zend_function ? ref.refType(_library.zend_function) : 'pointer',
    "initialized": 'uchar',
    "object_ptr": _library.zval ? ref.refType(_library.zval) : 'pointer'
});

_library.zend_fcall_info_cache = _library._zend_fcall_info_cache;

_library.zend_next_free_module = ['int', []];
_library._functions.push(_library.zend_next_free_module);

_library._zend_get_parameters_array = ['int', ['int', 'int', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer')]];
_library._functions.push(_library._zend_get_parameters_array);

_library._zend_get_parameters_array_ex = ['int', ['int', ref.refType(ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'))]];
_library._functions.push(_library._zend_get_parameters_array_ex);

_library.zend_copy_parameters_array = ['int', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_copy_parameters_array);

_library.zend_zval_type_name = [ref.refType('char'), [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_zval_type_name);

_library.zend_register_functions = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zend_function_entry ? ref.refType(_library.zend_function_entry) : 'pointer', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'int']];
_library._functions.push(_library.zend_register_functions);

_library.zend_unregister_functions = ['void', [_library.zend_function_entry ? ref.refType(_library.zend_function_entry) : 'pointer', 'int', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_unregister_functions);

_library.zend_startup_module = ['int', [_library.zend_module_entry ? ref.refType(_library.zend_module_entry) : 'pointer']];
_library._functions.push(_library.zend_startup_module);

_library.zend_register_internal_module = [_library.zend_module_entry ? ref.refType(_library.zend_module_entry) : 'pointer', [_library.zend_module_entry ? ref.refType(_library.zend_module_entry) : 'pointer']];
_library._functions.push(_library.zend_register_internal_module);

_library.zend_register_module_ex = [_library.zend_module_entry ? ref.refType(_library.zend_module_entry) : 'pointer', [_library.zend_module_entry ? ref.refType(_library.zend_module_entry) : 'pointer']];
_library._functions.push(_library.zend_register_module_ex);

_library.zend_startup_module_ex = ['int', [_library.zend_module_entry ? ref.refType(_library.zend_module_entry) : 'pointer']];
_library._functions.push(_library.zend_startup_module_ex);

_library.zend_startup_modules = ['int', []];
_library._functions.push(_library.zend_startup_modules);

_library.zend_collect_module_handlers = ['void', []];
_library._functions.push(_library.zend_collect_module_handlers);

_library.zend_destroy_modules = ['void', []];
_library._functions.push(_library.zend_destroy_modules);

_library.zend_check_magic_method_implementation = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zend_function ? ref.refType(_library.zend_function) : 'pointer', 'int']];
_library._functions.push(_library.zend_check_magic_method_implementation);

_library.zend_register_internal_class = [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zend_register_internal_class);

_library.zend_register_internal_class_ex = [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char')]];
_library._functions.push(_library.zend_register_internal_class_ex);

_library.zend_register_internal_interface = [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zend_register_internal_interface);

_library.zend_register_class_alias_ex = ['int', [ref.refType('char'), 'int', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zend_register_class_alias_ex);

_library.zend_disable_function = ['int', [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_disable_function);

_library.zend_disable_class = ['int', [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_disable_class);

_library.zend_wrong_param_count = ['void', []];
_library._functions.push(_library.zend_wrong_param_count);

_library.zend_is_callable_ex = ['uchar', [_library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'uint', ref.refType(ref.refType('char')), ref.refType('int'), _library.zend_fcall_info_cache ? ref.refType(_library.zend_fcall_info_cache) : 'pointer', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.zend_is_callable_ex);

_library.zend_is_callable = ['uchar', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'uint', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.zend_is_callable);

_library.zend_make_callable = ['uchar', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.zend_make_callable);

_library.zend_get_module_version = [ref.refType('char'), [ref.refType('char')]];
_library._functions.push(_library.zend_get_module_version);

_library.zend_get_module_started = ['int', [ref.refType('char')]];
_library._functions.push(_library.zend_get_module_started);

_library.zend_declare_property = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zend_declare_property);

_library.zend_declare_property_ex = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', _library.zval ? ref.refType(_library.zval) : 'pointer', 'int', ref.refType('char'), 'int']];
_library._functions.push(_library.zend_declare_property_ex);

_library.zend_declare_property_null = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', 'int']];
_library._functions.push(_library.zend_declare_property_null);

_library.zend_declare_property_bool = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', 'long', 'int']];
_library._functions.push(_library.zend_declare_property_bool);

_library.zend_declare_property_long = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', 'long', 'int']];
_library._functions.push(_library.zend_declare_property_long);

_library.zend_declare_property_double = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', 'double', 'int']];
_library._functions.push(_library.zend_declare_property_double);

_library.zend_declare_property_string = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', ref.refType('char'), 'int']];
_library._functions.push(_library.zend_declare_property_string);

_library.zend_declare_property_stringl = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', ref.refType('char'), 'int', 'int']];
_library._functions.push(_library.zend_declare_property_stringl);

_library.zend_declare_class_constant = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'ulong', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_declare_class_constant);

_library.zend_declare_class_constant_null = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'ulong']];
_library._functions.push(_library.zend_declare_class_constant_null);

_library.zend_declare_class_constant_long = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'ulong', 'long']];
_library._functions.push(_library.zend_declare_class_constant_long);

_library.zend_declare_class_constant_bool = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'ulong', 'uchar']];
_library._functions.push(_library.zend_declare_class_constant_bool);

_library.zend_declare_class_constant_double = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'ulong', 'double']];
_library._functions.push(_library.zend_declare_class_constant_double);

_library.zend_declare_class_constant_stringl = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'ulong', ref.refType('char'), 'ulong']];
_library._functions.push(_library.zend_declare_class_constant_stringl);

_library.zend_declare_class_constant_string = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'ulong', ref.refType('char')]];
_library._functions.push(_library.zend_declare_class_constant_string);

_library.zend_update_class_constants = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zend_update_class_constants);

_library.zend_update_property = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_update_property);

_library.zend_update_property_null = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int']];
_library._functions.push(_library.zend_update_property_null);

_library.zend_update_property_bool = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int', 'long']];
_library._functions.push(_library.zend_update_property_bool);

_library.zend_update_property_long = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int', 'long']];
_library._functions.push(_library.zend_update_property_long);

_library.zend_update_property_double = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int', 'double']];
_library._functions.push(_library.zend_update_property_double);

_library.zend_update_property_string = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int', ref.refType('char')]];
_library._functions.push(_library.zend_update_property_string);

_library.zend_update_property_stringl = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int', ref.refType('char'), 'int']];
_library._functions.push(_library.zend_update_property_stringl);

_library.zend_update_static_property = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_update_static_property);

_library.zend_update_static_property_null = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int']];
_library._functions.push(_library.zend_update_static_property_null);

_library.zend_update_static_property_bool = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', 'long']];
_library._functions.push(_library.zend_update_static_property_bool);

_library.zend_update_static_property_long = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', 'long']];
_library._functions.push(_library.zend_update_static_property_long);

_library.zend_update_static_property_double = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', 'double']];
_library._functions.push(_library.zend_update_static_property_double);

_library.zend_update_static_property_string = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', ref.refType('char')]];
_library._functions.push(_library.zend_update_static_property_string);

_library.zend_update_static_property_stringl = ['int', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', ref.refType('char'), 'int']];
_library._functions.push(_library.zend_update_static_property_stringl);

_library.zend_read_property = [_library.zval ? ref.refType(_library.zval) : 'pointer', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int', 'uchar']];
_library._functions.push(_library.zend_read_property);

_library.zend_read_static_property = [_library.zval ? ref.refType(_library.zval) : 'pointer', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'int', 'uchar']];
_library._functions.push(_library.zend_read_static_property);

_library.zend_get_class_entry = [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_get_class_entry);

_library.zend_get_object_classname = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(ref.refType('char')), ref.refType('uint')]];
_library._functions.push(_library.zend_get_object_classname);

_library.zend_get_type_by_const = [ref.refType('char'), ['int']];
_library._functions.push(_library.zend_get_type_by_const);

_library._array_init = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._array_init);

_library._object_init = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._object_init);

_library._object_init_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._object_init_ex);

_library._object_and_properties_init = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library._object_and_properties_init);

_library.object_properties_init = ['void', [_library.zend_object ? ref.refType(_library.zend_object) : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.object_properties_init);

_library.zend_merge_properties = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 'int']];
_library._functions.push(_library.zend_merge_properties);

_library.add_assoc_function = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), ffi.Function('void', ['int', _library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer', ref.refType(_library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer'), _library._zval_struct ? ref.refType(_library._zval_struct) : 'pointer', 'int'])]];
_library._functions.push(_library.add_assoc_function);

_library.add_assoc_long_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', 'long']];
_library._functions.push(_library.add_assoc_long_ex);

_library.add_assoc_null_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.add_assoc_null_ex);

_library.add_assoc_bool_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', 'int']];
_library._functions.push(_library.add_assoc_bool_ex);

_library.add_assoc_resource_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', 'int']];
_library._functions.push(_library.add_assoc_resource_ex);

_library.add_assoc_double_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', 'double']];
_library._functions.push(_library.add_assoc_double_ex);

_library.add_assoc_string_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', ref.refType('char'), 'int']];
_library._functions.push(_library.add_assoc_string_ex);

_library.add_assoc_stringl_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int']];
_library._functions.push(_library.add_assoc_stringl_ex);

_library.add_assoc_zval_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.add_assoc_zval_ex);

_library.add_index_long = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', 'long']];
_library._functions.push(_library.add_index_long);

_library.add_index_null = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong']];
_library._functions.push(_library.add_index_null);

_library.add_index_bool = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', 'int']];
_library._functions.push(_library.add_index_bool);

_library.add_index_resource = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', 'int']];
_library._functions.push(_library.add_index_resource);

_library.add_index_double = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', 'double']];
_library._functions.push(_library.add_index_double);

_library.add_index_string = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', ref.refType('char'), 'int']];
_library._functions.push(_library.add_index_string);

_library.add_index_stringl = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', ref.refType('char'), 'uint', 'int']];
_library._functions.push(_library.add_index_stringl);

_library.add_index_zval = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.add_index_zval);

_library.add_next_index_long = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'long']];
_library._functions.push(_library.add_next_index_long);

_library.add_next_index_null = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.add_next_index_null);

_library.add_next_index_bool = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.add_next_index_bool);

_library.add_next_index_resource = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.add_next_index_resource);

_library.add_next_index_double = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'double']];
_library._functions.push(_library.add_next_index_double);

_library.add_next_index_string = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int']];
_library._functions.push(_library.add_next_index_string);

_library.add_next_index_stringl = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', 'int']];
_library._functions.push(_library.add_next_index_stringl);

_library.add_next_index_zval = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.add_next_index_zval);

_library.add_get_assoc_string_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', ref.refType('char'), ref.refType(ref.refType('void')), 'int']];
_library._functions.push(_library.add_get_assoc_string_ex);

_library.add_get_assoc_stringl_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', ref.refType('char'), 'uint', ref.refType(ref.refType('void')), 'int']];
_library._functions.push(_library.add_get_assoc_stringl_ex);

_library.add_get_index_long = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', 'long', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.add_get_index_long);

_library.add_get_index_double = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', 'double', ref.refType(ref.refType('void'))]];
_library._functions.push(_library.add_get_index_double);

_library.add_get_index_string = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', ref.refType('char'), ref.refType(ref.refType('void')), 'int']];
_library._functions.push(_library.add_get_index_string);

_library.add_get_index_stringl = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'ulong', ref.refType('char'), 'uint', ref.refType(ref.refType('void')), 'int']];
_library._functions.push(_library.add_get_index_stringl);

_library.array_set_zval_key = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.array_set_zval_key);

_library.add_property_long_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', 'long']];
_library._functions.push(_library.add_property_long_ex);

_library.add_property_null_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.add_property_null_ex);

_library.add_property_bool_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', 'int']];
_library._functions.push(_library.add_property_bool_ex);

_library.add_property_resource_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', 'long']];
_library._functions.push(_library.add_property_resource_ex);

_library.add_property_double_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', 'double']];
_library._functions.push(_library.add_property_double_ex);

_library.add_property_string_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', ref.refType('char'), 'int']];
_library._functions.push(_library.add_property_string_ex);

_library.add_property_stringl_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int']];
_library._functions.push(_library.add_property_stringl_ex);

_library.add_property_zval_ex = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.add_property_zval_ex);

_library.call_user_function = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer', 'uint', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer')]];
_library._functions.push(_library.call_user_function);

_library.call_user_function_ex = ['int', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), 'uint', ref.refType(ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer')), 'int', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.call_user_function_ex);

_library.zend_fcall_info_init = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', 'uint', _library.zend_fcall_info ? ref.refType(_library.zend_fcall_info) : 'pointer', _library.zend_fcall_info_cache ? ref.refType(_library.zend_fcall_info_cache) : 'pointer', ref.refType(ref.refType('char')), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.zend_fcall_info_init);

_library.zend_fcall_info_args_clear = ['void', [_library.zend_fcall_info ? ref.refType(_library.zend_fcall_info) : 'pointer', 'int']];
_library._functions.push(_library.zend_fcall_info_args_clear);

_library.zend_fcall_info_args_save = ['void', [_library.zend_fcall_info ? ref.refType(_library.zend_fcall_info) : 'pointer', ref.refType('int'), ref.refType(ref.refType(ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer')))]];
_library._functions.push(_library.zend_fcall_info_args_save);

_library.zend_fcall_info_args_restore = ['void', [_library.zend_fcall_info ? ref.refType(_library.zend_fcall_info) : 'pointer', 'int', ref.refType(ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'))]];
_library._functions.push(_library.zend_fcall_info_args_restore);

_library.zend_fcall_info_args = ['int', [_library.zend_fcall_info ? ref.refType(_library.zend_fcall_info) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_fcall_info_args);

_library.zend_fcall_info_argp = ['int', [_library.zend_fcall_info ? ref.refType(_library.zend_fcall_info) : 'pointer', 'int', ref.refType(ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'))]];
_library._functions.push(_library.zend_fcall_info_argp);

_library.zend_fcall_info_argv = ['int', [_library.zend_fcall_info ? ref.refType(_library.zend_fcall_info) : 'pointer', 'int', ref.refType('void')]];
_library._functions.push(_library.zend_fcall_info_argv);

_library.zend_fcall_info_call = ['int', [_library.zend_fcall_info ? ref.refType(_library.zend_fcall_info) : 'pointer', _library.zend_fcall_info_cache ? ref.refType(_library.zend_fcall_info_cache) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_fcall_info_call);

_library.zend_call_function = ['int', [_library.zend_fcall_info ? ref.refType(_library.zend_fcall_info) : 'pointer', _library.zend_fcall_info_cache ? ref.refType(_library.zend_fcall_info_cache) : 'pointer']];
_library._functions.push(_library.zend_call_function);

_library.zend_delete_variable = ['void', [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer', _library.HashTable ? ref.refType(_library.HashTable) : 'pointer', ref.refType('char'), 'int', 'ulong']];
_library._functions.push(_library.zend_delete_variable);

_library.zend_delete_global_variable = ['int', [ref.refType('char'), 'int']];
_library._functions.push(_library.zend_delete_global_variable);

_library.zend_delete_global_variable_ex = ['int', [ref.refType('char'), 'int', 'ulong']];
_library._functions.push(_library.zend_delete_global_variable_ex);

_library.zend_reset_all_cv = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_reset_all_cv);

_library.zend_rebuild_symbol_table = ['void', []];
_library._functions.push(_library.zend_rebuild_symbol_table);

_library.zend_find_alias_name = [ref.refType('char'), [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_find_alias_name);

_library.zend_resolve_method_name = [ref.refType('char'), [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', _library.zend_function ? ref.refType(_library.zend_function) : 'pointer']];
_library._functions.push(_library.zend_resolve_method_name);

_library.zif_display_disabled_function = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_display_disabled_function);

_library.zif_display_disabled_class = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_display_disabled_class);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}
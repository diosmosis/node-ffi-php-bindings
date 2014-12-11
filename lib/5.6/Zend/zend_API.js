var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_function_entry = Struct({});
_library._zend_function_entry.size = 1;

_library._preload['_zend_function_entry'] = ['_zend_arg_info', 'void (int, zval *, zval **, zval *, int)', function () {
    _library._zend_function_entry.size = 0;
    _library._zend_function_entry.defineProperty("arg_info", ref.refType(_library._zend_arg_info));
    _library._zend_function_entry.defineProperty("flags", 'uint');
    _library._zend_function_entry.defineProperty("fname", ref.refType('char'));
    _library._zend_function_entry.defineProperty("handler", ffi.Function('void', ['int', ref.refType(_library._zval_struct), ref.refType(ref.refType(_library._zval_struct)), ref.refType(_library._zval_struct), 'int']));
    _library._zend_function_entry.defineProperty("num_args", 'uint');
}];

_library._zend_fcall_info = Struct({});
_library._zend_fcall_info.size = 1;

_library._preload['_zend_fcall_info'] = ['zval', 'HashTable', 'zval', 'pointer', 'pointer', 'HashTable', function () {
    _library._zend_fcall_info.size = 0;
    _library._zend_fcall_info.defineProperty("function_name", ref.refType(_library.zval));
    _library._zend_fcall_info.defineProperty("function_table", ref.refType(_library.HashTable));
    _library._zend_fcall_info.defineProperty("no_separation", 'uchar');
    _library._zend_fcall_info.defineProperty("object_ptr", ref.refType(_library.zval));
    _library._zend_fcall_info.defineProperty("param_count", 'uint');
    _library._zend_fcall_info.defineProperty("params", ref.refType(ref.refType(ref.refType(_library.zval))));
    _library._zend_fcall_info.defineProperty("retval_ptr_ptr", ref.refType(ref.refType(_library.zval)));
    _library._zend_fcall_info.defineProperty("size", 'ulong');
    _library._zend_fcall_info.defineProperty("symbol_table", ref.refType(_library.HashTable));
}];

_library._preload['zend_function_entry'] = [function () {
    _library.zend_function_entry = _library._zend_function_entry;
}];

_library._preload['zend_fcall_info'] = [function () {
    _library.zend_fcall_info = _library._zend_fcall_info;
}];

_library._zend_fcall_info_cache = Struct({});
_library._zend_fcall_info_cache.size = 1;

_library._preload['_zend_fcall_info_cache'] = ['zend_class_entry', 'zend_class_entry', 'zend_function', 'zval', function () {
    _library._zend_fcall_info_cache.size = 0;
    _library._zend_fcall_info_cache.defineProperty("called_scope", ref.refType(_library.zend_class_entry));
    _library._zend_fcall_info_cache.defineProperty("calling_scope", ref.refType(_library.zend_class_entry));
    _library._zend_fcall_info_cache.defineProperty("function_handler", ref.refType(_library.zend_function));
    _library._zend_fcall_info_cache.defineProperty("initialized", 'uchar');
    _library._zend_fcall_info_cache.defineProperty("object_ptr", ref.refType(_library.zval));
}];

_library._preload['zend_fcall_info_cache'] = [function () {
    _library.zend_fcall_info_cache = _library._zend_fcall_info_cache;
}];

_library._preload['_zend_get_parameters_array'] = ['pointer', function () {
    _library._zend_get_parameters_array = ['int', ['int', 'int', ref.refType(ref.refType(_library.zval))]];
    _library._functions['_zend_get_parameters_array'] = _library._zend_get_parameters_array;
}];

_library._preload['_zend_get_parameters_array_ex'] = ['pointer', function () {
    _library._zend_get_parameters_array_ex = ['int', ['int', ref.refType(ref.refType(ref.refType(_library.zval)))]];
    _library._functions['_zend_get_parameters_array_ex'] = _library._zend_get_parameters_array_ex;
}];

_library._preload['zend_copy_parameters_array'] = ['zval', function () {
    _library.zend_copy_parameters_array = ['int', ['int', ref.refType(_library.zval)]];
    _library._functions['zend_copy_parameters_array'] = _library.zend_copy_parameters_array;
}];

_library._preload['zend_zval_type_name'] = ['zval', function () {
    _library.zend_zval_type_name = [ref.refType('char'), [ref.refType(_library.zval)]];
    _library._functions['zend_zval_type_name'] = _library.zend_zval_type_name;
}];

_library._preload['zend_register_functions'] = ['zend_class_entry', 'zend_function_entry', 'HashTable', function () {
    _library.zend_register_functions = ['int', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_function_entry), ref.refType(_library.HashTable), 'int']];
    _library._functions['zend_register_functions'] = _library.zend_register_functions;
}];

_library._preload['zend_unregister_functions'] = ['zend_function_entry', 'HashTable', function () {
    _library.zend_unregister_functions = ['void', [ref.refType(_library.zend_function_entry), 'int', ref.refType(_library.HashTable)]];
    _library._functions['zend_unregister_functions'] = _library.zend_unregister_functions;
}];

_library._preload['zend_startup_module'] = ['zend_module_entry', function () {
    _library.zend_startup_module = ['int', [ref.refType(_library.zend_module_entry)]];
    _library._functions['zend_startup_module'] = _library.zend_startup_module;
}];

_library._preload['zend_register_internal_module'] = ['zend_module_entry', 'zend_module_entry', function () {
    _library.zend_register_internal_module = [ref.refType(_library.zend_module_entry), [ref.refType(_library.zend_module_entry)]];
    _library._functions['zend_register_internal_module'] = _library.zend_register_internal_module;
}];

_library._preload['zend_register_module_ex'] = ['zend_module_entry', 'zend_module_entry', function () {
    _library.zend_register_module_ex = [ref.refType(_library.zend_module_entry), [ref.refType(_library.zend_module_entry)]];
    _library._functions['zend_register_module_ex'] = _library.zend_register_module_ex;
}];

_library._preload['zend_startup_module_ex'] = ['zend_module_entry', function () {
    _library.zend_startup_module_ex = ['int', [ref.refType(_library.zend_module_entry)]];
    _library._functions['zend_startup_module_ex'] = _library.zend_startup_module_ex;
}];

_library._preload['zend_startup_modules'] = [function () {
    _library.zend_startup_modules = ['int', []];
    _library._functions['zend_startup_modules'] = _library.zend_startup_modules;
}];

_library._preload['zend_collect_module_handlers'] = [function () {
    _library.zend_collect_module_handlers = ['void', []];
    _library._functions['zend_collect_module_handlers'] = _library.zend_collect_module_handlers;
}];

_library._preload['zend_destroy_modules'] = [function () {
    _library.zend_destroy_modules = ['void', []];
    _library._functions['zend_destroy_modules'] = _library.zend_destroy_modules;
}];

_library._preload['zend_check_magic_method_implementation'] = ['zend_class_entry', 'zend_function', function () {
    _library.zend_check_magic_method_implementation = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_function), 'int']];
    _library._functions['zend_check_magic_method_implementation'] = _library.zend_check_magic_method_implementation;
}];

_library._preload['zend_register_internal_class'] = ['zend_class_entry', 'zend_class_entry', function () {
    _library.zend_register_internal_class = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_register_internal_class'] = _library.zend_register_internal_class;
}];

_library._preload['zend_register_internal_class_ex'] = ['zend_class_entry', 'zend_class_entry', 'zend_class_entry', function () {
    _library.zend_register_internal_class_ex = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry), ref.refType('char')]];
    _library._functions['zend_register_internal_class_ex'] = _library.zend_register_internal_class_ex;
}];

_library._preload['zend_register_internal_interface'] = ['zend_class_entry', 'zend_class_entry', function () {
    _library.zend_register_internal_interface = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_register_internal_interface'] = _library.zend_register_internal_interface;
}];

_library._preload['zend_register_class_alias_ex'] = ['zend_class_entry', function () {
    _library.zend_register_class_alias_ex = ['int', [ref.refType('char'), 'int', ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_register_class_alias_ex'] = _library.zend_register_class_alias_ex;
}];

_library._preload['zend_disable_function'] = [function () {
    _library.zend_disable_function = ['int', [ref.refType('char'), 'uint']];
    _library._functions['zend_disable_function'] = _library.zend_disable_function;
}];

_library._preload['zend_disable_class'] = [function () {
    _library.zend_disable_class = ['int', [ref.refType('char'), 'uint']];
    _library._functions['zend_disable_class'] = _library.zend_disable_class;
}];

_library._preload['zend_wrong_param_count'] = [function () {
    _library.zend_wrong_param_count = ['void', []];
    _library._functions['zend_wrong_param_count'] = _library.zend_wrong_param_count;
}];

_library._preload['zend_is_callable_ex'] = ['zval', 'zval', 'pointer', 'zend_fcall_info_cache', 'pointer', function () {
    _library.zend_is_callable_ex = ['uchar', [ref.refType(_library.zval), ref.refType(_library.zval), 'uint', ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(_library.zend_fcall_info_cache), ref.refType(ref.refType('char'))]];
    _library._functions['zend_is_callable_ex'] = _library.zend_is_callable_ex;
}];

_library._preload['zend_is_callable'] = ['zval', 'pointer', function () {
    _library.zend_is_callable = ['uchar', [ref.refType(_library.zval), 'uint', ref.refType(ref.refType('char'))]];
    _library._functions['zend_is_callable'] = _library.zend_is_callable;
}];

_library._preload['zend_make_callable'] = ['zval', 'pointer', function () {
    _library.zend_make_callable = ['uchar', [ref.refType(_library.zval), ref.refType(ref.refType('char'))]];
    _library._functions['zend_make_callable'] = _library.zend_make_callable;
}];

_library._preload['zend_get_module_version'] = [function () {
    _library.zend_get_module_version = [ref.refType('char'), [ref.refType('char')]];
    _library._functions['zend_get_module_version'] = _library.zend_get_module_version;
}];

_library._preload['zend_get_module_started'] = [function () {
    _library.zend_get_module_started = ['int', [ref.refType('char')]];
    _library._functions['zend_get_module_started'] = _library.zend_get_module_started;
}];

_library._preload['zend_declare_property'] = ['zend_class_entry', 'zval', function () {
    _library.zend_declare_property = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', ref.refType(_library.zval), 'int']];
    _library._functions['zend_declare_property'] = _library.zend_declare_property;
}];

_library._preload['zend_declare_property_ex'] = ['zend_class_entry', 'zval', function () {
    _library.zend_declare_property_ex = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', ref.refType(_library.zval), 'int', ref.refType('char'), 'int']];
    _library._functions['zend_declare_property_ex'] = _library.zend_declare_property_ex;
}];

_library._preload['zend_declare_property_null'] = ['zend_class_entry', function () {
    _library.zend_declare_property_null = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', 'int']];
    _library._functions['zend_declare_property_null'] = _library.zend_declare_property_null;
}];

_library._preload['zend_declare_property_bool'] = ['zend_class_entry', function () {
    _library.zend_declare_property_bool = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', 'long', 'int']];
    _library._functions['zend_declare_property_bool'] = _library.zend_declare_property_bool;
}];

_library._preload['zend_declare_property_long'] = ['zend_class_entry', function () {
    _library.zend_declare_property_long = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', 'long', 'int']];
    _library._functions['zend_declare_property_long'] = _library.zend_declare_property_long;
}];

_library._preload['zend_declare_property_double'] = ['zend_class_entry', function () {
    _library.zend_declare_property_double = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', 'double', 'int']];
    _library._functions['zend_declare_property_double'] = _library.zend_declare_property_double;
}];

_library._preload['zend_declare_property_string'] = ['zend_class_entry', function () {
    _library.zend_declare_property_string = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', ref.refType('char'), 'int']];
    _library._functions['zend_declare_property_string'] = _library.zend_declare_property_string;
}];

_library._preload['zend_declare_property_stringl'] = ['zend_class_entry', function () {
    _library.zend_declare_property_stringl = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', ref.refType('char'), 'int', 'int']];
    _library._functions['zend_declare_property_stringl'] = _library.zend_declare_property_stringl;
}];

_library._preload['zend_declare_class_constant'] = ['zend_class_entry', 'zval', function () {
    _library.zend_declare_class_constant = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'ulong', ref.refType(_library.zval)]];
    _library._functions['zend_declare_class_constant'] = _library.zend_declare_class_constant;
}];

_library._preload['zend_declare_class_constant_null'] = ['zend_class_entry', function () {
    _library.zend_declare_class_constant_null = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'ulong']];
    _library._functions['zend_declare_class_constant_null'] = _library.zend_declare_class_constant_null;
}];

_library._preload['zend_declare_class_constant_long'] = ['zend_class_entry', function () {
    _library.zend_declare_class_constant_long = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'ulong', 'long']];
    _library._functions['zend_declare_class_constant_long'] = _library.zend_declare_class_constant_long;
}];

_library._preload['zend_declare_class_constant_bool'] = ['zend_class_entry', function () {
    _library.zend_declare_class_constant_bool = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'ulong', 'uchar']];
    _library._functions['zend_declare_class_constant_bool'] = _library.zend_declare_class_constant_bool;
}];

_library._preload['zend_declare_class_constant_double'] = ['zend_class_entry', function () {
    _library.zend_declare_class_constant_double = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'ulong', 'double']];
    _library._functions['zend_declare_class_constant_double'] = _library.zend_declare_class_constant_double;
}];

_library._preload['zend_declare_class_constant_stringl'] = ['zend_class_entry', function () {
    _library.zend_declare_class_constant_stringl = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'ulong', ref.refType('char'), 'ulong']];
    _library._functions['zend_declare_class_constant_stringl'] = _library.zend_declare_class_constant_stringl;
}];

_library._preload['zend_declare_class_constant_string'] = ['zend_class_entry', function () {
    _library.zend_declare_class_constant_string = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'ulong', ref.refType('char')]];
    _library._functions['zend_declare_class_constant_string'] = _library.zend_declare_class_constant_string;
}];

_library._preload['zend_update_class_constants'] = ['zend_class_entry', function () {
    _library.zend_update_class_constants = ['void', [ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_update_class_constants'] = _library.zend_update_class_constants;
}];

_library._preload['zend_update_property'] = ['zend_class_entry', 'zval', 'zval', function () {
    _library.zend_update_property = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), ref.refType('char'), 'int', ref.refType(_library.zval)]];
    _library._functions['zend_update_property'] = _library.zend_update_property;
}];

_library._preload['zend_update_property_null'] = ['zend_class_entry', 'zval', function () {
    _library.zend_update_property_null = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), ref.refType('char'), 'int']];
    _library._functions['zend_update_property_null'] = _library.zend_update_property_null;
}];

_library._preload['zend_update_property_bool'] = ['zend_class_entry', 'zval', function () {
    _library.zend_update_property_bool = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), ref.refType('char'), 'int', 'long']];
    _library._functions['zend_update_property_bool'] = _library.zend_update_property_bool;
}];

_library._preload['zend_update_property_long'] = ['zend_class_entry', 'zval', function () {
    _library.zend_update_property_long = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), ref.refType('char'), 'int', 'long']];
    _library._functions['zend_update_property_long'] = _library.zend_update_property_long;
}];

_library._preload['zend_update_property_double'] = ['zend_class_entry', 'zval', function () {
    _library.zend_update_property_double = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), ref.refType('char'), 'int', 'double']];
    _library._functions['zend_update_property_double'] = _library.zend_update_property_double;
}];

_library._preload['zend_update_property_string'] = ['zend_class_entry', 'zval', function () {
    _library.zend_update_property_string = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), ref.refType('char'), 'int', ref.refType('char')]];
    _library._functions['zend_update_property_string'] = _library.zend_update_property_string;
}];

_library._preload['zend_update_property_stringl'] = ['zend_class_entry', 'zval', function () {
    _library.zend_update_property_stringl = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), ref.refType('char'), 'int', ref.refType('char'), 'int']];
    _library._functions['zend_update_property_stringl'] = _library.zend_update_property_stringl;
}];

_library._preload['zend_update_static_property'] = ['zend_class_entry', 'zval', function () {
    _library.zend_update_static_property = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', ref.refType(_library.zval)]];
    _library._functions['zend_update_static_property'] = _library.zend_update_static_property;
}];

_library._preload['zend_update_static_property_null'] = ['zend_class_entry', function () {
    _library.zend_update_static_property_null = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int']];
    _library._functions['zend_update_static_property_null'] = _library.zend_update_static_property_null;
}];

_library._preload['zend_update_static_property_bool'] = ['zend_class_entry', function () {
    _library.zend_update_static_property_bool = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', 'long']];
    _library._functions['zend_update_static_property_bool'] = _library.zend_update_static_property_bool;
}];

_library._preload['zend_update_static_property_long'] = ['zend_class_entry', function () {
    _library.zend_update_static_property_long = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', 'long']];
    _library._functions['zend_update_static_property_long'] = _library.zend_update_static_property_long;
}];

_library._preload['zend_update_static_property_double'] = ['zend_class_entry', function () {
    _library.zend_update_static_property_double = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', 'double']];
    _library._functions['zend_update_static_property_double'] = _library.zend_update_static_property_double;
}];

_library._preload['zend_update_static_property_string'] = ['zend_class_entry', function () {
    _library.zend_update_static_property_string = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', ref.refType('char')]];
    _library._functions['zend_update_static_property_string'] = _library.zend_update_static_property_string;
}];

_library._preload['zend_update_static_property_stringl'] = ['zend_class_entry', function () {
    _library.zend_update_static_property_stringl = ['int', [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', ref.refType('char'), 'int']];
    _library._functions['zend_update_static_property_stringl'] = _library.zend_update_static_property_stringl;
}];

_library._preload['zend_read_property'] = ['zval', 'zend_class_entry', 'zval', function () {
    _library.zend_read_property = [ref.refType(_library.zval), [ref.refType(_library.zend_class_entry), ref.refType(_library.zval), ref.refType('char'), 'int', 'uchar']];
    _library._functions['zend_read_property'] = _library.zend_read_property;
}];

_library._preload['zend_read_static_property'] = ['zval', 'zend_class_entry', function () {
    _library.zend_read_static_property = [ref.refType(_library.zval), [ref.refType(_library.zend_class_entry), ref.refType('char'), 'int', 'uchar']];
    _library._functions['zend_read_static_property'] = _library.zend_read_static_property;
}];

_library._preload['zend_get_class_entry'] = ['zend_class_entry', 'zval', function () {
    _library.zend_get_class_entry = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zval)]];
    _library._functions['zend_get_class_entry'] = _library.zend_get_class_entry;
}];

_library._preload['zend_get_object_classname'] = ['zval', 'pointer', function () {
    _library.zend_get_object_classname = ['int', [ref.refType(_library.zval), ref.refType(ref.refType('char')), ref.refType('uint')]];
    _library._functions['zend_get_object_classname'] = _library.zend_get_object_classname;
}];

_library._preload['zend_get_type_by_const'] = [function () {
    _library.zend_get_type_by_const = [ref.refType('char'), ['int']];
    _library._functions['zend_get_type_by_const'] = _library.zend_get_type_by_const;
}];

_library._preload['_array_init'] = ['zval', function () {
    _library._array_init = ['int', [ref.refType(_library.zval), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_array_init'] = _library._array_init;
}];

_library._preload['_object_init'] = ['zval', function () {
    _library._object_init = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
    _library._functions['_object_init'] = _library._object_init;
}];

_library._preload['_object_init_ex'] = ['zval', 'zend_class_entry', function () {
    _library._object_init_ex = ['int', [ref.refType(_library.zval), ref.refType(_library.zend_class_entry), ref.refType('char'), 'uint']];
    _library._functions['_object_init_ex'] = _library._object_init_ex;
}];

_library._preload['_object_and_properties_init'] = ['zval', 'zend_class_entry', 'HashTable', function () {
    _library._object_and_properties_init = ['int', [ref.refType(_library.zval), ref.refType(_library.zend_class_entry), ref.refType(_library.HashTable), ref.refType('char'), 'uint']];
    _library._functions['_object_and_properties_init'] = _library._object_and_properties_init;
}];

_library._preload['object_properties_init'] = ['zend_object', 'zend_class_entry', function () {
    _library.object_properties_init = ['void', [ref.refType(_library.zend_object), ref.refType(_library.zend_class_entry)]];
    _library._functions['object_properties_init'] = _library.object_properties_init;
}];

_library._preload['zend_merge_properties'] = ['zval', 'HashTable', function () {
    _library.zend_merge_properties = ['void', [ref.refType(_library.zval), ref.refType(_library.HashTable), 'int']];
    _library._functions['zend_merge_properties'] = _library.zend_merge_properties;
}];

_library._preload['add_assoc_function'] = ['zval', 'void (int, zval *, zval **, zval *, int)', function () {
    _library.add_assoc_function = ['int', [ref.refType(_library.zval), ref.refType('char'), ffi.Function('void', ['int', ref.refType(_library._zval_struct), ref.refType(ref.refType(_library._zval_struct)), ref.refType(_library._zval_struct), 'int'])]];
    _library._functions['add_assoc_function'] = _library.add_assoc_function;
}];

_library._preload['add_assoc_long_ex'] = ['zval', function () {
    _library.add_assoc_long_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', 'long']];
    _library._functions['add_assoc_long_ex'] = _library.add_assoc_long_ex;
}];

_library._preload['add_assoc_null_ex'] = ['zval', function () {
    _library.add_assoc_null_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
    _library._functions['add_assoc_null_ex'] = _library.add_assoc_null_ex;
}];

_library._preload['add_assoc_bool_ex'] = ['zval', function () {
    _library.add_assoc_bool_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', 'int']];
    _library._functions['add_assoc_bool_ex'] = _library.add_assoc_bool_ex;
}];

_library._preload['add_assoc_resource_ex'] = ['zval', function () {
    _library.add_assoc_resource_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', 'int']];
    _library._functions['add_assoc_resource_ex'] = _library.add_assoc_resource_ex;
}];

_library._preload['add_assoc_double_ex'] = ['zval', function () {
    _library.add_assoc_double_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', 'double']];
    _library._functions['add_assoc_double_ex'] = _library.add_assoc_double_ex;
}];

_library._preload['add_assoc_string_ex'] = ['zval', function () {
    _library.add_assoc_string_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', ref.refType('char'), 'int']];
    _library._functions['add_assoc_string_ex'] = _library.add_assoc_string_ex;
}];

_library._preload['add_assoc_stringl_ex'] = ['zval', function () {
    _library.add_assoc_stringl_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int']];
    _library._functions['add_assoc_stringl_ex'] = _library.add_assoc_stringl_ex;
}];

_library._preload['add_assoc_zval_ex'] = ['zval', 'zval', function () {
    _library.add_assoc_zval_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', ref.refType(_library.zval)]];
    _library._functions['add_assoc_zval_ex'] = _library.add_assoc_zval_ex;
}];

_library._preload['add_index_long'] = ['zval', function () {
    _library.add_index_long = ['int', [ref.refType(_library.zval), 'ulong', 'long']];
    _library._functions['add_index_long'] = _library.add_index_long;
}];

_library._preload['add_index_null'] = ['zval', function () {
    _library.add_index_null = ['int', [ref.refType(_library.zval), 'ulong']];
    _library._functions['add_index_null'] = _library.add_index_null;
}];

_library._preload['add_index_bool'] = ['zval', function () {
    _library.add_index_bool = ['int', [ref.refType(_library.zval), 'ulong', 'int']];
    _library._functions['add_index_bool'] = _library.add_index_bool;
}];

_library._preload['add_index_resource'] = ['zval', function () {
    _library.add_index_resource = ['int', [ref.refType(_library.zval), 'ulong', 'int']];
    _library._functions['add_index_resource'] = _library.add_index_resource;
}];

_library._preload['add_index_double'] = ['zval', function () {
    _library.add_index_double = ['int', [ref.refType(_library.zval), 'ulong', 'double']];
    _library._functions['add_index_double'] = _library.add_index_double;
}];

_library._preload['add_index_string'] = ['zval', function () {
    _library.add_index_string = ['int', [ref.refType(_library.zval), 'ulong', ref.refType('char'), 'int']];
    _library._functions['add_index_string'] = _library.add_index_string;
}];

_library._preload['add_index_stringl'] = ['zval', function () {
    _library.add_index_stringl = ['int', [ref.refType(_library.zval), 'ulong', ref.refType('char'), 'uint', 'int']];
    _library._functions['add_index_stringl'] = _library.add_index_stringl;
}];

_library._preload['add_index_zval'] = ['zval', 'zval', function () {
    _library.add_index_zval = ['int', [ref.refType(_library.zval), 'ulong', ref.refType(_library.zval)]];
    _library._functions['add_index_zval'] = _library.add_index_zval;
}];

_library._preload['add_next_index_long'] = ['zval', function () {
    _library.add_next_index_long = ['int', [ref.refType(_library.zval), 'long']];
    _library._functions['add_next_index_long'] = _library.add_next_index_long;
}];

_library._preload['add_next_index_null'] = ['zval', function () {
    _library.add_next_index_null = ['int', [ref.refType(_library.zval)]];
    _library._functions['add_next_index_null'] = _library.add_next_index_null;
}];

_library._preload['add_next_index_bool'] = ['zval', function () {
    _library.add_next_index_bool = ['int', [ref.refType(_library.zval), 'int']];
    _library._functions['add_next_index_bool'] = _library.add_next_index_bool;
}];

_library._preload['add_next_index_resource'] = ['zval', function () {
    _library.add_next_index_resource = ['int', [ref.refType(_library.zval), 'int']];
    _library._functions['add_next_index_resource'] = _library.add_next_index_resource;
}];

_library._preload['add_next_index_double'] = ['zval', function () {
    _library.add_next_index_double = ['int', [ref.refType(_library.zval), 'double']];
    _library._functions['add_next_index_double'] = _library.add_next_index_double;
}];

_library._preload['add_next_index_string'] = ['zval', function () {
    _library.add_next_index_string = ['int', [ref.refType(_library.zval), ref.refType('char'), 'int']];
    _library._functions['add_next_index_string'] = _library.add_next_index_string;
}];

_library._preload['add_next_index_stringl'] = ['zval', function () {
    _library.add_next_index_stringl = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', 'int']];
    _library._functions['add_next_index_stringl'] = _library.add_next_index_stringl;
}];

_library._preload['add_next_index_zval'] = ['zval', 'zval', function () {
    _library.add_next_index_zval = ['int', [ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['add_next_index_zval'] = _library.add_next_index_zval;
}];

_library._preload['add_get_assoc_string_ex'] = ['zval', 'pointer', function () {
    _library.add_get_assoc_string_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', ref.refType('char'), ref.refType(ref.refType('void')), 'int']];
    _library._functions['add_get_assoc_string_ex'] = _library.add_get_assoc_string_ex;
}];

_library._preload['add_get_assoc_stringl_ex'] = ['zval', 'pointer', function () {
    _library.add_get_assoc_stringl_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', ref.refType('char'), 'uint', ref.refType(ref.refType('void')), 'int']];
    _library._functions['add_get_assoc_stringl_ex'] = _library.add_get_assoc_stringl_ex;
}];

_library._preload['add_get_index_long'] = ['zval', 'pointer', function () {
    _library.add_get_index_long = ['int', [ref.refType(_library.zval), 'ulong', 'long', ref.refType(ref.refType('void'))]];
    _library._functions['add_get_index_long'] = _library.add_get_index_long;
}];

_library._preload['add_get_index_double'] = ['zval', 'pointer', function () {
    _library.add_get_index_double = ['int', [ref.refType(_library.zval), 'ulong', 'double', ref.refType(ref.refType('void'))]];
    _library._functions['add_get_index_double'] = _library.add_get_index_double;
}];

_library._preload['add_get_index_string'] = ['zval', 'pointer', function () {
    _library.add_get_index_string = ['int', [ref.refType(_library.zval), 'ulong', ref.refType('char'), ref.refType(ref.refType('void')), 'int']];
    _library._functions['add_get_index_string'] = _library.add_get_index_string;
}];

_library._preload['add_get_index_stringl'] = ['zval', 'pointer', function () {
    _library.add_get_index_stringl = ['int', [ref.refType(_library.zval), 'ulong', ref.refType('char'), 'uint', ref.refType(ref.refType('void')), 'int']];
    _library._functions['add_get_index_stringl'] = _library.add_get_index_stringl;
}];

_library._preload['array_set_zval_key'] = ['HashTable', 'zval', 'zval', function () {
    _library.array_set_zval_key = ['int', [ref.refType(_library.HashTable), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['array_set_zval_key'] = _library.array_set_zval_key;
}];

_library._preload['add_property_long_ex'] = ['zval', function () {
    _library.add_property_long_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', 'long']];
    _library._functions['add_property_long_ex'] = _library.add_property_long_ex;
}];

_library._preload['add_property_null_ex'] = ['zval', function () {
    _library.add_property_null_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
    _library._functions['add_property_null_ex'] = _library.add_property_null_ex;
}];

_library._preload['add_property_bool_ex'] = ['zval', function () {
    _library.add_property_bool_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', 'int']];
    _library._functions['add_property_bool_ex'] = _library.add_property_bool_ex;
}];

_library._preload['add_property_resource_ex'] = ['zval', function () {
    _library.add_property_resource_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', 'long']];
    _library._functions['add_property_resource_ex'] = _library.add_property_resource_ex;
}];

_library._preload['add_property_double_ex'] = ['zval', function () {
    _library.add_property_double_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', 'double']];
    _library._functions['add_property_double_ex'] = _library.add_property_double_ex;
}];

_library._preload['add_property_string_ex'] = ['zval', function () {
    _library.add_property_string_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', ref.refType('char'), 'int']];
    _library._functions['add_property_string_ex'] = _library.add_property_string_ex;
}];

_library._preload['add_property_stringl_ex'] = ['zval', function () {
    _library.add_property_stringl_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int']];
    _library._functions['add_property_stringl_ex'] = _library.add_property_stringl_ex;
}];

_library._preload['add_property_zval_ex'] = ['zval', 'zval', function () {
    _library.add_property_zval_ex = ['int', [ref.refType(_library.zval), ref.refType('char'), 'uint', ref.refType(_library.zval)]];
    _library._functions['add_property_zval_ex'] = _library.add_property_zval_ex;
}];

_library._preload['call_user_function'] = ['HashTable', 'pointer', 'zval', 'zval', 'pointer', function () {
    _library.call_user_function = ['int', [ref.refType(_library.HashTable), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), ref.refType(_library.zval), 'uint', ref.refType(ref.refType(_library.zval))]];
    _library._functions['call_user_function'] = _library.call_user_function;
}];

_library._preload['call_user_function_ex'] = ['HashTable', 'pointer', 'zval', 'pointer', 'pointer', 'HashTable', function () {
    _library.call_user_function_ex = ['int', [ref.refType(_library.HashTable), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), 'uint', ref.refType(ref.refType(ref.refType(_library.zval))), 'int', ref.refType(_library.HashTable)]];
    _library._functions['call_user_function_ex'] = _library.call_user_function_ex;
}];

_library._preload['zend_fcall_info_init'] = ['zval', 'zend_fcall_info', 'zend_fcall_info_cache', 'pointer', 'pointer', function () {
    _library.zend_fcall_info_init = ['int', [ref.refType(_library.zval), 'uint', ref.refType(_library.zend_fcall_info), ref.refType(_library.zend_fcall_info_cache), ref.refType(ref.refType('char')), ref.refType(ref.refType('char'))]];
    _library._functions['zend_fcall_info_init'] = _library.zend_fcall_info_init;
}];

_library._preload['zend_fcall_info_args_clear'] = ['zend_fcall_info', function () {
    _library.zend_fcall_info_args_clear = ['void', [ref.refType(_library.zend_fcall_info), 'int']];
    _library._functions['zend_fcall_info_args_clear'] = _library.zend_fcall_info_args_clear;
}];

_library._preload['zend_fcall_info_args_save'] = ['zend_fcall_info', 'pointer', function () {
    _library.zend_fcall_info_args_save = ['void', [ref.refType(_library.zend_fcall_info), ref.refType('int'), ref.refType(ref.refType(ref.refType(ref.refType(_library.zval))))]];
    _library._functions['zend_fcall_info_args_save'] = _library.zend_fcall_info_args_save;
}];

_library._preload['zend_fcall_info_args_restore'] = ['zend_fcall_info', 'pointer', function () {
    _library.zend_fcall_info_args_restore = ['void', [ref.refType(_library.zend_fcall_info), 'int', ref.refType(ref.refType(ref.refType(_library.zval)))]];
    _library._functions['zend_fcall_info_args_restore'] = _library.zend_fcall_info_args_restore;
}];

_library._preload['zend_fcall_info_args'] = ['zend_fcall_info', 'zval', function () {
    _library.zend_fcall_info_args = ['int', [ref.refType(_library.zend_fcall_info), ref.refType(_library.zval)]];
    _library._functions['zend_fcall_info_args'] = _library.zend_fcall_info_args;
}];

_library._preload['zend_fcall_info_argp'] = ['zend_fcall_info', 'pointer', function () {
    _library.zend_fcall_info_argp = ['int', [ref.refType(_library.zend_fcall_info), 'int', ref.refType(ref.refType(ref.refType(_library.zval)))]];
    _library._functions['zend_fcall_info_argp'] = _library.zend_fcall_info_argp;
}];

_library._preload['zend_fcall_info_argv'] = ['zend_fcall_info', function () {
    _library.zend_fcall_info_argv = ['int', [ref.refType(_library.zend_fcall_info), 'int', ref.refType('void')]];
    _library._functions['zend_fcall_info_argv'] = _library.zend_fcall_info_argv;
}];

_library._preload['zend_fcall_info_call'] = ['zend_fcall_info', 'zend_fcall_info_cache', 'pointer', 'zval', function () {
    _library.zend_fcall_info_call = ['int', [ref.refType(_library.zend_fcall_info), ref.refType(_library.zend_fcall_info_cache), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval)]];
    _library._functions['zend_fcall_info_call'] = _library.zend_fcall_info_call;
}];

_library._preload['zend_call_function'] = ['zend_fcall_info', 'zend_fcall_info_cache', function () {
    _library.zend_call_function = ['int', [ref.refType(_library.zend_fcall_info), ref.refType(_library.zend_fcall_info_cache)]];
    _library._functions['zend_call_function'] = _library.zend_call_function;
}];

_library._preload['zend_delete_variable'] = ['zend_execute_data', 'HashTable', function () {
    _library.zend_delete_variable = ['void', [ref.refType(_library.zend_execute_data), ref.refType(_library.HashTable), ref.refType('char'), 'int', 'ulong']];
    _library._functions['zend_delete_variable'] = _library.zend_delete_variable;
}];

_library._preload['zend_delete_global_variable'] = [function () {
    _library.zend_delete_global_variable = ['int', [ref.refType('char'), 'int']];
    _library._functions['zend_delete_global_variable'] = _library.zend_delete_global_variable;
}];

_library._preload['zend_delete_global_variable_ex'] = [function () {
    _library.zend_delete_global_variable_ex = ['int', [ref.refType('char'), 'int', 'ulong']];
    _library._functions['zend_delete_global_variable_ex'] = _library.zend_delete_global_variable_ex;
}];

_library._preload['zend_reset_all_cv'] = ['HashTable', function () {
    _library.zend_reset_all_cv = ['void', [ref.refType(_library.HashTable)]];
    _library._functions['zend_reset_all_cv'] = _library.zend_reset_all_cv;
}];

_library._preload['zend_rebuild_symbol_table'] = [function () {
    _library.zend_rebuild_symbol_table = ['void', []];
    _library._functions['zend_rebuild_symbol_table'] = _library.zend_rebuild_symbol_table;
}];

_library._preload['zend_find_alias_name'] = ['zend_class_entry', function () {
    _library.zend_find_alias_name = [ref.refType('char'), [ref.refType(_library.zend_class_entry), ref.refType('char'), 'uint']];
    _library._functions['zend_find_alias_name'] = _library.zend_find_alias_name;
}];

_library._preload['zend_resolve_method_name'] = ['zend_class_entry', 'zend_function', function () {
    _library.zend_resolve_method_name = [ref.refType('char'), [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_function)]];
    _library._functions['zend_resolve_method_name'] = _library.zend_resolve_method_name;
}];

_library._preload['zif_display_disabled_function'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_display_disabled_function = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_display_disabled_function'] = _library.zif_display_disabled_function;
}];

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

var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_class_entry = _library._zend_class_entry;

_library._zend_trait_method_reference = Struct({});

_library._preload.push(function () {
    _library._zend_trait_method_reference.defineProperty("ce", ref.refType(_library.zend_class_entry));
    _library._zend_trait_method_reference.defineProperty("class_name", ref.refType('char'));
    _library._zend_trait_method_reference.defineProperty("cname_len", 'uint');
    _library._zend_trait_method_reference.defineProperty("method_name", ref.refType('char'));
    _library._zend_trait_method_reference.defineProperty("mname_len", 'uint');
});

_library.zend_trait_method_reference = _library._zend_trait_method_reference;

_library._zend_trait_alias = Struct({});

_library._preload.push(function () {
    _library._zend_trait_alias.defineProperty("alias", ref.refType('char'));
    _library._zend_trait_alias.defineProperty("alias_len", 'uint');
    _library._zend_trait_alias.defineProperty("modifiers", 'uint');
    _library._zend_trait_alias.defineProperty("trait_method", ref.refType(_library.zend_trait_method_reference));
});

_library.zend_trait_alias = _library._zend_trait_alias;

_library._zend_trait_precedence = Struct({});

_library._preload.push(function () {
    _library._zend_trait_precedence.defineProperty("exclude_from_classes", ref.refType(ref.refType(_library.zend_class_entry)));
    _library._zend_trait_precedence.defineProperty("trait_method", ref.refType(_library.zend_trait_method_reference));
});

_library.zend_trait_precedence = _library._zend_trait_precedence;

_library._zend_class_entry = Struct({});

_library._preload.push(function () {
    _library._zend_class_entry.defineProperty("__call", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__callstatic", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__debugInfo", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__get", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__isset", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__set", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__tostring", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__unset", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("ce_flags", 'uint');
    _library._zend_class_entry.defineProperty("clone", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("constants_table", _library.HashTable);
    _library._zend_class_entry.defineProperty("constructor", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("create_object", ffi.Function(_library._zend_object_value, [ref.refType(_library._zend_class_entry)]));
    _library._zend_class_entry.defineProperty("default_properties_count", 'int');
    _library._zend_class_entry.defineProperty("default_properties_table", ref.refType(ref.refType(_library.zval)));
    _library._zend_class_entry.defineProperty("default_static_members_count", 'int');
    _library._zend_class_entry.defineProperty("default_static_members_table", ref.refType(ref.refType(_library.zval)));
    _library._zend_class_entry.defineProperty("destructor", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("function_table", _library.HashTable);
    _library._zend_class_entry.defineProperty("get_iterator", ffi.Function(ref.refType(_library._zend_object_iterator), [ref.refType(_library._zend_class_entry), ref.refType(_library._zval_struct), 'int']));
    _library._zend_class_entry.defineProperty("get_static_method", ffi.Function(ref.refType(_library._zend_function), [ref.refType(_library._zend_class_entry), ref.refType('char'), 'int']));
    _library._zend_class_entry.defineProperty("info", Union({}));
    _library._zend_class_entry.fields.info.type.defineProperty("internal", Struct({}));
    _library._zend_class_entry.fields.info.type.fields.internal.type.defineProperty("builtin_functions", ref.refType(_library._zend_function_entry));
    _library._zend_class_entry.fields.info.type.fields.internal.type.defineProperty("module", ref.refType(_library._zend_module_entry));
    _library._zend_class_entry.fields.info.type.defineProperty("user", Struct({}));
    _library._zend_class_entry.fields.info.type.fields.user.type.defineProperty("doc_comment", ref.refType('char'));
    _library._zend_class_entry.fields.info.type.fields.user.type.defineProperty("doc_comment_len", 'uint');
    _library._zend_class_entry.fields.info.type.fields.user.type.defineProperty("filename", ref.refType('char'));
    _library._zend_class_entry.fields.info.type.fields.user.type.defineProperty("line_end", 'uint');
    _library._zend_class_entry.fields.info.type.fields.user.type.defineProperty("line_start", 'uint');
    _library._zend_class_entry.defineProperty("interface_gets_implemented", ffi.Function('int', [ref.refType(_library._zend_class_entry), ref.refType(_library._zend_class_entry)]));
    _library._zend_class_entry.defineProperty("interfaces", ref.refType(ref.refType(_library.zend_class_entry)));
    _library._zend_class_entry.defineProperty("iterator_funcs", _library.zend_class_iterator_funcs);
    _library._zend_class_entry.defineProperty("name", ref.refType('char'));
    _library._zend_class_entry.defineProperty("name_length", 'uint');
    _library._zend_class_entry.defineProperty("num_interfaces", 'uint');
    _library._zend_class_entry.defineProperty("num_traits", 'uint');
    _library._zend_class_entry.defineProperty("parent", ref.refType(_library._zend_class_entry));
    _library._zend_class_entry.defineProperty("properties_info", _library.HashTable);
    _library._zend_class_entry.defineProperty("refcount", 'int');
    _library._zend_class_entry.defineProperty("serialize", ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(ref.refType('uchar')), ref.refType('uint'), 'pointer']));
    _library._zend_class_entry.defineProperty("serialize_func", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("static_members_table", ref.refType(ref.refType(_library.zval)));
    _library._zend_class_entry.defineProperty("trait_aliases", ref.refType(ref.refType(_library.zend_trait_alias)));
    _library._zend_class_entry.defineProperty("trait_precedences", ref.refType(ref.refType(_library.zend_trait_precedence)));
    _library._zend_class_entry.defineProperty("traits", ref.refType(ref.refType(_library.zend_class_entry)));
    _library._zend_class_entry.defineProperty("type", 'char');
    _library._zend_class_entry.defineProperty("unserialize", ffi.Function('int', [ref.refType(ref.refType(_library._zval_struct)), ref.refType(_library._zend_class_entry), ref.refType('uchar'), 'uint', 'pointer']));
    _library._zend_class_entry.defineProperty("unserialize_func", ref.refType(_library._zend_function));
});

_library._zvalue_value = Union({});

_library._preload.push(function () {
    _library._zvalue_value.defineProperty("ast", ref.refType(_library.zend_ast));
    _library._zvalue_value.defineProperty("dval", 'double');
    _library._zvalue_value.defineProperty("ht", ref.refType(_library.HashTable));
    _library._zvalue_value.defineProperty("lval", 'long');
    _library._zvalue_value.defineProperty("obj", _library.zend_object_value);
    _library._zvalue_value.defineProperty("str", Struct({}));
    _library._zvalue_value.fields.str.type.defineProperty("len", 'int');
    _library._zvalue_value.fields.str.type.defineProperty("val", ref.refType('char'));
});

_library.zvalue_value = _library._zvalue_value;

_library._zval_struct = Struct({});

_library._preload.push(function () {
    _library._zval_struct.defineProperty("is_ref__gc", 'uchar');
    _library._zval_struct.defineProperty("refcount__gc", 'uint');
    _library._zval_struct.defineProperty("type", 'uchar');
    _library._zval_struct.defineProperty("value", _library.zvalue_value);
});

_library.ZEND_RESULT_CODE = 'int32';

_library._zend_guard = Struct({});

_library._preload.push(function () {
    _library._zend_guard.defineProperty("dummy", 'uchar');
    _library._zend_guard.defineProperty("in_get", 'uchar');
    _library._zend_guard.defineProperty("in_isset", 'uchar');
    _library._zend_guard.defineProperty("in_set", 'uchar');
    _library._zend_guard.defineProperty("in_unset", 'uchar');
});

_library.zend_guard = _library._zend_guard;

_library._zend_object = Struct({});

_library._preload.push(function () {
    _library._zend_object.defineProperty("ce", ref.refType(_library.zend_class_entry));
    _library._zend_object.defineProperty("guards", ref.refType(_library.HashTable));
    _library._zend_object.defineProperty("properties", ref.refType(_library.HashTable));
    _library._zend_object.defineProperty("properties_table", ref.refType(ref.refType(_library.zval)));
});

_library.zend_object = _library._zend_object;

_library.zval_refcount_p = ['uint', [ref.refType(_library.zval)]];
_library._functions['zval_refcount_p'] = _library.zval_refcount_p;

_library.zval_set_refcount_p = ['uint', [ref.refType(_library.zval), 'uint']];
_library._functions['zval_set_refcount_p'] = _library.zval_set_refcount_p;

_library.zval_addref_p = ['uint', [ref.refType(_library.zval)]];
_library._functions['zval_addref_p'] = _library.zval_addref_p;

_library.zval_delref_p = ['uint', [ref.refType(_library.zval)]];
_library._functions['zval_delref_p'] = _library.zval_delref_p;

_library.zval_isref_p = ['uchar', [ref.refType(_library.zval)]];
_library._functions['zval_isref_p'] = _library.zval_isref_p;

_library.zval_set_isref_p = ['uchar', [ref.refType(_library.zval)]];
_library._functions['zval_set_isref_p'] = _library.zval_set_isref_p;

_library.zval_unset_isref_p = ['uchar', [ref.refType(_library.zval)]];
_library._functions['zval_unset_isref_p'] = _library.zval_unset_isref_p;

_library.zval_set_isref_to_p = ['uchar', [ref.refType(_library.zval), 'uchar']];
_library._functions['zval_set_isref_to_p'] = _library.zval_set_isref_to_p;

_library.zend_serialize_data = 'void';

_library.zend_unserialize_data = 'void';

_library._zend_utility_functions = Struct({});

_library._preload.push(function () {
    _library._zend_utility_functions.defineProperty("block_interruptions", ffi.Function('void', []));
    _library._zend_utility_functions.defineProperty("error_function", ffi.Function('void', ['int', ref.refType('char'), 'uint', ref.refType('char'), ref.refType('void')]));
    _library._zend_utility_functions.defineProperty("fopen_function", ffi.Function(ref.refType(_library._IO_FILE), [ref.refType('char'), ref.refType(ref.refType('char'))]));
    _library._zend_utility_functions.defineProperty("get_configuration_directive", ffi.Function('int', [ref.refType('char'), 'uint', ref.refType(_library._zval_struct)]));
    _library._zend_utility_functions.defineProperty("getenv_function", ffi.Function(ref.refType('char'), [ref.refType('char'), 'ulong']));
    _library._zend_utility_functions.defineProperty("message_handler", ffi.Function('void', ['long', ref.refType('void')]));
    _library._zend_utility_functions.defineProperty("on_timeout", ffi.Function('void', ['int']));
    _library._zend_utility_functions.defineProperty("printf_function", ffi.Function('int', [ref.refType('char')]));
    _library._zend_utility_functions.defineProperty("resolve_path_function", ffi.Function(ref.refType('char'), [ref.refType('char'), 'int']));
    _library._zend_utility_functions.defineProperty("stream_open_function", ffi.Function('int', [ref.refType('char'), ref.refType(_library._zend_file_handle)]));
    _library._zend_utility_functions.defineProperty("ticks_function", ffi.Function('void', ['int']));
    _library._zend_utility_functions.defineProperty("unblock_interruptions", ffi.Function('void', []));
    _library._zend_utility_functions.defineProperty("vspprintf_function", ffi.Function('int', [ref.refType(ref.refType('char')), 'ulong', ref.refType('char'), ref.refType('void')]));
    _library._zend_utility_functions.defineProperty("write_function", ffi.Function('int', [ref.refType('char'), 'uint']));
});

_library.zend_utility_functions = _library._zend_utility_functions;

_library._zend_utility_values = Struct({});

_library._preload.push(function () {
    _library._zend_utility_values.defineProperty("html_errors", 'uchar');
    _library._zend_utility_values.defineProperty("import_use_extension", ref.refType('char'));
    _library._zend_utility_values.defineProperty("import_use_extension_length", 'uint');
});

_library.zend_utility_values = _library._zend_utility_values;

_library.zend_write_func_t = ffi.Function('int', [ref.refType('char'), 'uint']);

_library.zend_startup = ['int', [ref.refType(_library.zend_utility_functions), ref.refType(ref.refType('char'))]];
_library._functions['zend_startup'] = _library.zend_startup;

_library.zend_shutdown = ['void', []];
_library._functions['zend_shutdown'] = _library.zend_shutdown;

_library.zend_register_standard_ini_entries = ['void', []];
_library._functions['zend_register_standard_ini_entries'] = _library.zend_register_standard_ini_entries;

_library.zend_post_startup = ['void', []];
_library._functions['zend_post_startup'] = _library.zend_post_startup;

_library.zend_set_utility_values = ['void', [ref.refType(_library.zend_utility_values)]];
_library._functions['zend_set_utility_values'] = _library.zend_set_utility_values;

_library._zend_bailout = ['void', [ref.refType('char'), 'uint']];
_library._functions['_zend_bailout'] = _library._zend_bailout;

_library.get_zend_version = [ref.refType('char'), []];
_library._functions['get_zend_version'] = _library.get_zend_version;

_library.zend_make_printable_zval = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType('int')]];
_library._functions['zend_make_printable_zval'] = _library.zend_make_printable_zval;

_library.zend_print_zval = ['int', [ref.refType(_library.zval), 'int']];
_library._functions['zend_print_zval'] = _library.zend_print_zval;

_library.zend_print_zval_ex = ['int', [_library.zend_write_func_t, ref.refType(_library.zval), 'int']];
_library._functions['zend_print_zval_ex'] = _library.zend_print_zval_ex;

_library.zend_print_zval_r = ['void', [ref.refType(_library.zval), 'int']];
_library._functions['zend_print_zval_r'] = _library.zend_print_zval_r;

_library.zend_print_flat_zval_r = ['void', [ref.refType(_library.zval)]];
_library._functions['zend_print_flat_zval_r'] = _library.zend_print_flat_zval_r;

_library.zend_print_zval_r_ex = ['void', [_library.zend_write_func_t, ref.refType(_library.zval), 'int']];
_library._functions['zend_print_zval_r_ex'] = _library.zend_print_zval_r_ex;

_library.zend_activate = ['void', []];
_library._functions['zend_activate'] = _library.zend_activate;

_library.zend_deactivate = ['void', []];
_library._functions['zend_deactivate'] = _library.zend_deactivate;

_library.zend_call_destructors = ['void', []];
_library._functions['zend_call_destructors'] = _library.zend_call_destructors;

_library.zend_activate_modules = ['void', []];
_library._functions['zend_activate_modules'] = _library.zend_activate_modules;

_library.zend_deactivate_modules = ['void', []];
_library._functions['zend_deactivate_modules'] = _library.zend_deactivate_modules;

_library.zend_post_deactivate_modules = ['void', []];
_library._functions['zend_post_deactivate_modules'] = _library.zend_post_deactivate_modules;

_library.free_estring = ['void', [ref.refType(ref.refType('char'))]];
_library._functions['free_estring'] = _library.free_estring;

_library.zenderror = ['void', [ref.refType('char')]];
_library._functions['zenderror'] = _library.zenderror;

_library.zend_message_dispatcher = ['void', ['long', ref.refType('void')]];
_library._functions['zend_message_dispatcher'] = _library.zend_message_dispatcher;

_library.zend_get_configuration_directive = ['int', [ref.refType('char'), 'uint', ref.refType(_library.zval)]];
_library._functions['zend_get_configuration_directive'] = _library.zend_get_configuration_directive;

_library.zend_error_handling_t = 'int32';

_library.zend_error_handling = Struct({});

_library._preload.push(function () {
    _library.zend_error_handling.defineProperty("exception", ref.refType(_library.zend_class_entry));
    _library.zend_error_handling.defineProperty("handling", _library.zend_error_handling_t);
    _library.zend_error_handling.defineProperty("user_handler", ref.refType(_library.zval));
});

_library.zend_save_error_handling = ['void', [ref.refType(_library.zend_error_handling)]];
_library._functions['zend_save_error_handling'] = _library.zend_save_error_handling;

_library.zend_replace_error_handling = ['void', [_library.zend_error_handling_t, ref.refType(_library.zend_class_entry), ref.refType(_library.zend_error_handling)]];
_library._functions['zend_replace_error_handling'] = _library.zend_replace_error_handling;

_library.zend_restore_error_handling = ['void', [ref.refType(_library.zend_error_handling)]];
_library._functions['zend_restore_error_handling'] = _library.zend_restore_error_handling;

function loadDependentSymbols() {
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_stream.js');
    require('./zend_types.js');
}
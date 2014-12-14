var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_trait_method_reference = Struct({});
_library._zend_trait_method_reference.size = 1;

_library._preload['_zend_trait_method_reference'] = ['zend_class_entry', function () {
    _library._zend_trait_method_reference.size = 0;
    _library._zend_trait_method_reference.defineProperty("method_name", ref.refType('char'));
    _library._zend_trait_method_reference.defineProperty("mname_len", 'uint');
    _library._zend_trait_method_reference.defineProperty("ce", ref.refType(_library.zend_class_entry));
    _library._zend_trait_method_reference.defineProperty("class_name", ref.refType('char'));
    _library._zend_trait_method_reference.defineProperty("cname_len", 'uint');
}];

_library._preload['zend_trait_method_reference'] = [function () {
    _library.zend_trait_method_reference = _library._zend_trait_method_reference;
}];

_library._zend_trait_alias = Struct({});
_library._zend_trait_alias.size = 1;

_library._preload['_zend_trait_alias'] = ['zend_trait_method_reference', function () {
    _library._zend_trait_alias.size = 0;
    _library._zend_trait_alias.defineProperty("trait_method", ref.refType(_library.zend_trait_method_reference));
    _library._zend_trait_alias.defineProperty("alias", ref.refType('char'));
    _library._zend_trait_alias.defineProperty("alias_len", 'uint');
    _library._zend_trait_alias.defineProperty("modifiers", 'uint');
}];

_library._preload['zend_trait_alias'] = [function () {
    _library.zend_trait_alias = _library._zend_trait_alias;
}];

_library._zend_trait_precedence = Struct({});
_library._zend_trait_precedence.size = 1;

_library._preload['_zend_trait_precedence'] = ['zend_trait_method_reference', 'pointer', function () {
    _library._zend_trait_precedence.size = 0;
    _library._zend_trait_precedence.defineProperty("trait_method", ref.refType(_library.zend_trait_method_reference));
    _library._zend_trait_precedence.defineProperty("exclude_from_classes", ref.refType(ref.refType(_library.zend_class_entry)));
}];

_library._preload['zend_trait_precedence'] = [function () {
    _library.zend_trait_precedence = _library._zend_trait_precedence;
}];

_library._zend_class_entry = Struct({});
_library._zend_class_entry.size = 1;

_library._preload['_zend_class_entry'] = ['_zend_class_entry', 'HashTable', '_hashtable', 'HashTable', '_hashtable', 'pointer', 'pointer', 'pointer', 'HashTable', '_hashtable', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', '_zend_function', 'zend_class_iterator_funcs', '_zend_class_iterator_funcs', 'zend_object_value (zend_class_entry *)', 'zend_object_iterator *(zend_class_entry *, zval *, int)', 'int (zend_class_entry *, zend_class_entry *)', '_zend_function *(zend_class_entry *, char *, int)', 'int (zval *, unsigned char **, zend_uint *, zend_serialize_data *)', 'int (zval **, zend_class_entry *, const unsigned char *, zend_uint, zend_unserialize_data *)', 'pointer', 'pointer', 'pointer', 'pointer', '_zend_function_entry', '_zend_module_entry', function () {
    _library._zend_class_entry.size = 0;
    _library._zend_class_entry.defineProperty("type", 'char');
    _library._zend_class_entry.defineProperty("name", ref.refType('char'));
    _library._zend_class_entry.defineProperty("name_length", 'uint');
    _library._zend_class_entry.defineProperty("parent", ref.refType(_library._zend_class_entry));
    _library._zend_class_entry.defineProperty("refcount", 'int');
    _library._zend_class_entry.defineProperty("ce_flags", 'uint');
    _library._zend_class_entry.defineProperty("function_table", _library.HashTable);
    _library._zend_class_entry.defineProperty("properties_info", _library.HashTable);
    _library._zend_class_entry.defineProperty("default_properties_table", ref.refType(ref.refType(_library.zval)));
    _library._zend_class_entry.defineProperty("default_static_members_table", ref.refType(ref.refType(_library.zval)));
    _library._zend_class_entry.defineProperty("static_members_table", ref.refType(ref.refType(_library.zval)));
    _library._zend_class_entry.defineProperty("constants_table", _library.HashTable);
    _library._zend_class_entry.defineProperty("default_properties_count", 'int');
    _library._zend_class_entry.defineProperty("default_static_members_count", 'int');
    _library._zend_class_entry.defineProperty("constructor__", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("destructor", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("clone", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__get", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__set", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__unset", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__isset", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__call", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__callstatic", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__tostring", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("__debugInfo", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("serialize_func", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("unserialize_func", ref.refType(_library._zend_function));
    _library._zend_class_entry.defineProperty("iterator_funcs", _library.zend_class_iterator_funcs);
    _library._zend_class_entry.defineProperty("create_object", ffi.Function(_library._zend_object_value, [ref.refType(_library._zend_class_entry)]));
    _library._zend_class_entry.defineProperty("get_iterator", ffi.Function(ref.refType(_library._zend_object_iterator), [ref.refType(_library._zend_class_entry), ref.refType(_library._zval_struct), 'int']));
    _library._zend_class_entry.defineProperty("interface_gets_implemented", ffi.Function('int', [ref.refType(_library._zend_class_entry), ref.refType(_library._zend_class_entry)]));
    _library._zend_class_entry.defineProperty("get_static_method", ffi.Function(ref.refType(_library._zend_function), [ref.refType(_library._zend_class_entry), ref.refType('char'), 'int']));
    _library._zend_class_entry.defineProperty("serialize", ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(ref.refType('uchar')), ref.refType('uint'), 'pointer']));
    _library._zend_class_entry.defineProperty("unserialize", ffi.Function('int', [ref.refType(ref.refType(_library._zval_struct)), ref.refType(_library._zend_class_entry), ref.refType('uchar'), 'uint', 'pointer']));
    _library._zend_class_entry.defineProperty("interfaces", ref.refType(ref.refType(_library.zend_class_entry)));
    _library._zend_class_entry.defineProperty("num_interfaces", 'uint');
    _library._zend_class_entry.defineProperty("traits", ref.refType(ref.refType(_library.zend_class_entry)));
    _library._zend_class_entry.defineProperty("num_traits", 'uint');
    _library._zend_class_entry.defineProperty("trait_aliases", ref.refType(ref.refType(_library.zend_trait_alias)));
    _library._zend_class_entry.defineProperty("trait_precedences", ref.refType(ref.refType(_library.zend_trait_precedence)));
    _library._zend_class_entry.defineProperty("info", (function () {
        var temp = Union({});
        temp.defineProperty("user", (function () {
            var temp = Struct({});
            temp.defineProperty("filename", ref.refType('char'));
            temp.defineProperty("line_start", 'uint');
            temp.defineProperty("line_end", 'uint');
            temp.defineProperty("doc_comment", ref.refType('char'));
            temp.defineProperty("doc_comment_len", 'uint');
            return temp;
        })());
        temp.defineProperty("internal", (function () {
            var temp = Struct({});
            temp.defineProperty("builtin_functions", ref.refType(_library._zend_function_entry));
            temp.defineProperty("module", ref.refType(_library._zend_module_entry));
            return temp;
        })());
        return temp;
    })());
}];

_library._preload['zend_class_entry'] = [function () {
    _library.zend_class_entry = _library._zend_class_entry;
}];

_library._zvalue_value = Union({});
_library._zvalue_value.size = 1;

_library._preload['_zvalue_value'] = ['HashTable', 'zend_object_value', '_zend_object_value', 'zend_ast', function () {
    _library._zvalue_value.size = 0;
    _library._zvalue_value.defineProperty("lval", 'long');
    _library._zvalue_value.defineProperty("dval", 'double');
    _library._zvalue_value.defineProperty("str", (function () {
        var temp = Struct({});
        temp.defineProperty("val", ref.refType('char'));
        temp.defineProperty("len", 'int');
        return temp;
    })());
    _library._zvalue_value.defineProperty("ht", ref.refType(_library.HashTable));
    _library._zvalue_value.defineProperty("obj", _library.zend_object_value);
    _library._zvalue_value.defineProperty("ast", ref.refType(_library.zend_ast));
}];

_library._preload['zvalue_value'] = [function () {
    _library.zvalue_value = _library._zvalue_value;
}];

_library._zval_struct = Struct({});
_library._zval_struct.size = 1;

_library._preload['_zval_struct'] = ['zvalue_value', '_zvalue_value', function () {
    _library._zval_struct.size = 0;
    _library._zval_struct.defineProperty("value", _library.zvalue_value);
    _library._zval_struct.defineProperty("refcount__gc", 'uint');
    _library._zval_struct.defineProperty("type", 'uchar');
    _library._zval_struct.defineProperty("is_ref__gc", 'uchar');
}];

_library._preload['ZEND_RESULT_CODE'] = [function () {
    _library.ZEND_RESULT_CODE = 'int32';
}];

_library._zend_guard = Struct({});
_library._zend_guard.size = 1;

_library._preload['_zend_guard'] = [function () {
    _library._zend_guard.size = 0;
    _library._zend_guard.defineProperty("in_get", 'uchar');
    _library._zend_guard.defineProperty("in_set", 'uchar');
    _library._zend_guard.defineProperty("in_unset", 'uchar');
    _library._zend_guard.defineProperty("in_isset", 'uchar');
    _library._zend_guard.defineProperty("dummy", 'uchar');
}];

_library._preload['zend_guard'] = [function () {
    _library.zend_guard = _library._zend_guard;
}];

_library._zend_object = Struct({});
_library._zend_object.size = 1;

_library._preload['_zend_object'] = ['zend_class_entry', 'HashTable', 'pointer', 'HashTable', function () {
    _library._zend_object.size = 0;
    _library._zend_object.defineProperty("ce", ref.refType(_library.zend_class_entry));
    _library._zend_object.defineProperty("properties", ref.refType(_library.HashTable));
    _library._zend_object.defineProperty("properties_table", ref.refType(ref.refType(_library.zval)));
    _library._zend_object.defineProperty("guards", ref.refType(_library.HashTable));
}];

_library._preload['zend_object'] = [function () {
    _library.zend_object = _library._zend_object;
}];

_library._preload['zend_serialize_data'] = [function () {
    _library.zend_serialize_data = 'void';
}];

_library._preload['zend_unserialize_data'] = [function () {
    _library.zend_unserialize_data = 'void';
}];

_library._zend_utility_functions = Struct({});
_library._zend_utility_functions.size = 1;

_library._preload['_zend_utility_functions'] = ['void (int, const char *, const uint, const char *, __va_list_tag *)', 'int (const char *, ...)', 'int (const char *, uint)', 'FILE *(const char *, char **)', 'void (long, const void *)', 'void (void)', 'void (void)', 'int (const char *, uint, zval *)', 'void (int)', 'void (int)', 'int (const char *, zend_file_handle *)', 'int (char **, size_t, const char *, __va_list_tag *)', 'char *(char *, size_t)', 'char *(const char *, int)', function () {
    _library._zend_utility_functions.size = 0;
    _library._zend_utility_functions.defineProperty("error_function", ffi.Function('void', ['int', ref.refType('char'), 'uint', ref.refType('char'), ref.refType('void')]));
    _library._zend_utility_functions.defineProperty("printf_function", ffi.Function('int', [ref.refType('char')]));
    _library._zend_utility_functions.defineProperty("write_function", ffi.Function('int', [ref.refType('char'), 'uint']));
    _library._zend_utility_functions.defineProperty("fopen_function", ffi.Function(ref.refType(_library._IO_FILE), [ref.refType('char'), ref.refType(ref.refType('char'))]));
    _library._zend_utility_functions.defineProperty("message_handler", ffi.Function('void', ['long', ref.refType('void')]));
    _library._zend_utility_functions.defineProperty("block_interruptions", ffi.Function('void', []));
    _library._zend_utility_functions.defineProperty("unblock_interruptions", ffi.Function('void', []));
    _library._zend_utility_functions.defineProperty("get_configuration_directive", ffi.Function('int', [ref.refType('char'), 'uint', ref.refType(_library._zval_struct)]));
    _library._zend_utility_functions.defineProperty("ticks_function", ffi.Function('void', ['int']));
    _library._zend_utility_functions.defineProperty("on_timeout", ffi.Function('void', ['int']));
    _library._zend_utility_functions.defineProperty("stream_open_function", ffi.Function('int', [ref.refType('char'), ref.refType(_library._zend_file_handle)]));
    _library._zend_utility_functions.defineProperty("vspprintf_function", ffi.Function('int', [ref.refType(ref.refType('char')), 'ulong', ref.refType('char'), ref.refType('void')]));
    _library._zend_utility_functions.defineProperty("getenv_function", ffi.Function(ref.refType('char'), [ref.refType('char'), 'ulong']));
    _library._zend_utility_functions.defineProperty("resolve_path_function", ffi.Function(ref.refType('char'), [ref.refType('char'), 'int']));
}];

_library._preload['zend_utility_functions'] = [function () {
    _library.zend_utility_functions = _library._zend_utility_functions;
}];

_library._zend_utility_values = Struct({});
_library._zend_utility_values.size = 1;

_library._preload['_zend_utility_values'] = [function () {
    _library._zend_utility_values.size = 0;
    _library._zend_utility_values.defineProperty("import_use_extension", ref.refType('char'));
    _library._zend_utility_values.defineProperty("import_use_extension_length", 'uint');
    _library._zend_utility_values.defineProperty("html_errors", 'uchar');
}];

_library._preload['zend_utility_values'] = [function () {
    _library.zend_utility_values = _library._zend_utility_values;
}];

_library._preload['zend_write_func_t'] = ['int (const char *, uint)', function () {
    _library.zend_write_func_t = ffi.Function('int', [ref.refType('char'), 'uint']);
}];

_library._preload['_zend_bailout'] = [function () {
    _library._zend_bailout = ['void', [ref.refType('char'), 'uint']];
    _library._functions['_zend_bailout'] = _library._zend_bailout;
}];

_library._preload['get_zend_version'] = [function () {
    _library.get_zend_version = [ref.refType('char'), []];
    _library._functions['get_zend_version'] = _library.get_zend_version;
}];

_library._preload['zend_make_printable_zval'] = ['zval', 'zval', function () {
    _library.zend_make_printable_zval = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType('int')]];
    _library._functions['zend_make_printable_zval'] = _library.zend_make_printable_zval;
}];

_library._preload['zend_print_zval'] = ['zval', function () {
    _library.zend_print_zval = ['int', [ref.refType(_library.zval), 'int']];
    _library._functions['zend_print_zval'] = _library.zend_print_zval;
}];

_library._preload['zend_print_zval_ex'] = ['zend_write_func_t', 'zval', function () {
    _library.zend_print_zval_ex = ['int', [_library.zend_write_func_t, ref.refType(_library.zval), 'int']];
    _library._functions['zend_print_zval_ex'] = _library.zend_print_zval_ex;
}];

_library._preload['zend_print_zval_r'] = ['zval', function () {
    _library.zend_print_zval_r = ['void', [ref.refType(_library.zval), 'int']];
    _library._functions['zend_print_zval_r'] = _library.zend_print_zval_r;
}];

_library._preload['zend_print_flat_zval_r'] = ['zval', function () {
    _library.zend_print_flat_zval_r = ['void', [ref.refType(_library.zval)]];
    _library._functions['zend_print_flat_zval_r'] = _library.zend_print_flat_zval_r;
}];

_library._preload['zend_print_zval_r_ex'] = ['zend_write_func_t', 'zval', function () {
    _library.zend_print_zval_r_ex = ['void', [_library.zend_write_func_t, ref.refType(_library.zval), 'int']];
    _library._functions['zend_print_zval_r_ex'] = _library.zend_print_zval_r_ex;
}];

_library._preload['zend_activate'] = [function () {
    _library.zend_activate = ['void', []];
    _library._functions['zend_activate'] = _library.zend_activate;
}];

_library._preload['zend_deactivate'] = [function () {
    _library.zend_deactivate = ['void', []];
    _library._functions['zend_deactivate'] = _library.zend_deactivate;
}];

_library._preload['zend_call_destructors'] = [function () {
    _library.zend_call_destructors = ['void', []];
    _library._functions['zend_call_destructors'] = _library.zend_call_destructors;
}];

_library._preload['zend_activate_modules'] = [function () {
    _library.zend_activate_modules = ['void', []];
    _library._functions['zend_activate_modules'] = _library.zend_activate_modules;
}];

_library._preload['zend_deactivate_modules'] = [function () {
    _library.zend_deactivate_modules = ['void', []];
    _library._functions['zend_deactivate_modules'] = _library.zend_deactivate_modules;
}];

_library._preload['zend_post_deactivate_modules'] = [function () {
    _library.zend_post_deactivate_modules = ['void', []];
    _library._functions['zend_post_deactivate_modules'] = _library.zend_post_deactivate_modules;
}];

_library._preload['free_estring'] = ['pointer', function () {
    _library.free_estring = ['void', [ref.refType(ref.refType('char'))]];
    _library._functions['free_estring'] = _library.free_estring;
}];

_library._preload['zend_message_dispatcher'] = [function () {
    _library.zend_message_dispatcher = ['void', ['long', ref.refType('void')]];
    _library._functions['zend_message_dispatcher'] = _library.zend_message_dispatcher;
}];

_library._preload['zend_get_configuration_directive'] = ['zval', function () {
    _library.zend_get_configuration_directive = ['int', [ref.refType('char'), 'uint', ref.refType(_library.zval)]];
    _library._functions['zend_get_configuration_directive'] = _library.zend_get_configuration_directive;
}];

_library._preload['zend_error_handling_t'] = [function () {
    _library.zend_error_handling_t = 'int32';
}];

_library.zend_error_handling = Struct({});
_library.zend_error_handling.size = 1;

_library._preload['zend_error_handling'] = ['zend_error_handling_t', 'zend_class_entry', 'zval', function () {
    _library.zend_error_handling.size = 0;
    _library.zend_error_handling.defineProperty("handling", _library.zend_error_handling_t);
    _library.zend_error_handling.defineProperty("exception", ref.refType(_library.zend_class_entry));
    _library.zend_error_handling.defineProperty("user_handler", ref.refType(_library.zval));
}];

_library._preload['zend_save_error_handling'] = ['zend_error_handling', function () {
    _library.zend_save_error_handling = ['void', [ref.refType(_library.zend_error_handling)]];
    _library._functions['zend_save_error_handling'] = _library.zend_save_error_handling;
}];

_library._preload['zend_replace_error_handling'] = ['zend_error_handling_t', 'zend_class_entry', 'zend_error_handling', function () {
    _library.zend_replace_error_handling = ['void', [_library.zend_error_handling_t, ref.refType(_library.zend_class_entry), ref.refType(_library.zend_error_handling)]];
    _library._functions['zend_replace_error_handling'] = _library.zend_replace_error_handling;
}];

_library._preload['zend_restore_error_handling'] = ['zend_error_handling', function () {
    _library.zend_restore_error_handling = ['void', [ref.refType(_library.zend_error_handling)]];
    _library._functions['zend_restore_error_handling'] = _library.zend_restore_error_handling;
}];

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

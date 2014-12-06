var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_class_entry = _library._zend_class_entry;

_library._zend_trait_method_reference = Struct({
    "ce": ref.refType(_library.zend_class_entry),
    "class_name": 'char' ? ref.refType('char') : 'pointer',
    "cname_len": 'uint',
    "method_name": 'char' ? ref.refType('char') : 'pointer',
    "mname_len": 'uint'
});

_library.zend_trait_method_reference = _library._zend_trait_method_reference;

_library._zend_trait_alias = Struct({
    "alias": 'char' ? ref.refType('char') : 'pointer',
    "alias_len": 'uint',
    "modifiers": 'uint',
    "trait_method": ref.refType(_library.zend_trait_method_reference)
});

_library.zend_trait_alias = _library._zend_trait_alias;

_library._zend_trait_precedence = Struct({
    "exclude_from_classes": ref.refType(_library.zend_class_entry) ? ref.refType(ref.refType(_library.zend_class_entry)) : 'pointer',
    "trait_method": ref.refType(_library.zend_trait_method_reference)
});

_library.zend_trait_precedence = _library._zend_trait_precedence;

_library._zend_class_entry = Struct({
    "__call": ref.refType(_library._zend_function),
    "__callstatic": ref.refType(_library._zend_function),
    "__debugInfo": ref.refType(_library._zend_function),
    "__get": ref.refType(_library._zend_function),
    "__isset": ref.refType(_library._zend_function),
    "__set": ref.refType(_library._zend_function),
    "__tostring": ref.refType(_library._zend_function),
    "__unset": ref.refType(_library._zend_function),
    "ce_flags": 'uint',
    "clone": ref.refType(_library._zend_function),
    "constants_table": _library.HashTable,
    "constructor": ref.refType(_library._zend_function),
    "create_object": ffi.Function(_library._zend_object_value, [ref.refType(_library._zend_class_entry)]),
    "default_properties_count": 'int',
    "default_properties_table": ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer',
    "default_static_members_count": 'int',
    "default_static_members_table": ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer',
    "destructor": ref.refType(_library._zend_function),
    "function_table": _library.HashTable,
    "get_iterator": ffi.Function(ref.refType(_library._zend_object_iterator), [ref.refType(_library._zend_class_entry), ref.refType(_library._zval_struct), 'int']),
    "get_static_method": ffi.Function(ref.refType(_library._zend_function), [ref.refType(_library._zend_class_entry), 'char' ? ref.refType('char') : 'pointer', 'int']),
    "info": Union({
        "internal": Struct({
            "builtin_functions": ref.refType(_library._zend_function_entry),
            "module": ref.refType(_library._zend_module_entry)
        }),
        "user": Struct({
            "doc_comment": 'char' ? ref.refType('char') : 'pointer',
            "doc_comment_len": 'uint',
            "filename": 'char' ? ref.refType('char') : 'pointer',
            "line_end": 'uint',
            "line_start": 'uint'
        })
    }),
    "interface_gets_implemented": ffi.Function('int', [ref.refType(_library._zend_class_entry), ref.refType(_library._zend_class_entry)]),
    "interfaces": ref.refType(_library.zend_class_entry) ? ref.refType(ref.refType(_library.zend_class_entry)) : 'pointer',
    "iterator_funcs": _library.zend_class_iterator_funcs,
    "name": 'char' ? ref.refType('char') : 'pointer',
    "name_length": 'uint',
    "num_interfaces": 'uint',
    "num_traits": 'uint',
    "parent": ref.refType(_library._zend_class_entry),
    "properties_info": _library.HashTable,
    "refcount": 'int',
    "serialize": ffi.Function('int', [ref.refType(_library._zval_struct), 'uchar' ? ref.refType('uchar') : 'pointer' ? ref.refType('uchar' ? ref.refType('uchar') : 'pointer') : 'pointer', 'uint' ? ref.refType('uint') : 'pointer', 'pointer']),
    "serialize_func": ref.refType(_library._zend_function),
    "static_members_table": ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer',
    "trait_aliases": ref.refType(_library.zend_trait_alias) ? ref.refType(ref.refType(_library.zend_trait_alias)) : 'pointer',
    "trait_precedences": ref.refType(_library.zend_trait_precedence) ? ref.refType(ref.refType(_library.zend_trait_precedence)) : 'pointer',
    "traits": ref.refType(_library.zend_class_entry) ? ref.refType(ref.refType(_library.zend_class_entry)) : 'pointer',
    "type": 'char',
    "unserialize": ffi.Function('int', [ref.refType(_library._zval_struct) ? ref.refType(ref.refType(_library._zval_struct)) : 'pointer', ref.refType(_library._zend_class_entry), 'uchar' ? ref.refType('uchar') : 'pointer', 'uint', 'pointer']),
    "unserialize_func": ref.refType(_library._zend_function)
});

_library._zvalue_value = Union({
    "ast": ref.refType(_library.zend_ast),
    "dval": 'double',
    "ht": ref.refType(_library.HashTable),
    "lval": 'long',
    "obj": _library.zend_object_value,
    "str": Struct({
        "len": 'int',
        "val": 'char' ? ref.refType('char') : 'pointer'
    })
});

_library.zvalue_value = _library._zvalue_value;

_library._zval_struct = Struct({
    "is_ref__gc": 'uchar',
    "refcount__gc": 'uint',
    "type": 'uchar',
    "value": _library.zvalue_value
});

_library.ZEND_RESULT_CODE = 'int32';

_library._zend_guard = Struct({
    "dummy": 'uchar',
    "in_get": 'uchar',
    "in_isset": 'uchar',
    "in_set": 'uchar',
    "in_unset": 'uchar'
});

_library.zend_guard = _library._zend_guard;

_library._zend_object = Struct({
    "ce": ref.refType(_library.zend_class_entry),
    "guards": ref.refType(_library.HashTable),
    "properties": ref.refType(_library.HashTable),
    "properties_table": ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer'
});

_library.zend_object = _library._zend_object;

_library.zval_refcount_p = ['uint', [ref.refType(_library.zval)]];
_library._functions.push(_library.zval_refcount_p);

_library.zval_set_refcount_p = ['uint', [ref.refType(_library.zval), 'uint']];
_library._functions.push(_library.zval_set_refcount_p);

_library.zval_addref_p = ['uint', [ref.refType(_library.zval)]];
_library._functions.push(_library.zval_addref_p);

_library.zval_delref_p = ['uint', [ref.refType(_library.zval)]];
_library._functions.push(_library.zval_delref_p);

_library.zval_isref_p = ['uchar', [ref.refType(_library.zval)]];
_library._functions.push(_library.zval_isref_p);

_library.zval_set_isref_p = ['uchar', [ref.refType(_library.zval)]];
_library._functions.push(_library.zval_set_isref_p);

_library.zval_unset_isref_p = ['uchar', [ref.refType(_library.zval)]];
_library._functions.push(_library.zval_unset_isref_p);

_library.zval_set_isref_to_p = ['uchar', [ref.refType(_library.zval), 'uchar']];
_library._functions.push(_library.zval_set_isref_to_p);

_library.zend_serialize_data = 'void';

_library.zend_unserialize_data = 'void';

_library._zend_utility_functions = Struct({
    "block_interruptions": ffi.Function('void', []),
    "error_function": ffi.Function('void', ['int', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'void' ? ref.refType('void') : 'pointer']),
    "fopen_function": ffi.Function(ref.refType(_library._IO_FILE), ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']),
    "get_configuration_directive": ffi.Function('int', ['char' ? ref.refType('char') : 'pointer', 'uint', ref.refType(_library._zval_struct)]),
    "getenv_function": ffi.Function('char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'ulong']),
    "message_handler": ffi.Function('void', ['long', 'void' ? ref.refType('void') : 'pointer']),
    "on_timeout": ffi.Function('void', ['int']),
    "printf_function": ffi.Function('int', ['char' ? ref.refType('char') : 'pointer']),
    "resolve_path_function": ffi.Function('char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int']),
    "stream_open_function": ffi.Function('int', ['char' ? ref.refType('char') : 'pointer', ref.refType(_library._zend_file_handle)]),
    "ticks_function": ffi.Function('void', ['int']),
    "unblock_interruptions": ffi.Function('void', []),
    "vspprintf_function": ffi.Function('int', ['char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'void' ? ref.refType('void') : 'pointer']),
    "write_function": ffi.Function('int', ['char' ? ref.refType('char') : 'pointer', 'uint'])
});

_library.zend_utility_functions = _library._zend_utility_functions;

_library._zend_utility_values = Struct({
    "html_errors": 'uchar',
    "import_use_extension": 'char' ? ref.refType('char') : 'pointer',
    "import_use_extension_length": 'uint'
});

_library.zend_utility_values = _library._zend_utility_values;

_library.zend_write_func_t = ffi.Function('int', ['char' ? ref.refType('char') : 'pointer', 'uint']);

_library.zend_startup = ['int', [ref.refType(_library.zend_utility_functions), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.zend_startup);

_library.zend_shutdown = ['void', []];
_library._functions.push(_library.zend_shutdown);

_library.zend_register_standard_ini_entries = ['void', []];
_library._functions.push(_library.zend_register_standard_ini_entries);

_library.zend_post_startup = ['void', []];
_library._functions.push(_library.zend_post_startup);

_library.zend_set_utility_values = ['void', [ref.refType(_library.zend_utility_values)]];
_library._functions.push(_library.zend_set_utility_values);

_library._zend_bailout = ['void', ['char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._zend_bailout);

_library.get_zend_version = ['char' ? ref.refType('char') : 'pointer', []];
_library._functions.push(_library.get_zend_version);

_library.zend_make_printable_zval = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.zend_make_printable_zval);

_library.zend_print_zval = ['int', [ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zend_print_zval);

_library.zend_print_zval_ex = ['int', [_library.zend_write_func_t, ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zend_print_zval_ex);

_library.zend_print_zval_r = ['void', [ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zend_print_zval_r);

_library.zend_print_flat_zval_r = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.zend_print_flat_zval_r);

_library.zend_print_zval_r_ex = ['void', [_library.zend_write_func_t, ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zend_print_zval_r_ex);

_library.zend_activate = ['void', []];
_library._functions.push(_library.zend_activate);

_library.zend_deactivate = ['void', []];
_library._functions.push(_library.zend_deactivate);

_library.zend_call_destructors = ['void', []];
_library._functions.push(_library.zend_call_destructors);

_library.zend_activate_modules = ['void', []];
_library._functions.push(_library.zend_activate_modules);

_library.zend_deactivate_modules = ['void', []];
_library._functions.push(_library.zend_deactivate_modules);

_library.zend_post_deactivate_modules = ['void', []];
_library._functions.push(_library.zend_post_deactivate_modules);

_library.free_estring = ['void', ['char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.free_estring);

_library.zenderror = ['void', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.zenderror);

_library.zend_message_dispatcher = ['void', ['long', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_message_dispatcher);

_library.zend_get_configuration_directive = ['int', ['char' ? ref.refType('char') : 'pointer', 'uint', ref.refType(_library.zval)]];
_library._functions.push(_library.zend_get_configuration_directive);

_library.zend_error_handling_t = 'int32';

_library.zend_error_handling = Struct({
    "exception": ref.refType(_library.zend_class_entry),
    "handling": _library.zend_error_handling_t,
    "user_handler": ref.refType(_library.zval)
})

_library.zend_save_error_handling = ['void', [ref.refType(_library.zend_error_handling)]];
_library._functions.push(_library.zend_save_error_handling);

_library.zend_replace_error_handling = ['void', [_library.zend_error_handling_t, ref.refType(_library.zend_class_entry), ref.refType(_library.zend_error_handling)]];
_library._functions.push(_library.zend_replace_error_handling);

_library.zend_restore_error_handling = ['void', [ref.refType(_library.zend_error_handling)]];
_library._functions.push(_library.zend_restore_error_handling);

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
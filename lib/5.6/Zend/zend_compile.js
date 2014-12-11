var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_arg_info = Struct({});
_library._zend_arg_info.size = 1;

_library._preload['_zend_arg_info'] = [function () {
    _library._zend_arg_info.size = 0;
    _library._zend_arg_info.defineProperty("allow_null", 'uchar');
    _library._zend_arg_info.defineProperty("class_name", ref.refType('char'));
    _library._zend_arg_info.defineProperty("class_name_len", 'uint');
    _library._zend_arg_info.defineProperty("is_variadic", 'uchar');
    _library._zend_arg_info.defineProperty("name", ref.refType('char'));
    _library._zend_arg_info.defineProperty("name_len", 'uint');
    _library._zend_arg_info.defineProperty("pass_by_reference", 'uchar');
    _library._zend_arg_info.defineProperty("type_hint", 'uchar');
}];

_library._preload['zend_arg_info'] = [function () {
    _library.zend_arg_info = _library._zend_arg_info;
}];

_library._zend_literal = Struct({});
_library._zend_literal.size = 1;

_library._preload['_zend_literal'] = ['zval', '_zval_struct', function () {
    _library._zend_literal.size = 0;
    _library._zend_literal.defineProperty("cache_slot", 'uint');
    _library._zend_literal.defineProperty("constant", _library.zval);
    _library._zend_literal.defineProperty("hash_value", 'ulong');
}];

_library._zend_internal_function = Struct({});
_library._zend_internal_function.size = 1;

_library._preload['_zend_internal_function'] = ['zend_arg_info', 'void (int, zval *, zval **, zval *, int)', '_zend_module_entry', '_zend_function', 'zend_class_entry', function () {
    _library._zend_internal_function.size = 0;
    _library._zend_internal_function.defineProperty("arg_info", ref.refType(_library.zend_arg_info));
    _library._zend_internal_function.defineProperty("fn_flags", 'uint');
    _library._zend_internal_function.defineProperty("function_name", ref.refType('char'));
    _library._zend_internal_function.defineProperty("handler", ffi.Function('void', ['int', ref.refType(_library._zval_struct), ref.refType(ref.refType(_library._zval_struct)), ref.refType(_library._zval_struct), 'int']));
    _library._zend_internal_function.defineProperty("module", ref.refType(_library._zend_module_entry));
    _library._zend_internal_function.defineProperty("num_args", 'uint');
    _library._zend_internal_function.defineProperty("prototype", ref.refType(_library._zend_function));
    _library._zend_internal_function.defineProperty("required_num_args", 'uint');
    _library._zend_internal_function.defineProperty("scope", ref.refType(_library.zend_class_entry));
    _library._zend_internal_function.defineProperty("type", 'uchar');
}];

_library._preload['zend_internal_function'] = [function () {
    _library.zend_internal_function = _library._zend_internal_function;
}];

_library._zend_brk_cont_element = Struct({});
_library._zend_brk_cont_element.size = 1;

_library._preload['_zend_brk_cont_element'] = [function () {
    _library._zend_brk_cont_element.size = 0;
    _library._zend_brk_cont_element.defineProperty("brk", 'int');
    _library._zend_brk_cont_element.defineProperty("cont", 'int');
    _library._zend_brk_cont_element.defineProperty("parent", 'int');
    _library._zend_brk_cont_element.defineProperty("start", 'int');
}];

_library._preload['zend_brk_cont_element'] = [function () {
    _library.zend_brk_cont_element = _library._zend_brk_cont_element;
}];

_library._preload['zend_literal'] = [function () {
    _library.zend_literal = _library._zend_literal;
}];

_library._preload['zend_function'] = [function () {
    _library.zend_function = _library._zend_function;
}];

_library._call_slot = Struct({});
_library._call_slot.size = 1;

_library._preload['_call_slot'] = ['zend_class_entry', 'zend_function', 'zval', function () {
    _library._call_slot.size = 0;
    _library._call_slot.defineProperty("called_scope", ref.refType(_library.zend_class_entry));
    _library._call_slot.defineProperty("fbc", ref.refType(_library.zend_function));
    _library._call_slot.defineProperty("is_ctor_call", 'uchar');
    _library._call_slot.defineProperty("is_ctor_result_used", 'uchar');
    _library._call_slot.defineProperty("num_additional_args", 'uint');
    _library._call_slot.defineProperty("object", ref.refType(_library.zval));
}];

_library._preload['call_slot'] = [function () {
    _library.call_slot = _library._call_slot;
}];

_library._zend_function_state = Struct({});
_library._zend_function_state.size = 1;

_library._preload['_zend_function_state'] = ['pointer', 'zend_function', function () {
    _library._zend_function_state.size = 0;
    _library._zend_function_state.defineProperty("arguments", ref.refType(ref.refType('void')));
    _library._zend_function_state.defineProperty("function", ref.refType(_library.zend_function));
}];

_library._preload['zend_function_state'] = [function () {
    _library.zend_function_state = _library._zend_function_state;
}];

_library._zend_execute_data = Struct({});
_library._zend_execute_data.size = 1;

_library._preload['_zend_execute_data'] = ['call_slot', 'call_slot', 'zend_class_entry', 'zend_class_entry', 'zval', 'zval', '_zend_op', 'zend_function_state', '_zend_function_state', 'zval', 'zval', 'zend_op_array', '_zend_op', 'pointer', '_zend_execute_data', 'HashTable', function () {
    _library._zend_execute_data.size = 0;
    _library._zend_execute_data.defineProperty("call", ref.refType(_library.call_slot));
    _library._zend_execute_data.defineProperty("call_slots", ref.refType(_library.call_slot));
    _library._zend_execute_data.defineProperty("current_called_scope", ref.refType(_library.zend_class_entry));
    _library._zend_execute_data.defineProperty("current_scope", ref.refType(_library.zend_class_entry));
    _library._zend_execute_data.defineProperty("current_this", ref.refType(_library.zval));
    _library._zend_execute_data.defineProperty("delayed_exception", ref.refType(_library.zval));
    _library._zend_execute_data.defineProperty("fast_ret", ref.refType(_library._zend_op));
    _library._zend_execute_data.defineProperty("function_state", _library.zend_function_state);
    _library._zend_execute_data.defineProperty("nested", 'uchar');
    _library._zend_execute_data.defineProperty("object", ref.refType(_library.zval));
    _library._zend_execute_data.defineProperty("old_error_reporting", ref.refType(_library.zval));
    _library._zend_execute_data.defineProperty("op_array", ref.refType(_library.zend_op_array));
    _library._zend_execute_data.defineProperty("opline", ref.refType(_library._zend_op));
    _library._zend_execute_data.defineProperty("original_return_value", ref.refType(ref.refType(_library.zval)));
    _library._zend_execute_data.defineProperty("prev_execute_data", ref.refType(_library._zend_execute_data));
    _library._zend_execute_data.defineProperty("symbol_table", ref.refType(_library.HashTable));
}];

_library._preload['opcode_handler_t'] = ['int (zend_execute_data *)', function () {
    _library.opcode_handler_t = ffi.Function('int', [ref.refType(_library._zend_execute_data)]);
}];

_library._znode_op = Union({});
_library._znode_op.size = 1;

_library._preload['_znode_op'] = ['zend_op', 'zend_literal', 'zval', function () {
    _library._znode_op.size = 0;
    _library._znode_op.defineProperty("constant", 'uint');
    _library._znode_op.defineProperty("hash", 'ulong');
    _library._znode_op.defineProperty("jmp_addr", ref.refType(_library.zend_op));
    _library._znode_op.defineProperty("literal", ref.refType(_library.zend_literal));
    _library._znode_op.defineProperty("num", 'uint');
    _library._znode_op.defineProperty("opline_num", 'uint');
    _library._znode_op.defineProperty("ptr", ref.refType('void'));
    _library._znode_op.defineProperty("var", 'uint');
    _library._znode_op.defineProperty("zv", ref.refType(_library.zval));
}];

_library._preload['znode_op'] = [function () {
    _library.znode_op = _library._znode_op;
}];

_library._zend_op = Struct({});
_library._zend_op.size = 1;

_library._preload['_zend_op'] = ['opcode_handler_t', 'znode_op', '_znode_op', 'znode_op', '_znode_op', 'znode_op', '_znode_op', function () {
    _library._zend_op.size = 0;
    _library._zend_op.defineProperty("extended_value", 'ulong');
    _library._zend_op.defineProperty("handler", _library.opcode_handler_t);
    _library._zend_op.defineProperty("lineno", 'uint');
    _library._zend_op.defineProperty("op1", _library.znode_op);
    _library._zend_op.defineProperty("op1_type", 'uchar');
    _library._zend_op.defineProperty("op2", _library.znode_op);
    _library._zend_op.defineProperty("op2_type", 'uchar');
    _library._zend_op.defineProperty("opcode", 'uchar');
    _library._zend_op.defineProperty("result", _library.znode_op);
    _library._zend_op.defineProperty("result_type", 'uchar');
}];

_library._preload['zend_op'] = [function () {
    _library.zend_op = _library._zend_op;
}];

_library._zend_try_catch_element = Struct({});
_library._zend_try_catch_element.size = 1;

_library._preload['_zend_try_catch_element'] = [function () {
    _library._zend_try_catch_element.size = 0;
    _library._zend_try_catch_element.defineProperty("catch_op", 'uint');
    _library._zend_try_catch_element.defineProperty("finally_end", 'uint');
    _library._zend_try_catch_element.defineProperty("finally_op", 'uint');
    _library._zend_try_catch_element.defineProperty("try_op", 'uint');
}];

_library._preload['zend_try_catch_element'] = [function () {
    _library.zend_try_catch_element = _library._zend_try_catch_element;
}];

_library._zend_compiled_variable = Struct({});
_library._zend_compiled_variable.size = 1;

_library._preload['_zend_compiled_variable'] = [function () {
    _library._zend_compiled_variable.size = 0;
    _library._zend_compiled_variable.defineProperty("hash_value", 'ulong');
    _library._zend_compiled_variable.defineProperty("name", ref.refType('char'));
    _library._zend_compiled_variable.defineProperty("name_len", 'int');
}];

_library._preload['zend_compiled_variable'] = [function () {
    _library.zend_compiled_variable = _library._zend_compiled_variable;
}];

_library._zend_op_array = Struct({});
_library._zend_op_array.size = 1;

_library._preload['_zend_op_array'] = ['zend_arg_info', 'zend_brk_cont_element', 'zend_literal', 'zend_op', '_zend_function', 'pointer', 'pointer', 'zend_class_entry', 'HashTable', 'zend_try_catch_element', 'zend_compiled_variable', function () {
    _library._zend_op_array.size = 0;
    _library._zend_op_array.defineProperty("T", 'uint');
    _library._zend_op_array.defineProperty("arg_info", ref.refType(_library.zend_arg_info));
    _library._zend_op_array.defineProperty("brk_cont_array", ref.refType(_library.zend_brk_cont_element));
    _library._zend_op_array.defineProperty("doc_comment", ref.refType('char'));
    _library._zend_op_array.defineProperty("doc_comment_len", 'uint');
    _library._zend_op_array.defineProperty("early_binding", 'uint');
    _library._zend_op_array.defineProperty("filename", ref.refType('char'));
    _library._zend_op_array.defineProperty("fn_flags", 'uint');
    _library._zend_op_array.defineProperty("function_name", ref.refType('char'));
    _library._zend_op_array.defineProperty("has_finally_block", 'uchar');
    _library._zend_op_array.defineProperty("last", 'uint');
    _library._zend_op_array.defineProperty("last_brk_cont", 'int');
    _library._zend_op_array.defineProperty("last_cache_slot", 'int');
    _library._zend_op_array.defineProperty("last_literal", 'int');
    _library._zend_op_array.defineProperty("last_try_catch", 'int');
    _library._zend_op_array.defineProperty("last_var", 'int');
    _library._zend_op_array.defineProperty("line_end", 'uint');
    _library._zend_op_array.defineProperty("line_start", 'uint');
    _library._zend_op_array.defineProperty("literals", ref.refType(_library.zend_literal));
    _library._zend_op_array.defineProperty("nested_calls", 'uint');
    _library._zend_op_array.defineProperty("num_args", 'uint');
    _library._zend_op_array.defineProperty("opcodes", ref.refType(_library.zend_op));
    _library._zend_op_array.defineProperty("prototype", ref.refType(_library._zend_function));
    _library._zend_op_array.defineProperty("refcount", ref.refType('uint'));
    _library._zend_op_array.defineProperty("required_num_args", 'uint');
    _library._zend_op_array.defineProperty("reserved", _library.__RefArray(ref.refType('void'), 4));
    _library._zend_op_array.defineProperty("run_time_cache", ref.refType(ref.refType('void')));
    _library._zend_op_array.defineProperty("scope", ref.refType(_library.zend_class_entry));
    _library._zend_op_array.defineProperty("static_variables", ref.refType(_library.HashTable));
    _library._zend_op_array.defineProperty("this_var", 'uint');
    _library._zend_op_array.defineProperty("try_catch_array", ref.refType(_library.zend_try_catch_element));
    _library._zend_op_array.defineProperty("type", 'uchar');
    _library._zend_op_array.defineProperty("used_stack", 'uint');
    _library._zend_op_array.defineProperty("vars", ref.refType(_library.zend_compiled_variable));
}];

_library._preload['zend_op_array'] = [function () {
    _library.zend_op_array = _library._zend_op_array;
}];

_library._zend_function = Union({});
_library._zend_function.size = 1;

_library._preload['_zend_function'] = ['zend_arg_info', '_zend_function', 'zend_class_entry', 'zend_internal_function', '_zend_internal_function', 'zend_op_array', function () {
    _library._zend_function.size = 0;
    _library._zend_function.defineProperty("common", (function () {
        var temp = Struct({});
        temp.defineProperty("arg_info", ref.refType(_library.zend_arg_info));
        temp.defineProperty("fn_flags", 'uint');
        temp.defineProperty("function_name", ref.refType('char'));
        temp.defineProperty("num_args", 'uint');
        temp.defineProperty("prototype", ref.refType(_library._zend_function));
        temp.defineProperty("required_num_args", 'uint');
        temp.defineProperty("scope", ref.refType(_library.zend_class_entry));
        temp.defineProperty("type", 'uchar');
        return temp;
    })());
    _library._zend_function.defineProperty("internal_function", _library.zend_internal_function);
    _library._zend_function.defineProperty("op_array", _library.zend_op_array);
    _library._zend_function.defineProperty("type", 'uchar');
}];

_library._zend_property_info = Struct({});
_library._zend_property_info.size = 1;

_library._preload['_zend_property_info'] = ['zend_class_entry', function () {
    _library._zend_property_info.size = 0;
    _library._zend_property_info.defineProperty("ce", ref.refType(_library.zend_class_entry));
    _library._zend_property_info.defineProperty("doc_comment", ref.refType('char'));
    _library._zend_property_info.defineProperty("doc_comment_len", 'int');
    _library._zend_property_info.defineProperty("flags", 'uint');
    _library._zend_property_info.defineProperty("h", 'ulong');
    _library._zend_property_info.defineProperty("name", ref.refType('char'));
    _library._zend_property_info.defineProperty("name_length", 'int');
    _library._zend_property_info.defineProperty("offset", 'int');
}];

_library._zend_compiler_context = Struct({});
_library._zend_compiler_context.size = 1;

_library._preload['_zend_compiler_context'] = ['HashTable', function () {
    _library._zend_compiler_context.size = 0;
    _library._zend_compiler_context.defineProperty("backpatch_count", 'int');
    _library._zend_compiler_context.defineProperty("current_brk_cont", 'int');
    _library._zend_compiler_context.defineProperty("in_finally", 'int');
    _library._zend_compiler_context.defineProperty("labels", ref.refType(_library.HashTable));
    _library._zend_compiler_context.defineProperty("literals_size", 'int');
    _library._zend_compiler_context.defineProperty("nested_calls", 'int');
    _library._zend_compiler_context.defineProperty("opcodes_size", 'uint');
    _library._zend_compiler_context.defineProperty("used_stack", 'int');
    _library._zend_compiler_context.defineProperty("vars_size", 'int');
}];

_library._preload['zend_compiler_context'] = [function () {
    _library.zend_compiler_context = _library._zend_compiler_context;
}];

_library._znode = Struct({});
_library._znode.size = 1;

_library._preload['_znode'] = ['zend_ast', 'zval', '_zval_struct', 'znode_op', '_znode_op', 'zend_op_array', function () {
    _library._znode.size = 0;
    _library._znode.defineProperty("EA", 'uint');
    _library._znode.defineProperty("op_type", 'int');
    _library._znode.defineProperty("u", (function () {
        var temp = Union({});
        temp.defineProperty("ast", ref.refType(_library.zend_ast));
        temp.defineProperty("constant", _library.zval);
        temp.defineProperty("op", _library.znode_op);
        temp.defineProperty("op_array", ref.refType(_library.zend_op_array));
        return temp;
    })());
}];

_library._preload['znode'] = [function () {
    _library.znode = _library._znode;
}];

_library._preload['zend_execute_data'] = [function () {
    _library.zend_execute_data = _library._zend_execute_data;
}];

_library._preload['user_opcode_handler_t'] = ['int (zend_execute_data *)', function () {
    _library.user_opcode_handler_t = ffi.Function('int', [ref.refType(_library._zend_execute_data)]);
}];

_library._zend_label = Struct({});
_library._zend_label.size = 1;

_library._preload['_zend_label'] = [function () {
    _library._zend_label.size = 0;
    _library._zend_label.defineProperty("brk_cont", 'int');
    _library._zend_label.defineProperty("opline_num", 'uint');
}];

_library._preload['zend_label'] = [function () {
    _library.zend_label = _library._zend_label;
}];

_library._preload['zend_property_info'] = [function () {
    _library.zend_property_info = _library._zend_property_info;
}];

_library._zend_internal_function_info = Struct({});
_library._zend_internal_function_info.size = 1;

_library._preload['_zend_internal_function_info'] = [function () {
    _library._zend_internal_function_info.size = 0;
    _library._zend_internal_function_info.defineProperty("_allow_null", 'uchar');
    _library._zend_internal_function_info.defineProperty("_class_name", ref.refType('char'));
    _library._zend_internal_function_info.defineProperty("_is_variadic", 'uchar');
    _library._zend_internal_function_info.defineProperty("_name", ref.refType('char'));
    _library._zend_internal_function_info.defineProperty("_name_len", 'uint');
    _library._zend_internal_function_info.defineProperty("_type_hint", 'uchar');
    _library._zend_internal_function_info.defineProperty("required_num_args", 'uint');
    _library._zend_internal_function_info.defineProperty("return_reference", 'uchar');
}];

_library._preload['zend_internal_function_info'] = [function () {
    _library.zend_internal_function_info = _library._zend_internal_function_info;
}];

_library._zend_function_call_entry = Struct({});
_library._zend_function_call_entry.size = 1;

_library._preload['_zend_function_call_entry'] = ['zend_function', function () {
    _library._zend_function_call_entry.size = 0;
    _library._zend_function_call_entry.defineProperty("arg_num", 'uint');
    _library._zend_function_call_entry.defineProperty("fbc", ref.refType(_library.zend_function));
    _library._zend_function_call_entry.defineProperty("uses_argument_unpacking", 'uchar');
}];

_library._preload['zend_function_call_entry'] = [function () {
    _library.zend_function_call_entry = _library._zend_function_call_entry;
}];

_library._zend_switch_entry = Struct({});
_library._zend_switch_entry.size = 1;

_library._preload['_zend_switch_entry'] = ['znode', '_znode', function () {
    _library._zend_switch_entry.size = 0;
    _library._zend_switch_entry.defineProperty("cond", _library.znode);
    _library._zend_switch_entry.defineProperty("control_var", 'int');
    _library._zend_switch_entry.defineProperty("default_case", 'int');
}];

_library._preload['zend_switch_entry'] = [function () {
    _library.zend_switch_entry = _library._zend_switch_entry;
}];

_library._list_llist_element = Struct({});
_library._list_llist_element.size = 1;

_library._preload['_list_llist_element'] = ['zend_llist', '_zend_llist', 'znode', '_znode', 'znode', '_znode', function () {
    _library._list_llist_element.size = 0;
    _library._list_llist_element.defineProperty("dimensions", _library.zend_llist);
    _library._list_llist_element.defineProperty("value", _library.znode);
    _library._list_llist_element.defineProperty("var", _library.znode);
}];

_library._preload['list_llist_element'] = [function () {
    _library.list_llist_element = _library._list_llist_element;
}];

_library._preload['lex_scan'] = ['zval', function () {
    _library.lex_scan = ['int', [ref.refType(_library.zval)]];
    _library._functions['lex_scan'] = _library.lex_scan;
}];

_library._preload['zend_set_compiled_filename'] = [function () {
    _library.zend_set_compiled_filename = [ref.refType('char'), [ref.refType('char')]];
    _library._functions['zend_set_compiled_filename'] = _library.zend_set_compiled_filename;
}];

_library._preload['zend_restore_compiled_filename'] = [function () {
    _library.zend_restore_compiled_filename = ['void', [ref.refType('char')]];
    _library._functions['zend_restore_compiled_filename'] = _library.zend_restore_compiled_filename;
}];

_library._preload['zend_get_compiled_filename'] = [function () {
    _library.zend_get_compiled_filename = [ref.refType('char'), []];
    _library._functions['zend_get_compiled_filename'] = _library.zend_get_compiled_filename;
}];

_library._preload['zend_get_compiled_lineno'] = [function () {
    _library.zend_get_compiled_lineno = ['int', []];
    _library._functions['zend_get_compiled_lineno'] = _library.zend_get_compiled_lineno;
}];

_library._preload['zend_get_scanned_file_offset'] = [function () {
    _library.zend_get_scanned_file_offset = ['ulong', []];
    _library._functions['zend_get_scanned_file_offset'] = _library.zend_get_scanned_file_offset;
}];

_library._preload['zend_get_compiled_variable_name'] = ['zend_op_array', function () {
    _library.zend_get_compiled_variable_name = [ref.refType('char'), [ref.refType(_library.zend_op_array), 'uint', ref.refType('int')]];
    _library._functions['zend_get_compiled_variable_name'] = _library.zend_get_compiled_variable_name;
}];

_library._preload['unary_op_type'] = ['int (zval *, zval *)', function () {
    _library.unary_op_type = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);
}];

_library._preload['binary_op_type'] = ['int (zval *, zval *, zval *)', function () {
    _library.binary_op_type = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);
}];

_library._preload['get_unary_op'] = ['unary_op_type', function () {
    _library.get_unary_op = [_library.unary_op_type, ['int']];
    _library._functions['get_unary_op'] = _library.get_unary_op;
}];

_library._preload['get_binary_op'] = ['binary_op_type', function () {
    _library.get_binary_op = [_library.binary_op_type, ['int']];
    _library._functions['get_binary_op'] = _library.get_binary_op;
}];

_library._preload['do_bind_function'] = ['zend_op_array', 'zend_op', 'HashTable', function () {
    _library.do_bind_function = ['int', [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), ref.refType(_library.HashTable), 'uchar']];
    _library._functions['do_bind_function'] = _library.do_bind_function;
}];

_library._preload['do_bind_class'] = ['zend_class_entry', 'zend_op_array', 'zend_op', 'HashTable', function () {
    _library.do_bind_class = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), ref.refType(_library.HashTable), 'uchar']];
    _library._functions['do_bind_class'] = _library.do_bind_class;
}];

_library._preload['do_bind_inherited_class'] = ['zend_class_entry', 'zend_op_array', 'zend_op', 'HashTable', 'zend_class_entry', function () {
    _library.do_bind_inherited_class = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), ref.refType(_library.HashTable), ref.refType(_library.zend_class_entry), 'uchar']];
    _library._functions['do_bind_inherited_class'] = _library.do_bind_inherited_class;
}];

_library._preload['zend_do_inherit_interfaces'] = ['zend_class_entry', 'zend_class_entry', function () {
    _library.zend_do_inherit_interfaces = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_do_inherit_interfaces'] = _library.zend_do_inherit_interfaces;
}];

_library._preload['zend_do_implement_interface'] = ['zend_class_entry', 'zend_class_entry', function () {
    _library.zend_do_implement_interface = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_do_implement_interface'] = _library.zend_do_implement_interface;
}];

_library._preload['zend_do_implement_trait'] = ['zend_class_entry', 'zend_class_entry', function () {
    _library.zend_do_implement_trait = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_do_implement_trait'] = _library.zend_do_implement_trait;
}];

_library._preload['zend_do_bind_traits'] = ['zend_class_entry', function () {
    _library.zend_do_bind_traits = ['void', [ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_do_bind_traits'] = _library.zend_do_bind_traits;
}];

_library._preload['zend_do_inheritance'] = ['zend_class_entry', 'zend_class_entry', function () {
    _library.zend_do_inheritance = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_do_inheritance'] = _library.zend_do_inheritance;
}];

_library._preload['zend_do_delayed_early_binding'] = ['zend_op_array', function () {
    _library.zend_do_delayed_early_binding = ['void', [ref.refType(_library.zend_op_array)]];
    _library._functions['zend_do_delayed_early_binding'] = _library.zend_do_delayed_early_binding;
}];

_library._preload['function_add_ref'] = ['zend_function', function () {
    _library.function_add_ref = ['void', [ref.refType(_library.zend_function)]];
    _library._functions['function_add_ref'] = _library.function_add_ref;
}];

_library._preload['compile_file'] = ['zend_op_array', 'zend_file_handle', function () {
    _library.compile_file = [ref.refType(_library.zend_op_array), [ref.refType(_library.zend_file_handle), 'int']];
    _library._functions['compile_file'] = _library.compile_file;
}];

_library._preload['compile_string'] = ['zend_op_array', 'zval', function () {
    _library.compile_string = [ref.refType(_library.zend_op_array), [ref.refType(_library.zval), ref.refType('char')]];
    _library._functions['compile_string'] = _library.compile_string;
}];

_library._preload['compile_filename'] = ['zend_op_array', 'zval', function () {
    _library.compile_filename = [ref.refType(_library.zend_op_array), ['int', ref.refType(_library.zval)]];
    _library._functions['compile_filename'] = _library.compile_filename;
}];

_library._preload['open_file_for_scanning'] = ['zend_file_handle', function () {
    _library.open_file_for_scanning = ['int', [ref.refType(_library.zend_file_handle)]];
    _library._functions['open_file_for_scanning'] = _library.open_file_for_scanning;
}];

_library._preload['init_op_array'] = ['zend_op_array', function () {
    _library.init_op_array = ['void', [ref.refType(_library.zend_op_array), 'uchar', 'int']];
    _library._functions['init_op_array'] = _library.init_op_array;
}];

_library._preload['destroy_op_array'] = ['zend_op_array', function () {
    _library.destroy_op_array = ['void', [ref.refType(_library.zend_op_array)]];
    _library._functions['destroy_op_array'] = _library.destroy_op_array;
}];

_library._preload['zend_destroy_file_handle'] = ['zend_file_handle', function () {
    _library.zend_destroy_file_handle = ['void', [ref.refType(_library.zend_file_handle)]];
    _library._functions['zend_destroy_file_handle'] = _library.zend_destroy_file_handle;
}];

_library._preload['zend_cleanup_class_data'] = ['pointer', function () {
    _library.zend_cleanup_class_data = ['int', [ref.refType(ref.refType(_library.zend_class_entry))]];
    _library._functions['zend_cleanup_class_data'] = _library.zend_cleanup_class_data;
}];

_library._preload['zend_cleanup_user_class_data'] = ['pointer', function () {
    _library.zend_cleanup_user_class_data = ['int', [ref.refType(ref.refType(_library.zend_class_entry))]];
    _library._functions['zend_cleanup_user_class_data'] = _library.zend_cleanup_user_class_data;
}];

_library._preload['zend_cleanup_internal_class_data'] = ['zend_class_entry', function () {
    _library.zend_cleanup_internal_class_data = ['void', [ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_cleanup_internal_class_data'] = _library.zend_cleanup_internal_class_data;
}];

_library._preload['zend_cleanup_internal_classes'] = [function () {
    _library.zend_cleanup_internal_classes = ['void', []];
    _library._functions['zend_cleanup_internal_classes'] = _library.zend_cleanup_internal_classes;
}];

_library._preload['zend_cleanup_function_data'] = ['zend_function', function () {
    _library.zend_cleanup_function_data = ['int', [ref.refType(_library.zend_function)]];
    _library._functions['zend_cleanup_function_data'] = _library.zend_cleanup_function_data;
}];

_library._preload['zend_cleanup_function_data_full'] = ['zend_function', function () {
    _library.zend_cleanup_function_data_full = ['int', [ref.refType(_library.zend_function)]];
    _library._functions['zend_cleanup_function_data_full'] = _library.zend_cleanup_function_data_full;
}];

_library._preload['clean_non_persistent_function_full'] = ['zend_function', function () {
    _library.clean_non_persistent_function_full = ['int', [ref.refType(_library.zend_function)]];
    _library._functions['clean_non_persistent_function_full'] = _library.clean_non_persistent_function_full;
}];

_library._preload['clean_non_persistent_class_full'] = ['pointer', function () {
    _library.clean_non_persistent_class_full = ['int', [ref.refType(ref.refType(_library.zend_class_entry))]];
    _library._functions['clean_non_persistent_class_full'] = _library.clean_non_persistent_class_full;
}];

_library._preload['destroy_zend_function'] = ['zend_function', function () {
    _library.destroy_zend_function = ['void', [ref.refType(_library.zend_function)]];
    _library._functions['destroy_zend_function'] = _library.destroy_zend_function;
}];

_library._preload['zend_function_dtor'] = ['zend_function', function () {
    _library.zend_function_dtor = ['void', [ref.refType(_library.zend_function)]];
    _library._functions['zend_function_dtor'] = _library.zend_function_dtor;
}];

_library._preload['destroy_zend_class'] = ['pointer', function () {
    _library.destroy_zend_class = ['void', [ref.refType(ref.refType(_library.zend_class_entry))]];
    _library._functions['destroy_zend_class'] = _library.destroy_zend_class;
}];

_library._preload['zend_mangle_property_name'] = ['pointer', function () {
    _library.zend_mangle_property_name = ['void', [ref.refType(ref.refType('char')), ref.refType('int'), ref.refType('char'), 'int', ref.refType('char'), 'int', 'int']];
    _library._functions['zend_mangle_property_name'] = _library.zend_mangle_property_name;
}];

_library._preload['zend_unmangle_property_name_ex'] = ['pointer', 'pointer', function () {
    _library.zend_unmangle_property_name_ex = ['int', [ref.refType('char'), 'int', ref.refType(ref.refType('char')), ref.refType(ref.refType('char')), ref.refType('int')]];
    _library._functions['zend_unmangle_property_name_ex'] = _library.zend_unmangle_property_name_ex;
}];

_library._preload['pass_two'] = ['zend_op_array', function () {
    _library.pass_two = ['int', [ref.refType(_library.zend_op_array)]];
    _library._functions['pass_two'] = _library.pass_two;
}];

_library._preload['zend_is_compiling'] = [function () {
    _library.zend_is_compiling = ['uchar', []];
    _library._functions['zend_is_compiling'] = _library.zend_is_compiling;
}];

_library._preload['zend_make_compiled_string_description'] = [function () {
    _library.zend_make_compiled_string_description = [ref.refType('char'), [ref.refType('char')]];
    _library._functions['zend_make_compiled_string_description'] = _library.zend_make_compiled_string_description;
}];

_library._preload['zend_initialize_class_data'] = ['zend_class_entry', function () {
    _library.zend_initialize_class_data = ['void', [ref.refType(_library.zend_class_entry), 'uchar']];
    _library._functions['zend_initialize_class_data'] = _library.zend_initialize_class_data;
}];

_library._preload['zend_auto_global_callback'] = ['zend_bool (const char *, uint)', function () {
    _library.zend_auto_global_callback = ffi.Function('uchar', [ref.refType('char'), 'uint']);
}];

_library._zend_auto_global = Struct({});
_library._zend_auto_global.size = 1;

_library._preload['_zend_auto_global'] = ['zend_auto_global_callback', function () {
    _library._zend_auto_global.size = 0;
    _library._zend_auto_global.defineProperty("armed", 'uchar');
    _library._zend_auto_global.defineProperty("auto_global_callback", _library.zend_auto_global_callback);
    _library._zend_auto_global.defineProperty("jit", 'uchar');
    _library._zend_auto_global.defineProperty("name", ref.refType('char'));
    _library._zend_auto_global.defineProperty("name_len", 'uint');
}];

_library._preload['zend_auto_global'] = [function () {
    _library.zend_auto_global = _library._zend_auto_global;
}];

_library._preload['zend_register_auto_global'] = ['zend_auto_global_callback', function () {
    _library.zend_register_auto_global = ['int', [ref.refType('char'), 'uint', 'uchar', _library.zend_auto_global_callback]];
    _library._functions['zend_register_auto_global'] = _library.zend_register_auto_global;
}];

_library._preload['zend_activate_auto_globals'] = [function () {
    _library.zend_activate_auto_globals = ['void', []];
    _library._functions['zend_activate_auto_globals'] = _library.zend_activate_auto_globals;
}];

_library._preload['zend_is_auto_global'] = [function () {
    _library.zend_is_auto_global = ['uchar', [ref.refType('char'), 'uint']];
    _library._functions['zend_is_auto_global'] = _library.zend_is_auto_global;
}];

_library._preload['zend_is_auto_global_quick'] = [function () {
    _library.zend_is_auto_global_quick = ['uchar', [ref.refType('char'), 'uint', 'ulong']];
    _library._functions['zend_is_auto_global_quick'] = _library.zend_is_auto_global_quick;
}];

_library._preload['zend_dirname'] = [function () {
    _library.zend_dirname = ['ulong', [ref.refType('char'), 'ulong']];
    _library._functions['zend_dirname'] = _library.zend_dirname;
}];

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_llist.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_stream.js');
    require('./zend_types.js');
}

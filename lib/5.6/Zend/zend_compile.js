var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._zend_arg_info = Struct({});
_library._zend_arg_info.size = 1;

_library._preload.push(function () {
    _library._zend_arg_info.size = 0;
    _library._zend_arg_info.defineProperty("allow_null", 'uchar');
    _library._zend_arg_info.defineProperty("class_name", ref.refType('char'));
    _library._zend_arg_info.defineProperty("class_name_len", 'uint');
    _library._zend_arg_info.defineProperty("is_variadic", 'uchar');
    _library._zend_arg_info.defineProperty("name", ref.refType('char'));
    _library._zend_arg_info.defineProperty("name_len", 'uint');
    _library._zend_arg_info.defineProperty("pass_by_reference", 'uchar');
    _library._zend_arg_info.defineProperty("type_hint", 'uchar');
});

_library.zend_arg_info = _library._zend_arg_info;

require('./zend_types.js');
_library._zend_literal = Struct({});
_library._zend_literal.size = 1;

_library._preload.push(function () {
    _library._zend_literal.size = 0;
    _library._zend_literal.defineProperty("cache_slot", 'uint');
    _library._zend_literal.defineProperty("constant", _library.zval);
    _library._zend_literal.defineProperty("hash_value", 'ulong');
});

require('./zend_modules.js');
require('./zend.js');
_library._zend_internal_function = Struct({});
_library._zend_internal_function.size = 1;

_library._preload.push(function () {
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
});

_library.zend_internal_function = _library._zend_internal_function;

_library._zend_brk_cont_element = Struct({});
_library._zend_brk_cont_element.size = 1;

_library._preload.push(function () {
    _library._zend_brk_cont_element.size = 0;
    _library._zend_brk_cont_element.defineProperty("brk", 'int');
    _library._zend_brk_cont_element.defineProperty("cont", 'int');
    _library._zend_brk_cont_element.defineProperty("parent", 'int');
    _library._zend_brk_cont_element.defineProperty("start", 'int');
});

_library.zend_brk_cont_element = _library._zend_brk_cont_element;

_library.zend_literal = _library._zend_literal;

_library.zend_function = _library._zend_function;

_library._call_slot = Struct({});
_library._call_slot.size = 1;

_library._preload.push(function () {
    _library._call_slot.size = 0;
    _library._call_slot.defineProperty("called_scope", ref.refType(_library.zend_class_entry));
    _library._call_slot.defineProperty("fbc", ref.refType(_library.zend_function));
    _library._call_slot.defineProperty("is_ctor_call", 'uchar');
    _library._call_slot.defineProperty("is_ctor_result_used", 'uchar');
    _library._call_slot.defineProperty("num_additional_args", 'uint');
    _library._call_slot.defineProperty("object", ref.refType(_library.zval));
});

_library.call_slot = _library._call_slot;

_library._zend_function_state = Struct({});
_library._zend_function_state.size = 1;

_library._preload.push(function () {
    _library._zend_function_state.size = 0;
    _library._zend_function_state.defineProperty("arguments", ref.refType(ref.refType('void')));
    _library._zend_function_state.defineProperty("function", ref.refType(_library.zend_function));
});

_library.zend_function_state = _library._zend_function_state;

require('./zend_hash.js');
_library._zend_execute_data = Struct({});
_library._zend_execute_data.size = 1;

_library._preload.push(function () {
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
});

_library.opcode_handler_t = ffi.Function('int', [ref.refType(_library._zend_execute_data)]);

_library._znode_op = Union({});
_library._znode_op.size = 1;

_library._preload.push(function () {
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
});

_library.znode_op = _library._znode_op;

_library._zend_op = Struct({});
_library._zend_op.size = 1;

_library._preload.push(function () {
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
});

_library.zend_op = _library._zend_op;

_library._zend_try_catch_element = Struct({});
_library._zend_try_catch_element.size = 1;

_library._preload.push(function () {
    _library._zend_try_catch_element.size = 0;
    _library._zend_try_catch_element.defineProperty("catch_op", 'uint');
    _library._zend_try_catch_element.defineProperty("finally_end", 'uint');
    _library._zend_try_catch_element.defineProperty("finally_op", 'uint');
    _library._zend_try_catch_element.defineProperty("try_op", 'uint');
});

_library.zend_try_catch_element = _library._zend_try_catch_element;

_library._zend_compiled_variable = Struct({});
_library._zend_compiled_variable.size = 1;

_library._preload.push(function () {
    _library._zend_compiled_variable.size = 0;
    _library._zend_compiled_variable.defineProperty("hash_value", 'ulong');
    _library._zend_compiled_variable.defineProperty("name", ref.refType('char'));
    _library._zend_compiled_variable.defineProperty("name_len", 'int');
});

_library.zend_compiled_variable = _library._zend_compiled_variable;

_library._zend_op_array = Struct({});
_library._zend_op_array.size = 1;

_library._preload.push(function () {
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
    _library._zend_op_array.defineProperty("reserved", RefArray(ref.refType('void'), 4));
    _library._zend_op_array.defineProperty("run_time_cache", ref.refType(ref.refType('void')));
    _library._zend_op_array.defineProperty("scope", ref.refType(_library.zend_class_entry));
    _library._zend_op_array.defineProperty("static_variables", ref.refType(_library.HashTable));
    _library._zend_op_array.defineProperty("this_var", 'uint');
    _library._zend_op_array.defineProperty("try_catch_array", ref.refType(_library.zend_try_catch_element));
    _library._zend_op_array.defineProperty("type", 'uchar');
    _library._zend_op_array.defineProperty("used_stack", 'uint');
    _library._zend_op_array.defineProperty("vars", ref.refType(_library.zend_compiled_variable));
});

_library.zend_op_array = _library._zend_op_array;

_library._zend_function = Union({});
_library._zend_function.size = 1;

_library._preload.push(function () {
    _library._zend_function.size = 0;
    _library._zend_function.defineProperty("common", Struct({}));
    _library._zend_function.fields.common.type.defineProperty("arg_info", ref.refType(_library.zend_arg_info));
    _library._zend_function.fields.common.type.defineProperty("fn_flags", 'uint');
    _library._zend_function.fields.common.type.defineProperty("function_name", ref.refType('char'));
    _library._zend_function.fields.common.type.defineProperty("num_args", 'uint');
    _library._zend_function.fields.common.type.defineProperty("prototype", ref.refType(_library._zend_function));
    _library._zend_function.fields.common.type.defineProperty("required_num_args", 'uint');
    _library._zend_function.fields.common.type.defineProperty("scope", ref.refType(_library.zend_class_entry));
    _library._zend_function.fields.common.type.defineProperty("type", 'uchar');
    _library._zend_function.defineProperty("internal_function", _library.zend_internal_function);
    _library._zend_function.defineProperty("op_array", _library.zend_op_array);
    _library._zend_function.defineProperty("type", 'uchar');
});

_library._zend_property_info = Struct({});
_library._zend_property_info.size = 1;

_library._preload.push(function () {
    _library._zend_property_info.size = 0;
    _library._zend_property_info.defineProperty("ce", ref.refType(_library.zend_class_entry));
    _library._zend_property_info.defineProperty("doc_comment", ref.refType('char'));
    _library._zend_property_info.defineProperty("doc_comment_len", 'int');
    _library._zend_property_info.defineProperty("flags", 'uint');
    _library._zend_property_info.defineProperty("h", 'ulong');
    _library._zend_property_info.defineProperty("name", ref.refType('char'));
    _library._zend_property_info.defineProperty("name_length", 'int');
    _library._zend_property_info.defineProperty("offset", 'int');
});

_library._zend_compiler_context = Struct({});
_library._zend_compiler_context.size = 1;

_library._preload.push(function () {
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
});

_library.zend_compiler_context = _library._zend_compiler_context;

_library._znode = Struct({});
_library._znode.size = 1;

_library._preload.push(function () {
    _library._znode.size = 0;
    _library._znode.defineProperty("EA", 'uint');
    _library._znode.defineProperty("op_type", 'int');
    _library._znode.defineProperty("u", Union({}));
    _library._znode.fields.u.type.defineProperty("ast", ref.refType(_library.zend_ast));
    _library._znode.fields.u.type.defineProperty("constant", _library.zval);
    _library._znode.fields.u.type.defineProperty("op", _library.znode_op);
    _library._znode.fields.u.type.defineProperty("op_array", ref.refType(_library.zend_op_array));
});

_library.znode = _library._znode;

_library.zend_execute_data = _library._zend_execute_data;

_library.user_opcode_handler_t = ffi.Function('int', [ref.refType(_library._zend_execute_data)]);

_library._zend_label = Struct({});
_library._zend_label.size = 1;

_library._preload.push(function () {
    _library._zend_label.size = 0;
    _library._zend_label.defineProperty("brk_cont", 'int');
    _library._zend_label.defineProperty("opline_num", 'uint');
});

_library.zend_label = _library._zend_label;

_library.zend_visibility_string = [ref.refType('char'), ['uint']];
_library._functions['zend_visibility_string'] = _library.zend_visibility_string;

_library.zend_property_info = _library._zend_property_info;

_library._zend_internal_function_info = Struct({});
_library._zend_internal_function_info.size = 1;

_library._preload.push(function () {
    _library._zend_internal_function_info.size = 0;
    _library._zend_internal_function_info.defineProperty("_allow_null", 'uchar');
    _library._zend_internal_function_info.defineProperty("_class_name", ref.refType('char'));
    _library._zend_internal_function_info.defineProperty("_is_variadic", 'uchar');
    _library._zend_internal_function_info.defineProperty("_name", ref.refType('char'));
    _library._zend_internal_function_info.defineProperty("_name_len", 'uint');
    _library._zend_internal_function_info.defineProperty("_type_hint", 'uchar');
    _library._zend_internal_function_info.defineProperty("required_num_args", 'uint');
    _library._zend_internal_function_info.defineProperty("return_reference", 'uchar');
});

_library.zend_internal_function_info = _library._zend_internal_function_info;

_library._zend_function_call_entry = Struct({});
_library._zend_function_call_entry.size = 1;

_library._preload.push(function () {
    _library._zend_function_call_entry.size = 0;
    _library._zend_function_call_entry.defineProperty("arg_num", 'uint');
    _library._zend_function_call_entry.defineProperty("fbc", ref.refType(_library.zend_function));
    _library._zend_function_call_entry.defineProperty("uses_argument_unpacking", 'uchar');
});

_library.zend_function_call_entry = _library._zend_function_call_entry;

_library._zend_switch_entry = Struct({});
_library._zend_switch_entry.size = 1;

_library._preload.push(function () {
    _library._zend_switch_entry.size = 0;
    _library._zend_switch_entry.defineProperty("cond", _library.znode);
    _library._zend_switch_entry.defineProperty("control_var", 'int');
    _library._zend_switch_entry.defineProperty("default_case", 'int');
});

_library.zend_switch_entry = _library._zend_switch_entry;

require('./zend_llist.js');
_library._list_llist_element = Struct({});
_library._list_llist_element.size = 1;

_library._preload.push(function () {
    _library._list_llist_element.size = 0;
    _library._list_llist_element.defineProperty("dimensions", _library.zend_llist);
    _library._list_llist_element.defineProperty("value", _library.znode);
    _library._list_llist_element.defineProperty("var", _library.znode);
});

_library.list_llist_element = _library._list_llist_element;

_library.init_compiler = ['void', []];
_library._functions['init_compiler'] = _library.init_compiler;

_library.shutdown_compiler = ['void', []];
_library._functions['shutdown_compiler'] = _library.shutdown_compiler;

_library.zend_init_compiler_data_structures = ['void', []];
_library._functions['zend_init_compiler_data_structures'] = _library.zend_init_compiler_data_structures;

_library.zend_init_compiler_context = ['void', []];
_library._functions['zend_init_compiler_context'] = _library.zend_init_compiler_context;

_library.lex_scan = ['int', [ref.refType(_library.zval)]];
_library._functions['lex_scan'] = _library.lex_scan;

_library.startup_scanner = ['void', []];
_library._functions['startup_scanner'] = _library.startup_scanner;

_library.shutdown_scanner = ['void', []];
_library._functions['shutdown_scanner'] = _library.shutdown_scanner;

_library.zend_set_compiled_filename = [ref.refType('char'), [ref.refType('char')]];
_library._functions['zend_set_compiled_filename'] = _library.zend_set_compiled_filename;

_library.zend_restore_compiled_filename = ['void', [ref.refType('char')]];
_library._functions['zend_restore_compiled_filename'] = _library.zend_restore_compiled_filename;

_library.zend_get_compiled_filename = [ref.refType('char'), []];
_library._functions['zend_get_compiled_filename'] = _library.zend_get_compiled_filename;

_library.zend_get_compiled_lineno = ['int', []];
_library._functions['zend_get_compiled_lineno'] = _library.zend_get_compiled_lineno;

_library.zend_get_scanned_file_offset = ['ulong', []];
_library._functions['zend_get_scanned_file_offset'] = _library.zend_get_scanned_file_offset;

_library.zend_resolve_non_class_name = ['void', [ref.refType(_library.znode), ref.refType('uchar'), 'uchar', ref.refType(_library.HashTable)]];
_library._functions['zend_resolve_non_class_name'] = _library.zend_resolve_non_class_name;

_library.zend_resolve_function_name = ['void', [ref.refType(_library.znode), ref.refType('uchar')]];
_library._functions['zend_resolve_function_name'] = _library.zend_resolve_function_name;

_library.zend_resolve_const_name = ['void', [ref.refType(_library.znode), ref.refType('uchar')]];
_library._functions['zend_resolve_const_name'] = _library.zend_resolve_const_name;

_library.zend_resolve_class_name = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_resolve_class_name'] = _library.zend_resolve_class_name;

_library.zend_get_compiled_variable_name = [ref.refType('char'), [ref.refType(_library.zend_op_array), 'uint', ref.refType('int')]];
_library._functions['zend_get_compiled_variable_name'] = _library.zend_get_compiled_variable_name;

_library.zend_do_binary_op = ['void', ['uchar', ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_binary_op'] = _library.zend_do_binary_op;

_library.zend_do_unary_op = ['void', ['uchar', ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_unary_op'] = _library.zend_do_unary_op;

_library.zend_do_binary_assign_op = ['void', ['uchar', ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_binary_assign_op'] = _library.zend_do_binary_assign_op;

_library.zend_do_assign = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_assign'] = _library.zend_do_assign;

_library.zend_do_assign_ref = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_assign_ref'] = _library.zend_do_assign_ref;

_library.fetch_simple_variable = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['fetch_simple_variable'] = _library.fetch_simple_variable;

_library.fetch_simple_variable_ex = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'uchar']];
_library._functions['fetch_simple_variable_ex'] = _library.fetch_simple_variable_ex;

_library.zend_do_indirect_references = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_indirect_references'] = _library.zend_do_indirect_references;

_library.zend_do_fetch_static_variable = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_fetch_static_variable'] = _library.zend_do_fetch_static_variable;

_library.zend_do_fetch_global_variable = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_fetch_global_variable'] = _library.zend_do_fetch_global_variable;

_library.fetch_array_begin = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['fetch_array_begin'] = _library.fetch_array_begin;

_library.fetch_array_dim = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['fetch_array_dim'] = _library.fetch_array_dim;

_library.fetch_string_offset = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['fetch_string_offset'] = _library.fetch_string_offset;

_library.zend_do_fetch_static_member = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_fetch_static_member'] = _library.zend_do_fetch_static_member;

_library.zend_do_print = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_print'] = _library.zend_do_print;

_library.zend_do_echo = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_echo'] = _library.zend_do_echo;

_library.unary_op_type = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);

_library.binary_op_type = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);

_library.get_unary_op = [_library.unary_op_type, ['int']];
_library._functions['get_unary_op'] = _library.get_unary_op;

_library.get_binary_op = [_library.binary_op_type, ['int']];
_library._functions['get_binary_op'] = _library.get_binary_op;

_library.zend_do_while_cond = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_while_cond'] = _library.zend_do_while_cond;

_library.zend_do_while_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_while_end'] = _library.zend_do_while_end;

_library.zend_do_do_while_begin = ['void', []];
_library._functions['zend_do_do_while_begin'] = _library.zend_do_do_while_begin;

_library.zend_do_do_while_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_do_while_end'] = _library.zend_do_do_while_end;

_library.zend_do_if_cond = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_if_cond'] = _library.zend_do_if_cond;

_library.zend_do_if_after_statement = ['void', [ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_if_after_statement'] = _library.zend_do_if_after_statement;

_library.zend_do_if_end = ['void', []];
_library._functions['zend_do_if_end'] = _library.zend_do_if_end;

_library.zend_do_for_cond = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_for_cond'] = _library.zend_do_for_cond;

_library.zend_do_for_before_statement = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_for_before_statement'] = _library.zend_do_for_before_statement;

_library.zend_do_for_end = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_for_end'] = _library.zend_do_for_end;

_library.zend_do_pre_incdec = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_pre_incdec'] = _library.zend_do_pre_incdec;

_library.zend_do_post_incdec = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_post_incdec'] = _library.zend_do_post_incdec;

_library.zend_do_begin_variable_parse = ['void', []];
_library._functions['zend_do_begin_variable_parse'] = _library.zend_do_begin_variable_parse;

_library.zend_do_end_variable_parse = ['void', [ref.refType(_library.znode), 'int', 'int']];
_library._functions['zend_do_end_variable_parse'] = _library.zend_do_end_variable_parse;

_library.zend_check_writable_variable = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_check_writable_variable'] = _library.zend_check_writable_variable;

_library.zend_do_free = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_free'] = _library.zend_do_free;

_library.zend_do_add_string = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_add_string'] = _library.zend_do_add_string;

_library.zend_do_add_variable = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_add_variable'] = _library.zend_do_add_variable;

_library.zend_do_verify_access_types = ['int', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_verify_access_types'] = _library.zend_do_verify_access_types;

_library.zend_do_begin_function_declaration = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'int', ref.refType(_library.znode)]];
_library._functions['zend_do_begin_function_declaration'] = _library.zend_do_begin_function_declaration;

_library.zend_do_end_function_declaration = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_end_function_declaration'] = _library.zend_do_end_function_declaration;

_library.zend_do_receive_param = ['void', ['uchar', ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'uchar', 'uchar']];
_library._functions['zend_do_receive_param'] = _library.zend_do_receive_param;

_library.zend_do_begin_function_call = ['int', [ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_begin_function_call'] = _library.zend_do_begin_function_call;

_library.zend_do_begin_method_call = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_begin_method_call'] = _library.zend_do_begin_method_call;

_library.zend_do_clone = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_clone'] = _library.zend_do_clone;

_library.zend_do_begin_dynamic_function_call = ['void', [ref.refType(_library.znode), 'int']];
_library._functions['zend_do_begin_dynamic_function_call'] = _library.zend_do_begin_dynamic_function_call;

_library.zend_do_fetch_class = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_fetch_class'] = _library.zend_do_fetch_class;

_library.zend_do_build_full_name = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_build_full_name'] = _library.zend_do_build_full_name;

_library.zend_do_begin_class_member_function_call = ['int', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_begin_class_member_function_call'] = _library.zend_do_begin_class_member_function_call;

_library.zend_do_end_function_call = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'int']];
_library._functions['zend_do_end_function_call'] = _library.zend_do_end_function_call;

_library.zend_do_return = ['void', [ref.refType(_library.znode), 'int']];
_library._functions['zend_do_return'] = _library.zend_do_return;

_library.zend_do_yield = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_yield'] = _library.zend_do_yield;

_library.zend_do_handle_exception = ['void', []];
_library._functions['zend_do_handle_exception'] = _library.zend_do_handle_exception;

_library.zend_do_begin_lambda_function_declaration = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'int']];
_library._functions['zend_do_begin_lambda_function_declaration'] = _library.zend_do_begin_lambda_function_declaration;

_library.zend_do_fetch_lexical_variable = ['void', [ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_fetch_lexical_variable'] = _library.zend_do_fetch_lexical_variable;

_library.zend_do_try = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_try'] = _library.zend_do_try;

_library.zend_do_begin_catch = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_begin_catch'] = _library.zend_do_begin_catch;

_library.zend_do_bind_catch = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_bind_catch'] = _library.zend_do_bind_catch;

_library.zend_do_end_catch = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_end_catch'] = _library.zend_do_end_catch;

_library.zend_do_finally = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_finally'] = _library.zend_do_finally;

_library.zend_do_end_finally = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_end_finally'] = _library.zend_do_end_finally;

_library.zend_do_throw = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_throw'] = _library.zend_do_throw;

_library.do_bind_function = ['int', [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), ref.refType(_library.HashTable), 'uchar']];
_library._functions['do_bind_function'] = _library.do_bind_function;

_library.do_bind_class = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), ref.refType(_library.HashTable), 'uchar']];
_library._functions['do_bind_class'] = _library.do_bind_class;

_library.do_bind_inherited_class = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), ref.refType(_library.HashTable), ref.refType(_library.zend_class_entry), 'uchar']];
_library._functions['do_bind_inherited_class'] = _library.do_bind_inherited_class;

_library.zend_do_inherit_interfaces = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions['zend_do_inherit_interfaces'] = _library.zend_do_inherit_interfaces;

_library.zend_do_implement_interface = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions['zend_do_implement_interface'] = _library.zend_do_implement_interface;

_library.zend_do_implements_interface = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_implements_interface'] = _library.zend_do_implements_interface;

_library.zend_do_use_trait = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_use_trait'] = _library.zend_do_use_trait;

_library.zend_prepare_reference = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_prepare_reference'] = _library.zend_prepare_reference;

_library.zend_add_trait_precedence = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_add_trait_precedence'] = _library.zend_add_trait_precedence;

_library.zend_add_trait_alias = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_add_trait_alias'] = _library.zend_add_trait_alias;

_library.zend_do_implement_trait = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions['zend_do_implement_trait'] = _library.zend_do_implement_trait;

_library.zend_do_bind_traits = ['void', [ref.refType(_library.zend_class_entry)]];
_library._functions['zend_do_bind_traits'] = _library.zend_do_bind_traits;

_library.zend_do_inheritance = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions['zend_do_inheritance'] = _library.zend_do_inheritance;

_library.zend_do_early_binding = ['void', []];
_library._functions['zend_do_early_binding'] = _library.zend_do_early_binding;

_library.zend_do_delayed_early_binding = ['void', [ref.refType(_library.zend_op_array)]];
_library._functions['zend_do_delayed_early_binding'] = _library.zend_do_delayed_early_binding;

_library.zend_do_pass_param = ['void', [ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_pass_param'] = _library.zend_do_pass_param;

_library.zend_do_unpack_params = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_unpack_params'] = _library.zend_do_unpack_params;

_library.zend_do_boolean_or_begin = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_boolean_or_begin'] = _library.zend_do_boolean_or_begin;

_library.zend_do_boolean_or_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_boolean_or_end'] = _library.zend_do_boolean_or_end;

_library.zend_do_boolean_and_begin = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_boolean_and_begin'] = _library.zend_do_boolean_and_begin;

_library.zend_do_boolean_and_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_boolean_and_end'] = _library.zend_do_boolean_and_end;

_library.zend_do_brk_cont = ['void', ['uchar', ref.refType(_library.znode)]];
_library._functions['zend_do_brk_cont'] = _library.zend_do_brk_cont;

_library.zend_do_switch_cond = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_switch_cond'] = _library.zend_do_switch_cond;

_library.zend_do_switch_end = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_switch_end'] = _library.zend_do_switch_end;

_library.zend_do_case_before_statement = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_case_before_statement'] = _library.zend_do_case_before_statement;

_library.zend_do_case_after_statement = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_case_after_statement'] = _library.zend_do_case_after_statement;

_library.zend_do_default_before_statement = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_default_before_statement'] = _library.zend_do_default_before_statement;

_library.zend_do_begin_class_declaration = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_begin_class_declaration'] = _library.zend_do_begin_class_declaration;

_library.zend_do_end_class_declaration = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_end_class_declaration'] = _library.zend_do_end_class_declaration;

_library.zend_do_declare_property = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'uint']];
_library._functions['zend_do_declare_property'] = _library.zend_do_declare_property;

_library.zend_do_declare_class_constant = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_declare_class_constant'] = _library.zend_do_declare_class_constant;

_library.zend_do_fetch_property = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_fetch_property'] = _library.zend_do_fetch_property;

_library.zend_do_halt_compiler_register = ['void', []];
_library._functions['zend_do_halt_compiler_register'] = _library.zend_do_halt_compiler_register;

_library.zend_do_push_object = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_push_object'] = _library.zend_do_push_object;

_library.zend_do_pop_object = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_pop_object'] = _library.zend_do_pop_object;

_library.zend_do_begin_new_object = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_begin_new_object'] = _library.zend_do_begin_new_object;

_library.zend_do_end_new_object = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_end_new_object'] = _library.zend_do_end_new_object;

_library.zend_do_fetch_constant = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'uchar']];
_library._functions['zend_do_fetch_constant'] = _library.zend_do_fetch_constant;

_library.zend_do_shell_exec = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_shell_exec'] = _library.zend_do_shell_exec;

_library.zend_do_init_array = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_init_array'] = _library.zend_do_init_array;

_library.zend_do_add_array_element = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_add_array_element'] = _library.zend_do_add_array_element;

_library.zend_do_add_static_array_element = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions['zend_do_add_static_array_element'] = _library.zend_do_add_static_array_element;

_library.zend_do_list_init = ['void', []];
_library._functions['zend_do_list_init'] = _library.zend_do_list_init;

_library.zend_do_list_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_list_end'] = _library.zend_do_list_end;

_library.zend_do_add_list_element = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_add_list_element'] = _library.zend_do_add_list_element;

_library.zend_do_new_list_begin = ['void', []];
_library._functions['zend_do_new_list_begin'] = _library.zend_do_new_list_begin;

_library.zend_do_new_list_end = ['void', []];
_library._functions['zend_do_new_list_end'] = _library.zend_do_new_list_end;

_library.zend_init_list = ['void', [ref.refType('void'), ref.refType('void')]];
_library._functions['zend_init_list'] = _library.zend_init_list;

_library.zend_add_to_list = ['void', [ref.refType('void'), ref.refType('void')]];
_library._functions['zend_add_to_list'] = _library.zend_add_to_list;

_library.zend_do_cast = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_cast'] = _library.zend_do_cast;

_library.zend_do_include_or_eval = ['void', ['int', ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_include_or_eval'] = _library.zend_do_include_or_eval;

_library.zend_do_unset = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_unset'] = _library.zend_do_unset;

_library.zend_do_isset_or_isempty = ['void', ['int', ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_isset_or_isempty'] = _library.zend_do_isset_or_isempty;

_library.zend_do_instanceof = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_instanceof'] = _library.zend_do_instanceof;

_library.zend_do_foreach_begin = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_foreach_begin'] = _library.zend_do_foreach_begin;

_library.zend_do_foreach_cont = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_foreach_cont'] = _library.zend_do_foreach_cont;

_library.zend_do_foreach_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_foreach_end'] = _library.zend_do_foreach_end;

_library.zend_do_declare_begin = ['void', []];
_library._functions['zend_do_declare_begin'] = _library.zend_do_declare_begin;

_library.zend_do_declare_stmt = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_declare_stmt'] = _library.zend_do_declare_stmt;

_library.zend_do_declare_end = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_declare_end'] = _library.zend_do_declare_end;

_library.zend_do_exit = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_exit'] = _library.zend_do_exit;

_library.zend_do_begin_silence = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_begin_silence'] = _library.zend_do_begin_silence;

_library.zend_do_end_silence = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_end_silence'] = _library.zend_do_end_silence;

_library.zend_do_jmp_set = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_jmp_set'] = _library.zend_do_jmp_set;

_library.zend_do_jmp_set_else = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_jmp_set_else'] = _library.zend_do_jmp_set_else;

_library.zend_do_begin_qm_op = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_begin_qm_op'] = _library.zend_do_begin_qm_op;

_library.zend_do_qm_true = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_qm_true'] = _library.zend_do_qm_true;

_library.zend_do_qm_false = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_qm_false'] = _library.zend_do_qm_false;

_library.zend_do_extended_info = ['void', []];
_library._functions['zend_do_extended_info'] = _library.zend_do_extended_info;

_library.zend_do_extended_fcall_begin = ['void', []];
_library._functions['zend_do_extended_fcall_begin'] = _library.zend_do_extended_fcall_begin;

_library.zend_do_extended_fcall_end = ['void', []];
_library._functions['zend_do_extended_fcall_end'] = _library.zend_do_extended_fcall_end;

_library.zend_do_ticks = ['void', []];
_library._functions['zend_do_ticks'] = _library.zend_do_ticks;

_library.zend_do_abstract_method = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_abstract_method'] = _library.zend_do_abstract_method;

_library.zend_do_declare_constant = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_declare_constant'] = _library.zend_do_declare_constant;

_library.zend_do_build_namespace_name = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_build_namespace_name'] = _library.zend_do_build_namespace_name;

_library.zend_do_begin_namespace = ['void', [ref.refType(_library.znode), 'uchar']];
_library._functions['zend_do_begin_namespace'] = _library.zend_do_begin_namespace;

_library.zend_do_end_namespace = ['void', []];
_library._functions['zend_do_end_namespace'] = _library.zend_do_end_namespace;

_library.zend_verify_namespace = ['void', []];
_library._functions['zend_verify_namespace'] = _library.zend_verify_namespace;

_library.zend_do_use = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_use'] = _library.zend_do_use;

_library.zend_do_use_non_class = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'int', 'uchar', ref.refType(_library.HashTable), ref.refType(_library.HashTable)]];
_library._functions['zend_do_use_non_class'] = _library.zend_do_use_non_class;

_library.zend_do_use_function = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_use_function'] = _library.zend_do_use_function;

_library.zend_do_use_const = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_use_const'] = _library.zend_do_use_const;

_library.zend_do_end_compilation = ['void', []];
_library._functions['zend_do_end_compilation'] = _library.zend_do_end_compilation;

require('./zend_ast.js');
_library.zend_do_constant_expression = ['void', [ref.refType(_library.znode), ref.refType(_library.zend_ast)]];
_library._functions['zend_do_constant_expression'] = _library.zend_do_constant_expression;

_library.zend_do_resolve_class_name = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions['zend_do_resolve_class_name'] = _library.zend_do_resolve_class_name;

_library.zend_do_label = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_label'] = _library.zend_do_label;

_library.zend_do_goto = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_goto'] = _library.zend_do_goto;

_library.zend_resolve_goto_label = ['void', [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), 'int']];
_library._functions['zend_resolve_goto_label'] = _library.zend_resolve_goto_label;

_library.zend_release_labels = ['void', ['int']];
_library._functions['zend_release_labels'] = _library.zend_release_labels;

_library.function_add_ref = ['void', [ref.refType(_library.zend_function)]];
_library._functions['function_add_ref'] = _library.function_add_ref;

require('./zend_stream.js');
_library.compile_file = [ref.refType(_library.zend_op_array), [ref.refType(_library.zend_file_handle), 'int']];
_library._functions['compile_file'] = _library.compile_file;

_library.compile_string = [ref.refType(_library.zend_op_array), [ref.refType(_library.zval), ref.refType('char')]];
_library._functions['compile_string'] = _library.compile_string;

_library.compile_filename = [ref.refType(_library.zend_op_array), ['int', ref.refType(_library.zval)]];
_library._functions['compile_filename'] = _library.compile_filename;

_library.open_file_for_scanning = ['int', [ref.refType(_library.zend_file_handle)]];
_library._functions['open_file_for_scanning'] = _library.open_file_for_scanning;

_library.init_op_array = ['void', [ref.refType(_library.zend_op_array), 'uchar', 'int']];
_library._functions['init_op_array'] = _library.init_op_array;

_library.destroy_op_array = ['void', [ref.refType(_library.zend_op_array)]];
_library._functions['destroy_op_array'] = _library.destroy_op_array;

_library.zend_destroy_file_handle = ['void', [ref.refType(_library.zend_file_handle)]];
_library._functions['zend_destroy_file_handle'] = _library.zend_destroy_file_handle;

_library.zend_cleanup_class_data = ['int', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions['zend_cleanup_class_data'] = _library.zend_cleanup_class_data;

_library.zend_cleanup_user_class_data = ['int', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions['zend_cleanup_user_class_data'] = _library.zend_cleanup_user_class_data;

_library.zend_cleanup_internal_class_data = ['void', [ref.refType(_library.zend_class_entry)]];
_library._functions['zend_cleanup_internal_class_data'] = _library.zend_cleanup_internal_class_data;

_library.zend_cleanup_internal_classes = ['void', []];
_library._functions['zend_cleanup_internal_classes'] = _library.zend_cleanup_internal_classes;

_library.zend_cleanup_function_data = ['int', [ref.refType(_library.zend_function)]];
_library._functions['zend_cleanup_function_data'] = _library.zend_cleanup_function_data;

_library.zend_cleanup_function_data_full = ['int', [ref.refType(_library.zend_function)]];
_library._functions['zend_cleanup_function_data_full'] = _library.zend_cleanup_function_data_full;

_library.clean_non_persistent_function_full = ['int', [ref.refType(_library.zend_function)]];
_library._functions['clean_non_persistent_function_full'] = _library.clean_non_persistent_function_full;

_library.clean_non_persistent_class_full = ['int', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions['clean_non_persistent_class_full'] = _library.clean_non_persistent_class_full;

_library.destroy_zend_function = ['void', [ref.refType(_library.zend_function)]];
_library._functions['destroy_zend_function'] = _library.destroy_zend_function;

_library.zend_function_dtor = ['void', [ref.refType(_library.zend_function)]];
_library._functions['zend_function_dtor'] = _library.zend_function_dtor;

_library.destroy_zend_class = ['void', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions['destroy_zend_class'] = _library.destroy_zend_class;

_library.zend_class_add_ref = ['void', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions['zend_class_add_ref'] = _library.zend_class_add_ref;

_library.zend_mangle_property_name = ['void', [ref.refType(ref.refType('char')), ref.refType('int'), ref.refType('char'), 'int', ref.refType('char'), 'int', 'int']];
_library._functions['zend_mangle_property_name'] = _library.zend_mangle_property_name;

_library.zend_unmangle_property_name_ex = ['int', [ref.refType('char'), 'int', ref.refType(ref.refType('char')), ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions['zend_unmangle_property_name_ex'] = _library.zend_unmangle_property_name_ex;

_library.get_next_op = [ref.refType(_library.zend_op), [ref.refType(_library.zend_op_array)]];
_library._functions['get_next_op'] = _library.get_next_op;

_library.init_op = ['void', [ref.refType(_library.zend_op)]];
_library._functions['init_op'] = _library.init_op;

_library.get_next_op_number = ['int', [ref.refType(_library.zend_op_array)]];
_library._functions['get_next_op_number'] = _library.get_next_op_number;

_library.print_class = ['int', [ref.refType(_library.zend_class_entry)]];
_library._functions['print_class'] = _library.print_class;

_library.print_op_array = ['void', [ref.refType(_library.zend_op_array), 'int']];
_library._functions['print_op_array'] = _library.print_op_array;

_library.pass_two = ['int', [ref.refType(_library.zend_op_array)]];
_library._functions['pass_two'] = _library.pass_two;

_library.get_next_brk_cont_element = [ref.refType(_library.zend_brk_cont_element), [ref.refType(_library.zend_op_array)]];
_library._functions['get_next_brk_cont_element'] = _library.get_next_brk_cont_element;

_library.zend_do_first_catch = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_do_first_catch'] = _library.zend_do_first_catch;

_library.zend_initialize_try_catch_element = ['void', [ref.refType(_library.znode)]];
_library._functions['zend_initialize_try_catch_element'] = _library.zend_initialize_try_catch_element;

_library.zend_do_mark_last_catch = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions['zend_do_mark_last_catch'] = _library.zend_do_mark_last_catch;

_library.zend_is_compiling = ['uchar', []];
_library._functions['zend_is_compiling'] = _library.zend_is_compiling;

_library.zend_make_compiled_string_description = [ref.refType('char'), [ref.refType('char')]];
_library._functions['zend_make_compiled_string_description'] = _library.zend_make_compiled_string_description;

_library.zend_initialize_class_data = ['void', [ref.refType(_library.zend_class_entry), 'uchar']];
_library._functions['zend_initialize_class_data'] = _library.zend_initialize_class_data;

_library.zend_get_class_fetch_type = ['int', [ref.refType('char'), 'uint']];
_library._functions['zend_get_class_fetch_type'] = _library.zend_get_class_fetch_type;

_library.zend_auto_global_callback = ffi.Function('uchar', [ref.refType('char'), 'uint']);

_library._zend_auto_global = Struct({});
_library._zend_auto_global.size = 1;

_library._preload.push(function () {
    _library._zend_auto_global.size = 0;
    _library._zend_auto_global.defineProperty("armed", 'uchar');
    _library._zend_auto_global.defineProperty("auto_global_callback", _library.zend_auto_global_callback);
    _library._zend_auto_global.defineProperty("jit", 'uchar');
    _library._zend_auto_global.defineProperty("name", ref.refType('char'));
    _library._zend_auto_global.defineProperty("name_len", 'uint');
});

_library.zend_auto_global = _library._zend_auto_global;

_library.zend_register_auto_global = ['int', [ref.refType('char'), 'uint', 'uchar', _library.zend_auto_global_callback]];
_library._functions['zend_register_auto_global'] = _library.zend_register_auto_global;

_library.zend_activate_auto_globals = ['void', []];
_library._functions['zend_activate_auto_globals'] = _library.zend_activate_auto_globals;

_library.zend_is_auto_global = ['uchar', [ref.refType('char'), 'uint']];
_library._functions['zend_is_auto_global'] = _library.zend_is_auto_global;

_library.zend_is_auto_global_quick = ['uchar', [ref.refType('char'), 'uint', 'ulong']];
_library._functions['zend_is_auto_global_quick'] = _library.zend_is_auto_global_quick;

_library.zend_dirname = ['ulong', [ref.refType('char'), 'ulong']];
_library._functions['zend_dirname'] = _library.zend_dirname;

_library.zendlex = ['int', [ref.refType(_library.znode)]];
_library._functions['zendlex'] = _library.zendlex;

_library.zend_add_literal = ['int', [ref.refType(_library.zend_op_array), ref.refType(_library.zval)]];
_library._functions['zend_add_literal'] = _library.zend_add_literal;


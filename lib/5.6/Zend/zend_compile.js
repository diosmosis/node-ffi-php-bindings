var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._zend_internal_function = Struct({
    "arg_info": ref.refType(_library.zend_arg_info),
    "fn_flags": 'uint',
    "function_name": ref.refType('char'),
    "handler": ffi.Function('void', ['int', ref.refType(_library._zval_struct), ref.refType(ref.refType(_library._zval_struct)), ref.refType(_library._zval_struct), 'int']),
    "module": ref.refType(_library._zend_module_entry),
    "num_args": 'uint',
    "prototype": ref.refType(_library._zend_function),
    "required_num_args": 'uint',
    "scope": ref.refType(_library.zend_class_entry),
    "type": 'uchar'
});

_library.zend_internal_function = _library._zend_internal_function;

_library._zend_op_array = Struct({
    "T": 'uint',
    "arg_info": ref.refType(_library.zend_arg_info),
    "brk_cont_array": ref.refType(_library.zend_brk_cont_element),
    "doc_comment": ref.refType('char'),
    "doc_comment_len": 'uint',
    "early_binding": 'uint',
    "filename": ref.refType('char'),
    "fn_flags": 'uint',
    "function_name": ref.refType('char'),
    "has_finally_block": 'uchar',
    "last": 'uint',
    "last_brk_cont": 'int',
    "last_cache_slot": 'int',
    "last_literal": 'int',
    "last_try_catch": 'int',
    "last_var": 'int',
    "line_end": 'uint',
    "line_start": 'uint',
    "literals": ref.refType(_library.zend_literal),
    "nested_calls": 'uint',
    "num_args": 'uint',
    "opcodes": ref.refType(_library.zend_op),
    "prototype": ref.refType(_library._zend_function),
    "refcount": ref.refType('uint'),
    "required_num_args": 'uint',
    "reserved": RefArray(ref.refType('void'), 4),
    "run_time_cache": ref.refType(ref.refType('void')),
    "scope": ref.refType(_library.zend_class_entry),
    "static_variables": ref.refType(_library.HashTable),
    "this_var": 'uint',
    "try_catch_array": ref.refType(_library.zend_try_catch_element),
    "type": 'uchar',
    "used_stack": 'uint',
    "vars": ref.refType(_library.zend_compiled_variable)
});

_library.zend_op_array = _library._zend_op_array;

_library._zend_function = Union({
    "common": Struct({
        "arg_info": ref.refType(_library.zend_arg_info),
        "fn_flags": 'uint',
        "function_name": ref.refType('char'),
        "num_args": 'uint',
        "prototype": ref.refType(_library._zend_function),
        "required_num_args": 'uint',
        "scope": ref.refType(_library.zend_class_entry),
        "type": 'uchar'
    });,
    "internal_function": _library.zend_internal_function,
    "op_array": _library.zend_op_array,
    "type": 'uchar'
});

_library._zend_property_info = Struct({
    "ce": ref.refType(_library.zend_class_entry),
    "doc_comment": ref.refType('char'),
    "doc_comment_len": 'int',
    "flags": 'uint',
    "h": 'ulong',
    "name": ref.refType('char'),
    "name_length": 'int',
    "offset": 'int'
});

_library._zend_literal = Struct({
    "cache_slot": 'uint',
    "constant": _library.zval,
    "hash_value": 'ulong'
});

_library._zend_op_array = Struct({
    "T": 'uint',
    "arg_info": ref.refType(_library.zend_arg_info),
    "brk_cont_array": ref.refType(_library.zend_brk_cont_element),
    "doc_comment": ref.refType('char'),
    "doc_comment_len": 'uint',
    "early_binding": 'uint',
    "filename": ref.refType('char'),
    "fn_flags": 'uint',
    "function_name": ref.refType('char'),
    "has_finally_block": 'uchar',
    "last": 'uint',
    "last_brk_cont": 'int',
    "last_cache_slot": 'int',
    "last_literal": 'int',
    "last_try_catch": 'int',
    "last_var": 'int',
    "line_end": 'uint',
    "line_start": 'uint',
    "literals": ref.refType(_library.zend_literal),
    "nested_calls": 'uint',
    "num_args": 'uint',
    "opcodes": ref.refType(_library.zend_op),
    "prototype": ref.refType(_library._zend_function),
    "refcount": ref.refType('uint'),
    "required_num_args": 'uint',
    "reserved": RefArray(ref.refType('void'), 4),
    "run_time_cache": ref.refType(ref.refType('void')),
    "scope": ref.refType(_library.zend_class_entry),
    "static_variables": ref.refType(_library.HashTable),
    "this_var": 'uint',
    "try_catch_array": ref.refType(_library.zend_try_catch_element),
    "type": 'uchar',
    "used_stack": 'uint',
    "vars": ref.refType(_library.zend_compiled_variable)
});

_library.opcode_handler_t = ffi.Function('int', [ref.refType(_library._zend_execute_data)]);

_library._znode_op = Union({
    "constant": 'uint',
    "hash": 'ulong',
    "jmp_addr": ref.refType(_library.zend_op),
    "literal": ref.refType(_library.zend_literal),
    "num": 'uint',
    "opline_num": 'uint',
    "ptr": ref.refType('void'),
    "var": 'uint',
    "zv": ref.refType(_library.zval)
});

_library.znode_op = _library._znode_op;

_library._zend_op = Struct({
    "extended_value": 'ulong',
    "handler": _library.opcode_handler_t,
    "lineno": 'uint',
    "op1": _library.znode_op,
    "op1_type": 'uchar',
    "op2": _library.znode_op,
    "op2_type": 'uchar',
    "opcode": 'uchar',
    "result": _library.znode_op,
    "result_type": 'uchar'
});

_library._zend_op = Struct({
    "extended_value": 'ulong',
    "handler": _library.opcode_handler_t,
    "lineno": 'uint',
    "op1": _library.znode_op,
    "op1_type": 'uchar',
    "op2": _library.znode_op,
    "op2_type": 'uchar',
    "opcode": 'uchar',
    "result": _library.znode_op,
    "result_type": 'uchar'
});

_library.zend_op = _library._zend_op;

_library._zend_compiler_context = Struct({
    "backpatch_count": 'int',
    "current_brk_cont": 'int',
    "in_finally": 'int',
    "labels": ref.refType(_library.HashTable),
    "literals_size": 'int',
    "nested_calls": 'int',
    "opcodes_size": 'uint',
    "used_stack": 'int',
    "vars_size": 'int'
});

_library.zend_compiler_context = _library._zend_compiler_context;

_library.zend_literal = _library._zend_literal;

_library._znode = Struct({
    "EA": 'uint',
    "op_type": 'int',
    "u": Union({
        "ast": ref.refType(_library.zend_ast),
        "constant": _library.zval,
        "op": _library.znode_op,
        "op_array": ref.refType(_library.zend_op_array)
    });
});

_library.znode = _library._znode;

_library._zend_function_state = Struct({
    "arguments": ref.refType(ref.refType('void')),
    "function": ref.refType(_library.zend_function)
});

_library.zend_function_state = _library._zend_function_state;

_library._zend_execute_data = Struct({
    "call": ref.refType(_library.call_slot),
    "call_slots": ref.refType(_library.call_slot),
    "current_called_scope": ref.refType(_library.zend_class_entry),
    "current_scope": ref.refType(_library.zend_class_entry),
    "current_this": ref.refType(_library.zval),
    "delayed_exception": ref.refType(_library.zval),
    "fast_ret": ref.refType(_library._zend_op),
    "function_state": _library.zend_function_state,
    "nested": 'uchar',
    "object": ref.refType(_library.zval),
    "old_error_reporting": ref.refType(_library.zval),
    "op_array": ref.refType(_library.zend_op_array),
    "opline": ref.refType(_library._zend_op),
    "original_return_value": ref.refType(ref.refType(_library.zval)),
    "prev_execute_data": ref.refType(_library._zend_execute_data),
    "symbol_table": ref.refType(_library.HashTable)
});

_library._zend_execute_data = Struct({
    "call": ref.refType(_library.call_slot),
    "call_slots": ref.refType(_library.call_slot),
    "current_called_scope": ref.refType(_library.zend_class_entry),
    "current_scope": ref.refType(_library.zend_class_entry),
    "current_this": ref.refType(_library.zval),
    "delayed_exception": ref.refType(_library.zval),
    "fast_ret": ref.refType(_library._zend_op),
    "function_state": _library.zend_function_state,
    "nested": 'uchar',
    "object": ref.refType(_library.zval),
    "old_error_reporting": ref.refType(_library.zval),
    "op_array": ref.refType(_library.zend_op_array),
    "opline": ref.refType(_library._zend_op),
    "original_return_value": ref.refType(ref.refType(_library.zval)),
    "prev_execute_data": ref.refType(_library._zend_execute_data),
    "symbol_table": ref.refType(_library.HashTable)
});

_library.zend_execute_data = _library._zend_execute_data;

_library.user_opcode_handler_t = ffi.Function('int', [ref.refType(_library._zend_execute_data)]);

_library._zend_brk_cont_element = Struct({
    "brk": 'int',
    "cont": 'int',
    "parent": 'int',
    "start": 'int'
});

_library.zend_brk_cont_element = _library._zend_brk_cont_element;

_library._zend_label = Struct({
    "brk_cont": 'int',
    "opline_num": 'uint'
});

_library.zend_label = _library._zend_label;

_library._zend_try_catch_element = Struct({
    "catch_op": 'uint',
    "finally_end": 'uint',
    "finally_op": 'uint',
    "try_op": 'uint'
});

_library.zend_try_catch_element = _library._zend_try_catch_element;

_library.zend_visibility_string = [ref.refType('char'), ['uint']];
_library._functions.push(_library.zend_visibility_string);

_library.zend_property_info = _library._zend_property_info;

_library._zend_arg_info = Struct({
    "allow_null": 'uchar',
    "class_name": ref.refType('char'),
    "class_name_len": 'uint',
    "is_variadic": 'uchar',
    "name": ref.refType('char'),
    "name_len": 'uint',
    "pass_by_reference": 'uchar',
    "type_hint": 'uchar'
});

_library.zend_arg_info = _library._zend_arg_info;

_library._zend_internal_function_info = Struct({
    "_allow_null": 'uchar',
    "_class_name": ref.refType('char'),
    "_is_variadic": 'uchar',
    "_name": ref.refType('char'),
    "_name_len": 'uint',
    "_type_hint": 'uchar',
    "required_num_args": 'uint',
    "return_reference": 'uchar'
});

_library.zend_internal_function_info = _library._zend_internal_function_info;

_library._zend_compiled_variable = Struct({
    "hash_value": 'ulong',
    "name": ref.refType('char'),
    "name_len": 'int'
});

_library.zend_compiled_variable = _library._zend_compiled_variable;

_library.zend_function = _library._zend_function;

_library._zend_function_call_entry = Struct({
    "arg_num": 'uint',
    "fbc": ref.refType(_library.zend_function),
    "uses_argument_unpacking": 'uchar'
});

_library.zend_function_call_entry = _library._zend_function_call_entry;

_library._zend_switch_entry = Struct({
    "cond": _library.znode,
    "control_var": 'int',
    "default_case": 'int'
});

_library.zend_switch_entry = _library._zend_switch_entry;

_library._list_llist_element = Struct({
    "dimensions": _library.zend_llist,
    "value": _library.znode,
    "var": _library.znode
});

_library.list_llist_element = _library._list_llist_element;

_library._call_slot = Struct({
    "called_scope": ref.refType(_library.zend_class_entry),
    "fbc": ref.refType(_library.zend_function),
    "is_ctor_call": 'uchar',
    "is_ctor_result_used": 'uchar',
    "num_additional_args": 'uint',
    "object": ref.refType(_library.zval)
});

_library.call_slot = _library._call_slot;

_library.init_compiler = ['void', []];
_library._functions.push(_library.init_compiler);

_library.shutdown_compiler = ['void', []];
_library._functions.push(_library.shutdown_compiler);

_library.zend_init_compiler_data_structures = ['void', []];
_library._functions.push(_library.zend_init_compiler_data_structures);

_library.zend_init_compiler_context = ['void', []];
_library._functions.push(_library.zend_init_compiler_context);

_library.lex_scan = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.lex_scan);

_library.startup_scanner = ['void', []];
_library._functions.push(_library.startup_scanner);

_library.shutdown_scanner = ['void', []];
_library._functions.push(_library.shutdown_scanner);

_library.zend_set_compiled_filename = [ref.refType('char'), [ref.refType('char')]];
_library._functions.push(_library.zend_set_compiled_filename);

_library.zend_restore_compiled_filename = ['void', [ref.refType('char')]];
_library._functions.push(_library.zend_restore_compiled_filename);

_library.zend_get_compiled_filename = [ref.refType('char'), []];
_library._functions.push(_library.zend_get_compiled_filename);

_library.zend_get_compiled_lineno = ['int', []];
_library._functions.push(_library.zend_get_compiled_lineno);

_library.zend_get_scanned_file_offset = ['ulong', []];
_library._functions.push(_library.zend_get_scanned_file_offset);

_library.zend_resolve_non_class_name = ['void', [ref.refType(_library.znode), ref.refType('uchar'), 'uchar', ref.refType(_library.HashTable)]];
_library._functions.push(_library.zend_resolve_non_class_name);

_library.zend_resolve_function_name = ['void', [ref.refType(_library.znode), ref.refType('uchar')]];
_library._functions.push(_library.zend_resolve_function_name);

_library.zend_resolve_const_name = ['void', [ref.refType(_library.znode), ref.refType('uchar')]];
_library._functions.push(_library.zend_resolve_const_name);

_library.zend_resolve_class_name = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_resolve_class_name);

_library.zend_get_compiled_variable_name = [ref.refType('char'), [ref.refType(_library.zend_op_array), 'uint', ref.refType('int')]];
_library._functions.push(_library.zend_get_compiled_variable_name);

_library.zend_do_binary_op = ['void', ['uchar', ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_binary_op);

_library.zend_do_unary_op = ['void', ['uchar', ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_unary_op);

_library.zend_do_binary_assign_op = ['void', ['uchar', ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_binary_assign_op);

_library.zend_do_assign = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_assign);

_library.zend_do_assign_ref = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_assign_ref);

_library.fetch_simple_variable = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.fetch_simple_variable);

_library.fetch_simple_variable_ex = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'uchar']];
_library._functions.push(_library.fetch_simple_variable_ex);

_library.zend_do_indirect_references = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_indirect_references);

_library.zend_do_fetch_static_variable = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_fetch_static_variable);

_library.zend_do_fetch_global_variable = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_fetch_global_variable);

_library.fetch_array_begin = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.fetch_array_begin);

_library.fetch_array_dim = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.fetch_array_dim);

_library.fetch_string_offset = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.fetch_string_offset);

_library.zend_do_fetch_static_member = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_fetch_static_member);

_library.zend_do_print = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_print);

_library.zend_do_echo = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_echo);

_library.unary_op_type = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);

_library.binary_op_type = ffi.Function('int', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct)]);

_library.get_unary_op = [_library.unary_op_type, ['int']];
_library._functions.push(_library.get_unary_op);

_library.get_binary_op = [_library.binary_op_type, ['int']];
_library._functions.push(_library.get_binary_op);

_library.zend_do_while_cond = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_while_cond);

_library.zend_do_while_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_while_end);

_library.zend_do_do_while_begin = ['void', []];
_library._functions.push(_library.zend_do_do_while_begin);

_library.zend_do_do_while_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_do_while_end);

_library.zend_do_if_cond = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_if_cond);

_library.zend_do_if_after_statement = ['void', [ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_if_after_statement);

_library.zend_do_if_end = ['void', []];
_library._functions.push(_library.zend_do_if_end);

_library.zend_do_for_cond = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_for_cond);

_library.zend_do_for_before_statement = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_for_before_statement);

_library.zend_do_for_end = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_for_end);

_library.zend_do_pre_incdec = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_pre_incdec);

_library.zend_do_post_incdec = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_post_incdec);

_library.zend_do_begin_variable_parse = ['void', []];
_library._functions.push(_library.zend_do_begin_variable_parse);

_library.zend_do_end_variable_parse = ['void', [ref.refType(_library.znode), 'int', 'int']];
_library._functions.push(_library.zend_do_end_variable_parse);

_library.zend_check_writable_variable = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_check_writable_variable);

_library.zend_do_free = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_free);

_library.zend_do_add_string = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_add_string);

_library.zend_do_add_variable = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_add_variable);

_library.zend_do_verify_access_types = ['int', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_verify_access_types);

_library.zend_do_begin_function_declaration = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'int', ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_begin_function_declaration);

_library.zend_do_end_function_declaration = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_end_function_declaration);

_library.zend_do_receive_param = ['void', ['uchar', ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'uchar', 'uchar']];
_library._functions.push(_library.zend_do_receive_param);

_library.zend_do_begin_function_call = ['int', [ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_begin_function_call);

_library.zend_do_begin_method_call = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_begin_method_call);

_library.zend_do_clone = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_clone);

_library.zend_do_begin_dynamic_function_call = ['void', [ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_begin_dynamic_function_call);

_library.zend_do_fetch_class = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_fetch_class);

_library.zend_do_build_full_name = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_build_full_name);

_library.zend_do_begin_class_member_function_call = ['int', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_begin_class_member_function_call);

_library.zend_do_end_function_call = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'int']];
_library._functions.push(_library.zend_do_end_function_call);

_library.zend_do_return = ['void', [ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_return);

_library.zend_do_yield = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_yield);

_library.zend_do_handle_exception = ['void', []];
_library._functions.push(_library.zend_do_handle_exception);

_library.zend_do_begin_lambda_function_declaration = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'int']];
_library._functions.push(_library.zend_do_begin_lambda_function_declaration);

_library.zend_do_fetch_lexical_variable = ['void', [ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_fetch_lexical_variable);

_library.zend_do_try = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_try);

_library.zend_do_begin_catch = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_begin_catch);

_library.zend_do_bind_catch = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_bind_catch);

_library.zend_do_end_catch = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_end_catch);

_library.zend_do_finally = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_finally);

_library.zend_do_end_finally = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_end_finally);

_library.zend_do_throw = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_throw);

_library.do_bind_function = ['int', [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), ref.refType(_library.HashTable), 'uchar']];
_library._functions.push(_library.do_bind_function);

_library.do_bind_class = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), ref.refType(_library.HashTable), 'uchar']];
_library._functions.push(_library.do_bind_class);

_library.do_bind_inherited_class = [ref.refType(_library.zend_class_entry), [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), ref.refType(_library.HashTable), ref.refType(_library.zend_class_entry), 'uchar']];
_library._functions.push(_library.do_bind_inherited_class);

_library.zend_do_inherit_interfaces = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.zend_do_inherit_interfaces);

_library.zend_do_implement_interface = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.zend_do_implement_interface);

_library.zend_do_implements_interface = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_implements_interface);

_library.zend_do_use_trait = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_use_trait);

_library.zend_prepare_reference = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_prepare_reference);

_library.zend_add_trait_precedence = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_add_trait_precedence);

_library.zend_add_trait_alias = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_add_trait_alias);

_library.zend_do_implement_trait = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.zend_do_implement_trait);

_library.zend_do_bind_traits = ['void', [ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.zend_do_bind_traits);

_library.zend_do_inheritance = ['void', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.zend_do_inheritance);

_library.zend_do_early_binding = ['void', []];
_library._functions.push(_library.zend_do_early_binding);

_library.zend_do_delayed_early_binding = ['void', [ref.refType(_library.zend_op_array)]];
_library._functions.push(_library.zend_do_delayed_early_binding);

_library.zend_do_pass_param = ['void', [ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_pass_param);

_library.zend_do_unpack_params = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_unpack_params);

_library.zend_do_boolean_or_begin = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_boolean_or_begin);

_library.zend_do_boolean_or_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_boolean_or_end);

_library.zend_do_boolean_and_begin = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_boolean_and_begin);

_library.zend_do_boolean_and_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_boolean_and_end);

_library.zend_do_brk_cont = ['void', ['uchar', ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_brk_cont);

_library.zend_do_switch_cond = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_switch_cond);

_library.zend_do_switch_end = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_switch_end);

_library.zend_do_case_before_statement = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_case_before_statement);

_library.zend_do_case_after_statement = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_case_after_statement);

_library.zend_do_default_before_statement = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_default_before_statement);

_library.zend_do_begin_class_declaration = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_begin_class_declaration);

_library.zend_do_end_class_declaration = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_end_class_declaration);

_library.zend_do_declare_property = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'uint']];
_library._functions.push(_library.zend_do_declare_property);

_library.zend_do_declare_class_constant = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_declare_class_constant);

_library.zend_do_fetch_property = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_fetch_property);

_library.zend_do_halt_compiler_register = ['void', []];
_library._functions.push(_library.zend_do_halt_compiler_register);

_library.zend_do_push_object = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_push_object);

_library.zend_do_pop_object = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_pop_object);

_library.zend_do_begin_new_object = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_begin_new_object);

_library.zend_do_end_new_object = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_end_new_object);

_library.zend_do_fetch_constant = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'uchar']];
_library._functions.push(_library.zend_do_fetch_constant);

_library.zend_do_shell_exec = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_shell_exec);

_library.zend_do_init_array = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_init_array);

_library.zend_do_add_array_element = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_add_array_element);

_library.zend_do_add_static_array_element = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_do_add_static_array_element);

_library.zend_do_list_init = ['void', []];
_library._functions.push(_library.zend_do_list_init);

_library.zend_do_list_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_list_end);

_library.zend_do_add_list_element = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_add_list_element);

_library.zend_do_new_list_begin = ['void', []];
_library._functions.push(_library.zend_do_new_list_begin);

_library.zend_do_new_list_end = ['void', []];
_library._functions.push(_library.zend_do_new_list_end);

_library.zend_init_list = ['void', [ref.refType('void'), ref.refType('void')]];
_library._functions.push(_library.zend_init_list);

_library.zend_add_to_list = ['void', [ref.refType('void'), ref.refType('void')]];
_library._functions.push(_library.zend_add_to_list);

_library.zend_do_cast = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_cast);

_library.zend_do_include_or_eval = ['void', ['int', ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_include_or_eval);

_library.zend_do_unset = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_unset);

_library.zend_do_isset_or_isempty = ['void', ['int', ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_isset_or_isempty);

_library.zend_do_instanceof = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_instanceof);

_library.zend_do_foreach_begin = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_foreach_begin);

_library.zend_do_foreach_cont = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_foreach_cont);

_library.zend_do_foreach_end = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_foreach_end);

_library.zend_do_declare_begin = ['void', []];
_library._functions.push(_library.zend_do_declare_begin);

_library.zend_do_declare_stmt = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_declare_stmt);

_library.zend_do_declare_end = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_declare_end);

_library.zend_do_exit = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_exit);

_library.zend_do_begin_silence = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_begin_silence);

_library.zend_do_end_silence = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_end_silence);

_library.zend_do_jmp_set = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_jmp_set);

_library.zend_do_jmp_set_else = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_jmp_set_else);

_library.zend_do_begin_qm_op = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_begin_qm_op);

_library.zend_do_qm_true = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_qm_true);

_library.zend_do_qm_false = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_qm_false);

_library.zend_do_extended_info = ['void', []];
_library._functions.push(_library.zend_do_extended_info);

_library.zend_do_extended_fcall_begin = ['void', []];
_library._functions.push(_library.zend_do_extended_fcall_begin);

_library.zend_do_extended_fcall_end = ['void', []];
_library._functions.push(_library.zend_do_extended_fcall_end);

_library.zend_do_ticks = ['void', []];
_library._functions.push(_library.zend_do_ticks);

_library.zend_do_abstract_method = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_abstract_method);

_library.zend_do_declare_constant = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_declare_constant);

_library.zend_do_build_namespace_name = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_build_namespace_name);

_library.zend_do_begin_namespace = ['void', [ref.refType(_library.znode), 'uchar']];
_library._functions.push(_library.zend_do_begin_namespace);

_library.zend_do_end_namespace = ['void', []];
_library._functions.push(_library.zend_do_end_namespace);

_library.zend_verify_namespace = ['void', []];
_library._functions.push(_library.zend_verify_namespace);

_library.zend_do_use = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_use);

_library.zend_do_use_non_class = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int', 'int', 'uchar', ref.refType(_library.HashTable), ref.refType(_library.HashTable)]];
_library._functions.push(_library.zend_do_use_non_class);

_library.zend_do_use_function = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_use_function);

_library.zend_do_use_const = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_use_const);

_library.zend_do_end_compilation = ['void', []];
_library._functions.push(_library.zend_do_end_compilation);

_library.zend_do_constant_expression = ['void', [ref.refType(_library.znode), ref.refType(_library.zend_ast)]];
_library._functions.push(_library.zend_do_constant_expression);

_library.zend_do_resolve_class_name = ['void', [ref.refType(_library.znode), ref.refType(_library.znode), 'int']];
_library._functions.push(_library.zend_do_resolve_class_name);

_library.zend_do_label = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_label);

_library.zend_do_goto = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_goto);

_library.zend_resolve_goto_label = ['void', [ref.refType(_library.zend_op_array), ref.refType(_library.zend_op), 'int']];
_library._functions.push(_library.zend_resolve_goto_label);

_library.zend_release_labels = ['void', ['int']];
_library._functions.push(_library.zend_release_labels);

_library.function_add_ref = ['void', [ref.refType(_library.zend_function)]];
_library._functions.push(_library.function_add_ref);

_library.compile_file = [ref.refType(_library.zend_op_array), [ref.refType(_library.zend_file_handle), 'int']];
_library._functions.push(_library.compile_file);

_library.compile_string = [ref.refType(_library.zend_op_array), [ref.refType(_library.zval), ref.refType('char')]];
_library._functions.push(_library.compile_string);

_library.compile_filename = [ref.refType(_library.zend_op_array), ['int', ref.refType(_library.zval)]];
_library._functions.push(_library.compile_filename);

_library.open_file_for_scanning = ['int', [ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.open_file_for_scanning);

_library.init_op_array = ['void', [ref.refType(_library.zend_op_array), 'uchar', 'int']];
_library._functions.push(_library.init_op_array);

_library.destroy_op_array = ['void', [ref.refType(_library.zend_op_array)]];
_library._functions.push(_library.destroy_op_array);

_library.zend_destroy_file_handle = ['void', [ref.refType(_library.zend_file_handle)]];
_library._functions.push(_library.zend_destroy_file_handle);

_library.zend_cleanup_class_data = ['int', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions.push(_library.zend_cleanup_class_data);

_library.zend_cleanup_user_class_data = ['int', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions.push(_library.zend_cleanup_user_class_data);

_library.zend_cleanup_internal_class_data = ['void', [ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.zend_cleanup_internal_class_data);

_library.zend_cleanup_internal_classes = ['void', []];
_library._functions.push(_library.zend_cleanup_internal_classes);

_library.zend_cleanup_function_data = ['int', [ref.refType(_library.zend_function)]];
_library._functions.push(_library.zend_cleanup_function_data);

_library.zend_cleanup_function_data_full = ['int', [ref.refType(_library.zend_function)]];
_library._functions.push(_library.zend_cleanup_function_data_full);

_library.clean_non_persistent_function_full = ['int', [ref.refType(_library.zend_function)]];
_library._functions.push(_library.clean_non_persistent_function_full);

_library.clean_non_persistent_class_full = ['int', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions.push(_library.clean_non_persistent_class_full);

_library.destroy_zend_function = ['void', [ref.refType(_library.zend_function)]];
_library._functions.push(_library.destroy_zend_function);

_library.zend_function_dtor = ['void', [ref.refType(_library.zend_function)]];
_library._functions.push(_library.zend_function_dtor);

_library.destroy_zend_class = ['void', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions.push(_library.destroy_zend_class);

_library.zend_class_add_ref = ['void', [ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions.push(_library.zend_class_add_ref);

_library.zend_mangle_property_name = ['void', [ref.refType(ref.refType('char')), ref.refType('int'), ref.refType('char'), 'int', ref.refType('char'), 'int', 'int']];
_library._functions.push(_library.zend_mangle_property_name);

_library.zend_unmangle_property_name_ex = ['int', [ref.refType('char'), 'int', ref.refType(ref.refType('char')), ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions.push(_library.zend_unmangle_property_name_ex);

_library.get_next_op = [ref.refType(_library.zend_op), [ref.refType(_library.zend_op_array)]];
_library._functions.push(_library.get_next_op);

_library.init_op = ['void', [ref.refType(_library.zend_op)]];
_library._functions.push(_library.init_op);

_library.get_next_op_number = ['int', [ref.refType(_library.zend_op_array)]];
_library._functions.push(_library.get_next_op_number);

_library.print_class = ['int', [ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.print_class);

_library.print_op_array = ['void', [ref.refType(_library.zend_op_array), 'int']];
_library._functions.push(_library.print_op_array);

_library.pass_two = ['int', [ref.refType(_library.zend_op_array)]];
_library._functions.push(_library.pass_two);

_library.get_next_brk_cont_element = [ref.refType(_library.zend_brk_cont_element), [ref.refType(_library.zend_op_array)]];
_library._functions.push(_library.get_next_brk_cont_element);

_library.zend_do_first_catch = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_first_catch);

_library.zend_initialize_try_catch_element = ['void', [ref.refType(_library.znode)]];
_library._functions.push(_library.zend_initialize_try_catch_element);

_library.zend_do_mark_last_catch = ['void', [ref.refType(_library.znode), ref.refType(_library.znode)]];
_library._functions.push(_library.zend_do_mark_last_catch);

_library.zend_is_compiling = ['uchar', []];
_library._functions.push(_library.zend_is_compiling);

_library.zend_make_compiled_string_description = [ref.refType('char'), [ref.refType('char')]];
_library._functions.push(_library.zend_make_compiled_string_description);

_library.zend_initialize_class_data = ['void', [ref.refType(_library.zend_class_entry), 'uchar']];
_library._functions.push(_library.zend_initialize_class_data);

_library.zend_get_class_fetch_type = ['int', [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_get_class_fetch_type);

_library.zend_auto_global_callback = ffi.Function('uchar', [ref.refType('char'), 'uint']);

_library._zend_auto_global = Struct({
    "armed": 'uchar',
    "auto_global_callback": _library.zend_auto_global_callback,
    "jit": 'uchar',
    "name": ref.refType('char'),
    "name_len": 'uint'
});

_library.zend_auto_global = _library._zend_auto_global;

_library.zend_register_auto_global = ['int', [ref.refType('char'), 'uint', 'uchar', _library.zend_auto_global_callback]];
_library._functions.push(_library.zend_register_auto_global);

_library.zend_activate_auto_globals = ['void', []];
_library._functions.push(_library.zend_activate_auto_globals);

_library.zend_is_auto_global = ['uchar', [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_is_auto_global);

_library.zend_is_auto_global_quick = ['uchar', [ref.refType('char'), 'uint', 'ulong']];
_library._functions.push(_library.zend_is_auto_global_quick);

_library.zend_dirname = ['ulong', [ref.refType('char'), 'ulong']];
_library._functions.push(_library.zend_dirname);

_library.zendlex = ['int', [ref.refType(_library.znode)]];
_library._functions.push(_library.zendlex);

_library.zend_add_literal = ['int', [ref.refType(_library.zend_op_array), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_add_literal);


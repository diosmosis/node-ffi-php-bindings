var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend.js');
require('./zend_types.js');
_library._temp_variable = Union({});

_library._preload.push(function () {
    _library._temp_variable.defineProperty("class_entry", ref.refType(_library.zend_class_entry));
    _library._temp_variable.defineProperty("fe", Struct({}));
    _library._temp_variable.fields.fe.type.defineProperty("fe_pos", _library.HashPointer);
    _library._temp_variable.fields.fe.type.defineProperty("ptr", ref.refType(_library.zval));
    _library._temp_variable.fields.fe.type.defineProperty("ptr_ptr", ref.refType(ref.refType(_library.zval)));
    _library._temp_variable.defineProperty("str_offset", Struct({}));
    _library._temp_variable.fields.str_offset.type.defineProperty("offset", 'uint');
    _library._temp_variable.fields.str_offset.type.defineProperty("ptr_ptr", ref.refType(ref.refType(_library.zval)));
    _library._temp_variable.fields.str_offset.type.defineProperty("str", ref.refType(_library.zval));
    _library._temp_variable.defineProperty("tmp_var", _library.zval);
    _library._temp_variable.defineProperty("var", Struct({}));
    _library._temp_variable.fields.var.type.defineProperty("fcall_returned_reference", 'uchar');
    _library._temp_variable.fields.var.type.defineProperty("ptr", ref.refType(_library.zval));
    _library._temp_variable.fields.var.type.defineProperty("ptr_ptr", ref.refType(ref.refType(_library.zval)));
});

require('./zend_globals.js');
_library._zend_vm_stack = Struct({});

_library._preload.push(function () {
    _library._zend_vm_stack.defineProperty("end", ref.refType(ref.refType('void')));
    _library._zend_vm_stack.defineProperty("prev", _library.zend_vm_stack);
    _library._zend_vm_stack.defineProperty("top", ref.refType(ref.refType('void')));
});

_library.temp_variable = _library._temp_variable;

_library.init_executor = ['void', []];
_library._functions['init_executor'] = _library.init_executor;

_library.shutdown_executor = ['void', []];
_library._functions['shutdown_executor'] = _library.shutdown_executor;

_library.shutdown_destructors = ['void', []];
_library._functions['shutdown_destructors'] = _library.shutdown_destructors;

require('./zend_compile.js');
_library.zend_create_execute_data_from_op_array = [ref.refType(_library.zend_execute_data), [ref.refType(_library.zend_op_array), 'uchar']];
_library._functions['zend_create_execute_data_from_op_array'] = _library.zend_create_execute_data_from_op_array;

_library.zend_execute = ['void', [ref.refType(_library.zend_op_array)]];
_library._functions['zend_execute'] = _library.zend_execute;

_library.execute_ex = ['void', [ref.refType(_library.zend_execute_data)]];
_library._functions['execute_ex'] = _library.execute_ex;

require('./zend_API.js');
_library.execute_internal = ['void', [ref.refType(_library.zend_execute_data), ref.refType(_library._zend_fcall_info), 'int']];
_library._functions['execute_internal'] = _library.execute_internal;

_library.zend_is_true = ['int', [ref.refType(_library.zval)]];
_library._functions['zend_is_true'] = _library.zend_is_true;

_library.zend_lookup_class = ['int', [ref.refType('char'), 'int', ref.refType(ref.refType(ref.refType(_library.zend_class_entry)))]];
_library._functions['zend_lookup_class'] = _library.zend_lookup_class;

_library.zend_lookup_class_ex = ['int', [ref.refType('char'), 'int', ref.refType(_library.zend_literal), 'int', ref.refType(ref.refType(ref.refType(_library.zend_class_entry)))]];
_library._functions['zend_lookup_class_ex'] = _library.zend_lookup_class_ex;

_library.zend_eval_string = ['int', [ref.refType('char'), ref.refType(_library.zval), ref.refType('char')]];
_library._functions['zend_eval_string'] = _library.zend_eval_string;

_library.zend_eval_stringl = ['int', [ref.refType('char'), 'int', ref.refType(_library.zval), ref.refType('char')]];
_library._functions['zend_eval_stringl'] = _library.zend_eval_stringl;

_library.zend_eval_string_ex = ['int', [ref.refType('char'), ref.refType(_library.zval), ref.refType('char'), 'int']];
_library._functions['zend_eval_string_ex'] = _library.zend_eval_string_ex;

_library.zend_eval_stringl_ex = ['int', [ref.refType('char'), 'int', ref.refType(_library.zval), ref.refType('char'), 'int']];
_library._functions['zend_eval_stringl_ex'] = _library.zend_eval_stringl_ex;

_library.zend_verify_arg_class_kind = [ref.refType('char'), [ref.refType(_library.zend_arg_info), 'ulong', ref.refType(ref.refType('char')), ref.refType(ref.refType(_library.zend_class_entry))]];
_library._functions['zend_verify_arg_class_kind'] = _library.zend_verify_arg_class_kind;

_library.zend_verify_arg_error = ['int', ['int', ref.refType(_library.zend_function), 'uint', ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char')]];
_library._functions['zend_verify_arg_error'] = _library.zend_verify_arg_error;

_library.i_zval_ptr_dtor = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions['i_zval_ptr_dtor'] = _library.i_zval_ptr_dtor;

_library.i_zval_ptr_dtor_nogc = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions['i_zval_ptr_dtor_nogc'] = _library.i_zval_ptr_dtor_nogc;

_library.i_zend_is_true = ['int', [ref.refType(_library.zval)]];
_library._functions['i_zend_is_true'] = _library.i_zend_is_true;

_library.zval_update_constant = ['int', [ref.refType(ref.refType(_library.zval)), 'uchar']];
_library._functions['zval_update_constant'] = _library.zval_update_constant;

_library.zval_update_constant_inline_change = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry)]];
_library._functions['zval_update_constant_inline_change'] = _library.zval_update_constant_inline_change;

_library.zval_update_constant_no_inline_change = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry)]];
_library._functions['zval_update_constant_no_inline_change'] = _library.zval_update_constant_no_inline_change;

_library.zval_update_constant_ex = ['int', [ref.refType(ref.refType(_library.zval)), 'uchar', ref.refType(_library.zend_class_entry)]];
_library._functions['zval_update_constant_ex'] = _library.zval_update_constant_ex;

_library.zend_vm_stack_new_page = [_library.zend_vm_stack, ['int']];
_library._functions['zend_vm_stack_new_page'] = _library.zend_vm_stack_new_page;

_library.zend_vm_stack_init = ['void', []];
_library._functions['zend_vm_stack_init'] = _library.zend_vm_stack_init;

_library.zend_vm_stack_destroy = ['void', []];
_library._functions['zend_vm_stack_destroy'] = _library.zend_vm_stack_destroy;

_library.zend_vm_stack_extend = ['void', ['int']];
_library._functions['zend_vm_stack_extend'] = _library.zend_vm_stack_extend;

_library.zend_vm_stack_top = [ref.refType(ref.refType('void')), []];
_library._functions['zend_vm_stack_top'] = _library.zend_vm_stack_top;

_library.zend_vm_stack_push = ['void', [ref.refType('void')]];
_library._functions['zend_vm_stack_push'] = _library.zend_vm_stack_push;

_library.zend_vm_stack_pop = [ref.refType('void'), []];
_library._functions['zend_vm_stack_pop'] = _library.zend_vm_stack_pop;

_library.zend_vm_stack_alloc = [ref.refType('void'), ['ulong']];
_library._functions['zend_vm_stack_alloc'] = _library.zend_vm_stack_alloc;

_library.zend_vm_stack_frame_base = [ref.refType(ref.refType('void')), [ref.refType(_library.zend_execute_data)]];
_library._functions['zend_vm_stack_frame_base'] = _library.zend_vm_stack_frame_base;

_library.zend_vm_stack_free_int = ['void', [ref.refType('void')]];
_library._functions['zend_vm_stack_free_int'] = _library.zend_vm_stack_free_int;

_library.zend_vm_stack_free = ['void', [ref.refType('void')]];
_library._functions['zend_vm_stack_free'] = _library.zend_vm_stack_free;

_library.zend_vm_stack_clear_multiple = ['void', ['int']];
_library._functions['zend_vm_stack_clear_multiple'] = _library.zend_vm_stack_clear_multiple;

_library.zend_vm_stack_get_args_count_ex = ['int', [ref.refType(_library.zend_execute_data)]];
_library._functions['zend_vm_stack_get_args_count_ex'] = _library.zend_vm_stack_get_args_count_ex;

_library.zend_vm_stack_get_arg_ex = [ref.refType(ref.refType(_library.zval)), [ref.refType(_library.zend_execute_data), 'int']];
_library._functions['zend_vm_stack_get_arg_ex'] = _library.zend_vm_stack_get_arg_ex;

_library.zend_vm_stack_get_args_count = ['int', []];
_library._functions['zend_vm_stack_get_args_count'] = _library.zend_vm_stack_get_args_count;

_library.zend_vm_stack_get_arg = [ref.refType(ref.refType(_library.zval)), ['int']];
_library._functions['zend_vm_stack_get_arg'] = _library.zend_vm_stack_get_arg;

_library.execute_new_code = ['void', []];
_library._functions['execute_new_code'] = _library.execute_new_code;

_library.get_active_class_name = [ref.refType('char'), [ref.refType(ref.refType('char'))]];
_library._functions['get_active_class_name'] = _library.get_active_class_name;

_library.get_active_function_name = [ref.refType('char'), []];
_library._functions['get_active_function_name'] = _library.get_active_function_name;

_library.zend_get_executed_filename = [ref.refType('char'), []];
_library._functions['zend_get_executed_filename'] = _library.zend_get_executed_filename;

_library.zend_get_executed_lineno = ['uint', []];
_library._functions['zend_get_executed_lineno'] = _library.zend_get_executed_lineno;

_library.zend_is_executing = ['uchar', []];
_library._functions['zend_is_executing'] = _library.zend_is_executing;

_library.zend_set_timeout = ['void', ['long', 'int']];
_library._functions['zend_set_timeout'] = _library.zend_set_timeout;

_library.zend_unset_timeout = ['void', []];
_library._functions['zend_unset_timeout'] = _library.zend_unset_timeout;

_library.zend_timeout = ['void', ['int']];
_library._functions['zend_timeout'] = _library.zend_timeout;

_library.zend_fetch_class = [ref.refType(_library.zend_class_entry), [ref.refType('char'), 'uint', 'int']];
_library._functions['zend_fetch_class'] = _library.zend_fetch_class;

_library.zend_fetch_class_by_name = [ref.refType(_library.zend_class_entry), [ref.refType('char'), 'uint', ref.refType(_library.zend_literal), 'int']];
_library._functions['zend_fetch_class_by_name'] = _library.zend_fetch_class_by_name;

_library.zend_verify_abstract_class = ['void', [ref.refType(_library.zend_class_entry)]];
_library._functions['zend_verify_abstract_class'] = _library.zend_verify_abstract_class;

_library.zend_fetch_dimension_by_zval = ['void', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions['zend_fetch_dimension_by_zval'] = _library.zend_fetch_dimension_by_zval;

_library.zend_get_compiled_variable_value = [ref.refType(ref.refType(_library.zval)), [ref.refType(_library.zend_execute_data), 'uint']];
_library._functions['zend_get_compiled_variable_value'] = _library.zend_get_compiled_variable_value;

_library.zend_set_user_opcode_handler = ['int', ['uchar', _library.user_opcode_handler_t]];
_library._functions['zend_set_user_opcode_handler'] = _library.zend_set_user_opcode_handler;

_library.zend_get_user_opcode_handler = [_library.user_opcode_handler_t, ['uchar']];
_library._functions['zend_get_user_opcode_handler'] = _library.zend_get_user_opcode_handler;

_library._zend_free_op = Struct({});

_library._preload.push(function () {
    _library._zend_free_op.defineProperty("var", ref.refType(_library.zval));
});

_library.zend_free_op = _library._zend_free_op;

_library.zend_get_zval_ptr = [ref.refType(_library.zval), ['int', ref.refType(_library.znode_op), ref.refType(_library.zend_execute_data), ref.refType(_library.zend_free_op), 'int']];
_library._functions['zend_get_zval_ptr'] = _library.zend_get_zval_ptr;

_library.zend_get_zval_ptr_ptr = [ref.refType(ref.refType(_library.zval)), ['int', ref.refType(_library.znode_op), ref.refType(_library.zend_execute_data), ref.refType(_library.zend_free_op), 'int']];
_library._functions['zend_get_zval_ptr_ptr'] = _library.zend_get_zval_ptr_ptr;

_library.zend_do_fcall = ['int', [ref.refType(_library.zend_execute_data)]];
_library._functions['zend_do_fcall'] = _library.zend_do_fcall;

require('./zend_hash.js');
_library.zend_clean_and_cache_symbol_table = ['void', [ref.refType(_library.HashTable)]];
_library._functions['zend_clean_and_cache_symbol_table'] = _library.zend_clean_and_cache_symbol_table;

_library.zend_free_compiled_variables = ['void', [ref.refType(_library.zend_execute_data)]];
_library._functions['zend_free_compiled_variables'] = _library.zend_free_compiled_variables;


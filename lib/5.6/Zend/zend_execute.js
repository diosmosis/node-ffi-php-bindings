var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._temp_variable = Union({
    "class_entry": _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer',
    "fe": Struct({
        "fe_pos": _library.HashPointer,
        "ptr": _library.zval ? ref.refType(_library.zval) : 'pointer',
        "ptr_ptr": ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer')
    }),
    "str_offset": Struct({
        "offset": 'uint',
        "ptr_ptr": ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'),
        "str": _library.zval ? ref.refType(_library.zval) : 'pointer'
    }),
    "tmp_var": _library.zval,
    "var": Struct({
        "fcall_returned_reference": 'uchar',
        "ptr": _library.zval ? ref.refType(_library.zval) : 'pointer',
        "ptr_ptr": ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer')
    })
});

_library._zend_vm_stack = Struct({
    "end": ref.refType(ref.refType('void')),
    "prev": _library.zend_vm_stack,
    "top": ref.refType(ref.refType('void'))
});

_library.temp_variable = _library._temp_variable;

_library.init_executor = ['void', []];
_library._functions.push(_library.init_executor);

_library.shutdown_executor = ['void', []];
_library._functions.push(_library.shutdown_executor);

_library.shutdown_destructors = ['void', []];
_library._functions.push(_library.shutdown_destructors);

_library.zend_create_execute_data_from_op_array = [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer', [_library.zend_op_array ? ref.refType(_library.zend_op_array) : 'pointer', 'uchar']];
_library._functions.push(_library.zend_create_execute_data_from_op_array);

_library.zend_execute = ['void', [_library.zend_op_array ? ref.refType(_library.zend_op_array) : 'pointer']];
_library._functions.push(_library.zend_execute);

_library.execute_ex = ['void', [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer']];
_library._functions.push(_library.execute_ex);

_library.execute_internal = ['void', [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer', _library._zend_fcall_info ? ref.refType(_library._zend_fcall_info) : 'pointer', 'int']];
_library._functions.push(_library.execute_internal);

_library.zend_is_true = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_is_true);

_library.zend_lookup_class = ['int', [ref.refType('char'), 'int', ref.refType(ref.refType(_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer'))]];
_library._functions.push(_library.zend_lookup_class);

_library.zend_lookup_class_ex = ['int', [ref.refType('char'), 'int', _library.zend_literal ? ref.refType(_library.zend_literal) : 'pointer', 'int', ref.refType(ref.refType(_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer'))]];
_library._functions.push(_library.zend_lookup_class_ex);

_library.zend_eval_string = ['int', [ref.refType('char'), _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char')]];
_library._functions.push(_library.zend_eval_string);

_library.zend_eval_stringl = ['int', [ref.refType('char'), 'int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char')]];
_library._functions.push(_library.zend_eval_stringl);

_library.zend_eval_string_ex = ['int', [ref.refType('char'), _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int']];
_library._functions.push(_library.zend_eval_string_ex);

_library.zend_eval_stringl_ex = ['int', [ref.refType('char'), 'int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'int']];
_library._functions.push(_library.zend_eval_stringl_ex);

_library.zend_verify_arg_class_kind = [ref.refType('char'), [_library.zend_arg_info ? ref.refType(_library.zend_arg_info) : 'pointer', 'ulong', ref.refType(ref.refType('char')), ref.refType(_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer')]];
_library._functions.push(_library.zend_verify_arg_class_kind);

_library.zend_verify_arg_error = ['int', ['int', _library.zend_function ? ref.refType(_library.zend_function) : 'pointer', 'uint', ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char')]];
_library._functions.push(_library.zend_verify_arg_error);

_library.i_zval_ptr_dtor = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.i_zval_ptr_dtor);

_library.i_zval_ptr_dtor_nogc = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType('char'), 'uint']];
_library._functions.push(_library.i_zval_ptr_dtor_nogc);

_library.i_zend_is_true = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.i_zend_is_true);

_library.zval_update_constant = ['int', [ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), 'uchar']];
_library._functions.push(_library.zval_update_constant);

_library.zval_update_constant_inline_change = ['int', [ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zval_update_constant_inline_change);

_library.zval_update_constant_no_inline_change = ['int', [ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zval_update_constant_no_inline_change);

_library.zval_update_constant_ex = ['int', [ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), 'uchar', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zval_update_constant_ex);

_library.zend_vm_stack_new_page = [_library.zend_vm_stack, ['int']];
_library._functions.push(_library.zend_vm_stack_new_page);

_library.zend_vm_stack_init = ['void', []];
_library._functions.push(_library.zend_vm_stack_init);

_library.zend_vm_stack_destroy = ['void', []];
_library._functions.push(_library.zend_vm_stack_destroy);

_library.zend_vm_stack_extend = ['void', ['int']];
_library._functions.push(_library.zend_vm_stack_extend);

_library.zend_vm_stack_top = [ref.refType(ref.refType('void')), []];
_library._functions.push(_library.zend_vm_stack_top);

_library.zend_vm_stack_push = ['void', [ref.refType('void')]];
_library._functions.push(_library.zend_vm_stack_push);

_library.zend_vm_stack_pop = [ref.refType('void'), []];
_library._functions.push(_library.zend_vm_stack_pop);

_library.zend_vm_stack_alloc = [ref.refType('void'), ['ulong']];
_library._functions.push(_library.zend_vm_stack_alloc);

_library.zend_vm_stack_frame_base = [ref.refType(ref.refType('void')), [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer']];
_library._functions.push(_library.zend_vm_stack_frame_base);

_library.zend_vm_stack_free_int = ['void', [ref.refType('void')]];
_library._functions.push(_library.zend_vm_stack_free_int);

_library.zend_vm_stack_free = ['void', [ref.refType('void')]];
_library._functions.push(_library.zend_vm_stack_free);

_library.zend_vm_stack_clear_multiple = ['void', ['int']];
_library._functions.push(_library.zend_vm_stack_clear_multiple);

_library.zend_vm_stack_get_args_count_ex = ['int', [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer']];
_library._functions.push(_library.zend_vm_stack_get_args_count_ex);

_library.zend_vm_stack_get_arg_ex = [ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer', 'int']];
_library._functions.push(_library.zend_vm_stack_get_arg_ex);

_library.zend_vm_stack_get_args_count = ['int', []];
_library._functions.push(_library.zend_vm_stack_get_args_count);

_library.zend_vm_stack_get_arg = [ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), ['int']];
_library._functions.push(_library.zend_vm_stack_get_arg);

_library.execute_new_code = ['void', []];
_library._functions.push(_library.execute_new_code);

_library.get_active_class_name = [ref.refType('char'), [ref.refType(ref.refType('char'))]];
_library._functions.push(_library.get_active_class_name);

_library.get_active_function_name = [ref.refType('char'), []];
_library._functions.push(_library.get_active_function_name);

_library.zend_get_executed_filename = [ref.refType('char'), []];
_library._functions.push(_library.zend_get_executed_filename);

_library.zend_get_executed_lineno = ['uint', []];
_library._functions.push(_library.zend_get_executed_lineno);

_library.zend_is_executing = ['uchar', []];
_library._functions.push(_library.zend_is_executing);

_library.zend_set_timeout = ['void', ['long', 'int']];
_library._functions.push(_library.zend_set_timeout);

_library.zend_unset_timeout = ['void', []];
_library._functions.push(_library.zend_unset_timeout);

_library.zend_timeout = ['void', ['int']];
_library._functions.push(_library.zend_timeout);

_library.zend_fetch_class = [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', [ref.refType('char'), 'uint', 'int']];
_library._functions.push(_library.zend_fetch_class);

_library.zend_fetch_class_by_name = [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer', [ref.refType('char'), 'uint', _library.zend_literal ? ref.refType(_library.zend_literal) : 'pointer', 'int']];
_library._functions.push(_library.zend_fetch_class_by_name);

_library.zend_verify_abstract_class = ['void', [_library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zend_verify_abstract_class);

_library.zend_fetch_dimension_by_zval = ['void', [ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', _library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_fetch_dimension_by_zval);

_library.zend_get_compiled_variable_value = [ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer', 'uint']];
_library._functions.push(_library.zend_get_compiled_variable_value);

_library.zend_set_user_opcode_handler = ['int', ['uchar', _library.user_opcode_handler_t]];
_library._functions.push(_library.zend_set_user_opcode_handler);

_library.zend_get_user_opcode_handler = [_library.user_opcode_handler_t, ['uchar']];
_library._functions.push(_library.zend_get_user_opcode_handler);

_library._zend_free_op = Struct({
    "var": _library.zval ? ref.refType(_library.zval) : 'pointer'
});

_library.zend_free_op = _library._zend_free_op;

_library.zend_get_zval_ptr = [_library.zval ? ref.refType(_library.zval) : 'pointer', ['int', _library.znode_op ? ref.refType(_library.znode_op) : 'pointer', _library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer', _library.zend_free_op ? ref.refType(_library.zend_free_op) : 'pointer', 'int']];
_library._functions.push(_library.zend_get_zval_ptr);

_library.zend_get_zval_ptr_ptr = [ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), ['int', _library.znode_op ? ref.refType(_library.znode_op) : 'pointer', _library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer', _library.zend_free_op ? ref.refType(_library.zend_free_op) : 'pointer', 'int']];
_library._functions.push(_library.zend_get_zval_ptr_ptr);

_library.zend_do_fcall = ['int', [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer']];
_library._functions.push(_library.zend_do_fcall);

_library.zend_clean_and_cache_symbol_table = ['void', [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer']];
_library._functions.push(_library.zend_clean_and_cache_symbol_table);

_library.zend_free_compiled_variables = ['void', [_library.zend_execute_data ? ref.refType(_library.zend_execute_data) : 'pointer']];
_library._functions.push(_library.zend_free_compiled_variables);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_globals.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}
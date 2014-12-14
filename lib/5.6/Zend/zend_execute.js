var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._temp_variable = Union({});
_library._temp_variable.size = 1;

_library._preload['_temp_variable'] = ['zval', '_zval_struct', 'pointer', 'zval', 'pointer', 'zval', 'pointer', 'zval', 'HashPointer', '_HashPointer', 'zend_class_entry', function () {
    _library._temp_variable.size = 0;
    _library._temp_variable.defineProperty("tmp_var", _library.zval);
    _library._temp_variable.defineProperty("var", (function () {
        var temp = Struct({});
        temp.defineProperty("ptr_ptr", ref.refType(ref.refType(_library.zval)));
        temp.defineProperty("ptr", ref.refType(_library.zval));
        temp.defineProperty("fcall_returned_reference", 'uchar');
        return temp;
    })());
    _library._temp_variable.defineProperty("str_offset", (function () {
        var temp = Struct({});
        temp.defineProperty("ptr_ptr", ref.refType(ref.refType(_library.zval)));
        temp.defineProperty("str", ref.refType(_library.zval));
        temp.defineProperty("offset", 'uint');
        return temp;
    })());
    _library._temp_variable.defineProperty("fe", (function () {
        var temp = Struct({});
        temp.defineProperty("ptr_ptr", ref.refType(ref.refType(_library.zval)));
        temp.defineProperty("ptr", ref.refType(_library.zval));
        temp.defineProperty("fe_pos", _library.HashPointer);
        return temp;
    })());
    _library._temp_variable.defineProperty("class_entry", ref.refType(_library.zend_class_entry));
}];

_library._zend_vm_stack = Struct({});
_library._zend_vm_stack.size = 1;

_library._preload['_zend_vm_stack'] = ['pointer', 'pointer', 'zend_vm_stack', function () {
    _library._zend_vm_stack.size = 0;
    _library._zend_vm_stack.defineProperty("top", ref.refType(ref.refType('void')));
    _library._zend_vm_stack.defineProperty("end", ref.refType(ref.refType('void')));
    _library._zend_vm_stack.defineProperty("prev", _library.zend_vm_stack);
}];

_library._preload['temp_variable'] = [function () {
    _library.temp_variable = _library._temp_variable;
}];

_library._preload['zend_create_execute_data_from_op_array'] = ['zend_execute_data', 'zend_op_array', function () {
    _library.zend_create_execute_data_from_op_array = [ref.refType(_library.zend_execute_data), [ref.refType(_library.zend_op_array), 'uchar']];
    _library._functions['zend_create_execute_data_from_op_array'] = _library.zend_create_execute_data_from_op_array;
}];

_library._preload['zend_execute'] = ['zend_op_array', function () {
    _library.zend_execute = ['void', [ref.refType(_library.zend_op_array)]];
    _library._functions['zend_execute'] = _library.zend_execute;
}];

_library._preload['execute_ex'] = ['zend_execute_data', function () {
    _library.execute_ex = ['void', [ref.refType(_library.zend_execute_data)]];
    _library._functions['execute_ex'] = _library.execute_ex;
}];

_library._preload['execute_internal'] = ['zend_execute_data', '_zend_fcall_info', function () {
    _library.execute_internal = ['void', [ref.refType(_library.zend_execute_data), ref.refType(_library._zend_fcall_info), 'int']];
    _library._functions['execute_internal'] = _library.execute_internal;
}];

_library._preload['zend_is_true'] = ['zval', function () {
    _library.zend_is_true = ['int', [ref.refType(_library.zval)]];
    _library._functions['zend_is_true'] = _library.zend_is_true;
}];

_library._preload['zend_lookup_class'] = ['pointer', function () {
    _library.zend_lookup_class = ['int', [ref.refType('char'), 'int', ref.refType(ref.refType(ref.refType(_library.zend_class_entry)))]];
    _library._functions['zend_lookup_class'] = _library.zend_lookup_class;
}];

_library._preload['zend_lookup_class_ex'] = ['zend_literal', 'pointer', function () {
    _library.zend_lookup_class_ex = ['int', [ref.refType('char'), 'int', ref.refType(_library.zend_literal), 'int', ref.refType(ref.refType(ref.refType(_library.zend_class_entry)))]];
    _library._functions['zend_lookup_class_ex'] = _library.zend_lookup_class_ex;
}];

_library._preload['zend_eval_string'] = ['zval', function () {
    _library.zend_eval_string = ['int', [ref.refType('char'), ref.refType(_library.zval), ref.refType('char')]];
    _library._functions['zend_eval_string'] = _library.zend_eval_string;
}];

_library._preload['zend_eval_stringl'] = ['zval', function () {
    _library.zend_eval_stringl = ['int', [ref.refType('char'), 'int', ref.refType(_library.zval), ref.refType('char')]];
    _library._functions['zend_eval_stringl'] = _library.zend_eval_stringl;
}];

_library._preload['zend_eval_string_ex'] = ['zval', function () {
    _library.zend_eval_string_ex = ['int', [ref.refType('char'), ref.refType(_library.zval), ref.refType('char'), 'int']];
    _library._functions['zend_eval_string_ex'] = _library.zend_eval_string_ex;
}];

_library._preload['zend_eval_stringl_ex'] = ['zval', function () {
    _library.zend_eval_stringl_ex = ['int', [ref.refType('char'), 'int', ref.refType(_library.zval), ref.refType('char'), 'int']];
    _library._functions['zend_eval_stringl_ex'] = _library.zend_eval_stringl_ex;
}];

_library._preload['zend_verify_arg_class_kind'] = ['zend_arg_info', 'pointer', 'pointer', function () {
    _library.zend_verify_arg_class_kind = [ref.refType('char'), [ref.refType(_library.zend_arg_info), 'ulong', ref.refType(ref.refType('char')), ref.refType(ref.refType(_library.zend_class_entry))]];
    _library._functions['zend_verify_arg_class_kind'] = _library.zend_verify_arg_class_kind;
}];

_library._preload['zend_verify_arg_error'] = ['zend_function', function () {
    _library.zend_verify_arg_error = ['int', ['int', ref.refType(_library.zend_function), 'uint', ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char')]];
    _library._functions['zend_verify_arg_error'] = _library.zend_verify_arg_error;
}];

_library._preload['zval_update_constant'] = ['pointer', function () {
    _library.zval_update_constant = ['int', [ref.refType(ref.refType(_library.zval)), 'uchar']];
    _library._functions['zval_update_constant'] = _library.zval_update_constant;
}];

_library._preload['zval_update_constant_inline_change'] = ['pointer', 'zend_class_entry', function () {
    _library.zval_update_constant_inline_change = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry)]];
    _library._functions['zval_update_constant_inline_change'] = _library.zval_update_constant_inline_change;
}];

_library._preload['zval_update_constant_no_inline_change'] = ['pointer', 'zend_class_entry', function () {
    _library.zval_update_constant_no_inline_change = ['int', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zend_class_entry)]];
    _library._functions['zval_update_constant_no_inline_change'] = _library.zval_update_constant_no_inline_change;
}];

_library._preload['zval_update_constant_ex'] = ['pointer', 'zend_class_entry', function () {
    _library.zval_update_constant_ex = ['int', [ref.refType(ref.refType(_library.zval)), 'uchar', ref.refType(_library.zend_class_entry)]];
    _library._functions['zval_update_constant_ex'] = _library.zval_update_constant_ex;
}];

_library._preload['get_active_class_name'] = ['pointer', function () {
    _library.get_active_class_name = [ref.refType('char'), [ref.refType(ref.refType('char'))]];
    _library._functions['get_active_class_name'] = _library.get_active_class_name;
}];

_library._preload['get_active_function_name'] = [function () {
    _library.get_active_function_name = [ref.refType('char'), []];
    _library._functions['get_active_function_name'] = _library.get_active_function_name;
}];

_library._preload['zend_get_executed_filename'] = [function () {
    _library.zend_get_executed_filename = [ref.refType('char'), []];
    _library._functions['zend_get_executed_filename'] = _library.zend_get_executed_filename;
}];

_library._preload['zend_get_executed_lineno'] = [function () {
    _library.zend_get_executed_lineno = ['uint', []];
    _library._functions['zend_get_executed_lineno'] = _library.zend_get_executed_lineno;
}];

_library._preload['zend_is_executing'] = [function () {
    _library.zend_is_executing = ['uchar', []];
    _library._functions['zend_is_executing'] = _library.zend_is_executing;
}];

_library._preload['zend_set_timeout'] = [function () {
    _library.zend_set_timeout = ['void', ['long', 'int']];
    _library._functions['zend_set_timeout'] = _library.zend_set_timeout;
}];

_library._preload['zend_unset_timeout'] = [function () {
    _library.zend_unset_timeout = ['void', []];
    _library._functions['zend_unset_timeout'] = _library.zend_unset_timeout;
}];

_library._preload['zend_timeout'] = [function () {
    _library.zend_timeout = ['void', ['int']];
    _library._functions['zend_timeout'] = _library.zend_timeout;
}];

_library._preload['zend_fetch_class'] = ['zend_class_entry', function () {
    _library.zend_fetch_class = [ref.refType(_library.zend_class_entry), [ref.refType('char'), 'uint', 'int']];
    _library._functions['zend_fetch_class'] = _library.zend_fetch_class;
}];

_library._preload['zend_fetch_class_by_name'] = ['zend_class_entry', 'zend_literal', function () {
    _library.zend_fetch_class_by_name = [ref.refType(_library.zend_class_entry), [ref.refType('char'), 'uint', ref.refType(_library.zend_literal), 'int']];
    _library._functions['zend_fetch_class_by_name'] = _library.zend_fetch_class_by_name;
}];

_library._preload['zend_fetch_dimension_by_zval'] = ['pointer', 'zval', 'zval', function () {
    _library.zend_fetch_dimension_by_zval = ['void', [ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zend_fetch_dimension_by_zval'] = _library.zend_fetch_dimension_by_zval;
}];

_library._preload['zend_get_compiled_variable_value'] = ['pointer', 'zend_execute_data', function () {
    _library.zend_get_compiled_variable_value = [ref.refType(ref.refType(_library.zval)), [ref.refType(_library.zend_execute_data), 'uint']];
    _library._functions['zend_get_compiled_variable_value'] = _library.zend_get_compiled_variable_value;
}];

_library._preload['zend_set_user_opcode_handler'] = ['user_opcode_handler_t', function () {
    _library.zend_set_user_opcode_handler = ['int', ['uchar', _library.user_opcode_handler_t]];
    _library._functions['zend_set_user_opcode_handler'] = _library.zend_set_user_opcode_handler;
}];

_library._preload['zend_get_user_opcode_handler'] = ['user_opcode_handler_t', function () {
    _library.zend_get_user_opcode_handler = [_library.user_opcode_handler_t, ['uchar']];
    _library._functions['zend_get_user_opcode_handler'] = _library.zend_get_user_opcode_handler;
}];

_library._zend_free_op = Struct({});
_library._zend_free_op.size = 1;

_library._preload['_zend_free_op'] = ['zval', function () {
    _library._zend_free_op.size = 0;
    _library._zend_free_op.defineProperty("var", ref.refType(_library.zval));
}];

_library._preload['zend_free_op'] = [function () {
    _library.zend_free_op = _library._zend_free_op;
}];

_library._preload['zend_get_zval_ptr'] = ['zval', 'znode_op', 'zend_execute_data', 'zend_free_op', function () {
    _library.zend_get_zval_ptr = [ref.refType(_library.zval), ['int', ref.refType(_library.znode_op), ref.refType(_library.zend_execute_data), ref.refType(_library.zend_free_op), 'int']];
    _library._functions['zend_get_zval_ptr'] = _library.zend_get_zval_ptr;
}];

_library._preload['zend_get_zval_ptr_ptr'] = ['pointer', 'znode_op', 'zend_execute_data', 'zend_free_op', function () {
    _library.zend_get_zval_ptr_ptr = [ref.refType(ref.refType(_library.zval)), ['int', ref.refType(_library.znode_op), ref.refType(_library.zend_execute_data), ref.refType(_library.zend_free_op), 'int']];
    _library._functions['zend_get_zval_ptr_ptr'] = _library.zend_get_zval_ptr_ptr;
}];

_library._preload['zend_do_fcall'] = ['zend_execute_data', function () {
    _library.zend_do_fcall = ['int', [ref.refType(_library.zend_execute_data)]];
    _library._functions['zend_do_fcall'] = _library.zend_do_fcall;
}];

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

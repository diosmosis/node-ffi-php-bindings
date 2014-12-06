var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_declarables = Struct({
    "ticks": _library.zval
});

_library.zend_declarables = _library._zend_declarables;

_library._zend_compiler_globals = Struct({
    "access_type": 'uint',
    "active_class_entry": _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer',
    "active_op_array": _library.zend_op_array ? ref.refType(_library.zend_op_array) : 'pointer',
    "asp_tags": 'uchar',
    "auto_globals": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "bp_stack": _library.zend_stack,
    "catch_begin": 'long',
    "class_table": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "compiled_filename": ref.refType('char'),
    "compiler_options": 'uint',
    "const_filenames": _library.HashTable,
    "context": _library.zend_compiler_context,
    "context_stack": _library.zend_stack,
    "current_import": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "current_import_const": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "current_import_function": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "current_namespace": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "declarables": _library.zend_declarables,
    "declare_stack": _library.zend_stack,
    "detect_unicode": 'uchar',
    "dimension_llist": _library.zend_llist,
    "doc_comment": ref.refType('char'),
    "doc_comment_len": 'uint',
    "encoding_declared": 'uchar',
    "filenames_table": _library.HashTable,
    "foreach_copy_stack": _library.zend_stack,
    "function_call_stack": _library.zend_stack,
    "function_table": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "has_bracketed_namespaces": 'uchar',
    "implementing_class": _library.znode,
    "in_compilation": 'uchar',
    "in_namespace": 'uchar',
    "increment_lineno": 'uchar',
    "ini_parser_param": _library._zend_ini_parser_param ? ref.refType(_library._zend_ini_parser_param) : 'pointer',
    "ini_parser_unbuffered_errors": 'uchar',
    "interactive": 'int',
    "interned_empty_string": ref.refType('char'),
    "interned_strings": _library.HashTable,
    "interned_strings_end": ref.refType('char'),
    "interned_strings_snapshot_top": ref.refType('char'),
    "interned_strings_start": ref.refType('char'),
    "interned_strings_top": ref.refType('char'),
    "list_llist": _library.zend_llist,
    "list_stack": _library.zend_stack,
    "multibyte": 'uchar',
    "object_stack": _library.zend_stack,
    "open_files": _library.zend_llist,
    "parse_error": 'uchar',
    "script_encoding_list": _library.zend_encoding ? ref.refType(_library.zend_encoding) : 'pointer' ? ref.refType(_library.zend_encoding ? ref.refType(_library.zend_encoding) : 'pointer') : 'pointer',
    "script_encoding_list_size": 'ulong',
    "short_tags": 'uchar',
    "start_lineno": 'uint',
    "switch_cond_stack": _library.zend_stack,
    "unclean_shutdown": 'uchar',
    "zend_lineno": 'int'
});

_library.zend_vm_stack = _library._zend_vm_stack ? ref.refType(_library._zend_vm_stack) : 'pointer';

_library.zend_ini_entry = _library._zend_ini_entry;

_library._zend_executor_globals = Struct({
    "This": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "active": 'uchar',
    "active_op_array": _library.zend_op_array ? ref.refType(_library.zend_op_array) : 'pointer',
    "active_symbol_table": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "argument_stack": _library.zend_vm_stack,
    "autoload_func": _library.zend_function ? ref.refType(_library.zend_function) : 'pointer',
    "bailout": _library.jmp_buf ? ref.refType(_library.jmp_buf) : 'pointer',
    "called_scope": _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer',
    "class_table": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "current_execute_data": _library._zend_execute_data ? ref.refType(_library._zend_execute_data) : 'pointer',
    "current_module": _library._zend_module_entry ? ref.refType(_library._zend_module_entry) : 'pointer',
    "error_handling": _library.zend_error_handling_t,
    "error_reporting": 'int',
    "error_reporting_ini_entry": _library.zend_ini_entry ? ref.refType(_library.zend_ini_entry) : 'pointer',
    "error_zval": _library.zval,
    "error_zval_ptr": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "exception": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "exception_class": _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer',
    "exception_op": RefArray(_library.zend_op, 3),
    "exit_status": 'int',
    "full_tables_cleanup": 'uchar',
    "function_table": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "in_autoload": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "in_execution": 'uchar',
    "included_files": _library.HashTable,
    "ini_directives": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "lambda_count": 'int',
    "modified_ini_directives": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer',
    "no_extensions": 'uchar',
    "objects_store": _library.zend_objects_store,
    "opline_before_exception": _library.zend_op ? ref.refType(_library.zend_op) : 'pointer',
    "opline_ptr": _library.zend_op ? ref.refType(_library.zend_op) : 'pointer' ? ref.refType(_library.zend_op ? ref.refType(_library.zend_op) : 'pointer') : 'pointer',
    "orig_error_reporting": 'int',
    "persistent_list": _library.HashTable,
    "precision": 'long',
    "prev_exception": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "regular_list": _library.HashTable,
    "reserved": RefArray(ref.refType('void'), 4),
    "return_value_ptr_ptr": _library.zval ? ref.refType(_library.zval) : 'pointer' ? ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer') : 'pointer',
    "saved_fpu_cw": 'ushort',
    "saved_fpu_cw_ptr": ref.refType('void'),
    "scope": _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer',
    "start_op": _library.zend_op ? ref.refType(_library.zend_op) : 'pointer',
    "std_property_info": _library.zend_property_info,
    "symbol_table": _library.HashTable,
    "symtable_cache": RefArray(_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', 32),
    "symtable_cache_limit": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer' ? ref.refType(_library.HashTable ? ref.refType(_library.HashTable) : 'pointer') : 'pointer',
    "symtable_cache_ptr": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer' ? ref.refType(_library.HashTable ? ref.refType(_library.HashTable) : 'pointer') : 'pointer',
    "ticks_count": 'int',
    "timeout_seconds": 'int',
    "uninitialized_zval": _library.zval,
    "uninitialized_zval_ptr": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "user_error_handler": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "user_error_handler_error_reporting": 'int',
    "user_error_handlers": _library.zend_ptr_stack,
    "user_error_handlers_error_reporting": _library.zend_stack,
    "user_exception_handler": _library.zval ? ref.refType(_library.zval) : 'pointer',
    "user_exception_handlers": _library.zend_ptr_stack,
    "zend_constants": _library.HashTable ? ref.refType(_library.HashTable) : 'pointer'
});

_library._zend_php_scanner_globals = Struct({
    "heredoc_label_stack": _library.zend_ptr_stack,
    "input_filter": _library.zend_encoding_filter,
    "output_filter": _library.zend_encoding_filter,
    "script_encoding": _library.zend_encoding ? ref.refType(_library.zend_encoding) : 'pointer',
    "script_filtered": ref.refType('uchar'),
    "script_filtered_size": 'ulong',
    "script_org": ref.refType('uchar'),
    "script_org_size": 'ulong',
    "state_stack": _library.zend_stack,
    "yy_cursor": ref.refType('uchar'),
    "yy_in": _library.zend_file_handle ? ref.refType(_library.zend_file_handle) : 'pointer',
    "yy_leng": 'uint',
    "yy_limit": ref.refType('uchar'),
    "yy_marker": ref.refType('uchar'),
    "yy_out": _library.zend_file_handle ? ref.refType(_library.zend_file_handle) : 'pointer',
    "yy_start": ref.refType('uchar'),
    "yy_state": 'int',
    "yy_text": ref.refType('uchar')
});

_library._zend_ini_scanner_globals = Struct({
    "filename": ref.refType('char'),
    "lineno": 'int',
    "scanner_mode": 'int',
    "state_stack": _library.zend_stack,
    "yy_cursor": ref.refType('uchar'),
    "yy_in": _library.zend_file_handle ? ref.refType(_library.zend_file_handle) : 'pointer',
    "yy_leng": 'uint',
    "yy_limit": ref.refType('uchar'),
    "yy_marker": ref.refType('uchar'),
    "yy_out": _library.zend_file_handle ? ref.refType(_library.zend_file_handle) : 'pointer',
    "yy_start": ref.refType('uchar'),
    "yy_state": 'int',
    "yy_text": ref.refType('uchar')
});

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_execute.js');
    require('./zend_gc.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_llist.js');
    require('./zend_modules.js');
    require('./zend_multibyte.js');
    require('./zend_object_handlers.js');
    require('./zend_objects_API.js');
    require('./zend_ptr_stack.js');
    require('./zend_stack.js');
    require('./zend_stream.js');
    require('./zend_types.js');
}
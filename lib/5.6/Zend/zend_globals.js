var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend_types.js');
_library._zend_declarables = Struct({});
_library._zend_declarables.size = 1;

_library._preload.push(function () {
    _library._zend_declarables.size = 0;
    _library._zend_declarables.defineProperty("ticks", _library.zval);
});

_library.zend_declarables = _library._zend_declarables;

require('./zend.js');
require('./zend_compile.js');
require('./zend_hash.js');
require('./zend_stack.js');
require('./zend_llist.js');
require('./zend_ini.js');
require('./zend_multibyte.js');
_library._zend_compiler_globals = Struct({});
_library._zend_compiler_globals.size = 1;

_library._preload.push(function () {
    _library._zend_compiler_globals.size = 0;
    _library._zend_compiler_globals.defineProperty("access_type", 'uint');
    _library._zend_compiler_globals.defineProperty("active_class_entry", ref.refType(_library.zend_class_entry));
    _library._zend_compiler_globals.defineProperty("active_op_array", ref.refType(_library.zend_op_array));
    _library._zend_compiler_globals.defineProperty("asp_tags", 'uchar');
    _library._zend_compiler_globals.defineProperty("auto_globals", ref.refType(_library.HashTable));
    _library._zend_compiler_globals.defineProperty("bp_stack", _library.zend_stack);
    _library._zend_compiler_globals.defineProperty("catch_begin", 'long');
    _library._zend_compiler_globals.defineProperty("class_table", ref.refType(_library.HashTable));
    _library._zend_compiler_globals.defineProperty("compiled_filename", ref.refType('char'));
    _library._zend_compiler_globals.defineProperty("compiler_options", 'uint');
    _library._zend_compiler_globals.defineProperty("const_filenames", _library.HashTable);
    _library._zend_compiler_globals.defineProperty("context", _library.zend_compiler_context);
    _library._zend_compiler_globals.defineProperty("context_stack", _library.zend_stack);
    _library._zend_compiler_globals.defineProperty("current_import", ref.refType(_library.HashTable));
    _library._zend_compiler_globals.defineProperty("current_import_const", ref.refType(_library.HashTable));
    _library._zend_compiler_globals.defineProperty("current_import_function", ref.refType(_library.HashTable));
    _library._zend_compiler_globals.defineProperty("current_namespace", ref.refType(_library.zval));
    _library._zend_compiler_globals.defineProperty("declarables", _library.zend_declarables);
    _library._zend_compiler_globals.defineProperty("declare_stack", _library.zend_stack);
    _library._zend_compiler_globals.defineProperty("detect_unicode", 'uchar');
    _library._zend_compiler_globals.defineProperty("dimension_llist", _library.zend_llist);
    _library._zend_compiler_globals.defineProperty("doc_comment", ref.refType('char'));
    _library._zend_compiler_globals.defineProperty("doc_comment_len", 'uint');
    _library._zend_compiler_globals.defineProperty("encoding_declared", 'uchar');
    _library._zend_compiler_globals.defineProperty("filenames_table", _library.HashTable);
    _library._zend_compiler_globals.defineProperty("foreach_copy_stack", _library.zend_stack);
    _library._zend_compiler_globals.defineProperty("function_call_stack", _library.zend_stack);
    _library._zend_compiler_globals.defineProperty("function_table", ref.refType(_library.HashTable));
    _library._zend_compiler_globals.defineProperty("has_bracketed_namespaces", 'uchar');
    _library._zend_compiler_globals.defineProperty("implementing_class", _library.znode);
    _library._zend_compiler_globals.defineProperty("in_compilation", 'uchar');
    _library._zend_compiler_globals.defineProperty("in_namespace", 'uchar');
    _library._zend_compiler_globals.defineProperty("increment_lineno", 'uchar');
    _library._zend_compiler_globals.defineProperty("ini_parser_param", ref.refType(_library._zend_ini_parser_param));
    _library._zend_compiler_globals.defineProperty("ini_parser_unbuffered_errors", 'uchar');
    _library._zend_compiler_globals.defineProperty("interactive", 'int');
    _library._zend_compiler_globals.defineProperty("interned_empty_string", ref.refType('char'));
    _library._zend_compiler_globals.defineProperty("interned_strings", _library.HashTable);
    _library._zend_compiler_globals.defineProperty("interned_strings_end", ref.refType('char'));
    _library._zend_compiler_globals.defineProperty("interned_strings_snapshot_top", ref.refType('char'));
    _library._zend_compiler_globals.defineProperty("interned_strings_start", ref.refType('char'));
    _library._zend_compiler_globals.defineProperty("interned_strings_top", ref.refType('char'));
    _library._zend_compiler_globals.defineProperty("list_llist", _library.zend_llist);
    _library._zend_compiler_globals.defineProperty("list_stack", _library.zend_stack);
    _library._zend_compiler_globals.defineProperty("multibyte", 'uchar');
    _library._zend_compiler_globals.defineProperty("object_stack", _library.zend_stack);
    _library._zend_compiler_globals.defineProperty("open_files", _library.zend_llist);
    _library._zend_compiler_globals.defineProperty("parse_error", 'uchar');
    _library._zend_compiler_globals.defineProperty("script_encoding_list", ref.refType(ref.refType(_library.zend_encoding)));
    _library._zend_compiler_globals.defineProperty("script_encoding_list_size", 'ulong');
    _library._zend_compiler_globals.defineProperty("short_tags", 'uchar');
    _library._zend_compiler_globals.defineProperty("start_lineno", 'uint');
    _library._zend_compiler_globals.defineProperty("switch_cond_stack", _library.zend_stack);
    _library._zend_compiler_globals.defineProperty("unclean_shutdown", 'uchar');
    _library._zend_compiler_globals.defineProperty("zend_lineno", 'int');
});

require('./zend_execute.js');
_library.zend_vm_stack = ref.refType(_library._zend_vm_stack);

_library.zend_ini_entry = _library._zend_ini_entry;

require('./zend_modules.js');
require('./zend_objects_API.js');
require('./zend_ptr_stack.js');
_library._zend_executor_globals = Struct({});
_library._zend_executor_globals.size = 1;

_library._preload.push(function () {
    _library._zend_executor_globals.size = 0;
    _library._zend_executor_globals.defineProperty("This", ref.refType(_library.zval));
    _library._zend_executor_globals.defineProperty("active", 'uchar');
    _library._zend_executor_globals.defineProperty("active_op_array", ref.refType(_library.zend_op_array));
    _library._zend_executor_globals.defineProperty("active_symbol_table", ref.refType(_library.HashTable));
    _library._zend_executor_globals.defineProperty("argument_stack", _library.zend_vm_stack);
    _library._zend_executor_globals.defineProperty("autoload_func", ref.refType(_library.zend_function));
    _library._zend_executor_globals.defineProperty("bailout", ref.refType(_library.jmp_buf));
    _library._zend_executor_globals.defineProperty("called_scope", ref.refType(_library.zend_class_entry));
    _library._zend_executor_globals.defineProperty("class_table", ref.refType(_library.HashTable));
    _library._zend_executor_globals.defineProperty("current_execute_data", ref.refType(_library._zend_execute_data));
    _library._zend_executor_globals.defineProperty("current_module", ref.refType(_library._zend_module_entry));
    _library._zend_executor_globals.defineProperty("error_handling", _library.zend_error_handling_t);
    _library._zend_executor_globals.defineProperty("error_reporting", 'int');
    _library._zend_executor_globals.defineProperty("error_reporting_ini_entry", ref.refType(_library.zend_ini_entry));
    _library._zend_executor_globals.defineProperty("error_zval", _library.zval);
    _library._zend_executor_globals.defineProperty("error_zval_ptr", ref.refType(_library.zval));
    _library._zend_executor_globals.defineProperty("exception", ref.refType(_library.zval));
    _library._zend_executor_globals.defineProperty("exception_class", ref.refType(_library.zend_class_entry));
    _library._zend_executor_globals.defineProperty("exception_op", RefArray(_library.zend_op, 3));
    _library._zend_executor_globals.defineProperty("exit_status", 'int');
    _library._zend_executor_globals.defineProperty("full_tables_cleanup", 'uchar');
    _library._zend_executor_globals.defineProperty("function_table", ref.refType(_library.HashTable));
    _library._zend_executor_globals.defineProperty("in_autoload", ref.refType(_library.HashTable));
    _library._zend_executor_globals.defineProperty("in_execution", 'uchar');
    _library._zend_executor_globals.defineProperty("included_files", _library.HashTable);
    _library._zend_executor_globals.defineProperty("ini_directives", ref.refType(_library.HashTable));
    _library._zend_executor_globals.defineProperty("lambda_count", 'int');
    _library._zend_executor_globals.defineProperty("modified_ini_directives", ref.refType(_library.HashTable));
    _library._zend_executor_globals.defineProperty("no_extensions", 'uchar');
    _library._zend_executor_globals.defineProperty("objects_store", _library.zend_objects_store);
    _library._zend_executor_globals.defineProperty("opline_before_exception", ref.refType(_library.zend_op));
    _library._zend_executor_globals.defineProperty("opline_ptr", ref.refType(ref.refType(_library.zend_op)));
    _library._zend_executor_globals.defineProperty("orig_error_reporting", 'int');
    _library._zend_executor_globals.defineProperty("persistent_list", _library.HashTable);
    _library._zend_executor_globals.defineProperty("precision", 'long');
    _library._zend_executor_globals.defineProperty("prev_exception", ref.refType(_library.zval));
    _library._zend_executor_globals.defineProperty("regular_list", _library.HashTable);
    _library._zend_executor_globals.defineProperty("reserved", RefArray(ref.refType('void'), 4));
    _library._zend_executor_globals.defineProperty("return_value_ptr_ptr", ref.refType(ref.refType(_library.zval)));
    _library._zend_executor_globals.defineProperty("saved_fpu_cw", 'ushort');
    _library._zend_executor_globals.defineProperty("saved_fpu_cw_ptr", ref.refType('void'));
    _library._zend_executor_globals.defineProperty("scope", ref.refType(_library.zend_class_entry));
    _library._zend_executor_globals.defineProperty("start_op", ref.refType(_library.zend_op));
    _library._zend_executor_globals.defineProperty("std_property_info", _library.zend_property_info);
    _library._zend_executor_globals.defineProperty("symbol_table", _library.HashTable);
    _library._zend_executor_globals.defineProperty("symtable_cache", RefArray(ref.refType(_library.HashTable), 32));
    _library._zend_executor_globals.defineProperty("symtable_cache_limit", ref.refType(ref.refType(_library.HashTable)));
    _library._zend_executor_globals.defineProperty("symtable_cache_ptr", ref.refType(ref.refType(_library.HashTable)));
    _library._zend_executor_globals.defineProperty("ticks_count", 'int');
    _library._zend_executor_globals.defineProperty("timeout_seconds", 'int');
    _library._zend_executor_globals.defineProperty("uninitialized_zval", _library.zval);
    _library._zend_executor_globals.defineProperty("uninitialized_zval_ptr", ref.refType(_library.zval));
    _library._zend_executor_globals.defineProperty("user_error_handler", ref.refType(_library.zval));
    _library._zend_executor_globals.defineProperty("user_error_handler_error_reporting", 'int');
    _library._zend_executor_globals.defineProperty("user_error_handlers", _library.zend_ptr_stack);
    _library._zend_executor_globals.defineProperty("user_error_handlers_error_reporting", _library.zend_stack);
    _library._zend_executor_globals.defineProperty("user_exception_handler", ref.refType(_library.zval));
    _library._zend_executor_globals.defineProperty("user_exception_handlers", _library.zend_ptr_stack);
    _library._zend_executor_globals.defineProperty("zend_constants", ref.refType(_library.HashTable));
});

require('./zend_stream.js');
_library._zend_php_scanner_globals = Struct({});
_library._zend_php_scanner_globals.size = 1;

_library._preload.push(function () {
    _library._zend_php_scanner_globals.size = 0;
    _library._zend_php_scanner_globals.defineProperty("heredoc_label_stack", _library.zend_ptr_stack);
    _library._zend_php_scanner_globals.defineProperty("input_filter", _library.zend_encoding_filter);
    _library._zend_php_scanner_globals.defineProperty("output_filter", _library.zend_encoding_filter);
    _library._zend_php_scanner_globals.defineProperty("script_encoding", ref.refType(_library.zend_encoding));
    _library._zend_php_scanner_globals.defineProperty("script_filtered", ref.refType('uchar'));
    _library._zend_php_scanner_globals.defineProperty("script_filtered_size", 'ulong');
    _library._zend_php_scanner_globals.defineProperty("script_org", ref.refType('uchar'));
    _library._zend_php_scanner_globals.defineProperty("script_org_size", 'ulong');
    _library._zend_php_scanner_globals.defineProperty("state_stack", _library.zend_stack);
    _library._zend_php_scanner_globals.defineProperty("yy_cursor", ref.refType('uchar'));
    _library._zend_php_scanner_globals.defineProperty("yy_in", ref.refType(_library.zend_file_handle));
    _library._zend_php_scanner_globals.defineProperty("yy_leng", 'uint');
    _library._zend_php_scanner_globals.defineProperty("yy_limit", ref.refType('uchar'));
    _library._zend_php_scanner_globals.defineProperty("yy_marker", ref.refType('uchar'));
    _library._zend_php_scanner_globals.defineProperty("yy_out", ref.refType(_library.zend_file_handle));
    _library._zend_php_scanner_globals.defineProperty("yy_start", ref.refType('uchar'));
    _library._zend_php_scanner_globals.defineProperty("yy_state", 'int');
    _library._zend_php_scanner_globals.defineProperty("yy_text", ref.refType('uchar'));
});

_library._zend_ini_scanner_globals = Struct({});
_library._zend_ini_scanner_globals.size = 1;

_library._preload.push(function () {
    _library._zend_ini_scanner_globals.size = 0;
    _library._zend_ini_scanner_globals.defineProperty("filename", ref.refType('char'));
    _library._zend_ini_scanner_globals.defineProperty("lineno", 'int');
    _library._zend_ini_scanner_globals.defineProperty("scanner_mode", 'int');
    _library._zend_ini_scanner_globals.defineProperty("state_stack", _library.zend_stack);
    _library._zend_ini_scanner_globals.defineProperty("yy_cursor", ref.refType('uchar'));
    _library._zend_ini_scanner_globals.defineProperty("yy_in", ref.refType(_library.zend_file_handle));
    _library._zend_ini_scanner_globals.defineProperty("yy_leng", 'uint');
    _library._zend_ini_scanner_globals.defineProperty("yy_limit", ref.refType('uchar'));
    _library._zend_ini_scanner_globals.defineProperty("yy_marker", ref.refType('uchar'));
    _library._zend_ini_scanner_globals.defineProperty("yy_out", ref.refType(_library.zend_file_handle));
    _library._zend_ini_scanner_globals.defineProperty("yy_start", ref.refType('uchar'));
    _library._zend_ini_scanner_globals.defineProperty("yy_state", 'int');
    _library._zend_ini_scanner_globals.defineProperty("yy_text", ref.refType('uchar'));
});


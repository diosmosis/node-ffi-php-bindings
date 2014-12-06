var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_ini_entry = Struct({
    "displayer": ffi.Function('void', [ref.refType(_library._zend_ini_entry), 'int']),
    "mh_arg1": 'void' ? ref.refType('void') : 'pointer',
    "mh_arg2": 'void' ? ref.refType('void') : 'pointer',
    "mh_arg3": 'void' ? ref.refType('void') : 'pointer',
    "modifiable": 'int',
    "modified": 'int',
    "module_number": 'int',
    "name": 'char' ? ref.refType('char') : 'pointer',
    "name_length": 'uint',
    "on_modify": ffi.Function('int', [ref.refType(_library._zend_ini_entry), 'char' ? ref.refType('char') : 'pointer', 'uint', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'int']),
    "orig_modifiable": 'int',
    "orig_value": 'char' ? ref.refType('char') : 'pointer',
    "orig_value_length": 'uint',
    "value": 'char' ? ref.refType('char') : 'pointer',
    "value_length": 'uint'
});

_library.zend_ini_parser_cb_t = ffi.Function('void', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), 'int', 'void' ? ref.refType('void') : 'pointer']);

_library._zend_ini_parser_param = Struct({
    "arg": 'void' ? ref.refType('void') : 'pointer',
    "ini_parser_cb": _library.zend_ini_parser_cb_t
});

_library.zend_ini_startup = ['int', []];
_library._functions.push(_library.zend_ini_startup);

_library.zend_ini_shutdown = ['int', []];
_library._functions.push(_library.zend_ini_shutdown);

_library.zend_ini_global_shutdown = ['int', []];
_library._functions.push(_library.zend_ini_global_shutdown);

_library.zend_ini_deactivate = ['int', []];
_library._functions.push(_library.zend_ini_deactivate);

_library.zend_copy_ini_directives = ['int', []];
_library._functions.push(_library.zend_copy_ini_directives);

_library.zend_ini_sort_entries = ['void', []];
_library._functions.push(_library.zend_ini_sort_entries);

_library.zend_register_ini_entries = ['int', [ref.refType(_library.zend_ini_entry), 'int']];
_library._functions.push(_library.zend_register_ini_entries);

_library.zend_unregister_ini_entries = ['void', ['int']];
_library._functions.push(_library.zend_unregister_ini_entries);

_library.zend_ini_refresh_caches = ['void', ['int']];
_library._functions.push(_library.zend_ini_refresh_caches);

_library.zend_alter_ini_entry = ['int', ['char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint', 'int', 'int']];
_library._functions.push(_library.zend_alter_ini_entry);

_library.zend_alter_ini_entry_ex = ['int', ['char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint', 'int', 'int', 'int']];
_library._functions.push(_library.zend_alter_ini_entry_ex);

_library.zend_restore_ini_entry = ['int', ['char' ? ref.refType('char') : 'pointer', 'uint', 'int']];
_library._functions.push(_library.zend_restore_ini_entry);

_library.display_ini_entries = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.display_ini_entries);

_library.zend_ini_long = ['long', ['char' ? ref.refType('char') : 'pointer', 'uint', 'int']];
_library._functions.push(_library.zend_ini_long);

_library.zend_ini_double = ['double', ['char' ? ref.refType('char') : 'pointer', 'uint', 'int']];
_library._functions.push(_library.zend_ini_double);

_library.zend_ini_string = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'uint', 'int']];
_library._functions.push(_library.zend_ini_string);

_library.zend_ini_string_ex = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'uint', 'int', 'uchar' ? ref.refType('uchar') : 'pointer']];
_library._functions.push(_library.zend_ini_string_ex);

_library.zend_ini_register_displayer = ['int', ['char' ? ref.refType('char') : 'pointer', 'uint', ffi.Function('void', [ref.refType(_library._zend_ini_entry), 'int'])]];
_library._functions.push(_library.zend_ini_register_displayer);

_library.zend_ini_boolean_displayer_cb = ['void', [ref.refType(_library.zend_ini_entry), 'int']];
_library._functions.push(_library.zend_ini_boolean_displayer_cb);

_library.zend_ini_color_displayer_cb = ['void', [ref.refType(_library.zend_ini_entry), 'int']];
_library._functions.push(_library.zend_ini_color_displayer_cb);

_library.display_link_numbers = ['void', [ref.refType(_library.zend_ini_entry), 'int']];
_library._functions.push(_library.display_link_numbers);

_library.OnUpdateBool = ['int', [ref.refType(_library.zend_ini_entry), 'char' ? ref.refType('char') : 'pointer', 'uint', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'int']];
_library._functions.push(_library.OnUpdateBool);

_library.OnUpdateLong = ['int', [ref.refType(_library.zend_ini_entry), 'char' ? ref.refType('char') : 'pointer', 'uint', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'int']];
_library._functions.push(_library.OnUpdateLong);

_library.OnUpdateLongGEZero = ['int', [ref.refType(_library.zend_ini_entry), 'char' ? ref.refType('char') : 'pointer', 'uint', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'int']];
_library._functions.push(_library.OnUpdateLongGEZero);

_library.OnUpdateReal = ['int', [ref.refType(_library.zend_ini_entry), 'char' ? ref.refType('char') : 'pointer', 'uint', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'int']];
_library._functions.push(_library.OnUpdateReal);

_library.OnUpdateString = ['int', [ref.refType(_library.zend_ini_entry), 'char' ? ref.refType('char') : 'pointer', 'uint', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'int']];
_library._functions.push(_library.OnUpdateString);

_library.OnUpdateStringUnempty = ['int', [ref.refType(_library.zend_ini_entry), 'char' ? ref.refType('char') : 'pointer', 'uint', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'void' ? ref.refType('void') : 'pointer', 'int']];
_library._functions.push(_library.OnUpdateStringUnempty);

_library.zend_parse_ini_file = ['int', [ref.refType(_library.zend_file_handle), 'uchar', 'int', _library.zend_ini_parser_cb_t, 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_parse_ini_file);

_library.zend_parse_ini_string = ['int', ['char' ? ref.refType('char') : 'pointer', 'uchar', 'int', _library.zend_ini_parser_cb_t, 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.zend_parse_ini_string);

_library.zend_ini_parser_param = _library._zend_ini_parser_param;

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_globals.js');
    require('./zend_hash.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_stream.js');
    require('./zend_types.js');
}
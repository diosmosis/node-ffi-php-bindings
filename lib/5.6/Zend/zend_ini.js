var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_ini_entry = Struct({});
_library._zend_ini_entry.size = 1;

_library._preload['_zend_ini_entry'] = ['int (zend_ini_entry *, char *, uint, void *, void *, void *, int)', 'void (zend_ini_entry *, int)', function () {
    _library._zend_ini_entry.size = 0;
    _library._zend_ini_entry.defineProperty("module_number", 'int');
    _library._zend_ini_entry.defineProperty("modifiable", 'int');
    _library._zend_ini_entry.defineProperty("name", ref.refType('char'));
    _library._zend_ini_entry.defineProperty("name_length", 'uint');
    _library._zend_ini_entry.defineProperty("on_modify", ffi.Function('int', [ref.refType(_library._zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']));
    _library._zend_ini_entry.defineProperty("mh_arg1", ref.refType('void'));
    _library._zend_ini_entry.defineProperty("mh_arg2", ref.refType('void'));
    _library._zend_ini_entry.defineProperty("mh_arg3", ref.refType('void'));
    _library._zend_ini_entry.defineProperty("value", ref.refType('char'));
    _library._zend_ini_entry.defineProperty("value_length", 'uint');
    _library._zend_ini_entry.defineProperty("orig_value", ref.refType('char'));
    _library._zend_ini_entry.defineProperty("orig_value_length", 'uint');
    _library._zend_ini_entry.defineProperty("orig_modifiable", 'int');
    _library._zend_ini_entry.defineProperty("modified", 'int');
    _library._zend_ini_entry.defineProperty("displayer", ffi.Function('void', [ref.refType(_library._zend_ini_entry), 'int']));
}];

_library._preload['zend_ini_parser_cb_t'] = ['void (zval *, zval *, zval *, int, void *)', function () {
    _library.zend_ini_parser_cb_t = ffi.Function('void', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), 'int', ref.refType('void')]);
}];

_library._zend_ini_parser_param = Struct({});
_library._zend_ini_parser_param.size = 1;

_library._preload['_zend_ini_parser_param'] = ['zend_ini_parser_cb_t', function () {
    _library._zend_ini_parser_param.size = 0;
    _library._zend_ini_parser_param.defineProperty("ini_parser_cb", _library.zend_ini_parser_cb_t);
    _library._zend_ini_parser_param.defineProperty("arg", ref.refType('void'));
}];

_library._preload['zend_ini_startup'] = [function () {
    _library.zend_ini_startup = ['int', []];
    _library._functions['zend_ini_startup'] = _library.zend_ini_startup;
}];

_library._preload['zend_ini_shutdown'] = [function () {
    _library.zend_ini_shutdown = ['int', []];
    _library._functions['zend_ini_shutdown'] = _library.zend_ini_shutdown;
}];

_library._preload['zend_ini_global_shutdown'] = [function () {
    _library.zend_ini_global_shutdown = ['int', []];
    _library._functions['zend_ini_global_shutdown'] = _library.zend_ini_global_shutdown;
}];

_library._preload['zend_ini_deactivate'] = [function () {
    _library.zend_ini_deactivate = ['int', []];
    _library._functions['zend_ini_deactivate'] = _library.zend_ini_deactivate;
}];

_library._preload['zend_ini_sort_entries'] = [function () {
    _library.zend_ini_sort_entries = ['void', []];
    _library._functions['zend_ini_sort_entries'] = _library.zend_ini_sort_entries;
}];

_library._preload['zend_register_ini_entries'] = ['zend_ini_entry', function () {
    _library.zend_register_ini_entries = ['int', [ref.refType(_library.zend_ini_entry), 'int']];
    _library._functions['zend_register_ini_entries'] = _library.zend_register_ini_entries;
}];

_library._preload['zend_unregister_ini_entries'] = [function () {
    _library.zend_unregister_ini_entries = ['void', ['int']];
    _library._functions['zend_unregister_ini_entries'] = _library.zend_unregister_ini_entries;
}];

_library._preload['zend_alter_ini_entry'] = [function () {
    _library.zend_alter_ini_entry = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int', 'int']];
    _library._functions['zend_alter_ini_entry'] = _library.zend_alter_ini_entry;
}];

_library._preload['zend_alter_ini_entry_ex'] = [function () {
    _library.zend_alter_ini_entry_ex = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int', 'int', 'int']];
    _library._functions['zend_alter_ini_entry_ex'] = _library.zend_alter_ini_entry_ex;
}];

_library._preload['zend_restore_ini_entry'] = [function () {
    _library.zend_restore_ini_entry = ['int', [ref.refType('char'), 'uint', 'int']];
    _library._functions['zend_restore_ini_entry'] = _library.zend_restore_ini_entry;
}];

_library._preload['display_ini_entries'] = ['zend_module_entry', function () {
    _library.display_ini_entries = ['void', [ref.refType(_library.zend_module_entry)]];
    _library._functions['display_ini_entries'] = _library.display_ini_entries;
}];

_library._preload['zend_ini_long'] = [function () {
    _library.zend_ini_long = ['long', [ref.refType('char'), 'uint', 'int']];
    _library._functions['zend_ini_long'] = _library.zend_ini_long;
}];

_library._preload['zend_ini_double'] = [function () {
    _library.zend_ini_double = ['double', [ref.refType('char'), 'uint', 'int']];
    _library._functions['zend_ini_double'] = _library.zend_ini_double;
}];

_library._preload['zend_ini_string'] = [function () {
    _library.zend_ini_string = [ref.refType('char'), [ref.refType('char'), 'uint', 'int']];
    _library._functions['zend_ini_string'] = _library.zend_ini_string;
}];

_library._preload['zend_ini_string_ex'] = [function () {
    _library.zend_ini_string_ex = [ref.refType('char'), [ref.refType('char'), 'uint', 'int', ref.refType('uchar')]];
    _library._functions['zend_ini_string_ex'] = _library.zend_ini_string_ex;
}];

_library._preload['zend_ini_register_displayer'] = ['void (zend_ini_entry *, int)', function () {
    _library.zend_ini_register_displayer = ['int', [ref.refType('char'), 'uint', ffi.Function('void', [ref.refType(_library._zend_ini_entry), 'int'])]];
    _library._functions['zend_ini_register_displayer'] = _library.zend_ini_register_displayer;
}];

_library._preload['zend_ini_boolean_displayer_cb'] = ['zend_ini_entry', function () {
    _library.zend_ini_boolean_displayer_cb = ['void', [ref.refType(_library.zend_ini_entry), 'int']];
    _library._functions['zend_ini_boolean_displayer_cb'] = _library.zend_ini_boolean_displayer_cb;
}];

_library._preload['zend_ini_color_displayer_cb'] = ['zend_ini_entry', function () {
    _library.zend_ini_color_displayer_cb = ['void', [ref.refType(_library.zend_ini_entry), 'int']];
    _library._functions['zend_ini_color_displayer_cb'] = _library.zend_ini_color_displayer_cb;
}];

_library._preload['display_link_numbers'] = ['zend_ini_entry', function () {
    _library.display_link_numbers = ['void', [ref.refType(_library.zend_ini_entry), 'int']];
    _library._functions['display_link_numbers'] = _library.display_link_numbers;
}];

_library._preload['OnUpdateBool'] = ['zend_ini_entry', function () {
    _library.OnUpdateBool = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
    _library._functions['OnUpdateBool'] = _library.OnUpdateBool;
}];

_library._preload['OnUpdateLong'] = ['zend_ini_entry', function () {
    _library.OnUpdateLong = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
    _library._functions['OnUpdateLong'] = _library.OnUpdateLong;
}];

_library._preload['OnUpdateLongGEZero'] = ['zend_ini_entry', function () {
    _library.OnUpdateLongGEZero = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
    _library._functions['OnUpdateLongGEZero'] = _library.OnUpdateLongGEZero;
}];

_library._preload['OnUpdateReal'] = ['zend_ini_entry', function () {
    _library.OnUpdateReal = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
    _library._functions['OnUpdateReal'] = _library.OnUpdateReal;
}];

_library._preload['OnUpdateString'] = ['zend_ini_entry', function () {
    _library.OnUpdateString = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
    _library._functions['OnUpdateString'] = _library.OnUpdateString;
}];

_library._preload['OnUpdateStringUnempty'] = ['zend_ini_entry', function () {
    _library.OnUpdateStringUnempty = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
    _library._functions['OnUpdateStringUnempty'] = _library.OnUpdateStringUnempty;
}];

_library._preload['zend_parse_ini_file'] = ['zend_file_handle', 'zend_ini_parser_cb_t', function () {
    _library.zend_parse_ini_file = ['int', [ref.refType(_library.zend_file_handle), 'uchar', 'int', _library.zend_ini_parser_cb_t, ref.refType('void')]];
    _library._functions['zend_parse_ini_file'] = _library.zend_parse_ini_file;
}];

_library._preload['zend_parse_ini_string'] = ['zend_ini_parser_cb_t', function () {
    _library.zend_parse_ini_string = ['int', [ref.refType('char'), 'uchar', 'int', _library.zend_ini_parser_cb_t, ref.refType('void')]];
    _library._functions['zend_parse_ini_string'] = _library.zend_parse_ini_string;
}];

_library._preload['zend_ini_parser_param'] = [function () {
    _library.zend_ini_parser_param = _library._zend_ini_parser_param;
}];

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

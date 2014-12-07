var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._zend_ini_entry = Struct({});

_library._preload.push(function () {
    _library._zend_ini_entry.defineProperty("displayer", ffi.Function('void', [ref.refType(_library._zend_ini_entry), 'int']));
    _library._zend_ini_entry.defineProperty("mh_arg1", ref.refType('void'));
    _library._zend_ini_entry.defineProperty("mh_arg2", ref.refType('void'));
    _library._zend_ini_entry.defineProperty("mh_arg3", ref.refType('void'));
    _library._zend_ini_entry.defineProperty("modifiable", 'int');
    _library._zend_ini_entry.defineProperty("modified", 'int');
    _library._zend_ini_entry.defineProperty("module_number", 'int');
    _library._zend_ini_entry.defineProperty("name", ref.refType('char'));
    _library._zend_ini_entry.defineProperty("name_length", 'uint');
    _library._zend_ini_entry.defineProperty("on_modify", ffi.Function('int', [ref.refType(_library._zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']));
    _library._zend_ini_entry.defineProperty("orig_modifiable", 'int');
    _library._zend_ini_entry.defineProperty("orig_value", ref.refType('char'));
    _library._zend_ini_entry.defineProperty("orig_value_length", 'uint');
    _library._zend_ini_entry.defineProperty("value", ref.refType('char'));
    _library._zend_ini_entry.defineProperty("value_length", 'uint');
});

_library.zend_ini_parser_cb_t = ffi.Function('void', [ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), ref.refType(_library._zval_struct), 'int', ref.refType('void')]);

require('./zend_ini.js');
_library._zend_ini_parser_param = Struct({});

_library._preload.push(function () {
    _library._zend_ini_parser_param.defineProperty("arg", ref.refType('void'));
    _library._zend_ini_parser_param.defineProperty("ini_parser_cb", _library.zend_ini_parser_cb_t);
});

_library.zend_ini_startup = ['int', []];
_library._functions['zend_ini_startup'] = _library.zend_ini_startup;

_library.zend_ini_shutdown = ['int', []];
_library._functions['zend_ini_shutdown'] = _library.zend_ini_shutdown;

_library.zend_ini_global_shutdown = ['int', []];
_library._functions['zend_ini_global_shutdown'] = _library.zend_ini_global_shutdown;

_library.zend_ini_deactivate = ['int', []];
_library._functions['zend_ini_deactivate'] = _library.zend_ini_deactivate;

_library.zend_copy_ini_directives = ['int', []];
_library._functions['zend_copy_ini_directives'] = _library.zend_copy_ini_directives;

_library.zend_ini_sort_entries = ['void', []];
_library._functions['zend_ini_sort_entries'] = _library.zend_ini_sort_entries;

_library.zend_register_ini_entries = ['int', [ref.refType(_library.zend_ini_entry), 'int']];
_library._functions['zend_register_ini_entries'] = _library.zend_register_ini_entries;

_library.zend_unregister_ini_entries = ['void', ['int']];
_library._functions['zend_unregister_ini_entries'] = _library.zend_unregister_ini_entries;

_library.zend_ini_refresh_caches = ['void', ['int']];
_library._functions['zend_ini_refresh_caches'] = _library.zend_ini_refresh_caches;

_library.zend_alter_ini_entry = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int', 'int']];
_library._functions['zend_alter_ini_entry'] = _library.zend_alter_ini_entry;

_library.zend_alter_ini_entry_ex = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'int', 'int', 'int']];
_library._functions['zend_alter_ini_entry_ex'] = _library.zend_alter_ini_entry_ex;

_library.zend_restore_ini_entry = ['int', [ref.refType('char'), 'uint', 'int']];
_library._functions['zend_restore_ini_entry'] = _library.zend_restore_ini_entry;

_library.display_ini_entries = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions['display_ini_entries'] = _library.display_ini_entries;

_library.zend_ini_long = ['long', [ref.refType('char'), 'uint', 'int']];
_library._functions['zend_ini_long'] = _library.zend_ini_long;

_library.zend_ini_double = ['double', [ref.refType('char'), 'uint', 'int']];
_library._functions['zend_ini_double'] = _library.zend_ini_double;

_library.zend_ini_string = [ref.refType('char'), [ref.refType('char'), 'uint', 'int']];
_library._functions['zend_ini_string'] = _library.zend_ini_string;

_library.zend_ini_string_ex = [ref.refType('char'), [ref.refType('char'), 'uint', 'int', ref.refType('uchar')]];
_library._functions['zend_ini_string_ex'] = _library.zend_ini_string_ex;

_library.zend_ini_register_displayer = ['int', [ref.refType('char'), 'uint', ffi.Function('void', [ref.refType(_library._zend_ini_entry), 'int'])]];
_library._functions['zend_ini_register_displayer'] = _library.zend_ini_register_displayer;

_library.zend_ini_boolean_displayer_cb = ['void', [ref.refType(_library.zend_ini_entry), 'int']];
_library._functions['zend_ini_boolean_displayer_cb'] = _library.zend_ini_boolean_displayer_cb;

_library.zend_ini_color_displayer_cb = ['void', [ref.refType(_library.zend_ini_entry), 'int']];
_library._functions['zend_ini_color_displayer_cb'] = _library.zend_ini_color_displayer_cb;

_library.display_link_numbers = ['void', [ref.refType(_library.zend_ini_entry), 'int']];
_library._functions['display_link_numbers'] = _library.display_link_numbers;

_library.OnUpdateBool = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
_library._functions['OnUpdateBool'] = _library.OnUpdateBool;

_library.OnUpdateLong = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
_library._functions['OnUpdateLong'] = _library.OnUpdateLong;

_library.OnUpdateLongGEZero = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
_library._functions['OnUpdateLongGEZero'] = _library.OnUpdateLongGEZero;

_library.OnUpdateReal = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
_library._functions['OnUpdateReal'] = _library.OnUpdateReal;

_library.OnUpdateString = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
_library._functions['OnUpdateString'] = _library.OnUpdateString;

_library.OnUpdateStringUnempty = ['int', [ref.refType(_library.zend_ini_entry), ref.refType('char'), 'uint', ref.refType('void'), ref.refType('void'), ref.refType('void'), 'int']];
_library._functions['OnUpdateStringUnempty'] = _library.OnUpdateStringUnempty;

_library.zend_parse_ini_file = ['int', [ref.refType(_library.zend_file_handle), 'uchar', 'int', _library.zend_ini_parser_cb_t, ref.refType('void')]];
_library._functions['zend_parse_ini_file'] = _library.zend_parse_ini_file;

_library.zend_parse_ini_string = ['int', [ref.refType('char'), 'uchar', 'int', _library.zend_ini_parser_cb_t, ref.refType('void')]];
_library._functions['zend_parse_ini_string'] = _library.zend_parse_ini_string;

_library.zend_ini_parser_param = _library._zend_ini_parser_param;


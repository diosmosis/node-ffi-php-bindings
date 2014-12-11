var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['add_function'] = ['zval', 'zval', 'zval', function () {
    _library.add_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['add_function'] = _library.add_function;
}];

_library._preload['sub_function'] = ['zval', 'zval', 'zval', function () {
    _library.sub_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['sub_function'] = _library.sub_function;
}];

_library._preload['mul_function'] = ['zval', 'zval', 'zval', function () {
    _library.mul_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['mul_function'] = _library.mul_function;
}];

_library._preload['pow_function'] = ['zval', 'zval', 'zval', function () {
    _library.pow_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['pow_function'] = _library.pow_function;
}];

_library._preload['div_function'] = ['zval', 'zval', 'zval', function () {
    _library.div_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['div_function'] = _library.div_function;
}];

_library._preload['mod_function'] = ['zval', 'zval', 'zval', function () {
    _library.mod_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['mod_function'] = _library.mod_function;
}];

_library._preload['boolean_xor_function'] = ['zval', 'zval', 'zval', function () {
    _library.boolean_xor_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['boolean_xor_function'] = _library.boolean_xor_function;
}];

_library._preload['boolean_not_function'] = ['zval', 'zval', function () {
    _library.boolean_not_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['boolean_not_function'] = _library.boolean_not_function;
}];

_library._preload['bitwise_not_function'] = ['zval', 'zval', function () {
    _library.bitwise_not_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['bitwise_not_function'] = _library.bitwise_not_function;
}];

_library._preload['bitwise_or_function'] = ['zval', 'zval', 'zval', function () {
    _library.bitwise_or_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['bitwise_or_function'] = _library.bitwise_or_function;
}];

_library._preload['bitwise_and_function'] = ['zval', 'zval', 'zval', function () {
    _library.bitwise_and_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['bitwise_and_function'] = _library.bitwise_and_function;
}];

_library._preload['bitwise_xor_function'] = ['zval', 'zval', 'zval', function () {
    _library.bitwise_xor_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['bitwise_xor_function'] = _library.bitwise_xor_function;
}];

_library._preload['shift_left_function'] = ['zval', 'zval', 'zval', function () {
    _library.shift_left_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['shift_left_function'] = _library.shift_left_function;
}];

_library._preload['shift_right_function'] = ['zval', 'zval', 'zval', function () {
    _library.shift_right_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['shift_right_function'] = _library.shift_right_function;
}];

_library._preload['concat_function'] = ['zval', 'zval', 'zval', function () {
    _library.concat_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['concat_function'] = _library.concat_function;
}];

_library._preload['is_equal_function'] = ['zval', 'zval', 'zval', function () {
    _library.is_equal_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['is_equal_function'] = _library.is_equal_function;
}];

_library._preload['is_identical_function'] = ['zval', 'zval', 'zval', function () {
    _library.is_identical_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['is_identical_function'] = _library.is_identical_function;
}];

_library._preload['is_not_identical_function'] = ['zval', 'zval', 'zval', function () {
    _library.is_not_identical_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['is_not_identical_function'] = _library.is_not_identical_function;
}];

_library._preload['is_not_equal_function'] = ['zval', 'zval', 'zval', function () {
    _library.is_not_equal_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['is_not_equal_function'] = _library.is_not_equal_function;
}];

_library._preload['is_smaller_function'] = ['zval', 'zval', 'zval', function () {
    _library.is_smaller_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['is_smaller_function'] = _library.is_smaller_function;
}];

_library._preload['is_smaller_or_equal_function'] = ['zval', 'zval', 'zval', function () {
    _library.is_smaller_or_equal_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['is_smaller_or_equal_function'] = _library.is_smaller_or_equal_function;
}];

_library._preload['instanceof_function_ex'] = ['zend_class_entry', 'zend_class_entry', function () {
    _library.instanceof_function_ex = ['uchar', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry), 'uchar']];
    _library._functions['instanceof_function_ex'] = _library.instanceof_function_ex;
}];

_library._preload['instanceof_function'] = ['zend_class_entry', 'zend_class_entry', function () {
    _library.instanceof_function = ['uchar', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
    _library._functions['instanceof_function'] = _library.instanceof_function;
}];

_library._preload['increment_function'] = ['zval', function () {
    _library.increment_function = ['int', [ref.refType(_library.zval)]];
    _library._functions['increment_function'] = _library.increment_function;
}];

_library._preload['decrement_function'] = ['zval', function () {
    _library.decrement_function = ['int', [ref.refType(_library.zval)]];
    _library._functions['decrement_function'] = _library.decrement_function;
}];

_library._preload['convert_scalar_to_number'] = ['zval', function () {
    _library.convert_scalar_to_number = ['void', [ref.refType(_library.zval)]];
    _library._functions['convert_scalar_to_number'] = _library.convert_scalar_to_number;
}];

_library._preload['_convert_to_cstring'] = ['zval', function () {
    _library._convert_to_cstring = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
    _library._functions['_convert_to_cstring'] = _library._convert_to_cstring;
}];

_library._preload['_convert_to_string'] = ['zval', function () {
    _library._convert_to_string = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
    _library._functions['_convert_to_string'] = _library._convert_to_string;
}];

_library._preload['convert_to_long'] = ['zval', function () {
    _library.convert_to_long = ['void', [ref.refType(_library.zval)]];
    _library._functions['convert_to_long'] = _library.convert_to_long;
}];

_library._preload['convert_to_double'] = ['zval', function () {
    _library.convert_to_double = ['void', [ref.refType(_library.zval)]];
    _library._functions['convert_to_double'] = _library.convert_to_double;
}];

_library._preload['convert_to_long_base'] = ['zval', function () {
    _library.convert_to_long_base = ['void', [ref.refType(_library.zval), 'int']];
    _library._functions['convert_to_long_base'] = _library.convert_to_long_base;
}];

_library._preload['convert_to_null'] = ['zval', function () {
    _library.convert_to_null = ['void', [ref.refType(_library.zval)]];
    _library._functions['convert_to_null'] = _library.convert_to_null;
}];

_library._preload['convert_to_boolean'] = ['zval', function () {
    _library.convert_to_boolean = ['void', [ref.refType(_library.zval)]];
    _library._functions['convert_to_boolean'] = _library.convert_to_boolean;
}];

_library._preload['convert_to_array'] = ['zval', function () {
    _library.convert_to_array = ['void', [ref.refType(_library.zval)]];
    _library._functions['convert_to_array'] = _library.convert_to_array;
}];

_library._preload['convert_to_object'] = ['zval', function () {
    _library.convert_to_object = ['void', [ref.refType(_library.zval)]];
    _library._functions['convert_to_object'] = _library.convert_to_object;
}];

_library._preload['add_char_to_string'] = ['zval', 'zval', 'zval', function () {
    _library.add_char_to_string = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['add_char_to_string'] = _library.add_char_to_string;
}];

_library._preload['add_string_to_string'] = ['zval', 'zval', 'zval', function () {
    _library.add_string_to_string = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['add_string_to_string'] = _library.add_string_to_string;
}];

_library._preload['zend_string_to_double'] = [function () {
    _library.zend_string_to_double = ['double', [ref.refType('char'), 'uint']];
    _library._functions['zend_string_to_double'] = _library.zend_string_to_double;
}];

_library._preload['zval_is_true'] = ['zval', function () {
    _library.zval_is_true = ['int', [ref.refType(_library.zval)]];
    _library._functions['zval_is_true'] = _library.zval_is_true;
}];

_library._preload['compare_function'] = ['zval', 'zval', 'zval', function () {
    _library.compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['compare_function'] = _library.compare_function;
}];

_library._preload['numeric_compare_function'] = ['zval', 'zval', 'zval', function () {
    _library.numeric_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['numeric_compare_function'] = _library.numeric_compare_function;
}];

_library._preload['string_compare_function_ex'] = ['zval', 'zval', 'zval', function () {
    _library.string_compare_function_ex = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval), 'uchar']];
    _library._functions['string_compare_function_ex'] = _library.string_compare_function_ex;
}];

_library._preload['string_compare_function'] = ['zval', 'zval', 'zval', function () {
    _library.string_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['string_compare_function'] = _library.string_compare_function;
}];

_library._preload['string_case_compare_function'] = ['zval', 'zval', 'zval', function () {
    _library.string_case_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['string_case_compare_function'] = _library.string_case_compare_function;
}];

_library._preload['string_locale_compare_function'] = ['zval', 'zval', 'zval', function () {
    _library.string_locale_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['string_locale_compare_function'] = _library.string_locale_compare_function;
}];

_library._preload['zend_str_tolower'] = [function () {
    _library.zend_str_tolower = ['void', [ref.refType('char'), 'uint']];
    _library._functions['zend_str_tolower'] = _library.zend_str_tolower;
}];

_library._preload['zend_str_tolower_copy'] = [function () {
    _library.zend_str_tolower_copy = [ref.refType('char'), [ref.refType('char'), ref.refType('char'), 'uint']];
    _library._functions['zend_str_tolower_copy'] = _library.zend_str_tolower_copy;
}];

_library._preload['zend_str_tolower_dup'] = [function () {
    _library.zend_str_tolower_dup = [ref.refType('char'), [ref.refType('char'), 'uint']];
    _library._functions['zend_str_tolower_dup'] = _library.zend_str_tolower_dup;
}];

_library._preload['zend_binary_zval_strcmp'] = ['zval', 'zval', function () {
    _library.zend_binary_zval_strcmp = ['int', [ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zend_binary_zval_strcmp'] = _library.zend_binary_zval_strcmp;
}];

_library._preload['zend_binary_zval_strncmp'] = ['zval', 'zval', 'zval', function () {
    _library.zend_binary_zval_strncmp = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zend_binary_zval_strncmp'] = _library.zend_binary_zval_strncmp;
}];

_library._preload['zend_binary_zval_strcasecmp'] = ['zval', 'zval', function () {
    _library.zend_binary_zval_strcasecmp = ['int', [ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zend_binary_zval_strcasecmp'] = _library.zend_binary_zval_strcasecmp;
}];

_library._preload['zend_binary_zval_strncasecmp'] = ['zval', 'zval', 'zval', function () {
    _library.zend_binary_zval_strncasecmp = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zend_binary_zval_strncasecmp'] = _library.zend_binary_zval_strncasecmp;
}];

_library._preload['zend_binary_strcmp'] = [function () {
    _library.zend_binary_strcmp = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['zend_binary_strcmp'] = _library.zend_binary_strcmp;
}];

_library._preload['zend_binary_strncmp'] = [function () {
    _library.zend_binary_strncmp = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'uint']];
    _library._functions['zend_binary_strncmp'] = _library.zend_binary_strncmp;
}];

_library._preload['zend_binary_strcasecmp'] = [function () {
    _library.zend_binary_strcasecmp = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['zend_binary_strcasecmp'] = _library.zend_binary_strcasecmp;
}];

_library._preload['zend_binary_strncasecmp'] = [function () {
    _library.zend_binary_strncasecmp = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'uint']];
    _library._functions['zend_binary_strncasecmp'] = _library.zend_binary_strncasecmp;
}];

_library._preload['zend_binary_strncasecmp_l'] = [function () {
    _library.zend_binary_strncasecmp_l = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'uint']];
    _library._functions['zend_binary_strncasecmp_l'] = _library.zend_binary_strncasecmp_l;
}];

_library._preload['zendi_smart_strcmp'] = ['zval', 'zval', 'zval', function () {
    _library.zendi_smart_strcmp = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zendi_smart_strcmp'] = _library.zendi_smart_strcmp;
}];

_library._preload['zend_compare_symbol_tables'] = ['zval', 'HashTable', 'HashTable', function () {
    _library.zend_compare_symbol_tables = ['void', [ref.refType(_library.zval), ref.refType(_library.HashTable), ref.refType(_library.HashTable)]];
    _library._functions['zend_compare_symbol_tables'] = _library.zend_compare_symbol_tables;
}];

_library._preload['zend_compare_arrays'] = ['zval', 'zval', 'zval', function () {
    _library.zend_compare_arrays = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zend_compare_arrays'] = _library.zend_compare_arrays;
}];

_library._preload['zend_compare_objects'] = ['zval', 'zval', 'zval', function () {
    _library.zend_compare_objects = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['zend_compare_objects'] = _library.zend_compare_objects;
}];

_library._preload['zend_atoi'] = [function () {
    _library.zend_atoi = ['int', [ref.refType('char'), 'int']];
    _library._functions['zend_atoi'] = _library.zend_atoi;
}];

_library._preload['zend_atol'] = [function () {
    _library.zend_atol = ['long', [ref.refType('char'), 'int']];
    _library._functions['zend_atol'] = _library.zend_atol;
}];

_library._preload['zend_locale_sprintf_double'] = ['zval', function () {
    _library.zend_locale_sprintf_double = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
    _library._functions['zend_locale_sprintf_double'] = _library.zend_locale_sprintf_double;
}];

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}

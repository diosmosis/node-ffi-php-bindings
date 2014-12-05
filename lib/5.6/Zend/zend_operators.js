var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.add_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.add_function);

_library.sub_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.sub_function);

_library.mul_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.mul_function);

_library.pow_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.pow_function);

_library.div_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.div_function);

_library.mod_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.mod_function);

_library.boolean_xor_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.boolean_xor_function);

_library.boolean_not_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.boolean_not_function);

_library.bitwise_not_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.bitwise_not_function);

_library.bitwise_or_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.bitwise_or_function);

_library.bitwise_and_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.bitwise_and_function);

_library.bitwise_xor_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.bitwise_xor_function);

_library.shift_left_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.shift_left_function);

_library.shift_right_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.shift_right_function);

_library.concat_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.concat_function);

_library.is_equal_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.is_equal_function);

_library.is_identical_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.is_identical_function);

_library.is_not_identical_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.is_not_identical_function);

_library.is_not_equal_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.is_not_equal_function);

_library.is_smaller_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.is_smaller_function);

_library.is_smaller_or_equal_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.is_smaller_or_equal_function);

_library.instanceof_function_ex = ['uchar', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry), 'uchar']];
_library._functions.push(_library.instanceof_function_ex);

_library.instanceof_function = ['uchar', [ref.refType(_library.zend_class_entry), ref.refType(_library.zend_class_entry)]];
_library._functions.push(_library.instanceof_function);

_library.zend_dval_to_lval = ['long', ['double']];
_library._functions.push(_library.zend_dval_to_lval);

_library.is_numeric_string_ex = ['uchar', [ref.refType('char'), 'int', ref.refType('long'), ref.refType('double'), 'int', ref.refType('int')]];
_library._functions.push(_library.is_numeric_string_ex);

_library.is_numeric_string = ['uchar', [ref.refType('char'), 'int', ref.refType('long'), ref.refType('double'), 'int']];
_library._functions.push(_library.is_numeric_string);

_library.zend_memnstr = [ref.refType('char'), [ref.refType('char'), ref.refType('char'), 'int', ref.refType('char')]];
_library._functions.push(_library.zend_memnstr);

_library.zend_memrchr = [ref.refType('void'), [ref.refType('void'), 'int', 'ulong']];
_library._functions.push(_library.zend_memrchr);

_library.increment_function = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.increment_function);

_library.decrement_function = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.decrement_function);

_library.convert_scalar_to_number = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.convert_scalar_to_number);

_library._convert_to_cstring = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions.push(_library._convert_to_cstring);

_library._convert_to_string = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions.push(_library._convert_to_string);

_library.convert_to_long = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.convert_to_long);

_library.convert_to_double = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.convert_to_double);

_library.convert_to_long_base = ['void', [ref.refType(_library.zval), 'int']];
_library._functions.push(_library.convert_to_long_base);

_library.convert_to_null = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.convert_to_null);

_library.convert_to_boolean = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.convert_to_boolean);

_library.convert_to_array = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.convert_to_array);

_library.convert_to_object = ['void', [ref.refType(_library.zval)]];
_library._functions.push(_library.convert_to_object);

_library.add_char_to_string = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.add_char_to_string);

_library.add_string_to_string = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.add_string_to_string);

_library.zend_string_to_double = ['double', [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_string_to_double);

_library.zval_is_true = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.zval_is_true);

_library.compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.compare_function);

_library.numeric_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.numeric_compare_function);

_library.string_compare_function_ex = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval), 'uchar']];
_library._functions.push(_library.string_compare_function_ex);

_library.string_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.string_compare_function);

_library.string_case_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.string_case_compare_function);

_library.string_locale_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.string_locale_compare_function);

_library.zend_str_tolower = ['void', [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_str_tolower);

_library.zend_str_tolower_copy = [ref.refType('char'), [ref.refType('char'), ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_str_tolower_copy);

_library.zend_str_tolower_dup = [ref.refType('char'), [ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_str_tolower_dup);

_library.zend_binary_zval_strcmp = ['int', [ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_binary_zval_strcmp);

_library.zend_binary_zval_strncmp = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_binary_zval_strncmp);

_library.zend_binary_zval_strcasecmp = ['int', [ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_binary_zval_strcasecmp);

_library.zend_binary_zval_strncasecmp = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_binary_zval_strncasecmp);

_library.zend_binary_strcmp = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_binary_strcmp);

_library.zend_binary_strncmp = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'uint']];
_library._functions.push(_library.zend_binary_strncmp);

_library.zend_binary_strcasecmp = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_binary_strcasecmp);

_library.zend_binary_strncasecmp = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'uint']];
_library._functions.push(_library.zend_binary_strncasecmp);

_library.zend_binary_strncasecmp_l = ['int', [ref.refType('char'), 'uint', ref.refType('char'), 'uint', 'uint']];
_library._functions.push(_library.zend_binary_strncasecmp_l);

_library.zendi_smart_strcmp = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.zendi_smart_strcmp);

_library.zend_compare_symbol_tables = ['void', [ref.refType(_library.zval), ref.refType(_library.HashTable), ref.refType(_library.HashTable)]];
_library._functions.push(_library.zend_compare_symbol_tables);

_library.zend_compare_arrays = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_compare_arrays);

_library.zend_compare_objects = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.zend_compare_objects);

_library.zend_atoi = ['int', [ref.refType('char'), 'int']];
_library._functions.push(_library.zend_atoi);

_library.zend_atol = ['long', [ref.refType('char'), 'int']];
_library._functions.push(_library.zend_atol);

_library.zend_locale_sprintf_double = ['void', [ref.refType(_library.zval), ref.refType('char'), 'uint']];
_library._functions.push(_library.zend_locale_sprintf_double);

_library.fast_increment_function = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.fast_increment_function);

_library.fast_decrement_function = ['int', [ref.refType(_library.zval)]];
_library._functions.push(_library.fast_decrement_function);

_library.fast_add_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.fast_add_function);

_library.fast_sub_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.fast_sub_function);

_library.fast_mul_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.fast_mul_function);

_library.fast_div_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.fast_div_function);

_library.fast_mod_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.fast_mod_function);

_library.fast_equal_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.fast_equal_function);

_library.fast_not_equal_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.fast_not_equal_function);

_library.fast_is_smaller_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.fast_is_smaller_function);

_library.fast_is_smaller_or_equal_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.fast_is_smaller_or_equal_function);

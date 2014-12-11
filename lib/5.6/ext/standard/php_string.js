var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['strnatcmp_ex'] = [function () {
    _library.strnatcmp_ex = ['int', [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', 'int']];
    _library._functions['strnatcmp_ex'] = _library.strnatcmp_ex;
}];

_library._preload['localeconv_r'] = [function () {
    _library.localeconv_r = ['pointer', ['pointer']];
    _library._functions['localeconv_r'] = _library.localeconv_r;
}];

_library._preload['php_strtoupper'] = [function () {
    _library.php_strtoupper = [ref.refType('char'), [ref.refType('char'), 'ulong']];
    _library._functions['php_strtoupper'] = _library.php_strtoupper;
}];

_library._preload['php_strtolower'] = [function () {
    _library.php_strtolower = [ref.refType('char'), [ref.refType('char'), 'ulong']];
    _library._functions['php_strtolower'] = _library.php_strtolower;
}];

_library._preload['php_strtr'] = [function () {
    _library.php_strtr = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('char'), ref.refType('char'), 'int']];
    _library._functions['php_strtr'] = _library.php_strtr;
}];

_library._preload['php_addslashes'] = [function () {
    _library.php_addslashes = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('int'), 'int']];
    _library._functions['php_addslashes'] = _library.php_addslashes;
}];

_library._preload['php_addcslashes'] = [function () {
    _library.php_addcslashes = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('int'), 'int', ref.refType('char'), 'int']];
    _library._functions['php_addcslashes'] = _library.php_addcslashes;
}];

_library._preload['php_stripslashes'] = [function () {
    _library.php_stripslashes = ['void', [ref.refType('char'), ref.refType('int')]];
    _library._functions['php_stripslashes'] = _library.php_stripslashes;
}];

_library._preload['php_stripcslashes'] = [function () {
    _library.php_stripcslashes = ['void', [ref.refType('char'), ref.refType('int')]];
    _library._functions['php_stripcslashes'] = _library.php_stripcslashes;
}];

_library._preload['php_basename'] = ['pointer', function () {
    _library.php_basename = ['void', [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', ref.refType(ref.refType('char')), ref.refType('ulong')]];
    _library._functions['php_basename'] = _library.php_basename;
}];

_library._preload['php_dirname'] = [function () {
    _library.php_dirname = ['ulong', [ref.refType('char'), 'ulong']];
    _library._functions['php_dirname'] = _library.php_dirname;
}];

_library._preload['php_stristr'] = [function () {
    _library.php_stristr = [ref.refType('char'), [ref.refType('char'), ref.refType('char'), 'ulong', 'ulong']];
    _library._functions['php_stristr'] = _library.php_stristr;
}];

_library._preload['php_str_to_str_ex'] = [function () {
    _library.php_str_to_str_ex = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('char'), 'int', ref.refType('char'), 'int', ref.refType('int'), 'int', ref.refType('int')]];
    _library._functions['php_str_to_str_ex'] = _library.php_str_to_str_ex;
}];

_library._preload['php_str_to_str'] = [function () {
    _library.php_str_to_str = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('char'), 'int', ref.refType('char'), 'int', ref.refType('int')]];
    _library._functions['php_str_to_str'] = _library.php_str_to_str;
}];

_library._preload['php_trim'] = ['zval', function () {
    _library.php_trim = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('char'), 'int', ref.refType(_library.zval), 'int']];
    _library._functions['php_trim'] = _library.php_trim;
}];

_library._preload['php_strip_tags'] = [function () {
    _library.php_strip_tags = ['ulong', [ref.refType('char'), 'int', ref.refType('int'), ref.refType('char'), 'int']];
    _library._functions['php_strip_tags'] = _library.php_strip_tags;
}];

_library._preload['php_strip_tags_ex'] = [function () {
    _library.php_strip_tags_ex = ['ulong', [ref.refType('char'), 'int', ref.refType('int'), ref.refType('char'), 'int', 'uchar']];
    _library._functions['php_strip_tags_ex'] = _library.php_strip_tags_ex;
}];

_library._preload['php_char_to_str_ex'] = ['zval', function () {
    _library.php_char_to_str_ex = ['int', [ref.refType('char'), 'uint', 'char', ref.refType('char'), 'int', ref.refType(_library.zval), 'int', ref.refType('int')]];
    _library._functions['php_char_to_str_ex'] = _library.php_char_to_str_ex;
}];

_library._preload['php_char_to_str'] = ['zval', function () {
    _library.php_char_to_str = ['int', [ref.refType('char'), 'uint', 'char', ref.refType('char'), 'int', ref.refType(_library.zval)]];
    _library._functions['php_char_to_str'] = _library.php_char_to_str;
}];

_library._preload['php_implode'] = ['zval', 'zval', 'zval', function () {
    _library.php_implode = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['php_implode'] = _library.php_implode;
}];

_library._preload['php_explode'] = ['zval', 'zval', 'zval', function () {
    _library.php_explode = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval), 'long']];
    _library._functions['php_explode'] = _library.php_explode;
}];

_library._preload['php_strspn'] = [function () {
    _library.php_strspn = ['ulong', [ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char')]];
    _library._functions['php_strspn'] = _library.php_strspn;
}];

_library._preload['php_strcspn'] = [function () {
    _library.php_strcspn = ['ulong', [ref.refType('char'), ref.refType('char'), ref.refType('char'), ref.refType('char')]];
    _library._functions['php_strcspn'] = _library.php_strcspn;
}];

_library._preload['string_natural_compare_function_ex'] = ['zval', 'zval', 'zval', function () {
    _library.string_natural_compare_function_ex = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval), 'uchar']];
    _library._functions['string_natural_compare_function_ex'] = _library.string_natural_compare_function_ex;
}];

_library._preload['string_natural_compare_function'] = ['zval', 'zval', 'zval', function () {
    _library.string_natural_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['string_natural_compare_function'] = _library.string_natural_compare_function;
}];

_library._preload['string_natural_case_compare_function'] = ['zval', 'zval', 'zval', function () {
    _library.string_natural_case_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
    _library._functions['string_natural_case_compare_function'] = _library.string_natural_case_compare_function;
}];

function loadDependentSymbols() {
    require('./../../Zend/zend.js');
    require('./../../Zend/zend_API.js');
    require('./../../Zend/zend_ast.js');
    require('./../../Zend/zend_compile.js');
    require('./../../Zend/zend_hash.js');
    require('./../../Zend/zend_ini.js');
    require('./../../Zend/zend_iterators.js');
    require('./../../Zend/zend_modules.js');
    require('./../../Zend/zend_object_handlers.js');
    require('./../../Zend/zend_types.js');
}

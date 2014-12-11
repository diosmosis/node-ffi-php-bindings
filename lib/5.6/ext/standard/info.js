var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_info_html_esc'] = [function () {
    _library.php_info_html_esc = [ref.refType('char'), [ref.refType('char')]];
    _library._functions['php_info_html_esc'] = _library.php_info_html_esc;
}];

_library._preload['php_print_info_htmlhead'] = [function () {
    _library.php_print_info_htmlhead = ['void', []];
    _library._functions['php_print_info_htmlhead'] = _library.php_print_info_htmlhead;
}];

_library._preload['php_print_info'] = [function () {
    _library.php_print_info = ['void', ['int']];
    _library._functions['php_print_info'] = _library.php_print_info;
}];

_library._preload['php_info_print_style'] = [function () {
    _library.php_info_print_style = ['void', []];
    _library._functions['php_info_print_style'] = _library.php_info_print_style;
}];

_library._preload['php_info_print_table_colspan_header'] = [function () {
    _library.php_info_print_table_colspan_header = ['void', ['int', ref.refType('char')]];
    _library._functions['php_info_print_table_colspan_header'] = _library.php_info_print_table_colspan_header;
}];

_library._preload['php_info_print_table_start'] = [function () {
    _library.php_info_print_table_start = ['void', []];
    _library._functions['php_info_print_table_start'] = _library.php_info_print_table_start;
}];

_library._preload['php_info_print_table_end'] = [function () {
    _library.php_info_print_table_end = ['void', []];
    _library._functions['php_info_print_table_end'] = _library.php_info_print_table_end;
}];

_library._preload['php_info_print_box_start'] = [function () {
    _library.php_info_print_box_start = ['void', ['int']];
    _library._functions['php_info_print_box_start'] = _library.php_info_print_box_start;
}];

_library._preload['php_info_print_box_end'] = [function () {
    _library.php_info_print_box_end = ['void', []];
    _library._functions['php_info_print_box_end'] = _library.php_info_print_box_end;
}];

_library._preload['php_info_print_hr'] = [function () {
    _library.php_info_print_hr = ['void', []];
    _library._functions['php_info_print_hr'] = _library.php_info_print_hr;
}];

_library._preload['php_info_print_module'] = ['zend_module_entry', function () {
    _library.php_info_print_module = ['void', [ref.refType(_library.zend_module_entry)]];
    _library._functions['php_info_print_module'] = _library.php_info_print_module;
}];

_library._preload['php_get_uname'] = [function () {
    _library.php_get_uname = [ref.refType('char'), ['char']];
    _library._functions['php_get_uname'] = _library.php_get_uname;
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

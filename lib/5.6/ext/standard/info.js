var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zif_phpversion = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_phpversion);

_library.zif_phpinfo = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_phpinfo);

_library.zif_phpcredits = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_phpcredits);

_library.zif_php_sapi_name = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_php_sapi_name);

_library.zif_php_uname = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_php_uname);

_library.zif_php_ini_scanned_files = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_php_ini_scanned_files);

_library.zif_php_ini_loaded_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_php_ini_loaded_file);

_library.php_info_html_esc = [ref.refType('char'), [ref.refType('char')]];
_library._functions.push(_library.php_info_html_esc);

_library.php_info_html_esc_write = ['void', [ref.refType('char'), 'int']];
_library._functions.push(_library.php_info_html_esc_write);

_library.php_print_info_htmlhead = ['void', []];
_library._functions.push(_library.php_print_info_htmlhead);

_library.php_print_info = ['void', ['int']];
_library._functions.push(_library.php_print_info);

_library.php_print_style = ['void', []];
_library._functions.push(_library.php_print_style);

_library.php_info_print_style = ['void', []];
_library._functions.push(_library.php_info_print_style);

_library.php_info_print_table_colspan_header = ['void', ['int', ref.refType('char')]];
_library._functions.push(_library.php_info_print_table_colspan_header);

_library.php_info_print_table_start = ['void', []];
_library._functions.push(_library.php_info_print_table_start);

_library.php_info_print_table_end = ['void', []];
_library._functions.push(_library.php_info_print_table_end);

_library.php_info_print_box_start = ['void', ['int']];
_library._functions.push(_library.php_info_print_box_start);

_library.php_info_print_box_end = ['void', []];
_library._functions.push(_library.php_info_print_box_end);

_library.php_info_print_hr = ['void', []];
_library._functions.push(_library.php_info_print_hr);

_library.php_info_print_module = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.php_info_print_module);

_library.php_get_uname = [ref.refType('char'), ['char']];
_library._functions.push(_library.php_get_uname);

_library.register_phpinfo_constants = ['void', ['int', 'int']];
_library._functions.push(_library.register_phpinfo_constants);

function loadDependentSymbols() {
};
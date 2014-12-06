var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.register_html_constants = ['void', ['int', 'int']];
_library._functions.push(_library.register_html_constants);

_library.zif_htmlspecialchars = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_htmlspecialchars);

_library.zif_htmlentities = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_htmlentities);

_library.zif_htmlspecialchars_decode = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_htmlspecialchars_decode);

_library.zif_html_entity_decode = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_html_entity_decode);

_library.zif_get_html_translation_table = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_get_html_translation_table);

_library.php_escape_html_entities = ['char' ? ref.refType('char') : 'pointer', ['uchar' ? ref.refType('uchar') : 'pointer', 'ulong', 'ulong' ? ref.refType('ulong') : 'pointer', 'int', 'int', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_escape_html_entities);

_library.php_escape_html_entities_ex = ['char' ? ref.refType('char') : 'pointer', ['uchar' ? ref.refType('uchar') : 'pointer', 'ulong', 'ulong' ? ref.refType('ulong') : 'pointer', 'int', 'int', 'char' ? ref.refType('char') : 'pointer', 'uchar']];
_library._functions.push(_library.php_escape_html_entities_ex);

_library.php_unescape_html_entities = ['char' ? ref.refType('char') : 'pointer', ['uchar' ? ref.refType('uchar') : 'pointer', 'ulong', 'ulong' ? ref.refType('ulong') : 'pointer', 'int', 'int', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_unescape_html_entities);

_library.php_next_utf8_char = ['uint', ['uchar' ? ref.refType('uchar') : 'pointer', 'ulong', 'ulong' ? ref.refType('ulong') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_next_utf8_char);

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
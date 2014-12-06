var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.register_html_constants = ['void', ['int', 'int']];
_library._functions.push(_library.register_html_constants);

_library.zif_htmlspecialchars = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_htmlspecialchars);

_library.zif_htmlentities = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_htmlentities);

_library.zif_htmlspecialchars_decode = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_htmlspecialchars_decode);

_library.zif_html_entity_decode = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_html_entity_decode);

_library.zif_get_html_translation_table = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_get_html_translation_table);

_library.php_escape_html_entities = [ref.refType('char'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int', 'int', ref.refType('char')]];
_library._functions.push(_library.php_escape_html_entities);

_library.php_escape_html_entities_ex = [ref.refType('char'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int', 'int', ref.refType('char'), 'uchar']];
_library._functions.push(_library.php_escape_html_entities_ex);

_library.php_unescape_html_entities = [ref.refType('char'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int', 'int', ref.refType('char')]];
_library._functions.push(_library.php_unescape_html_entities);

_library.php_next_utf8_char = ['uint', [ref.refType('uchar'), 'ulong', ref.refType('ulong'), ref.refType('int')]];
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
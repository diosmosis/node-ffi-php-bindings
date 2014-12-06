var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_url = Struct({
    "fragment": ref.refType('char'),
    "host": ref.refType('char'),
    "pass": ref.refType('char'),
    "path": ref.refType('char'),
    "port": 'ushort',
    "query": ref.refType('char'),
    "scheme": ref.refType('char'),
    "user": ref.refType('char')
});

_library.php_url = _library.php_url;

_library.php_url_free = ['void', [_library.php_url ? ref.refType(_library.php_url) : 'pointer']];
_library._functions.push(_library.php_url_free);

_library.php_url_parse = [_library.php_url ? ref.refType(_library.php_url) : 'pointer', [ref.refType('char')]];
_library._functions.push(_library.php_url_parse);

_library.php_url_parse_ex = [_library.php_url ? ref.refType(_library.php_url) : 'pointer', [ref.refType('char'), 'int']];
_library._functions.push(_library.php_url_parse_ex);

_library.php_url_decode = ['int', [ref.refType('char'), 'int']];
_library._functions.push(_library.php_url_decode);

_library.php_raw_url_decode = ['int', [ref.refType('char'), 'int']];
_library._functions.push(_library.php_raw_url_decode);

_library.php_url_encode = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('int')]];
_library._functions.push(_library.php_url_encode);

_library.php_raw_url_encode = [ref.refType('char'), [ref.refType('char'), 'int', ref.refType('int')]];
_library._functions.push(_library.php_raw_url_encode);

_library.zif_parse_url = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_parse_url);

_library.zif_urlencode = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_urlencode);

_library.zif_urldecode = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_urldecode);

_library.zif_rawurlencode = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_rawurlencode);

_library.zif_rawurldecode = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_rawurldecode);

_library.zif_get_headers = ['void', ['int', _library.zval ? ref.refType(_library.zval) : 'pointer', ref.refType(_library.zval ? ref.refType(_library.zval) : 'pointer'), _library.zval ? ref.refType(_library.zval) : 'pointer', 'int']];
_library._functions.push(_library.zif_get_headers);

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
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_url = Struct({
    "fragment": 'char' ? ref.refType('char') : 'pointer',
    "host": 'char' ? ref.refType('char') : 'pointer',
    "pass": 'char' ? ref.refType('char') : 'pointer',
    "path": 'char' ? ref.refType('char') : 'pointer',
    "port": 'ushort',
    "query": 'char' ? ref.refType('char') : 'pointer',
    "scheme": 'char' ? ref.refType('char') : 'pointer',
    "user": 'char' ? ref.refType('char') : 'pointer'
});

_library.php_url = _library.php_url;

_library.php_url_free = ['void', [ref.refType(_library.php_url)]];
_library._functions.push(_library.php_url_free);

_library.php_url_parse = [ref.refType(_library.php_url), ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_url_parse);

_library.php_url_parse_ex = [ref.refType(_library.php_url), ['char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.php_url_parse_ex);

_library.php_url_decode = ['int', ['char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.php_url_decode);

_library.php_raw_url_decode = ['int', ['char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.php_raw_url_decode);

_library.php_url_encode = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_url_encode);

_library.php_raw_url_encode = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_raw_url_encode);

_library.zif_parse_url = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_parse_url);

_library.zif_urlencode = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_urlencode);

_library.zif_urldecode = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_urldecode);

_library.zif_rawurlencode = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_rawurlencode);

_library.zif_rawurldecode = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_rawurldecode);

_library.zif_get_headers = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
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
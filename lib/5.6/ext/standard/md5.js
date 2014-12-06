var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.make_digest = ['void', [ref.refType('char'), ref.refType('uchar')]];
_library._functions.push(_library.make_digest);

_library.make_digest_ex = ['void', [ref.refType('char'), ref.refType('uchar'), 'int']];
_library._functions.push(_library.make_digest_ex);

_library.php_if_md5 = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_if_md5);

_library.php_if_md5_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_if_md5_file);

_library.PHP_MD5_CTX = Struct({
    "a": 'uint',
    "b": 'uint',
    "block": RefArray('uint', 16),
    "buffer": RefArray('uchar', 64),
    "c": 'uint',
    "d": 'uint',
    "hi": 'uint',
    "lo": 'uint'
})

_library.PHP_MD5Init = ['void', [ref.refType(_library.PHP_MD5_CTX)]];
_library._functions.push(_library.PHP_MD5Init);

_library.PHP_MD5Update = ['void', [ref.refType(_library.PHP_MD5_CTX), ref.refType('void'), 'ulong']];
_library._functions.push(_library.PHP_MD5Update);

_library.PHP_MD5Final = ['void', [ref.refType('uchar'), ref.refType(_library.PHP_MD5_CTX)]];
_library._functions.push(_library.PHP_MD5Final);

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
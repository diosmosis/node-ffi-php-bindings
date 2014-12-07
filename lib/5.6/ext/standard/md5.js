var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.make_digest = ['void', [ref.refType('char'), ref.refType('uchar')]];
_library._functions['make_digest'] = _library.make_digest;

_library.make_digest_ex = ['void', [ref.refType('char'), ref.refType('uchar'), 'int']];
_library._functions['make_digest_ex'] = _library.make_digest_ex;

_library.php_if_md5 = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['php_if_md5'] = _library.php_if_md5;

_library.php_if_md5_file = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['php_if_md5_file'] = _library.php_if_md5_file;

_library.PHP_MD5_CTX = Struct({});

_library._preload.push(function () {
    _library.PHP_MD5_CTX.defineProperty("a", 'uint');
    _library.PHP_MD5_CTX.defineProperty("b", 'uint');
    _library.PHP_MD5_CTX.defineProperty("block", RefArray('uint', 16));
    _library.PHP_MD5_CTX.defineProperty("buffer", RefArray('uchar', 64));
    _library.PHP_MD5_CTX.defineProperty("c", 'uint');
    _library.PHP_MD5_CTX.defineProperty("d", 'uint');
    _library.PHP_MD5_CTX.defineProperty("hi", 'uint');
    _library.PHP_MD5_CTX.defineProperty("lo", 'uint');
});

_library.PHP_MD5Init = ['void', [ref.refType(_library.PHP_MD5_CTX)]];
_library._functions['PHP_MD5Init'] = _library.PHP_MD5Init;

_library.PHP_MD5Update = ['void', [ref.refType(_library.PHP_MD5_CTX), ref.refType('void'), 'ulong']];
_library._functions['PHP_MD5Update'] = _library.PHP_MD5Update;

_library.PHP_MD5Final = ['void', [ref.refType('uchar'), ref.refType(_library.PHP_MD5_CTX)]];
_library._functions['PHP_MD5Final'] = _library.PHP_MD5Final;

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
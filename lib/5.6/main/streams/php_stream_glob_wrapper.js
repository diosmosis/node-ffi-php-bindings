var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._php_glob_stream_get_path = [ref.refType('char'), [ref.refType(_library.php_stream), 'int', ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_glob_stream_get_path);

_library._php_glob_stream_get_pattern = [ref.refType('char'), [ref.refType(_library.php_stream), 'int', ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_glob_stream_get_pattern);

_library._php_glob_stream_get_count = ['int', [ref.refType(_library.php_stream), ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_glob_stream_get_count);

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
    require('./../php_streams.js');
    require('./php_stream_context.js');
    require('./php_stream_filter_api.js');
}
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_stream_mmap_operation_t = 'int32';

_library.php_stream_mmap_access_t = 'int32';

_library.php_stream_mmap_range = Struct({
    "length": 'ulong',
    "mapped": ref.refType('char'),
    "mode": _library.php_stream_mmap_access_t,
    "offset": 'ulong'
})

_library._php_stream_mmap_range = [ref.refType('char'), [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'ulong', 'ulong', _library.php_stream_mmap_operation_t, ref.refType('ulong')]];
_library._functions.push(_library._php_stream_mmap_range);

_library._php_stream_mmap_unmap = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer']];
_library._functions.push(_library._php_stream_mmap_unmap);

_library._php_stream_mmap_unmap_ex = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.off_t]];
_library._functions.push(_library._php_stream_mmap_unmap_ex);

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
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['image_filetype'] = [function () {
    _library.image_filetype = 'int32';
}];

_library._preload['php_getimagetype'] = ['php_stream', function () {
    _library.php_getimagetype = ['int', [ref.refType(_library.php_stream), ref.refType('char')]];
    _library._functions['php_getimagetype'] = _library.php_getimagetype;
}];

_library._preload['php_image_type_to_mime_type'] = [function () {
    _library.php_image_type_to_mime_type = [ref.refType('char'), ['int']];
    _library._functions['php_image_type_to_mime_type'] = _library.php_image_type_to_mime_type;
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
    require('./../../main/php_streams.js');
    require('./../../main/streams/php_stream_context.js');
    require('./../../main/streams/php_stream_filter_api.js');
}

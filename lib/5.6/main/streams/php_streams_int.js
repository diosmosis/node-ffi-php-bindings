var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_stream_mode_sanitize_fdopen_fopencookie = ['void', [ref.refType(_library.php_stream), ref.refType('char')]];
_library._functions['php_stream_mode_sanitize_fdopen_fopencookie'] = _library.php_stream_mode_sanitize_fdopen_fopencookie;

_library.php_stream_tidy_wrapper_error_log = ['void', [ref.refType(_library.php_stream_wrapper)]];
_library._functions['php_stream_tidy_wrapper_error_log'] = _library.php_stream_tidy_wrapper_error_log;

_library.php_stream_display_wrapper_errors = ['void', [ref.refType(_library.php_stream_wrapper), ref.refType('char'), ref.refType('char')]];
_library._functions['php_stream_display_wrapper_errors'] = _library.php_stream_display_wrapper_errors;

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
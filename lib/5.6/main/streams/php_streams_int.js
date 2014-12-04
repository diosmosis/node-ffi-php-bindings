var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_stream_mode_sanitize_fdopen_fopencookie = ['void', [ref.refType(_library.php_stream), ref.refType('char')]];
_library._functions.push(_library.php_stream_mode_sanitize_fdopen_fopencookie);

_library.php_stream_tidy_wrapper_error_log = ['void', [ref.refType(_library.php_stream_wrapper)]];
_library._functions.push(_library.php_stream_tidy_wrapper_error_log);

_library.php_stream_display_wrapper_errors = ['void', [ref.refType(_library.php_stream_wrapper), ref.refType('char'), ref.refType('char')]];
_library._functions.push(_library.php_stream_display_wrapper_errors);


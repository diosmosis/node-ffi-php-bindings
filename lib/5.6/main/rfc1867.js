var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._multipart_event_start = Struct({
    "content_length": 'ulong'
});

_library.multipart_event_start = _library._multipart_event_start;

_library._multipart_event_formdata = Struct({
    "length": 'ulong',
    "name": 'char' ? ref.refType('char') : 'pointer',
    "newlength": 'ulong' ? ref.refType('ulong') : 'pointer',
    "post_bytes_processed": 'ulong',
    "value": 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer'
});

_library.multipart_event_formdata = _library._multipart_event_formdata;

_library._multipart_event_file_start = Struct({
    "filename": 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer',
    "name": 'char' ? ref.refType('char') : 'pointer',
    "post_bytes_processed": 'ulong'
});

_library.multipart_event_file_start = _library._multipart_event_file_start;

_library._multipart_event_file_data = Struct({
    "data": 'char' ? ref.refType('char') : 'pointer',
    "length": 'ulong',
    "newlength": 'ulong' ? ref.refType('ulong') : 'pointer',
    "offset": _library.off_t,
    "post_bytes_processed": 'ulong'
});

_library.multipart_event_file_data = _library._multipart_event_file_data;

_library._multipart_event_file_end = Struct({
    "cancel_upload": 'int',
    "post_bytes_processed": 'ulong',
    "temp_filename": 'char' ? ref.refType('char') : 'pointer'
});

_library.multipart_event_file_end = _library._multipart_event_file_end;

_library._multipart_event_end = Struct({
    "post_bytes_processed": 'ulong'
});

_library.multipart_event_end = _library._multipart_event_end;

_library.php_rfc1867_encoding_translation_t = ffi.Function('int', []);

_library.php_rfc1867_get_detect_order_t = ffi.Function('void', ['pointer' ? ref.refType('pointer') : 'pointer' ? ref.refType('pointer' ? ref.refType('pointer') : 'pointer') : 'pointer', 'ulong' ? ref.refType('ulong') : 'pointer']);

_library.php_rfc1867_set_input_encoding_t = ffi.Function('void', ['pointer']);

_library.php_rfc1867_getword_t = ffi.Function('char' ? ref.refType('char') : 'pointer', ['pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'char']);

_library.php_rfc1867_getword_conf_t = ffi.Function('char' ? ref.refType('char') : 'pointer', ['pointer', 'char' ? ref.refType('char') : 'pointer']);

_library.php_rfc1867_basename_t = ffi.Function('char' ? ref.refType('char') : 'pointer', ['pointer', 'char' ? ref.refType('char') : 'pointer']);

_library.rfc1867_post_handler = ['void', ['char' ? ref.refType('char') : 'pointer', 'void' ? ref.refType('void') : 'pointer']];
_library._functions.push(_library.rfc1867_post_handler);

_library.destroy_uploaded_files_hash = ['void', []];
_library._functions.push(_library.destroy_uploaded_files_hash);

_library.php_rfc1867_register_constants = ['void', []];
_library._functions.push(_library.php_rfc1867_register_constants);

_library.php_rfc1867_set_multibyte_callbacks = ['void', [_library.php_rfc1867_encoding_translation_t, _library.php_rfc1867_get_detect_order_t, _library.php_rfc1867_set_input_encoding_t, _library.php_rfc1867_getword_t, _library.php_rfc1867_getword_conf_t, _library.php_rfc1867_basename_t]];
_library._functions.push(_library.php_rfc1867_set_multibyte_callbacks);

function loadDependentSymbols() {
}
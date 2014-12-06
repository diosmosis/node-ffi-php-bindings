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
    "name": ref.refType('char'),
    "newlength": ref.refType('ulong'),
    "post_bytes_processed": 'ulong',
    "value": ref.refType(ref.refType('char'))
});

_library.multipart_event_formdata = _library._multipart_event_formdata;

_library._multipart_event_file_start = Struct({
    "filename": ref.refType(ref.refType('char')),
    "name": ref.refType('char'),
    "post_bytes_processed": 'ulong'
});

_library.multipart_event_file_start = _library._multipart_event_file_start;

_library._multipart_event_file_data = Struct({
    "data": ref.refType('char'),
    "length": 'ulong',
    "newlength": ref.refType('ulong'),
    "offset": _library.off_t,
    "post_bytes_processed": 'ulong'
});

_library.multipart_event_file_data = _library._multipart_event_file_data;

_library._multipart_event_file_end = Struct({
    "cancel_upload": 'int',
    "post_bytes_processed": 'ulong',
    "temp_filename": ref.refType('char')
});

_library.multipart_event_file_end = _library._multipart_event_file_end;

_library._multipart_event_end = Struct({
    "post_bytes_processed": 'ulong'
});

_library.multipart_event_end = _library._multipart_event_end;

_library.php_rfc1867_encoding_translation_t = ffi.Function('int', []);

_library.php_rfc1867_get_detect_order_t = ffi.Function('void', [ref.refType(ref.refType('pointer')), ref.refType('ulong')]);

_library.php_rfc1867_set_input_encoding_t = ffi.Function('void', ['pointer']);

_library.php_rfc1867_getword_t = ffi.Function(ref.refType('char'), ['pointer', ref.refType(ref.refType('char')), 'char']);

_library.php_rfc1867_getword_conf_t = ffi.Function(ref.refType('char'), ['pointer', ref.refType('char')]);

_library.php_rfc1867_basename_t = ffi.Function(ref.refType('char'), ['pointer', ref.refType('char')]);

_library.rfc1867_post_handler = ['void', [ref.refType('char'), ref.refType('void')]];
_library._functions.push(_library.rfc1867_post_handler);

_library.destroy_uploaded_files_hash = ['void', []];
_library._functions.push(_library.destroy_uploaded_files_hash);

_library.php_rfc1867_register_constants = ['void', []];
_library._functions.push(_library.php_rfc1867_register_constants);

_library.php_rfc1867_set_multibyte_callbacks = ['void', [_library.php_rfc1867_encoding_translation_t, _library.php_rfc1867_get_detect_order_t, _library.php_rfc1867_set_input_encoding_t, _library.php_rfc1867_getword_t, _library.php_rfc1867_getword_conf_t, _library.php_rfc1867_basename_t]];
_library._functions.push(_library.php_rfc1867_set_multibyte_callbacks);

function loadDependentSymbols() {
};
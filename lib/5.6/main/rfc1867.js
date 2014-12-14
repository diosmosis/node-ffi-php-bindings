var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._multipart_event_start = Struct({});
_library._multipart_event_start.size = 1;

_library._preload['_multipart_event_start'] = [function () {
    _library._multipart_event_start.size = 0;
    _library._multipart_event_start.defineProperty("content_length", 'ulong');
}];

_library._preload['multipart_event_start'] = [function () {
    _library.multipart_event_start = _library._multipart_event_start;
}];

_library._multipart_event_formdata = Struct({});
_library._multipart_event_formdata.size = 1;

_library._preload['_multipart_event_formdata'] = ['pointer', function () {
    _library._multipart_event_formdata.size = 0;
    _library._multipart_event_formdata.defineProperty("post_bytes_processed", 'ulong');
    _library._multipart_event_formdata.defineProperty("name", ref.refType('char'));
    _library._multipart_event_formdata.defineProperty("value", ref.refType(ref.refType('char')));
    _library._multipart_event_formdata.defineProperty("length", 'ulong');
    _library._multipart_event_formdata.defineProperty("newlength", ref.refType('ulong'));
}];

_library._preload['multipart_event_formdata'] = [function () {
    _library.multipart_event_formdata = _library._multipart_event_formdata;
}];

_library._multipart_event_file_start = Struct({});
_library._multipart_event_file_start.size = 1;

_library._preload['_multipart_event_file_start'] = ['pointer', function () {
    _library._multipart_event_file_start.size = 0;
    _library._multipart_event_file_start.defineProperty("post_bytes_processed", 'ulong');
    _library._multipart_event_file_start.defineProperty("name", ref.refType('char'));
    _library._multipart_event_file_start.defineProperty("filename", ref.refType(ref.refType('char')));
}];

_library._preload['multipart_event_file_start'] = [function () {
    _library.multipart_event_file_start = _library._multipart_event_file_start;
}];

_library._multipart_event_file_data = Struct({});
_library._multipart_event_file_data.size = 1;

_library._preload['_multipart_event_file_data'] = ['off_t', function () {
    _library._multipart_event_file_data.size = 0;
    _library._multipart_event_file_data.defineProperty("post_bytes_processed", 'ulong');
    _library._multipart_event_file_data.defineProperty("offset", _library.off_t);
    _library._multipart_event_file_data.defineProperty("data", ref.refType('char'));
    _library._multipart_event_file_data.defineProperty("length", 'ulong');
    _library._multipart_event_file_data.defineProperty("newlength", ref.refType('ulong'));
}];

_library._preload['multipart_event_file_data'] = [function () {
    _library.multipart_event_file_data = _library._multipart_event_file_data;
}];

_library._multipart_event_file_end = Struct({});
_library._multipart_event_file_end.size = 1;

_library._preload['_multipart_event_file_end'] = [function () {
    _library._multipart_event_file_end.size = 0;
    _library._multipart_event_file_end.defineProperty("post_bytes_processed", 'ulong');
    _library._multipart_event_file_end.defineProperty("temp_filename", ref.refType('char'));
    _library._multipart_event_file_end.defineProperty("cancel_upload", 'int');
}];

_library._preload['multipart_event_file_end'] = [function () {
    _library.multipart_event_file_end = _library._multipart_event_file_end;
}];

_library._multipart_event_end = Struct({});
_library._multipart_event_end.size = 1;

_library._preload['_multipart_event_end'] = [function () {
    _library._multipart_event_end.size = 0;
    _library._multipart_event_end.defineProperty("post_bytes_processed", 'ulong');
}];

_library._preload['multipart_event_end'] = [function () {
    _library.multipart_event_end = _library._multipart_event_end;
}];

_library._preload['php_rfc1867_encoding_translation_t'] = ['int (void)', function () {
    _library.php_rfc1867_encoding_translation_t = ffi.Function('int', []);
}];

_library._preload['php_rfc1867_get_detect_order_t'] = ['void (const zend_encoding ***, size_t *)', function () {
    _library.php_rfc1867_get_detect_order_t = ffi.Function('void', [ref.refType(ref.refType('pointer')), ref.refType('ulong')]);
}];

_library._preload['php_rfc1867_set_input_encoding_t'] = ['void (const zend_encoding *)', function () {
    _library.php_rfc1867_set_input_encoding_t = ffi.Function('void', ['pointer']);
}];

_library._preload['php_rfc1867_getword_t'] = ['char *(const zend_encoding *, char **, char)', function () {
    _library.php_rfc1867_getword_t = ffi.Function(ref.refType('char'), ['pointer', ref.refType(ref.refType('char')), 'char']);
}];

_library._preload['php_rfc1867_getword_conf_t'] = ['char *(const zend_encoding *, char *)', function () {
    _library.php_rfc1867_getword_conf_t = ffi.Function(ref.refType('char'), ['pointer', ref.refType('char')]);
}];

_library._preload['php_rfc1867_basename_t'] = ['char *(const zend_encoding *, char *)', function () {
    _library.php_rfc1867_basename_t = ffi.Function(ref.refType('char'), ['pointer', ref.refType('char')]);
}];

_library._preload['rfc1867_post_handler'] = [function () {
    _library.rfc1867_post_handler = ['void', [ref.refType('char'), ref.refType('void')]];
    _library._functions['rfc1867_post_handler'] = _library.rfc1867_post_handler;
}];

_library._preload['php_rfc1867_set_multibyte_callbacks'] = ['php_rfc1867_encoding_translation_t', 'php_rfc1867_get_detect_order_t', 'php_rfc1867_set_input_encoding_t', 'php_rfc1867_getword_t', 'php_rfc1867_getword_conf_t', 'php_rfc1867_basename_t', function () {
    _library.php_rfc1867_set_multibyte_callbacks = ['void', [_library.php_rfc1867_encoding_translation_t, _library.php_rfc1867_get_detect_order_t, _library.php_rfc1867_set_input_encoding_t, _library.php_rfc1867_getword_t, _library.php_rfc1867_getword_conf_t, _library.php_rfc1867_basename_t]];
    _library._functions['php_rfc1867_set_multibyte_callbacks'] = _library.php_rfc1867_set_multibyte_callbacks;
}];

function loadDependentSymbols() {
}

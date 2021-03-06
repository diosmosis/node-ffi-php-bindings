var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_encoding'] = [function () {
    _library.zend_encoding = 'void';
}];

_library._preload['zend_encoding_filter'] = ['size_t (unsigned char **, size_t *, const unsigned char *, size_t)', function () {
    _library.zend_encoding_filter = ffi.Function('ulong', [ref.refType(ref.refType('uchar')), ref.refType('ulong'), ref.refType('uchar'), 'ulong']);
}];

_library._preload['zend_encoding_fetcher'] = ['const zend_encoding *(const char *)', function () {
    _library.zend_encoding_fetcher = ffi.Function('pointer', [ref.refType('char')]);
}];

_library._preload['zend_encoding_name_getter'] = ['const char *(const zend_encoding *)', function () {
    _library.zend_encoding_name_getter = ffi.Function(ref.refType('char'), ['pointer']);
}];

_library._preload['zend_encoding_lexer_compatibility_checker'] = ['int (const zend_encoding *)', function () {
    _library.zend_encoding_lexer_compatibility_checker = ffi.Function('int', ['pointer']);
}];

_library._preload['zend_encoding_detector'] = ['const zend_encoding *(const unsigned char *, size_t, const zend_encoding **, size_t)', function () {
    _library.zend_encoding_detector = ffi.Function('pointer', [ref.refType('uchar'), 'ulong', ref.refType('pointer'), 'ulong']);
}];

_library._preload['zend_encoding_converter'] = ['size_t (unsigned char **, size_t *, const unsigned char *, size_t, const zend_encoding *, const zend_encoding *)', function () {
    _library.zend_encoding_converter = ffi.Function('ulong', [ref.refType(ref.refType('uchar')), ref.refType('ulong'), ref.refType('uchar'), 'ulong', 'pointer', 'pointer']);
}];

_library._preload['zend_encoding_list_parser'] = ['int (const char *, size_t, const zend_encoding ***, size_t *, int)', function () {
    _library.zend_encoding_list_parser = ffi.Function('int', [ref.refType('char'), 'ulong', ref.refType(ref.refType('pointer')), ref.refType('ulong'), 'int']);
}];

_library._preload['zend_encoding_internal_encoding_getter'] = ['const zend_encoding *(void)', function () {
    _library.zend_encoding_internal_encoding_getter = ffi.Function('pointer', []);
}];

_library._preload['zend_encoding_internal_encoding_setter'] = ['int (const zend_encoding *)', function () {
    _library.zend_encoding_internal_encoding_setter = ffi.Function('int', ['pointer']);
}];

_library._zend_multibyte_functions = Struct({});
_library._zend_multibyte_functions.size = 1;

_library._preload['_zend_multibyte_functions'] = ['zend_encoding_fetcher', 'zend_encoding_name_getter', 'zend_encoding_lexer_compatibility_checker', 'zend_encoding_detector', 'zend_encoding_converter', 'zend_encoding_list_parser', 'zend_encoding_internal_encoding_getter', 'zend_encoding_internal_encoding_setter', function () {
    _library._zend_multibyte_functions.size = 0;
    _library._zend_multibyte_functions.defineProperty("provider_name", ref.refType('char'));
    _library._zend_multibyte_functions.defineProperty("encoding_fetcher", _library.zend_encoding_fetcher);
    _library._zend_multibyte_functions.defineProperty("encoding_name_getter", _library.zend_encoding_name_getter);
    _library._zend_multibyte_functions.defineProperty("lexer_compatibility_checker", _library.zend_encoding_lexer_compatibility_checker);
    _library._zend_multibyte_functions.defineProperty("encoding_detector", _library.zend_encoding_detector);
    _library._zend_multibyte_functions.defineProperty("encoding_converter", _library.zend_encoding_converter);
    _library._zend_multibyte_functions.defineProperty("encoding_list_parser", _library.zend_encoding_list_parser);
    _library._zend_multibyte_functions.defineProperty("internal_encoding_getter", _library.zend_encoding_internal_encoding_getter);
    _library._zend_multibyte_functions.defineProperty("internal_encoding_setter", _library.zend_encoding_internal_encoding_setter);
}];

_library._preload['zend_multibyte_functions'] = [function () {
    _library.zend_multibyte_functions = _library._zend_multibyte_functions;
}];

_library._preload['zend_multibyte_set_functions'] = ['zend_multibyte_functions', function () {
    _library.zend_multibyte_set_functions = ['int', [ref.refType(_library.zend_multibyte_functions)]];
    _library._functions['zend_multibyte_set_functions'] = _library.zend_multibyte_set_functions;
}];

_library._preload['zend_multibyte_get_functions'] = ['zend_multibyte_functions', function () {
    _library.zend_multibyte_get_functions = [ref.refType(_library.zend_multibyte_functions), []];
    _library._functions['zend_multibyte_get_functions'] = _library.zend_multibyte_get_functions;
}];

_library._preload['zend_multibyte_fetch_encoding'] = ['zend_encoding', function () {
    _library.zend_multibyte_fetch_encoding = [ref.refType(_library.zend_encoding), [ref.refType('char')]];
    _library._functions['zend_multibyte_fetch_encoding'] = _library.zend_multibyte_fetch_encoding;
}];

_library._preload['zend_multibyte_get_encoding_name'] = ['zend_encoding', function () {
    _library.zend_multibyte_get_encoding_name = [ref.refType('char'), [ref.refType(_library.zend_encoding)]];
    _library._functions['zend_multibyte_get_encoding_name'] = _library.zend_multibyte_get_encoding_name;
}];

_library._preload['zend_multibyte_check_lexer_compatibility'] = ['zend_encoding', function () {
    _library.zend_multibyte_check_lexer_compatibility = ['int', [ref.refType(_library.zend_encoding)]];
    _library._functions['zend_multibyte_check_lexer_compatibility'] = _library.zend_multibyte_check_lexer_compatibility;
}];

_library._preload['zend_multibyte_encoding_detector'] = ['zend_encoding', 'pointer', function () {
    _library.zend_multibyte_encoding_detector = [ref.refType(_library.zend_encoding), [ref.refType('uchar'), 'ulong', ref.refType(ref.refType(_library.zend_encoding)), 'ulong']];
    _library._functions['zend_multibyte_encoding_detector'] = _library.zend_multibyte_encoding_detector;
}];

_library._preload['zend_multibyte_encoding_converter'] = ['pointer', 'zend_encoding', 'zend_encoding', function () {
    _library.zend_multibyte_encoding_converter = ['ulong', [ref.refType(ref.refType('uchar')), ref.refType('ulong'), ref.refType('uchar'), 'ulong', ref.refType(_library.zend_encoding), ref.refType(_library.zend_encoding)]];
    _library._functions['zend_multibyte_encoding_converter'] = _library.zend_multibyte_encoding_converter;
}];

_library._preload['zend_multibyte_parse_encoding_list'] = ['pointer', function () {
    _library.zend_multibyte_parse_encoding_list = ['int', [ref.refType('char'), 'ulong', ref.refType(ref.refType(ref.refType(_library.zend_encoding))), ref.refType('ulong'), 'int']];
    _library._functions['zend_multibyte_parse_encoding_list'] = _library.zend_multibyte_parse_encoding_list;
}];

_library._preload['zend_multibyte_get_internal_encoding'] = ['zend_encoding', function () {
    _library.zend_multibyte_get_internal_encoding = [ref.refType(_library.zend_encoding), []];
    _library._functions['zend_multibyte_get_internal_encoding'] = _library.zend_multibyte_get_internal_encoding;
}];

_library._preload['zend_multibyte_get_script_encoding'] = ['zend_encoding', function () {
    _library.zend_multibyte_get_script_encoding = [ref.refType(_library.zend_encoding), []];
    _library._functions['zend_multibyte_get_script_encoding'] = _library.zend_multibyte_get_script_encoding;
}];

_library._preload['zend_multibyte_set_script_encoding'] = ['pointer', function () {
    _library.zend_multibyte_set_script_encoding = ['int', [ref.refType(ref.refType(_library.zend_encoding)), 'ulong']];
    _library._functions['zend_multibyte_set_script_encoding'] = _library.zend_multibyte_set_script_encoding;
}];

_library._preload['zend_multibyte_set_internal_encoding'] = ['zend_encoding', function () {
    _library.zend_multibyte_set_internal_encoding = ['int', [ref.refType(_library.zend_encoding)]];
    _library._functions['zend_multibyte_set_internal_encoding'] = _library.zend_multibyte_set_internal_encoding;
}];

_library._preload['zend_multibyte_set_script_encoding_by_string'] = [function () {
    _library.zend_multibyte_set_script_encoding_by_string = ['int', [ref.refType('char'), 'ulong']];
    _library._functions['zend_multibyte_set_script_encoding_by_string'] = _library.zend_multibyte_set_script_encoding_by_string;
}];

function loadDependentSymbols() {
}

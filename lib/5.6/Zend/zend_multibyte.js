var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_encoding = 'void';

_library.zend_encoding_filter = ffi.Function('ulong', ['uchar' ? ref.refType('uchar') : 'pointer' ? ref.refType('uchar' ? ref.refType('uchar') : 'pointer') : 'pointer', 'ulong' ? ref.refType('ulong') : 'pointer', 'uchar' ? ref.refType('uchar') : 'pointer', 'ulong']);

_library.zend_encoding_fetcher = ffi.Function('pointer', ['char' ? ref.refType('char') : 'pointer']);

_library.zend_encoding_name_getter = ffi.Function('char' ? ref.refType('char') : 'pointer', ['pointer']);

_library.zend_encoding_lexer_compatibility_checker = ffi.Function('int', ['pointer']);

_library.zend_encoding_detector = ffi.Function('pointer', ['uchar' ? ref.refType('uchar') : 'pointer', 'ulong', 'pointer' ? ref.refType('pointer') : 'pointer', 'ulong']);

_library.zend_encoding_converter = ffi.Function('ulong', ['uchar' ? ref.refType('uchar') : 'pointer' ? ref.refType('uchar' ? ref.refType('uchar') : 'pointer') : 'pointer', 'ulong' ? ref.refType('ulong') : 'pointer', 'uchar' ? ref.refType('uchar') : 'pointer', 'ulong', 'pointer', 'pointer']);

_library.zend_encoding_list_parser = ffi.Function('int', ['char' ? ref.refType('char') : 'pointer', 'ulong', 'pointer' ? ref.refType('pointer') : 'pointer' ? ref.refType('pointer' ? ref.refType('pointer') : 'pointer') : 'pointer', 'ulong' ? ref.refType('ulong') : 'pointer', 'int']);

_library.zend_encoding_internal_encoding_getter = ffi.Function('pointer', []);

_library.zend_encoding_internal_encoding_setter = ffi.Function('int', ['pointer']);

_library._zend_multibyte_functions = Struct({
    "encoding_converter": _library.zend_encoding_converter,
    "encoding_detector": _library.zend_encoding_detector,
    "encoding_fetcher": _library.zend_encoding_fetcher,
    "encoding_list_parser": _library.zend_encoding_list_parser,
    "encoding_name_getter": _library.zend_encoding_name_getter,
    "internal_encoding_getter": _library.zend_encoding_internal_encoding_getter,
    "internal_encoding_setter": _library.zend_encoding_internal_encoding_setter,
    "lexer_compatibility_checker": _library.zend_encoding_lexer_compatibility_checker,
    "provider_name": 'char' ? ref.refType('char') : 'pointer'
});

_library.zend_multibyte_functions = _library._zend_multibyte_functions;

_library.zend_multibyte_set_functions = ['int', [ref.refType(_library.zend_multibyte_functions)]];
_library._functions.push(_library.zend_multibyte_set_functions);

_library.zend_multibyte_get_functions = [ref.refType(_library.zend_multibyte_functions), []];
_library._functions.push(_library.zend_multibyte_get_functions);

_library.zend_multibyte_fetch_encoding = [ref.refType(_library.zend_encoding), ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.zend_multibyte_fetch_encoding);

_library.zend_multibyte_get_encoding_name = ['char' ? ref.refType('char') : 'pointer', [ref.refType(_library.zend_encoding)]];
_library._functions.push(_library.zend_multibyte_get_encoding_name);

_library.zend_multibyte_check_lexer_compatibility = ['int', [ref.refType(_library.zend_encoding)]];
_library._functions.push(_library.zend_multibyte_check_lexer_compatibility);

_library.zend_multibyte_encoding_detector = [ref.refType(_library.zend_encoding), ['uchar' ? ref.refType('uchar') : 'pointer', 'ulong', ref.refType(_library.zend_encoding) ? ref.refType(ref.refType(_library.zend_encoding)) : 'pointer', 'ulong']];
_library._functions.push(_library.zend_multibyte_encoding_detector);

_library.zend_multibyte_encoding_converter = ['ulong', ['uchar' ? ref.refType('uchar') : 'pointer' ? ref.refType('uchar' ? ref.refType('uchar') : 'pointer') : 'pointer', 'ulong' ? ref.refType('ulong') : 'pointer', 'uchar' ? ref.refType('uchar') : 'pointer', 'ulong', ref.refType(_library.zend_encoding), ref.refType(_library.zend_encoding)]];
_library._functions.push(_library.zend_multibyte_encoding_converter);

_library.zend_multibyte_parse_encoding_list = ['int', ['char' ? ref.refType('char') : 'pointer', 'ulong', ref.refType(_library.zend_encoding) ? ref.refType(ref.refType(_library.zend_encoding)) : 'pointer' ? ref.refType(ref.refType(_library.zend_encoding) ? ref.refType(ref.refType(_library.zend_encoding)) : 'pointer') : 'pointer', 'ulong' ? ref.refType('ulong') : 'pointer', 'int']];
_library._functions.push(_library.zend_multibyte_parse_encoding_list);

_library.zend_multibyte_get_internal_encoding = [ref.refType(_library.zend_encoding), []];
_library._functions.push(_library.zend_multibyte_get_internal_encoding);

_library.zend_multibyte_get_script_encoding = [ref.refType(_library.zend_encoding), []];
_library._functions.push(_library.zend_multibyte_get_script_encoding);

_library.zend_multibyte_set_script_encoding = ['int', [ref.refType(_library.zend_encoding) ? ref.refType(ref.refType(_library.zend_encoding)) : 'pointer', 'ulong']];
_library._functions.push(_library.zend_multibyte_set_script_encoding);

_library.zend_multibyte_set_internal_encoding = ['int', [ref.refType(_library.zend_encoding)]];
_library._functions.push(_library.zend_multibyte_set_internal_encoding);

_library.zend_multibyte_set_script_encoding_by_string = ['int', ['char' ? ref.refType('char') : 'pointer', 'ulong']];
_library._functions.push(_library.zend_multibyte_set_script_encoding_by_string);

function loadDependentSymbols() {
}
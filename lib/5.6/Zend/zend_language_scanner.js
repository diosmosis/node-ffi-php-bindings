var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend_ptr_stack.js');
require('./zend_multibyte.js');
require('./zend_stack.js');
_library._zend_lex_state = Struct({});

_library._preload.push(function () {
    _library._zend_lex_state.defineProperty("filename", ref.refType('char'));
    _library._zend_lex_state.defineProperty("heredoc_label_stack", _library.zend_ptr_stack);
    _library._zend_lex_state.defineProperty("in", ref.refType(_library.zend_file_handle));
    _library._zend_lex_state.defineProperty("input_filter", _library.zend_encoding_filter);
    _library._zend_lex_state.defineProperty("lineno", 'uint');
    _library._zend_lex_state.defineProperty("output_filter", _library.zend_encoding_filter);
    _library._zend_lex_state.defineProperty("script_encoding", ref.refType(_library.zend_encoding));
    _library._zend_lex_state.defineProperty("script_filtered", ref.refType('uchar'));
    _library._zend_lex_state.defineProperty("script_filtered_size", 'ulong');
    _library._zend_lex_state.defineProperty("script_org", ref.refType('uchar'));
    _library._zend_lex_state.defineProperty("script_org_size", 'ulong');
    _library._zend_lex_state.defineProperty("state_stack", _library.zend_stack);
    _library._zend_lex_state.defineProperty("yy_cursor", ref.refType('uchar'));
    _library._zend_lex_state.defineProperty("yy_leng", 'uint');
    _library._zend_lex_state.defineProperty("yy_limit", ref.refType('uchar'));
    _library._zend_lex_state.defineProperty("yy_marker", ref.refType('uchar'));
    _library._zend_lex_state.defineProperty("yy_start", ref.refType('uchar'));
    _library._zend_lex_state.defineProperty("yy_state", 'int');
    _library._zend_lex_state.defineProperty("yy_text", ref.refType('uchar'));
});

require('./zend_language_scanner.js');
_library.zend_lex_state = _library._zend_lex_state;

_library._zend_heredoc_label = Struct({});

_library._preload.push(function () {
    _library._zend_heredoc_label.defineProperty("label", ref.refType('char'));
    _library._zend_heredoc_label.defineProperty("length", 'int');
});

_library.zend_heredoc_label = _library._zend_heredoc_label;

_library.zend_save_lexical_state = ['void', [ref.refType(_library.zend_lex_state)]];
_library._functions['zend_save_lexical_state'] = _library.zend_save_lexical_state;

_library.zend_restore_lexical_state = ['void', [ref.refType(_library.zend_lex_state)]];
_library._functions['zend_restore_lexical_state'] = _library.zend_restore_lexical_state;

_library.zend_prepare_string_for_scanning = ['int', [ref.refType(_library.zval), ref.refType('char')]];
_library._functions['zend_prepare_string_for_scanning'] = _library.zend_prepare_string_for_scanning;

_library.zend_multibyte_yyinput_again = ['void', [_library.zend_encoding_filter, ref.refType(_library.zend_encoding)]];
_library._functions['zend_multibyte_yyinput_again'] = _library.zend_multibyte_yyinput_again;

_library.zend_multibyte_set_filter = ['int', [ref.refType(_library.zend_encoding)]];
_library._functions['zend_multibyte_set_filter'] = _library.zend_multibyte_set_filter;


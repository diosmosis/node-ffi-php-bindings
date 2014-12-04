var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._zend_lex_state = Struct({
    "filename": ref.refType('char'),
    "heredoc_label_stack": _library.zend_ptr_stack,
    "in": ref.refType(_library.zend_file_handle),
    "input_filter": _library.zend_encoding_filter,
    "lineno": 'uint',
    "output_filter": _library.zend_encoding_filter,
    "script_encoding": ref.refType(_library.zend_encoding),
    "script_filtered": ref.refType('uchar'),
    "script_filtered_size": 'ulong',
    "script_org": ref.refType('uchar'),
    "script_org_size": 'ulong',
    "state_stack": _library.zend_stack,
    "yy_cursor": ref.refType('uchar'),
    "yy_leng": 'uint',
    "yy_limit": ref.refType('uchar'),
    "yy_marker": ref.refType('uchar'),
    "yy_start": ref.refType('uchar'),
    "yy_state": 'int',
    "yy_text": ref.refType('uchar')
});

_library.zend_lex_state = _library._zend_lex_state;

_library._zend_heredoc_label = Struct({
    "label": ref.refType('char'),
    "length": 'int'
});

_library.zend_heredoc_label = _library._zend_heredoc_label;

_library.zend_save_lexical_state = ['void', [ref.refType(_library.zend_lex_state)]];
_library._functions.push(_library.zend_save_lexical_state);

_library.zend_restore_lexical_state = ['void', [ref.refType(_library.zend_lex_state)]];
_library._functions.push(_library.zend_restore_lexical_state);

_library.zend_prepare_string_for_scanning = ['int', [ref.refType(_library.zval), ref.refType('char')]];
_library._functions.push(_library.zend_prepare_string_for_scanning);

_library.zend_multibyte_yyinput_again = ['void', [_library.zend_encoding_filter, ref.refType(_library.zend_encoding)]];
_library._functions.push(_library.zend_multibyte_yyinput_again);

_library.zend_multibyte_set_filter = ['int', [ref.refType(_library.zend_encoding)]];
_library._functions.push(_library.zend_multibyte_set_filter);


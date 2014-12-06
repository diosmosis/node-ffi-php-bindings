var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_lex_state = Struct({
    "filename": 'char' ? ref.refType('char') : 'pointer',
    "heredoc_label_stack": _library.zend_ptr_stack,
    "in": ref.refType(_library.zend_file_handle),
    "input_filter": _library.zend_encoding_filter,
    "lineno": 'uint',
    "output_filter": _library.zend_encoding_filter,
    "script_encoding": ref.refType(_library.zend_encoding),
    "script_filtered": 'uchar' ? ref.refType('uchar') : 'pointer',
    "script_filtered_size": 'ulong',
    "script_org": 'uchar' ? ref.refType('uchar') : 'pointer',
    "script_org_size": 'ulong',
    "state_stack": _library.zend_stack,
    "yy_cursor": 'uchar' ? ref.refType('uchar') : 'pointer',
    "yy_leng": 'uint',
    "yy_limit": 'uchar' ? ref.refType('uchar') : 'pointer',
    "yy_marker": 'uchar' ? ref.refType('uchar') : 'pointer',
    "yy_start": 'uchar' ? ref.refType('uchar') : 'pointer',
    "yy_state": 'int',
    "yy_text": 'uchar' ? ref.refType('uchar') : 'pointer'
});

_library.zend_lex_state = _library._zend_lex_state;

_library._zend_heredoc_label = Struct({
    "label": 'char' ? ref.refType('char') : 'pointer',
    "length": 'int'
});

_library.zend_heredoc_label = _library._zend_heredoc_label;

_library.zend_save_lexical_state = ['void', [ref.refType(_library.zend_lex_state)]];
_library._functions.push(_library.zend_save_lexical_state);

_library.zend_restore_lexical_state = ['void', [ref.refType(_library.zend_lex_state)]];
_library._functions.push(_library.zend_restore_lexical_state);

_library.zend_prepare_string_for_scanning = ['int', [ref.refType(_library.zval), 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.zend_prepare_string_for_scanning);

_library.zend_multibyte_yyinput_again = ['void', [_library.zend_encoding_filter, ref.refType(_library.zend_encoding)]];
_library._functions.push(_library.zend_multibyte_yyinput_again);

_library.zend_multibyte_set_filter = ['int', [ref.refType(_library.zend_encoding)]];
_library._functions.push(_library.zend_multibyte_set_filter);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_multibyte.js');
    require('./zend_object_handlers.js');
    require('./zend_ptr_stack.js');
    require('./zend_stack.js');
    require('./zend_stream.js');
    require('./zend_types.js');
}
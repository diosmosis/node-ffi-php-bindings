var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_syntax_highlighter_ini = Struct({
    "highlight_comment": 'char' ? ref.refType('char') : 'pointer',
    "highlight_default": 'char' ? ref.refType('char') : 'pointer',
    "highlight_html": 'char' ? ref.refType('char') : 'pointer',
    "highlight_keyword": 'char' ? ref.refType('char') : 'pointer',
    "highlight_string": 'char' ? ref.refType('char') : 'pointer'
});

_library.zend_syntax_highlighter_ini = _library._zend_syntax_highlighter_ini;

_library.zend_highlight = ['void', [ref.refType(_library.zend_syntax_highlighter_ini)]];
_library._functions.push(_library.zend_highlight);

_library.zend_strip = ['void', []];
_library._functions.push(_library.zend_strip);

_library.highlight_file = ['int', ['char' ? ref.refType('char') : 'pointer', ref.refType(_library.zend_syntax_highlighter_ini)]];
_library._functions.push(_library.highlight_file);

_library.highlight_string = ['int', [ref.refType(_library.zval), ref.refType(_library.zend_syntax_highlighter_ini), 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.highlight_string);

_library.zend_html_putc = ['void', ['char']];
_library._functions.push(_library.zend_html_putc);

_library.zend_html_puts = ['void', ['char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library.zend_html_puts);

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}
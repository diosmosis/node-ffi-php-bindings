var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_syntax_highlighter_ini = Struct({
    "highlight_comment": ref.refType('char'),
    "highlight_default": ref.refType('char'),
    "highlight_html": ref.refType('char'),
    "highlight_keyword": ref.refType('char'),
    "highlight_string": ref.refType('char')
});

_library.zend_syntax_highlighter_ini = _library._zend_syntax_highlighter_ini;

_library.zend_highlight = ['void', [_library.zend_syntax_highlighter_ini ? ref.refType(_library.zend_syntax_highlighter_ini) : 'pointer']];
_library._functions.push(_library.zend_highlight);

_library.zend_strip = ['void', []];
_library._functions.push(_library.zend_strip);

_library.highlight_file = ['int', [ref.refType('char'), _library.zend_syntax_highlighter_ini ? ref.refType(_library.zend_syntax_highlighter_ini) : 'pointer']];
_library._functions.push(_library.highlight_file);

_library.highlight_string = ['int', [_library.zval ? ref.refType(_library.zval) : 'pointer', _library.zend_syntax_highlighter_ini ? ref.refType(_library.zend_syntax_highlighter_ini) : 'pointer', ref.refType('char')]];
_library._functions.push(_library.highlight_string);

_library.zend_html_putc = ['void', ['char']];
_library._functions.push(_library.zend_html_putc);

_library.zend_html_puts = ['void', [ref.refType('char'), 'uint']];
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
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._zend_syntax_highlighter_ini = Struct({});
_library._zend_syntax_highlighter_ini.size = 1;

_library._preload.push(function () {
    _library._zend_syntax_highlighter_ini.size = 0;
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_comment", ref.refType('char'));
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_default", ref.refType('char'));
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_html", ref.refType('char'));
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_keyword", ref.refType('char'));
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_string", ref.refType('char'));
});

_library.zend_syntax_highlighter_ini = _library._zend_syntax_highlighter_ini;

_library.zend_highlight = ['void', [ref.refType(_library.zend_syntax_highlighter_ini)]];
_library._functions['zend_highlight'] = _library.zend_highlight;

_library.zend_strip = ['void', []];
_library._functions['zend_strip'] = _library.zend_strip;

_library.highlight_file = ['int', [ref.refType('char'), ref.refType(_library.zend_syntax_highlighter_ini)]];
_library._functions['highlight_file'] = _library.highlight_file;

require('./zend_types.js');
_library.highlight_string = ['int', [ref.refType(_library.zval), ref.refType(_library.zend_syntax_highlighter_ini), ref.refType('char')]];
_library._functions['highlight_string'] = _library.highlight_string;

_library.zend_html_putc = ['void', ['char']];
_library._functions['zend_html_putc'] = _library.zend_html_putc;

_library.zend_html_puts = ['void', [ref.refType('char'), 'uint']];
_library._functions['zend_html_puts'] = _library.zend_html_puts;


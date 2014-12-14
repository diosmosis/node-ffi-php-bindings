var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_syntax_highlighter_ini = Struct({});
_library._zend_syntax_highlighter_ini.size = 1;

_library._preload['_zend_syntax_highlighter_ini'] = [function () {
    _library._zend_syntax_highlighter_ini.size = 0;
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_html", ref.refType('char'));
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_comment", ref.refType('char'));
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_default", ref.refType('char'));
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_string", ref.refType('char'));
    _library._zend_syntax_highlighter_ini.defineProperty("highlight_keyword", ref.refType('char'));
}];

_library._preload['zend_syntax_highlighter_ini'] = [function () {
    _library.zend_syntax_highlighter_ini = _library._zend_syntax_highlighter_ini;
}];

_library._preload['zend_highlight'] = ['zend_syntax_highlighter_ini', function () {
    _library.zend_highlight = ['void', [ref.refType(_library.zend_syntax_highlighter_ini)]];
    _library._functions['zend_highlight'] = _library.zend_highlight;
}];

_library._preload['zend_strip'] = [function () {
    _library.zend_strip = ['void', []];
    _library._functions['zend_strip'] = _library.zend_strip;
}];

_library._preload['highlight_file'] = ['zend_syntax_highlighter_ini', function () {
    _library.highlight_file = ['int', [ref.refType('char'), ref.refType(_library.zend_syntax_highlighter_ini)]];
    _library._functions['highlight_file'] = _library.highlight_file;
}];

_library._preload['highlight_string'] = ['zval', 'zend_syntax_highlighter_ini', function () {
    _library.highlight_string = ['int', [ref.refType(_library.zval), ref.refType(_library.zend_syntax_highlighter_ini), ref.refType('char')]];
    _library._functions['highlight_string'] = _library.highlight_string;
}];

_library._preload['zend_html_putc'] = [function () {
    _library.zend_html_putc = ['void', ['char']];
    _library._functions['zend_html_putc'] = _library.zend_html_putc;
}];

_library._preload['zend_html_puts'] = [function () {
    _library.zend_html_puts = ['void', [ref.refType('char'), 'uint']];
    _library._functions['zend_html_puts'] = _library.zend_html_puts;
}];

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

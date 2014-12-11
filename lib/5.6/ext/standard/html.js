var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_escape_html_entities'] = [function () {
    _library.php_escape_html_entities = [ref.refType('char'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int', 'int', ref.refType('char')]];
    _library._functions['php_escape_html_entities'] = _library.php_escape_html_entities;
}];

_library._preload['php_escape_html_entities_ex'] = [function () {
    _library.php_escape_html_entities_ex = [ref.refType('char'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int', 'int', ref.refType('char'), 'uchar']];
    _library._functions['php_escape_html_entities_ex'] = _library.php_escape_html_entities_ex;
}];

_library._preload['php_unescape_html_entities'] = [function () {
    _library.php_unescape_html_entities = [ref.refType('char'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int', 'int', ref.refType('char')]];
    _library._functions['php_unescape_html_entities'] = _library.php_unescape_html_entities;
}];

_library._preload['php_next_utf8_char'] = [function () {
    _library.php_next_utf8_char = ['uint', [ref.refType('uchar'), 'ulong', ref.refType('ulong'), ref.refType('int')]];
    _library._functions['php_next_utf8_char'] = _library.php_next_utf8_char;
}];

function loadDependentSymbols() {
}

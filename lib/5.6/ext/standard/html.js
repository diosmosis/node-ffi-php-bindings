var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.register_html_constants = ['void', ['int', 'int']];
_library._functions['register_html_constants'] = _library.register_html_constants;

require('./zend_types.js');
_library.zif_htmlspecialchars = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_htmlspecialchars'] = _library.zif_htmlspecialchars;

_library.zif_htmlentities = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_htmlentities'] = _library.zif_htmlentities;

_library.zif_htmlspecialchars_decode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_htmlspecialchars_decode'] = _library.zif_htmlspecialchars_decode;

_library.zif_html_entity_decode = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_html_entity_decode'] = _library.zif_html_entity_decode;

_library.zif_get_html_translation_table = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions['zif_get_html_translation_table'] = _library.zif_get_html_translation_table;

_library.php_escape_html_entities = [ref.refType('char'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int', 'int', ref.refType('char')]];
_library._functions['php_escape_html_entities'] = _library.php_escape_html_entities;

_library.php_escape_html_entities_ex = [ref.refType('char'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int', 'int', ref.refType('char'), 'uchar']];
_library._functions['php_escape_html_entities_ex'] = _library.php_escape_html_entities_ex;

_library.php_unescape_html_entities = [ref.refType('char'), [ref.refType('uchar'), 'ulong', ref.refType('ulong'), 'int', 'int', ref.refType('char')]];
_library._functions['php_unescape_html_entities'] = _library.php_unescape_html_entities;

_library.php_next_utf8_char = ['uint', [ref.refType('uchar'), 'ulong', ref.refType('ulong'), ref.refType('int')]];
_library._functions['php_next_utf8_char'] = _library.php_next_utf8_char;


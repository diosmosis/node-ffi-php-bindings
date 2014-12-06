var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zif_strspn = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strspn);

_library.zif_strcspn = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strcspn);

_library.zif_str_replace = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_str_replace);

_library.zif_str_ireplace = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_str_ireplace);

_library.zif_rtrim = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_rtrim);

_library.zif_trim = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_trim);

_library.zif_ltrim = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ltrim);

_library.zif_soundex = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_soundex);

_library.zif_levenshtein = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_levenshtein);

_library.zif_count_chars = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_count_chars);

_library.zif_wordwrap = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_wordwrap);

_library.zif_explode = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_explode);

_library.zif_implode = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_implode);

_library.zif_strtok = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strtok);

_library.zif_strtoupper = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strtoupper);

_library.zif_strtolower = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strtolower);

_library.zif_basename = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_basename);

_library.zif_dirname = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_dirname);

_library.zif_pathinfo = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_pathinfo);

_library.zif_strstr = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strstr);

_library.zif_strpos = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strpos);

_library.zif_stripos = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stripos);

_library.zif_strrpos = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strrpos);

_library.zif_strripos = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strripos);

_library.zif_strrchr = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strrchr);

_library.zif_substr = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_substr);

_library.zif_quotemeta = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_quotemeta);

_library.zif_ucfirst = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ucfirst);

_library.zif_lcfirst = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_lcfirst);

_library.zif_ucwords = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ucwords);

_library.zif_strtr = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strtr);

_library.zif_strrev = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strrev);

_library.zif_hebrev = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_hebrev);

_library.zif_hebrevc = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_hebrevc);

_library.zif_user_sprintf = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_user_sprintf);

_library.zif_user_printf = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_user_printf);

_library.zif_vprintf = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_vprintf);

_library.zif_vsprintf = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_vsprintf);

_library.zif_addcslashes = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_addcslashes);

_library.zif_addslashes = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_addslashes);

_library.zif_stripcslashes = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stripcslashes);

_library.zif_stripslashes = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stripslashes);

_library.zif_chr = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_chr);

_library.zif_ord = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_ord);

_library.zif_nl2br = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_nl2br);

_library.zif_setlocale = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_setlocale);

_library.zif_localeconv = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_localeconv);

_library.zif_nl_langinfo = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_nl_langinfo);

_library.zif_stristr = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_stristr);

_library.zif_chunk_split = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_chunk_split);

_library.zif_parse_str = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_parse_str);

_library.zif_str_getcsv = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_str_getcsv);

_library.zif_bin2hex = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_bin2hex);

_library.zif_hex2bin = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_hex2bin);

_library.zif_similar_text = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_similar_text);

_library.zif_strip_tags = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strip_tags);

_library.zif_str_repeat = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_str_repeat);

_library.zif_substr_replace = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_substr_replace);

_library.zif_strnatcmp = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strnatcmp);

_library.zif_strnatcasecmp = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strnatcasecmp);

_library.zif_substr_count = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_substr_count);

_library.zif_str_pad = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_str_pad);

_library.zif_sscanf = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_sscanf);

_library.zif_str_shuffle = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_str_shuffle);

_library.zif_str_word_count = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_str_word_count);

_library.zif_str_split = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_str_split);

_library.zif_strpbrk = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strpbrk);

_library.zif_substr_compare = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_substr_compare);

_library.zif_strcoll = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strcoll);

_library.zif_money_format = ['void', ['int', ref.refType(_library.zval), ref.refType(_library.zval) ? ref.refType(ref.refType(_library.zval)) : 'pointer', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_money_format);

_library.zm_startup_nl_langinfo = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_nl_langinfo);

_library.strnatcmp_ex = ['int', ['char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'ulong', 'int']];
_library._functions.push(_library.strnatcmp_ex);

_library.localeconv_r = ['pointer', ['pointer']];
_library._functions.push(_library.localeconv_r);

_library.php_strtoupper = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'ulong']];
_library._functions.push(_library.php_strtoupper);

_library.php_strtolower = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'ulong']];
_library._functions.push(_library.php_strtolower);

_library.php_strtr = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.php_strtr);

_library.php_addslashes = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int', 'int' ? ref.refType('int') : 'pointer', 'int']];
_library._functions.push(_library.php_addslashes);

_library.php_addcslashes = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int', 'int' ? ref.refType('int') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.php_addcslashes);

_library.php_stripslashes = ['void', ['char' ? ref.refType('char') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_stripslashes);

_library.php_stripcslashes = ['void', ['char' ? ref.refType('char') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_stripcslashes);

_library.php_basename = ['void', ['char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'ulong' ? ref.refType('ulong') : 'pointer']];
_library._functions.push(_library.php_basename);

_library.php_dirname = ['ulong', ['char' ? ref.refType('char') : 'pointer', 'ulong']];
_library._functions.push(_library.php_dirname);

_library.php_stristr = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'ulong', 'ulong']];
_library._functions.push(_library.php_stristr);

_library.php_str_to_str_ex = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'int', 'int' ? ref.refType('int') : 'pointer', 'int', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_str_to_str_ex);

_library.php_str_to_str = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'int', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_str_to_str);

_library.php_trim = ['char' ? ref.refType('char') : 'pointer', ['char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'int', ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_trim);

_library.php_strip_tags = ['ulong', ['char' ? ref.refType('char') : 'pointer', 'int', 'int' ? ref.refType('int') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'int']];
_library._functions.push(_library.php_strip_tags);

_library.php_strip_tags_ex = ['ulong', ['char' ? ref.refType('char') : 'pointer', 'int', 'int' ? ref.refType('int') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'int', 'uchar']];
_library._functions.push(_library.php_strip_tags_ex);

_library.php_char_to_str_ex = ['int', ['char' ? ref.refType('char') : 'pointer', 'uint', 'char', 'char' ? ref.refType('char') : 'pointer', 'int', ref.refType(_library.zval), 'int', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_char_to_str_ex);

_library.php_char_to_str = ['int', ['char' ? ref.refType('char') : 'pointer', 'uint', 'char', 'char' ? ref.refType('char') : 'pointer', 'int', ref.refType(_library.zval)]];
_library._functions.push(_library.php_char_to_str);

_library.php_implode = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.php_implode);

_library.php_explode = ['void', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval), 'long']];
_library._functions.push(_library.php_explode);

_library.php_strspn = ['ulong', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_strspn);

_library.php_strcspn = ['ulong', ['char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_strcspn);

_library.string_natural_compare_function_ex = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval), 'uchar']];
_library._functions.push(_library.string_natural_compare_function_ex);

_library.string_natural_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.string_natural_compare_function);

_library.string_natural_case_compare_function = ['int', [ref.refType(_library.zval), ref.refType(_library.zval), ref.refType(_library.zval)]];
_library._functions.push(_library.string_natural_case_compare_function);

_library.register_string_constants = ['void', ['int', 'int']];
_library._functions.push(_library.register_string_constants);

function loadDependentSymbols() {
    require('./../../Zend/zend.js');
    require('./../../Zend/zend_API.js');
    require('./../../Zend/zend_ast.js');
    require('./../../Zend/zend_compile.js');
    require('./../../Zend/zend_hash.js');
    require('./../../Zend/zend_ini.js');
    require('./../../Zend/zend_iterators.js');
    require('./../../Zend/zend_modules.js');
    require('./../../Zend/zend_object_handlers.js');
    require('./../../Zend/zend_types.js');
}
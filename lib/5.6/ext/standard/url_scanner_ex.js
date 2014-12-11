var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_url_scanner_adapt_single_url'] = [function () {
    _library.php_url_scanner_adapt_single_url = [ref.refType('char'), [ref.refType('char'), 'ulong', ref.refType('char'), ref.refType('char'), ref.refType('ulong')]];
    _library._functions['php_url_scanner_adapt_single_url'] = _library.php_url_scanner_adapt_single_url;
}];

_library._preload['php_url_scanner_add_var'] = [function () {
    _library.php_url_scanner_add_var = ['int', [ref.refType('char'), 'int', ref.refType('char'), 'int', 'int']];
    _library._functions['php_url_scanner_add_var'] = _library.php_url_scanner_add_var;
}];

_library._preload['php_url_scanner_reset_vars'] = [function () {
    _library.php_url_scanner_reset_vars = ['int', []];
    _library._functions['php_url_scanner_reset_vars'] = _library.php_url_scanner_reset_vars;
}];

_library.url_adapt_state_ex_t = Struct({});
_library.url_adapt_state_ex_t.size = 1;

_library._preload['url_adapt_state_ex_t'] = ['smart_str', 'smart_str', 'smart_str', 'smart_str', 'smart_str', 'smart_str', 'smart_str', 'smart_str', 'smart_str', 'smart_str', 'HashTable', 'smart_str', 'smart_str', 'smart_str', 'smart_str', function () {
    _library.url_adapt_state_ex_t.size = 0;
    _library.url_adapt_state_ex_t.defineProperty("active", 'int');
    _library.url_adapt_state_ex_t.defineProperty("arg", _library.smart_str);
    _library.url_adapt_state_ex_t.defineProperty("buf", _library.smart_str);
    _library.url_adapt_state_ex_t.defineProperty("form_app", _library.smart_str);
    _library.url_adapt_state_ex_t.defineProperty("lookup_data", ref.refType('char'));
    _library.url_adapt_state_ex_t.defineProperty("result", _library.smart_str);
    _library.url_adapt_state_ex_t.defineProperty("state", 'int');
    _library.url_adapt_state_ex_t.defineProperty("tag", _library.smart_str);
    _library.url_adapt_state_ex_t.defineProperty("tags", ref.refType(_library.HashTable));
    _library.url_adapt_state_ex_t.defineProperty("url_app", _library.smart_str);
    _library.url_adapt_state_ex_t.defineProperty("val", _library.smart_str);
}];

function loadDependentSymbols() {
    require('./../../Zend/zend_hash.js');
    require('./php_smart_str_public.js');
}

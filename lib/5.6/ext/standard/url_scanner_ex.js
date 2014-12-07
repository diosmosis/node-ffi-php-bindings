var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zm_startup_url_scanner_ex = ['int', ['int', 'int']];
_library._functions['zm_startup_url_scanner_ex'] = _library.zm_startup_url_scanner_ex;

_library.zm_shutdown_url_scanner_ex = ['int', ['int', 'int']];
_library._functions['zm_shutdown_url_scanner_ex'] = _library.zm_shutdown_url_scanner_ex;

_library.zm_activate_url_scanner_ex = ['int', ['int', 'int']];
_library._functions['zm_activate_url_scanner_ex'] = _library.zm_activate_url_scanner_ex;

_library.zm_deactivate_url_scanner_ex = ['int', ['int', 'int']];
_library._functions['zm_deactivate_url_scanner_ex'] = _library.zm_deactivate_url_scanner_ex;

_library.php_url_scanner_adapt_single_url = [ref.refType('char'), [ref.refType('char'), 'ulong', ref.refType('char'), ref.refType('char'), ref.refType('ulong')]];
_library._functions['php_url_scanner_adapt_single_url'] = _library.php_url_scanner_adapt_single_url;

_library.php_url_scanner_add_var = ['int', [ref.refType('char'), 'int', ref.refType('char'), 'int', 'int']];
_library._functions['php_url_scanner_add_var'] = _library.php_url_scanner_add_var;

_library.php_url_scanner_reset_vars = ['int', []];
_library._functions['php_url_scanner_reset_vars'] = _library.php_url_scanner_reset_vars;

_library.url_adapt_state_ex_t = Struct({});

_library._preload.push(function () {
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
});

function loadDependentSymbols() {
    require('./../../Zend/zend_hash.js');
    require('./php_smart_str_public.js');
}
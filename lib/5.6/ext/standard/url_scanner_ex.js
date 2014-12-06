var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.zm_startup_url_scanner_ex = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_url_scanner_ex);

_library.zm_shutdown_url_scanner_ex = ['int', ['int', 'int']];
_library._functions.push(_library.zm_shutdown_url_scanner_ex);

_library.zm_activate_url_scanner_ex = ['int', ['int', 'int']];
_library._functions.push(_library.zm_activate_url_scanner_ex);

_library.zm_deactivate_url_scanner_ex = ['int', ['int', 'int']];
_library._functions.push(_library.zm_deactivate_url_scanner_ex);

_library.php_url_scanner_adapt_single_url = [ref.refType('char'), [ref.refType('char'), 'ulong', ref.refType('char'), ref.refType('char'), ref.refType('ulong')]];
_library._functions.push(_library.php_url_scanner_adapt_single_url);

_library.php_url_scanner_add_var = ['int', [ref.refType('char'), 'int', ref.refType('char'), 'int', 'int']];
_library._functions.push(_library.php_url_scanner_add_var);

_library.php_url_scanner_reset_vars = ['int', []];
_library._functions.push(_library.php_url_scanner_reset_vars);

_library.url_adapt_state_ex_t = Struct({
    "active": 'int',
    "arg": _library.smart_str,
    "buf": _library.smart_str,
    "form_app": _library.smart_str,
    "lookup_data": ref.refType('char'),
    "result": _library.smart_str,
    "state": 'int',
    "tag": _library.smart_str,
    "tags": ref.refType(_library.HashTable),
    "url_app": _library.smart_str,
    "val": _library.smart_str
})

function loadDependentSymbols() {
    require('./../../Zend/zend_hash.js');
    require('./php_smart_str_public.js');
}
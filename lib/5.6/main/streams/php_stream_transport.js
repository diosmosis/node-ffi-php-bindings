var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_stream_transport_factory_func = ffi.Function(_library._php_stream ? ref.refType(_library._php_stream) : 'pointer', [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', ref.refType('char'), 'int', 'int', _library.timeval ? ref.refType(_library.timeval) : 'pointer', _library._php_stream_context ? ref.refType(_library._php_stream_context) : 'pointer', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']);

_library.php_stream_transport_factory = _library.php_stream_transport_factory_func ? ref.refType(_library.php_stream_transport_factory_func) : 'pointer';

_library.php_stream_xport_register = ['int', [ref.refType('char'), _library.php_stream_transport_factory]];
_library._functions.push(_library.php_stream_xport_register);

_library.php_stream_xport_unregister = ['int', [ref.refType('char')]];
_library._functions.push(_library.php_stream_xport_unregister);

_library._php_stream_xport_create = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [ref.refType('char'), 'ulong', 'int', 'int', ref.refType('char'), _library.timeval ? ref.refType(_library.timeval) : 'pointer', _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', ref.refType(ref.refType('char')), ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_xport_create);

_library.php_stream_xport_bind = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char'), 'ulong', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_stream_xport_bind);

_library.php_stream_xport_connect = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char'), 'ulong', 'int', _library.timeval ? ref.refType(_library.timeval) : 'pointer', ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions.push(_library.php_stream_xport_connect);

_library.php_stream_xport_listen = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_stream_xport_listen);

_library.php_stream_xport_accept = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType(_library.php_stream ? ref.refType(_library.php_stream) : 'pointer'), ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(ref.refType('void')), _library.socklen_t ? ref.refType(_library.socklen_t) : 'pointer', _library.timeval ? ref.refType(_library.timeval) : 'pointer', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_stream_xport_accept);

_library.php_stream_xport_get_name = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int', ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(ref.refType('void')), _library.socklen_t ? ref.refType(_library.socklen_t) : 'pointer']];
_library._functions.push(_library.php_stream_xport_get_name);

_library.php_stream_xport_send_recv_flags = {
    STREAM_PEEK: 2,
    STREAM_OOB: 1
};

_library.php_stream_xport_recvfrom = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char'), 'ulong', 'long', ref.refType(ref.refType('void')), _library.socklen_t ? ref.refType(_library.socklen_t) : 'pointer', ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions.push(_library.php_stream_xport_recvfrom);

_library.php_stream_xport_sendto = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ref.refType('char'), 'ulong', 'long', ref.refType('void'), _library.socklen_t]];
_library._functions.push(_library.php_stream_xport_sendto);

_library.stream_shutdown_t = 'int32';

_library.php_stream_xport_shutdown = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.stream_shutdown_t]];
_library._functions.push(_library.php_stream_xport_shutdown);

_library._php_stream_xport_param = Struct({
    "how": 'uint',
    "inputs": Struct({
        "addr": _library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer',
        "addrlen": _library.socklen_t,
        "backlog": 'int',
        "buf": ref.refType('char'),
        "buflen": 'ulong',
        "flags": 'long',
        "name": ref.refType('char'),
        "namelen": 'ulong',
        "timeout": _library.timeval ? ref.refType(_library.timeval) : 'pointer'
    }),
    "op": 'int32',
    "outputs": Struct({
        "addr": _library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer',
        "addrlen": _library.socklen_t,
        "client": _library.php_stream ? ref.refType(_library.php_stream) : 'pointer',
        "error_code": 'int',
        "error_text": ref.refType('char'),
        "returncode": 'int',
        "textaddr": ref.refType('char'),
        "textaddrlen": 'long'
    }),
    "want_addr": 'uint',
    "want_errortext": 'uint',
    "want_textaddr": 'uint'
});

_library.php_stream_xport_param = _library._php_stream_xport_param;

_library.php_stream_xport_crypt_method_t = 'int32';

_library.php_stream_xport_crypto_setup = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', _library.php_stream_xport_crypt_method_t, _library.php_stream ? ref.refType(_library.php_stream) : 'pointer']];
_library._functions.push(_library.php_stream_xport_crypto_setup);

_library.php_stream_xport_crypto_enable = ['int', [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', 'int']];
_library._functions.push(_library.php_stream_xport_crypto_enable);

_library._php_stream_xport_crypto_param = Struct({
    "inputs": Struct({
        "activate": 'int',
        "method": _library.php_stream_xport_crypt_method_t,
        "session": _library.php_stream ? ref.refType(_library.php_stream) : 'pointer'
    }),
    "op": 'int32',
    "outputs": Struct({
        "returncode": 'int'
    })
});

_library.php_stream_xport_crypto_param = _library._php_stream_xport_crypto_param;

_library.php_stream_xport_get_hash = [_library.HashTable ? ref.refType(_library.HashTable) : 'pointer', []];
_library._functions.push(_library.php_stream_xport_get_hash);

_library.php_stream_generic_socket_factory = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', ref.refType('char'), 'int', 'int', _library.timeval ? ref.refType(_library.timeval) : 'pointer', _library.php_stream_context ? ref.refType(_library.php_stream_context) : 'pointer', 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library.php_stream_generic_socket_factory);

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
    require('./../php_streams.js');
    require('./php_stream_context.js');
    require('./php_stream_filter_api.js');
}
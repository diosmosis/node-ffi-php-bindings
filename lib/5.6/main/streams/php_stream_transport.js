var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_stream_transport_factory_func = ffi.Function(ref.refType(_library._php_stream), [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', ref.refType('char'), 'int', 'int', ref.refType(_library.timeval), ref.refType(_library._php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']);

_library.php_stream_transport_factory = ref.refType(_library.php_stream_transport_factory_func);

_library.php_stream_xport_register = ['int', [ref.refType('char'), _library.php_stream_transport_factory]];
_library._functions.push(_library.php_stream_xport_register);

_library.php_stream_xport_unregister = ['int', [ref.refType('char')]];
_library._functions.push(_library.php_stream_xport_unregister);

_library._php_stream_xport_create = [ref.refType(_library.php_stream), [ref.refType('char'), 'ulong', 'int', 'int', ref.refType('char'), ref.refType(_library.timeval), ref.refType(_library.php_stream_context), ref.refType(ref.refType('char')), ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_xport_create);

_library.php_stream_xport_bind = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_stream_xport_bind);

_library.php_stream_xport_connect = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'int', ref.refType(_library.timeval), ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions.push(_library.php_stream_xport_connect);

_library.php_stream_xport_listen = ['int', [ref.refType(_library.php_stream), 'int', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_stream_xport_listen);

_library.php_stream_xport_accept = ['int', [ref.refType(_library.php_stream), ref.refType(ref.refType(_library.php_stream)), ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(ref.refType('void')), ref.refType(_library.socklen_t), ref.refType(_library.timeval), ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_stream_xport_accept);

_library.php_stream_xport_get_name = ['int', [ref.refType(_library.php_stream), 'int', ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(ref.refType('void')), ref.refType(_library.socklen_t)]];
_library._functions.push(_library.php_stream_xport_get_name);

_library.php_stream_xport_send_recv_flags = {
    STREAM_PEEK: 2,
    STREAM_OOB: 1
};

_library.php_stream_xport_recvfrom = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'long', ref.refType(ref.refType('void')), ref.refType(_library.socklen_t), ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions.push(_library.php_stream_xport_recvfrom);

_library.php_stream_xport_sendto = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'long', ref.refType('void'), _library.socklen_t]];
_library._functions.push(_library.php_stream_xport_sendto);

_library.stream_shutdown_t = 'int32';

_library.php_stream_xport_shutdown = ['int', [ref.refType(_library.php_stream), _library.stream_shutdown_t]];
_library._functions.push(_library.php_stream_xport_shutdown);

_library._php_stream_xport_param = Struct({
    "how": 'uint',
    "inputs": Struct({
        "addr": ref.refType(_library.sockaddr),
        "addrlen": _library.socklen_t,
        "backlog": 'int',
        "buf": ref.refType('char'),
        "buflen": 'ulong',
        "flags": 'long',
        "name": ref.refType('char'),
        "namelen": 'ulong',
        "timeout": ref.refType(_library.timeval)
    });,
    "op": 'int32',
    "outputs": Struct({
        "addr": ref.refType(_library.sockaddr),
        "addrlen": _library.socklen_t,
        "client": ref.refType(_library.php_stream),
        "error_code": 'int',
        "error_text": ref.refType('char'),
        "returncode": 'int',
        "textaddr": ref.refType('char'),
        "textaddrlen": 'long'
    });,
    "want_addr": 'uint',
    "want_errortext": 'uint',
    "want_textaddr": 'uint'
});

_library.php_stream_xport_param = _library._php_stream_xport_param;

_library.php_stream_xport_crypt_method_t = 'int32';

_library.php_stream_xport_crypto_setup = ['int', [ref.refType(_library.php_stream), _library.php_stream_xport_crypt_method_t, ref.refType(_library.php_stream)]];
_library._functions.push(_library.php_stream_xport_crypto_setup);

_library.php_stream_xport_crypto_enable = ['int', [ref.refType(_library.php_stream), 'int']];
_library._functions.push(_library.php_stream_xport_crypto_enable);

_library._php_stream_xport_crypto_param = Struct({
    "inputs": Struct({
        "activate": 'int',
        "method": _library.php_stream_xport_crypt_method_t,
        "session": ref.refType(_library.php_stream)
    });,
    "op": 'int32',
    "outputs": Struct({
        "returncode": 'int'
    });
});

_library.php_stream_xport_crypto_param = _library._php_stream_xport_crypto_param;

_library.php_stream_xport_get_hash = [ref.refType(_library.HashTable), []];
_library._functions.push(_library.php_stream_xport_get_hash);

_library.php_stream_generic_socket_factory = [ref.refType(_library.php_stream), [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', ref.refType('char'), 'int', 'int', ref.refType(_library.timeval), ref.refType(_library.php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library.php_stream_generic_socket_factory);

function loadDependentSymbols() {
};
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library.php_stream_transport_factory_func = ffi.Function(ref.refType(_library._php_stream), ['char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'int', 'int', ref.refType(_library.timeval), ref.refType(_library._php_stream_context), 'int', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']);

_library.php_stream_transport_factory = ref.refType(_library.php_stream_transport_factory_func);

_library.php_stream_xport_register = ['int', ['char' ? ref.refType('char') : 'pointer', _library.php_stream_transport_factory]];
_library._functions.push(_library.php_stream_xport_register);

_library.php_stream_xport_unregister = ['int', ['char' ? ref.refType('char') : 'pointer']];
_library._functions.push(_library.php_stream_xport_unregister);

_library._php_stream_xport_create = [ref.refType(_library.php_stream), ['char' ? ref.refType('char') : 'pointer', 'ulong', 'int', 'int', 'char' ? ref.refType('char') : 'pointer', ref.refType(_library.timeval), ref.refType(_library.php_stream_context), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._php_stream_xport_create);

_library.php_stream_xport_bind = ['int', [ref.refType(_library.php_stream), 'char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.php_stream_xport_bind);

_library.php_stream_xport_connect = ['int', [ref.refType(_library.php_stream), 'char' ? ref.refType('char') : 'pointer', 'ulong', 'int', ref.refType(_library.timeval), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_stream_xport_connect);

_library.php_stream_xport_listen = ['int', [ref.refType(_library.php_stream), 'int', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.php_stream_xport_listen);

_library.php_stream_xport_accept = ['int', [ref.refType(_library.php_stream), ref.refType(_library.php_stream) ? ref.refType(ref.refType(_library.php_stream)) : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer', 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer', ref.refType(_library.socklen_t), ref.refType(_library.timeval), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.php_stream_xport_accept);

_library.php_stream_xport_get_name = ['int', [ref.refType(_library.php_stream), 'int', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer', 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer', ref.refType(_library.socklen_t)]];
_library._functions.push(_library.php_stream_xport_get_name);

_library.php_stream_xport_send_recv_flags = {
    STREAM_PEEK: 2,
    STREAM_OOB: 1
};

_library.php_stream_xport_recvfrom = ['int', [ref.refType(_library.php_stream), 'char' ? ref.refType('char') : 'pointer', 'ulong', 'long', 'void' ? ref.refType('void') : 'pointer' ? ref.refType('void' ? ref.refType('void') : 'pointer') : 'pointer', ref.refType(_library.socklen_t), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_stream_xport_recvfrom);

_library.php_stream_xport_sendto = ['int', [ref.refType(_library.php_stream), 'char' ? ref.refType('char') : 'pointer', 'ulong', 'long', 'void' ? ref.refType('void') : 'pointer', _library.socklen_t]];
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
        "buf": 'char' ? ref.refType('char') : 'pointer',
        "buflen": 'ulong',
        "flags": 'long',
        "name": 'char' ? ref.refType('char') : 'pointer',
        "namelen": 'ulong',
        "timeout": ref.refType(_library.timeval)
    }),
    "op": 'int32',
    "outputs": Struct({
        "addr": ref.refType(_library.sockaddr),
        "addrlen": _library.socklen_t,
        "client": ref.refType(_library.php_stream),
        "error_code": 'int',
        "error_text": 'char' ? ref.refType('char') : 'pointer',
        "returncode": 'int',
        "textaddr": 'char' ? ref.refType('char') : 'pointer',
        "textaddrlen": 'long'
    }),
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
    }),
    "op": 'int32',
    "outputs": Struct({
        "returncode": 'int'
    })
});

_library.php_stream_xport_crypto_param = _library._php_stream_xport_crypto_param;

_library.php_stream_xport_get_hash = [ref.refType(_library.HashTable), []];
_library._functions.push(_library.php_stream_xport_get_hash);

_library.php_stream_generic_socket_factory = [ref.refType(_library.php_stream), ['char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'ulong', 'char' ? ref.refType('char') : 'pointer', 'int', 'int', ref.refType(_library.timeval), ref.refType(_library.php_stream_context), 'int', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
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
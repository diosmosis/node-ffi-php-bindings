var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.php_stream_transport_factory_func = ffi.Function(ref.refType(_library._php_stream), [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', ref.refType('char'), 'int', 'int', ref.refType(_library.timeval), ref.refType(_library._php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']);

_library.php_stream_transport_factory = ref.refType(_library.php_stream_transport_factory_func);

_library.php_stream_xport_register = ['int', [ref.refType('char'), _library.php_stream_transport_factory]];
_library._functions['php_stream_xport_register'] = _library.php_stream_xport_register;

_library.php_stream_xport_unregister = ['int', [ref.refType('char')]];
_library._functions['php_stream_xport_unregister'] = _library.php_stream_xport_unregister;

require('./php_streams.js');
_library._php_stream_xport_create = [ref.refType(_library.php_stream), [ref.refType('char'), 'ulong', 'int', 'int', ref.refType('char'), ref.refType(_library.timeval), ref.refType(_library.php_stream_context), ref.refType(ref.refType('char')), ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['_php_stream_xport_create'] = _library._php_stream_xport_create;

_library.php_stream_xport_bind = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', ref.refType(ref.refType('char'))]];
_library._functions['php_stream_xport_bind'] = _library.php_stream_xport_bind;

_library.php_stream_xport_connect = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'int', ref.refType(_library.timeval), ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions['php_stream_xport_connect'] = _library.php_stream_xport_connect;

_library.php_stream_xport_listen = ['int', [ref.refType(_library.php_stream), 'int', ref.refType(ref.refType('char'))]];
_library._functions['php_stream_xport_listen'] = _library.php_stream_xport_listen;

_library.php_stream_xport_accept = ['int', [ref.refType(_library.php_stream), ref.refType(ref.refType(_library.php_stream)), ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(ref.refType('void')), ref.refType(_library.socklen_t), ref.refType(_library.timeval), ref.refType(ref.refType('char'))]];
_library._functions['php_stream_xport_accept'] = _library.php_stream_xport_accept;

_library.php_stream_xport_get_name = ['int', [ref.refType(_library.php_stream), 'int', ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(ref.refType('void')), ref.refType(_library.socklen_t)]];
_library._functions['php_stream_xport_get_name'] = _library.php_stream_xport_get_name;

_library.php_stream_xport_send_recv_flags = {
    STREAM_PEEK: 2,
    STREAM_OOB: 1
};

_library.php_stream_xport_recvfrom = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'long', ref.refType(ref.refType('void')), ref.refType(_library.socklen_t), ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions['php_stream_xport_recvfrom'] = _library.php_stream_xport_recvfrom;

_library.php_stream_xport_sendto = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'long', ref.refType('void'), _library.socklen_t]];
_library._functions['php_stream_xport_sendto'] = _library.php_stream_xport_sendto;

_library.stream_shutdown_t = 'int32';

_library.php_stream_xport_shutdown = ['int', [ref.refType(_library.php_stream), _library.stream_shutdown_t]];
_library._functions['php_stream_xport_shutdown'] = _library.php_stream_xport_shutdown;

_library._php_stream_xport_param = Struct({});
_library._php_stream_xport_param.size = 1;

_library._preload.push(function () {
    _library._php_stream_xport_param.size = 0;
    _library._php_stream_xport_param.defineProperty("how", 'uint');
    _library._php_stream_xport_param.defineProperty("inputs", Struct({}));
    _library._php_stream_xport_param.fields.inputs.type.defineProperty("addr", ref.refType(_library.sockaddr));
    _library._php_stream_xport_param.fields.inputs.type.defineProperty("addrlen", _library.socklen_t);
    _library._php_stream_xport_param.fields.inputs.type.defineProperty("backlog", 'int');
    _library._php_stream_xport_param.fields.inputs.type.defineProperty("buf", ref.refType('char'));
    _library._php_stream_xport_param.fields.inputs.type.defineProperty("buflen", 'ulong');
    _library._php_stream_xport_param.fields.inputs.type.defineProperty("flags", 'long');
    _library._php_stream_xport_param.fields.inputs.type.defineProperty("name", ref.refType('char'));
    _library._php_stream_xport_param.fields.inputs.type.defineProperty("namelen", 'ulong');
    _library._php_stream_xport_param.fields.inputs.type.defineProperty("timeout", ref.refType(_library.timeval));
    _library._php_stream_xport_param.defineProperty("op", 'int32');
    _library._php_stream_xport_param.defineProperty("outputs", Struct({}));
    _library._php_stream_xport_param.fields.outputs.type.defineProperty("addr", ref.refType(_library.sockaddr));
    _library._php_stream_xport_param.fields.outputs.type.defineProperty("addrlen", _library.socklen_t);
    _library._php_stream_xport_param.fields.outputs.type.defineProperty("client", ref.refType(_library.php_stream));
    _library._php_stream_xport_param.fields.outputs.type.defineProperty("error_code", 'int');
    _library._php_stream_xport_param.fields.outputs.type.defineProperty("error_text", ref.refType('char'));
    _library._php_stream_xport_param.fields.outputs.type.defineProperty("returncode", 'int');
    _library._php_stream_xport_param.fields.outputs.type.defineProperty("textaddr", ref.refType('char'));
    _library._php_stream_xport_param.fields.outputs.type.defineProperty("textaddrlen", 'long');
    _library._php_stream_xport_param.defineProperty("want_addr", 'uint');
    _library._php_stream_xport_param.defineProperty("want_errortext", 'uint');
    _library._php_stream_xport_param.defineProperty("want_textaddr", 'uint');
});

_library.php_stream_xport_param = _library._php_stream_xport_param;

_library.php_stream_xport_crypt_method_t = 'int32';

_library.php_stream_xport_crypto_setup = ['int', [ref.refType(_library.php_stream), _library.php_stream_xport_crypt_method_t, ref.refType(_library.php_stream)]];
_library._functions['php_stream_xport_crypto_setup'] = _library.php_stream_xport_crypto_setup;

_library.php_stream_xport_crypto_enable = ['int', [ref.refType(_library.php_stream), 'int']];
_library._functions['php_stream_xport_crypto_enable'] = _library.php_stream_xport_crypto_enable;

_library._php_stream_xport_crypto_param = Struct({});
_library._php_stream_xport_crypto_param.size = 1;

_library._preload.push(function () {
    _library._php_stream_xport_crypto_param.size = 0;
    _library._php_stream_xport_crypto_param.defineProperty("inputs", Struct({}));
    _library._php_stream_xport_crypto_param.fields.inputs.type.defineProperty("activate", 'int');
    _library._php_stream_xport_crypto_param.fields.inputs.type.defineProperty("method", _library.php_stream_xport_crypt_method_t);
    _library._php_stream_xport_crypto_param.fields.inputs.type.defineProperty("session", ref.refType(_library.php_stream));
    _library._php_stream_xport_crypto_param.defineProperty("op", 'int32');
    _library._php_stream_xport_crypto_param.defineProperty("outputs", Struct({}));
    _library._php_stream_xport_crypto_param.fields.outputs.type.defineProperty("returncode", 'int');
});

_library.php_stream_xport_crypto_param = _library._php_stream_xport_crypto_param;

require('./zend_hash.js');
_library.php_stream_xport_get_hash = [ref.refType(_library.HashTable), []];
_library._functions['php_stream_xport_get_hash'] = _library.php_stream_xport_get_hash;

_library.php_stream_generic_socket_factory = [ref.refType(_library.php_stream), [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', ref.refType('char'), 'int', 'int', ref.refType(_library.timeval), ref.refType(_library.php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions['php_stream_generic_socket_factory'] = _library.php_stream_generic_socket_factory;


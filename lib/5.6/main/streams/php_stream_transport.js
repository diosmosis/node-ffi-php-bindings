var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['php_stream_transport_factory_func'] = ['php_stream *(const char *, size_t, const char *, size_t, const char *, int, int, struct timeval *, php_stream_context *, int, const char *, const uint, const char *, const uint)', function () {
    _library.php_stream_transport_factory_func = ffi.Function(ref.refType(_library._php_stream), [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', ref.refType('char'), 'int', 'int', ref.refType(_library.timeval), ref.refType(_library._php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']);
}];

_library._preload['php_stream_transport_factory'] = ['php_stream_transport_factory_func', function () {
    _library.php_stream_transport_factory = ref.refType(_library.php_stream_transport_factory_func);
}];

_library._preload['php_stream_xport_register'] = ['php_stream_transport_factory', function () {
    _library.php_stream_xport_register = ['int', [ref.refType('char'), _library.php_stream_transport_factory]];
    _library._functions['php_stream_xport_register'] = _library.php_stream_xport_register;
}];

_library._preload['php_stream_xport_unregister'] = [function () {
    _library.php_stream_xport_unregister = ['int', [ref.refType('char')]];
    _library._functions['php_stream_xport_unregister'] = _library.php_stream_xport_unregister;
}];

_library._preload['_php_stream_xport_create'] = ['php_stream', 'timeval', 'php_stream_context', 'pointer', function () {
    _library._php_stream_xport_create = [ref.refType(_library.php_stream), [ref.refType('char'), 'ulong', 'int', 'int', ref.refType('char'), ref.refType(_library.timeval), ref.refType(_library.php_stream_context), ref.refType(ref.refType('char')), ref.refType('int'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_xport_create'] = _library._php_stream_xport_create;
}];

_library._preload['php_stream_xport_bind'] = ['php_stream', 'pointer', function () {
    _library.php_stream_xport_bind = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', ref.refType(ref.refType('char'))]];
    _library._functions['php_stream_xport_bind'] = _library.php_stream_xport_bind;
}];

_library._preload['php_stream_xport_connect'] = ['php_stream', 'timeval', 'pointer', function () {
    _library.php_stream_xport_connect = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'int', ref.refType(_library.timeval), ref.refType(ref.refType('char')), ref.refType('int')]];
    _library._functions['php_stream_xport_connect'] = _library.php_stream_xport_connect;
}];

_library._preload['php_stream_xport_listen'] = ['php_stream', 'pointer', function () {
    _library.php_stream_xport_listen = ['int', [ref.refType(_library.php_stream), 'int', ref.refType(ref.refType('char'))]];
    _library._functions['php_stream_xport_listen'] = _library.php_stream_xport_listen;
}];

_library._preload['php_stream_xport_accept'] = ['php_stream', 'pointer', 'pointer', 'pointer', 'socklen_t', 'timeval', 'pointer', function () {
    _library.php_stream_xport_accept = ['int', [ref.refType(_library.php_stream), ref.refType(ref.refType(_library.php_stream)), ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(ref.refType('void')), ref.refType(_library.socklen_t), ref.refType(_library.timeval), ref.refType(ref.refType('char'))]];
    _library._functions['php_stream_xport_accept'] = _library.php_stream_xport_accept;
}];

_library._preload['php_stream_xport_get_name'] = ['php_stream', 'pointer', 'pointer', 'socklen_t', function () {
    _library.php_stream_xport_get_name = ['int', [ref.refType(_library.php_stream), 'int', ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(ref.refType('void')), ref.refType(_library.socklen_t)]];
    _library._functions['php_stream_xport_get_name'] = _library.php_stream_xport_get_name;
}];

_library.php_stream_xport_send_recv_flags = {
    STREAM_PEEK: 2,
    STREAM_OOB: 1
};

_library._preload['php_stream_xport_recvfrom'] = ['php_stream', 'pointer', 'socklen_t', 'pointer', function () {
    _library.php_stream_xport_recvfrom = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'long', ref.refType(ref.refType('void')), ref.refType(_library.socklen_t), ref.refType(ref.refType('char')), ref.refType('int')]];
    _library._functions['php_stream_xport_recvfrom'] = _library.php_stream_xport_recvfrom;
}];

_library._preload['php_stream_xport_sendto'] = ['php_stream', 'socklen_t', function () {
    _library.php_stream_xport_sendto = ['int', [ref.refType(_library.php_stream), ref.refType('char'), 'ulong', 'long', ref.refType('void'), _library.socklen_t]];
    _library._functions['php_stream_xport_sendto'] = _library.php_stream_xport_sendto;
}];

_library._preload['stream_shutdown_t'] = [function () {
    _library.stream_shutdown_t = 'int32';
}];

_library._preload['php_stream_xport_shutdown'] = ['php_stream', 'stream_shutdown_t', function () {
    _library.php_stream_xport_shutdown = ['int', [ref.refType(_library.php_stream), _library.stream_shutdown_t]];
    _library._functions['php_stream_xport_shutdown'] = _library.php_stream_xport_shutdown;
}];

_library._php_stream_xport_param = Struct({});
_library._php_stream_xport_param.size = 1;

_library._preload['_php_stream_xport_param'] = ['sockaddr', 'socklen_t', 'timeval', 'sockaddr', 'socklen_t', 'php_stream', function () {
    _library._php_stream_xport_param.size = 0;
    _library._php_stream_xport_param.defineProperty("how", 'uint');
    _library._php_stream_xport_param.defineProperty("inputs", (function () {
        var temp = Struct({});
        temp.defineProperty("addr", ref.refType(_library.sockaddr));
        temp.defineProperty("addrlen", _library.socklen_t);
        temp.defineProperty("backlog", 'int');
        temp.defineProperty("buf", ref.refType('char'));
        temp.defineProperty("buflen", 'ulong');
        temp.defineProperty("flags", 'long');
        temp.defineProperty("name", ref.refType('char'));
        temp.defineProperty("namelen", 'ulong');
        temp.defineProperty("timeout", ref.refType(_library.timeval));
        return temp;
    })());
    _library._php_stream_xport_param.defineProperty("op", 'int32');
    _library._php_stream_xport_param.defineProperty("outputs", (function () {
        var temp = Struct({});
        temp.defineProperty("addr", ref.refType(_library.sockaddr));
        temp.defineProperty("addrlen", _library.socklen_t);
        temp.defineProperty("client", ref.refType(_library.php_stream));
        temp.defineProperty("error_code", 'int');
        temp.defineProperty("error_text", ref.refType('char'));
        temp.defineProperty("returncode", 'int');
        temp.defineProperty("textaddr", ref.refType('char'));
        temp.defineProperty("textaddrlen", 'long');
        return temp;
    })());
    _library._php_stream_xport_param.defineProperty("want_addr", 'uint');
    _library._php_stream_xport_param.defineProperty("want_errortext", 'uint');
    _library._php_stream_xport_param.defineProperty("want_textaddr", 'uint');
}];

_library._preload['php_stream_xport_param'] = [function () {
    _library.php_stream_xport_param = _library._php_stream_xport_param;
}];

_library._preload['php_stream_xport_crypt_method_t'] = [function () {
    _library.php_stream_xport_crypt_method_t = 'int32';
}];

_library._preload['php_stream_xport_crypto_setup'] = ['php_stream', 'php_stream_xport_crypt_method_t', 'php_stream', function () {
    _library.php_stream_xport_crypto_setup = ['int', [ref.refType(_library.php_stream), _library.php_stream_xport_crypt_method_t, ref.refType(_library.php_stream)]];
    _library._functions['php_stream_xport_crypto_setup'] = _library.php_stream_xport_crypto_setup;
}];

_library._preload['php_stream_xport_crypto_enable'] = ['php_stream', function () {
    _library.php_stream_xport_crypto_enable = ['int', [ref.refType(_library.php_stream), 'int']];
    _library._functions['php_stream_xport_crypto_enable'] = _library.php_stream_xport_crypto_enable;
}];

_library._php_stream_xport_crypto_param = Struct({});
_library._php_stream_xport_crypto_param.size = 1;

_library._preload['_php_stream_xport_crypto_param'] = ['php_stream_xport_crypt_method_t', 'php_stream', function () {
    _library._php_stream_xport_crypto_param.size = 0;
    _library._php_stream_xport_crypto_param.defineProperty("inputs", (function () {
        var temp = Struct({});
        temp.defineProperty("activate", 'int');
        temp.defineProperty("method", _library.php_stream_xport_crypt_method_t);
        temp.defineProperty("session", ref.refType(_library.php_stream));
        return temp;
    })());
    _library._php_stream_xport_crypto_param.defineProperty("op", 'int32');
    _library._php_stream_xport_crypto_param.defineProperty("outputs", (function () {
        var temp = Struct({});
        temp.defineProperty("returncode", 'int');
        return temp;
    })());
}];

_library._preload['php_stream_xport_crypto_param'] = [function () {
    _library.php_stream_xport_crypto_param = _library._php_stream_xport_crypto_param;
}];

_library._preload['php_stream_xport_get_hash'] = ['HashTable', function () {
    _library.php_stream_xport_get_hash = [ref.refType(_library.HashTable), []];
    _library._functions['php_stream_xport_get_hash'] = _library.php_stream_xport_get_hash;
}];

_library._preload['php_stream_generic_socket_factory'] = ['php_stream', 'timeval', 'php_stream_context', function () {
    _library.php_stream_generic_socket_factory = [ref.refType(_library.php_stream), [ref.refType('char'), 'ulong', ref.refType('char'), 'ulong', ref.refType('char'), 'int', 'int', ref.refType(_library.timeval), ref.refType(_library.php_stream_context), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['php_stream_generic_socket_factory'] = _library.php_stream_generic_socket_factory;
}];

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

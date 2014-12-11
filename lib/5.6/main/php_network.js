var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['php_socket_strerror'] = [function () {
    _library.php_socket_strerror = [ref.refType('char'), ['long', ref.refType('char'), 'ulong']];
    _library._functions['php_socket_strerror'] = _library.php_socket_strerror;
}];

_library._preload['php_pollfd'] = [function () {
    _library.php_pollfd = _library.pollfd;
}];

_library._preload['_php_emit_fd_setsize_warning'] = [function () {
    _library._php_emit_fd_setsize_warning = ['void', ['int']];
    _library._functions['_php_emit_fd_setsize_warning'] = _library._php_emit_fd_setsize_warning;
}];

_library._preload['php_sockaddr_storage'] = [function () {
    _library.php_sockaddr_storage = _library.sockaddr_storage;
}];

_library._preload['php_network_getaddresses'] = ['pointer', 'pointer', function () {
    _library.php_network_getaddresses = ['int', [ref.refType('char'), 'int', ref.refType(ref.refType(ref.refType(_library.sockaddr))), ref.refType(ref.refType('char'))]];
    _library._functions['php_network_getaddresses'] = _library.php_network_getaddresses;
}];

_library._preload['php_network_freeaddresses'] = ['pointer', function () {
    _library.php_network_freeaddresses = ['void', [ref.refType(ref.refType(_library.sockaddr))]];
    _library._functions['php_network_freeaddresses'] = _library.php_network_freeaddresses;
}];

_library._preload['php_network_connect_socket_to_host'] = ['timeval', 'pointer', function () {
    _library.php_network_connect_socket_to_host = ['int', [ref.refType('char'), 'ushort', 'int', 'int', ref.refType(_library.timeval), ref.refType(ref.refType('char')), ref.refType('int'), ref.refType('char'), 'ushort']];
    _library._functions['php_network_connect_socket_to_host'] = _library.php_network_connect_socket_to_host;
}];

_library._preload['php_network_connect_socket'] = ['sockaddr', 'socklen_t', 'timeval', 'pointer', function () {
    _library.php_network_connect_socket = ['int', ['int', ref.refType(_library.sockaddr), _library.socklen_t, 'int', ref.refType(_library.timeval), ref.refType(ref.refType('char')), ref.refType('int')]];
    _library._functions['php_network_connect_socket'] = _library.php_network_connect_socket;
}];

_library._preload['php_network_bind_socket_to_local_addr'] = ['pointer', function () {
    _library.php_network_bind_socket_to_local_addr = ['int', [ref.refType('char'), 'uint', 'int', ref.refType(ref.refType('char')), ref.refType('int')]];
    _library._functions['php_network_bind_socket_to_local_addr'] = _library.php_network_bind_socket_to_local_addr;
}];

_library._preload['php_network_accept_incoming'] = ['pointer', 'pointer', 'socklen_t', 'timeval', 'pointer', function () {
    _library.php_network_accept_incoming = ['int', ['int', ref.refType(ref.refType('char')), ref.refType('long'), ref.refType(ref.refType(_library.sockaddr)), ref.refType(_library.socklen_t), ref.refType(_library.timeval), ref.refType(ref.refType('char')), ref.refType('int')]];
    _library._functions['php_network_accept_incoming'] = _library.php_network_accept_incoming;
}];

_library._preload['php_network_get_sock_name'] = ['pointer', 'pointer', 'socklen_t', function () {
    _library.php_network_get_sock_name = ['int', ['int', ref.refType(ref.refType('char')), ref.refType('long'), ref.refType(ref.refType(_library.sockaddr)), ref.refType(_library.socklen_t)]];
    _library._functions['php_network_get_sock_name'] = _library.php_network_get_sock_name;
}];

_library._preload['php_network_get_peer_name'] = ['pointer', 'pointer', 'socklen_t', function () {
    _library.php_network_get_peer_name = ['int', ['int', ref.refType(ref.refType('char')), ref.refType('long'), ref.refType(ref.refType(_library.sockaddr)), ref.refType(_library.socklen_t)]];
    _library._functions['php_network_get_peer_name'] = _library.php_network_get_peer_name;
}];

_library._preload['php_any_addr'] = ['php_sockaddr_storage', function () {
    _library.php_any_addr = ['void', ['int', ref.refType(_library.php_sockaddr_storage), 'ushort']];
    _library._functions['php_any_addr'] = _library.php_any_addr;
}];

_library._preload['php_sockaddr_size'] = ['php_sockaddr_storage', function () {
    _library.php_sockaddr_size = ['int', [ref.refType(_library.php_sockaddr_storage)]];
    _library._functions['php_sockaddr_size'] = _library.php_sockaddr_size;
}];

_library._php_netstream_data_t = Struct({});
_library._php_netstream_data_t.size = 1;

_library._preload['_php_netstream_data_t'] = ['timeval', 'timeval', function () {
    _library._php_netstream_data_t.size = 0;
    _library._php_netstream_data_t.defineProperty("is_blocked", 'char');
    _library._php_netstream_data_t.defineProperty("ownsize", 'ulong');
    _library._php_netstream_data_t.defineProperty("socket", 'int');
    _library._php_netstream_data_t.defineProperty("timeout", _library.timeval);
    _library._php_netstream_data_t.defineProperty("timeout_event", 'char');
}];

_library._preload['php_netstream_data_t'] = [function () {
    _library.php_netstream_data_t = _library._php_netstream_data_t;
}];

_library._preload['_php_stream_sock_open_from_socket'] = ['php_stream', function () {
    _library._php_stream_sock_open_from_socket = [ref.refType(_library.php_stream), ['int', ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_sock_open_from_socket'] = _library._php_stream_sock_open_from_socket;
}];

_library._preload['_php_stream_sock_open_host'] = ['php_stream', 'timeval', function () {
    _library._php_stream_sock_open_host = [ref.refType(_library.php_stream), [ref.refType('char'), 'ushort', 'int', ref.refType(_library.timeval), ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
    _library._functions['_php_stream_sock_open_host'] = _library._php_stream_sock_open_host;
}];

_library._preload['php_network_populate_name_from_sockaddr'] = ['sockaddr', 'socklen_t', 'pointer', 'pointer', 'socklen_t', function () {
    _library.php_network_populate_name_from_sockaddr = ['void', [ref.refType(_library.sockaddr), _library.socklen_t, ref.refType(ref.refType('char')), ref.refType('long'), ref.refType(ref.refType(_library.sockaddr)), ref.refType(_library.socklen_t)]];
    _library._functions['php_network_populate_name_from_sockaddr'] = _library.php_network_populate_name_from_sockaddr;
}];

_library._preload['php_network_parse_network_address_with_port'] = ['sockaddr', 'socklen_t', function () {
    _library.php_network_parse_network_address_with_port = ['int', [ref.refType('char'), 'long', ref.refType(_library.sockaddr), ref.refType(_library.socklen_t)]];
    _library._functions['php_network_parse_network_address_with_port'] = _library.php_network_parse_network_address_with_port;
}];

function loadDependentSymbols() {
    require('./../Zend/zend.js');
    require('./../Zend/zend_API.js');
    require('./../Zend/zend_ast.js');
    require('./../Zend/zend_compile.js');
    require('./../Zend/zend_hash.js');
    require('./../Zend/zend_ini.js');
    require('./../Zend/zend_iterators.js');
    require('./../Zend/zend_modules.js');
    require('./../Zend/zend_object_handlers.js');
    require('./../Zend/zend_types.js');
    require('./php_streams.js');
    require('./streams/php_stream_context.js');
    require('./streams/php_stream_filter_api.js');
}

var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_socket_strerror = [ref.refType('char'), ['long', ref.refType('char'), 'ulong']];
_library._functions.push(_library.php_socket_strerror);

_library.php_pollfd = _library.pollfd;

_library.php_tvtoto = ['int', [_library.timeval ? ref.refType(_library.timeval) : 'pointer']];
_library._functions.push(_library.php_tvtoto);

_library.php_pollfd_for = ['int', ['int', 'int', _library.timeval ? ref.refType(_library.timeval) : 'pointer']];
_library._functions.push(_library.php_pollfd_for);

_library.php_pollfd_for_ms = ['int', ['int', 'int', 'int']];
_library._functions.push(_library.php_pollfd_for_ms);

_library._php_emit_fd_setsize_warning = ['void', ['int']];
_library._functions.push(_library._php_emit_fd_setsize_warning);

_library.php_sockaddr_storage = _library.sockaddr_storage;

_library.php_network_getaddresses = ['int', [ref.refType('char'), 'int', _library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer' ? ref.refType(_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer') : 'pointer' ? ref.refType(_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer' ? ref.refType(_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer') : 'pointer') : 'pointer', ref.refType(ref.refType('char'))]];
_library._functions.push(_library.php_network_getaddresses);

_library.php_network_freeaddresses = ['void', [_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer' ? ref.refType(_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer') : 'pointer']];
_library._functions.push(_library.php_network_freeaddresses);

_library.php_network_connect_socket_to_host = ['int', [ref.refType('char'), 'ushort', 'int', 'int', _library.timeval ? ref.refType(_library.timeval) : 'pointer', ref.refType(ref.refType('char')), ref.refType('int'), ref.refType('char'), 'ushort']];
_library._functions.push(_library.php_network_connect_socket_to_host);

_library.php_network_connect_socket = ['int', ['int', _library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer', _library.socklen_t, 'int', _library.timeval ? ref.refType(_library.timeval) : 'pointer', ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions.push(_library.php_network_connect_socket);

_library.php_network_bind_socket_to_local_addr = ['int', [ref.refType('char'), 'uint', 'int', ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions.push(_library.php_network_bind_socket_to_local_addr);

_library.php_network_accept_incoming = ['int', ['int', ref.refType(ref.refType('char')), ref.refType('long'), _library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer' ? ref.refType(_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer') : 'pointer', _library.socklen_t ? ref.refType(_library.socklen_t) : 'pointer', _library.timeval ? ref.refType(_library.timeval) : 'pointer', ref.refType(ref.refType('char')), ref.refType('int')]];
_library._functions.push(_library.php_network_accept_incoming);

_library.php_network_get_sock_name = ['int', ['int', ref.refType(ref.refType('char')), ref.refType('long'), _library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer' ? ref.refType(_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer') : 'pointer', _library.socklen_t ? ref.refType(_library.socklen_t) : 'pointer']];
_library._functions.push(_library.php_network_get_sock_name);

_library.php_network_get_peer_name = ['int', ['int', ref.refType(ref.refType('char')), ref.refType('long'), _library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer' ? ref.refType(_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer') : 'pointer', _library.socklen_t ? ref.refType(_library.socklen_t) : 'pointer']];
_library._functions.push(_library.php_network_get_peer_name);

_library.php_any_addr = ['void', ['int', _library.php_sockaddr_storage ? ref.refType(_library.php_sockaddr_storage) : 'pointer', 'ushort']];
_library._functions.push(_library.php_any_addr);

_library.php_sockaddr_size = ['int', [_library.php_sockaddr_storage ? ref.refType(_library.php_sockaddr_storage) : 'pointer']];
_library._functions.push(_library.php_sockaddr_size);

_library._php_netstream_data_t = Struct({
    "is_blocked": 'char',
    "ownsize": 'ulong',
    "socket": 'int',
    "timeout": _library.timeval,
    "timeout_event": 'char'
});

_library.php_netstream_data_t = _library._php_netstream_data_t;

_library._php_stream_sock_open_from_socket = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', ['int', ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_sock_open_from_socket);

_library._php_stream_sock_open_host = [_library.php_stream ? ref.refType(_library.php_stream) : 'pointer', [ref.refType('char'), 'ushort', 'int', _library.timeval ? ref.refType(_library.timeval) : 'pointer', ref.refType('char'), 'int', ref.refType('char'), 'uint', ref.refType('char'), 'uint']];
_library._functions.push(_library._php_stream_sock_open_host);

_library.php_network_populate_name_from_sockaddr = ['void', [_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer', _library.socklen_t, ref.refType(ref.refType('char')), ref.refType('long'), _library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer' ? ref.refType(_library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer') : 'pointer', _library.socklen_t ? ref.refType(_library.socklen_t) : 'pointer']];
_library._functions.push(_library.php_network_populate_name_from_sockaddr);

_library.php_network_parse_network_address_with_port = ['int', [ref.refType('char'), 'long', _library.sockaddr ? ref.refType(_library.sockaddr) : 'pointer', _library.socklen_t ? ref.refType(_library.socklen_t) : 'pointer']];
_library._functions.push(_library.php_network_parse_network_address_with_port);

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
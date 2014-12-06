var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.php_socket_strerror = ['char' ? ref.refType('char') : 'pointer', ['long', 'char' ? ref.refType('char') : 'pointer', 'ulong']];
_library._functions.push(_library.php_socket_strerror);

_library.php_pollfd = _library.pollfd;

_library.php_tvtoto = ['int', [ref.refType(_library.timeval)]];
_library._functions.push(_library.php_tvtoto);

_library.php_pollfd_for = ['int', ['int', 'int', ref.refType(_library.timeval)]];
_library._functions.push(_library.php_pollfd_for);

_library.php_pollfd_for_ms = ['int', ['int', 'int', 'int']];
_library._functions.push(_library.php_pollfd_for_ms);

_library._php_emit_fd_setsize_warning = ['void', ['int']];
_library._functions.push(_library._php_emit_fd_setsize_warning);

_library.php_sockaddr_storage = _library.sockaddr_storage;

_library.php_network_getaddresses = ['int', ['char' ? ref.refType('char') : 'pointer', 'int', ref.refType(_library.sockaddr) ? ref.refType(ref.refType(_library.sockaddr)) : 'pointer' ? ref.refType(ref.refType(_library.sockaddr) ? ref.refType(ref.refType(_library.sockaddr)) : 'pointer') : 'pointer', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer']];
_library._functions.push(_library.php_network_getaddresses);

_library.php_network_freeaddresses = ['void', [ref.refType(_library.sockaddr) ? ref.refType(ref.refType(_library.sockaddr)) : 'pointer']];
_library._functions.push(_library.php_network_freeaddresses);

_library.php_network_connect_socket_to_host = ['int', ['char' ? ref.refType('char') : 'pointer', 'ushort', 'int', 'int', ref.refType(_library.timeval), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer', 'char' ? ref.refType('char') : 'pointer', 'ushort']];
_library._functions.push(_library.php_network_connect_socket_to_host);

_library.php_network_connect_socket = ['int', ['int', ref.refType(_library.sockaddr), _library.socklen_t, 'int', ref.refType(_library.timeval), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_network_connect_socket);

_library.php_network_bind_socket_to_local_addr = ['int', ['char' ? ref.refType('char') : 'pointer', 'uint', 'int', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_network_bind_socket_to_local_addr);

_library.php_network_accept_incoming = ['int', ['int', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'long' ? ref.refType('long') : 'pointer', ref.refType(_library.sockaddr) ? ref.refType(ref.refType(_library.sockaddr)) : 'pointer', ref.refType(_library.socklen_t), ref.refType(_library.timeval), 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'int' ? ref.refType('int') : 'pointer']];
_library._functions.push(_library.php_network_accept_incoming);

_library.php_network_get_sock_name = ['int', ['int', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'long' ? ref.refType('long') : 'pointer', ref.refType(_library.sockaddr) ? ref.refType(ref.refType(_library.sockaddr)) : 'pointer', ref.refType(_library.socklen_t)]];
_library._functions.push(_library.php_network_get_sock_name);

_library.php_network_get_peer_name = ['int', ['int', 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'long' ? ref.refType('long') : 'pointer', ref.refType(_library.sockaddr) ? ref.refType(ref.refType(_library.sockaddr)) : 'pointer', ref.refType(_library.socklen_t)]];
_library._functions.push(_library.php_network_get_peer_name);

_library.php_any_addr = ['void', ['int', ref.refType(_library.php_sockaddr_storage), 'ushort']];
_library._functions.push(_library.php_any_addr);

_library.php_sockaddr_size = ['int', [ref.refType(_library.php_sockaddr_storage)]];
_library._functions.push(_library.php_sockaddr_size);

_library._php_netstream_data_t = Struct({
    "is_blocked": 'char',
    "ownsize": 'ulong',
    "socket": 'int',
    "timeout": _library.timeval,
    "timeout_event": 'char'
});

_library.php_netstream_data_t = _library._php_netstream_data_t;

_library._php_stream_sock_open_from_socket = [ref.refType(_library.php_stream), ['int', 'char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._php_stream_sock_open_from_socket);

_library._php_stream_sock_open_host = [ref.refType(_library.php_stream), ['char' ? ref.refType('char') : 'pointer', 'ushort', 'int', ref.refType(_library.timeval), 'char' ? ref.refType('char') : 'pointer', 'int', 'char' ? ref.refType('char') : 'pointer', 'uint', 'char' ? ref.refType('char') : 'pointer', 'uint']];
_library._functions.push(_library._php_stream_sock_open_host);

_library.php_network_populate_name_from_sockaddr = ['void', [ref.refType(_library.sockaddr), _library.socklen_t, 'char' ? ref.refType('char') : 'pointer' ? ref.refType('char' ? ref.refType('char') : 'pointer') : 'pointer', 'long' ? ref.refType('long') : 'pointer', ref.refType(_library.sockaddr) ? ref.refType(ref.refType(_library.sockaddr)) : 'pointer', ref.refType(_library.socklen_t)]];
_library._functions.push(_library.php_network_populate_name_from_sockaddr);

_library.php_network_parse_network_address_with_port = ['int', ['char' ? ref.refType('char') : 'pointer', 'long', ref.refType(_library.sockaddr), ref.refType(_library.socklen_t)]];
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
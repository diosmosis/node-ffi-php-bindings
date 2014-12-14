node-ffi-php-bindings
=====================

JavaScript node-ffi bindings for embedding PHP in node-js apps.

Current status: Loads and can be used to execute PHP code from node. The bindings do not differentiate between 'char*' and 'string' node-ffi types, so when passing strings you have to use `ref.allocCString(...)` and `buffer.readCString()`.

See proof of concept code here: https://github.com/diosmosis/lighttable-php/blob/master/components/zend/zend.service.js

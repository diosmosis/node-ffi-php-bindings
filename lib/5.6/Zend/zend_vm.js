var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_vm_use_old_executor = ['void', []];
_library._functions.push(_library.zend_vm_use_old_executor);

_library.zend_vm_set_opcode_handler = ['void', [ref.refType(_library.zend_op)]];
_library._functions.push(_library.zend_vm_set_opcode_handler);

function loadDependentSymbols() {
};
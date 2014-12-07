var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.zend_vm_use_old_executor = ['void', []];
_library._functions['zend_vm_use_old_executor'] = _library.zend_vm_use_old_executor;

require('./zend_compile.js');
_library.zend_vm_set_opcode_handler = ['void', [ref.refType(_library.zend_op)]];
_library._functions['zend_vm_set_opcode_handler'] = _library.zend_vm_set_opcode_handler;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_vm_use_old_executor = ['void', []];
_library._functions['zend_vm_use_old_executor'] = _library.zend_vm_use_old_executor;

_library.zend_vm_set_opcode_handler = ['void', [ref.refType(_library.zend_op)]];
_library._functions['zend_vm_set_opcode_handler'] = _library.zend_vm_set_opcode_handler;

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_ast.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}
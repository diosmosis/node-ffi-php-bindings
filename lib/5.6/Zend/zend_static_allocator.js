var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._Block = Struct({
    "bp": ref.refType('char'),
    "end": ref.refType('char'),
    "pos": ref.refType('char')
});

_library.Block = _library._Block;

_library._StaticAllocator = Struct({
    "Blocks": _library.Block ? ref.refType(_library.Block) : 'pointer',
    "current_block": 'uint',
    "num_blocks": 'uint'
});

_library.StaticAllocator = _library._StaticAllocator;

_library.static_allocator_init = ['void', [_library.StaticAllocator ? ref.refType(_library.StaticAllocator) : 'pointer']];
_library._functions.push(_library.static_allocator_init);

_library.static_allocator_allocate = [ref.refType('char'), [_library.StaticAllocator ? ref.refType(_library.StaticAllocator) : 'pointer', 'uint']];
_library._functions.push(_library.static_allocator_allocate);

_library.static_allocator_destroy = ['void', [_library.StaticAllocator ? ref.refType(_library.StaticAllocator) : 'pointer']];
_library._functions.push(_library.static_allocator_destroy);

function loadDependentSymbols() {
}
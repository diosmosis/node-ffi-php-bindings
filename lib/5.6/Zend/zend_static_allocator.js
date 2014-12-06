var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._Block = Struct({
    "bp": 'char' ? ref.refType('char') : 'pointer',
    "end": 'char' ? ref.refType('char') : 'pointer',
    "pos": 'char' ? ref.refType('char') : 'pointer'
});

_library.Block = _library._Block;

_library._StaticAllocator = Struct({
    "Blocks": ref.refType(_library.Block),
    "current_block": 'uint',
    "num_blocks": 'uint'
});

_library.StaticAllocator = _library._StaticAllocator;

_library.static_allocator_init = ['void', [ref.refType(_library.StaticAllocator)]];
_library._functions.push(_library.static_allocator_init);

_library.static_allocator_allocate = ['char' ? ref.refType('char') : 'pointer', [ref.refType(_library.StaticAllocator), 'uint']];
_library._functions.push(_library.static_allocator_allocate);

_library.static_allocator_destroy = ['void', [ref.refType(_library.StaticAllocator)]];
_library._functions.push(_library.static_allocator_destroy);

function loadDependentSymbols() {
}
var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._Block = Struct({
    "bp": ref.refType('char'),
    "end": ref.refType('char'),
    "pos": ref.refType('char')
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

_library.static_allocator_allocate = [ref.refType('char'), [ref.refType(_library.StaticAllocator), 'uint']];
_library._functions.push(_library.static_allocator_allocate);

_library.static_allocator_destroy = ['void', [ref.refType(_library.StaticAllocator)]];
_library._functions.push(_library.static_allocator_destroy);


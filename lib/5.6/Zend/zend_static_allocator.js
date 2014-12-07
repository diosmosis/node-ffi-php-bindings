var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library._Block = Struct({});

_library._preload.push(function () {
    _library._Block.defineProperty("bp", ref.refType('char'));
    _library._Block.defineProperty("end", ref.refType('char'));
    _library._Block.defineProperty("pos", ref.refType('char'));
});

require('./zend_static_allocator.js');
_library.Block = _library._Block;

_library._StaticAllocator = Struct({});

_library._preload.push(function () {
    _library._StaticAllocator.defineProperty("Blocks", ref.refType(_library.Block));
    _library._StaticAllocator.defineProperty("current_block", 'uint');
    _library._StaticAllocator.defineProperty("num_blocks", 'uint');
});

_library.StaticAllocator = _library._StaticAllocator;

_library.static_allocator_init = ['void', [ref.refType(_library.StaticAllocator)]];
_library._functions['static_allocator_init'] = _library.static_allocator_init;

_library.static_allocator_allocate = [ref.refType('char'), [ref.refType(_library.StaticAllocator), 'uint']];
_library._functions['static_allocator_allocate'] = _library.static_allocator_allocate;

_library.static_allocator_destroy = ['void', [ref.refType(_library.StaticAllocator)]];
_library._functions['static_allocator_destroy'] = _library.static_allocator_destroy;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._Block = Struct({});
_library._Block.size = 1;

_library._preload['_Block'] = [function () {
    _library._Block.size = 0;
    _library._Block.defineProperty("bp", ref.refType('char'));
    _library._Block.defineProperty("end", ref.refType('char'));
    _library._Block.defineProperty("pos", ref.refType('char'));
}];

_library._preload['Block'] = [function () {
    _library.Block = _library._Block;
}];

_library._StaticAllocator = Struct({});
_library._StaticAllocator.size = 1;

_library._preload['_StaticAllocator'] = ['Block', function () {
    _library._StaticAllocator.size = 0;
    _library._StaticAllocator.defineProperty("Blocks", ref.refType(_library.Block));
    _library._StaticAllocator.defineProperty("current_block", 'uint');
    _library._StaticAllocator.defineProperty("num_blocks", 'uint');
}];

_library._preload['StaticAllocator'] = [function () {
    _library.StaticAllocator = _library._StaticAllocator;
}];

function loadDependentSymbols() {
}

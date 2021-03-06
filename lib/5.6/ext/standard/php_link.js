var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['zif_link'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_link = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_link'] = _library.zif_link;
}];

_library._preload['zif_readlink'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_readlink = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_readlink'] = _library.zif_readlink;
}];

_library._preload['zif_linkinfo'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_linkinfo = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_linkinfo'] = _library.zif_linkinfo;
}];

_library._preload['zif_symlink'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_symlink = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_symlink'] = _library.zif_symlink;
}];

function loadDependentSymbols() {
    require('./../../Zend/zend.js');
    require('./../../Zend/zend_API.js');
    require('./../../Zend/zend_ast.js');
    require('./../../Zend/zend_compile.js');
    require('./../../Zend/zend_hash.js');
    require('./../../Zend/zend_ini.js');
    require('./../../Zend/zend_iterators.js');
    require('./../../Zend/zend_modules.js');
    require('./../../Zend/zend_object_handlers.js');
    require('./../../Zend/zend_types.js');
}

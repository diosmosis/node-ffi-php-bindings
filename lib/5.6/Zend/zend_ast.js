var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._preload['zend_ast'] = [function () {
    _library.zend_ast = _library._zend_ast;
}];

_library._zend_ast = Struct({});
_library._zend_ast.size = 1;

_library._preload['_zend_ast'] = ['zend_ast', 'zval', function () {
    _library._zend_ast.size = 0;
    _library._zend_ast.defineProperty("children", 'ushort');
    _library._zend_ast.defineProperty("kind", 'ushort');
    _library._zend_ast.defineProperty("u", (function () {
        var temp = Union({});
        temp.defineProperty("child", ref.refType(_library.zend_ast));
        temp.defineProperty("val", ref.refType(_library.zval));
        return temp;
    })());
}];

_library._zend_ast_kind = {
    ZEND_UNARY_MINUS: 261,
    ZEND_SELECT: 259,
    ZEND_BOOL_OR: 258,
    ZEND_UNARY_PLUS: 260,
    ZEND_BOOL_AND: 257,
    ZEND_CONST: 256
};

_library._preload['zend_ast_kind'] = [function () {
    _library.zend_ast_kind = 'int32';
}];

_library._preload['zend_ast_create_constant'] = ['zend_ast', 'zval', function () {
    _library.zend_ast_create_constant = [ref.refType(_library.zend_ast), [ref.refType(_library.zval)]];
    _library._functions['zend_ast_create_constant'] = _library.zend_ast_create_constant;
}];

_library._preload['zend_ast_create_unary'] = ['zend_ast', 'zend_ast', function () {
    _library.zend_ast_create_unary = [ref.refType(_library.zend_ast), ['uint', ref.refType(_library.zend_ast)]];
    _library._functions['zend_ast_create_unary'] = _library.zend_ast_create_unary;
}];

_library._preload['zend_ast_create_binary'] = ['zend_ast', 'zend_ast', 'zend_ast', function () {
    _library.zend_ast_create_binary = [ref.refType(_library.zend_ast), ['uint', ref.refType(_library.zend_ast), ref.refType(_library.zend_ast)]];
    _library._functions['zend_ast_create_binary'] = _library.zend_ast_create_binary;
}];

_library._preload['zend_ast_create_ternary'] = ['zend_ast', 'zend_ast', 'zend_ast', 'zend_ast', function () {
    _library.zend_ast_create_ternary = [ref.refType(_library.zend_ast), ['uint', ref.refType(_library.zend_ast), ref.refType(_library.zend_ast), ref.refType(_library.zend_ast)]];
    _library._functions['zend_ast_create_ternary'] = _library.zend_ast_create_ternary;
}];

_library._preload['zend_ast_create_dynamic'] = ['zend_ast', function () {
    _library.zend_ast_create_dynamic = [ref.refType(_library.zend_ast), ['uint']];
    _library._functions['zend_ast_create_dynamic'] = _library.zend_ast_create_dynamic;
}];

_library._preload['zend_ast_dynamic_add'] = ['pointer', 'zend_ast', function () {
    _library.zend_ast_dynamic_add = ['void', [ref.refType(ref.refType(_library.zend_ast)), ref.refType(_library.zend_ast)]];
    _library._functions['zend_ast_dynamic_add'] = _library.zend_ast_dynamic_add;
}];

_library._preload['zend_ast_dynamic_shrink'] = ['pointer', function () {
    _library.zend_ast_dynamic_shrink = ['void', [ref.refType(ref.refType(_library.zend_ast))]];
    _library._functions['zend_ast_dynamic_shrink'] = _library.zend_ast_dynamic_shrink;
}];

_library._preload['zend_ast_is_ct_constant'] = ['zend_ast', function () {
    _library.zend_ast_is_ct_constant = ['int', [ref.refType(_library.zend_ast)]];
    _library._functions['zend_ast_is_ct_constant'] = _library.zend_ast_is_ct_constant;
}];

_library._preload['zend_ast_evaluate'] = ['zval', 'zend_ast', 'zend_class_entry', function () {
    _library.zend_ast_evaluate = ['void', [ref.refType(_library.zval), ref.refType(_library.zend_ast), ref.refType(_library.zend_class_entry)]];
    _library._functions['zend_ast_evaluate'] = _library.zend_ast_evaluate;
}];

_library._preload['zend_ast_copy'] = ['zend_ast', 'zend_ast', function () {
    _library.zend_ast_copy = [ref.refType(_library.zend_ast), [ref.refType(_library.zend_ast)]];
    _library._functions['zend_ast_copy'] = _library.zend_ast_copy;
}];

_library._preload['zend_ast_destroy'] = ['zend_ast', function () {
    _library.zend_ast_destroy = ['void', [ref.refType(_library.zend_ast)]];
    _library._functions['zend_ast_destroy'] = _library.zend_ast_destroy;
}];

function loadDependentSymbols() {
    require('./zend.js');
    require('./zend_API.js');
    require('./zend_compile.js');
    require('./zend_hash.js');
    require('./zend_ini.js');
    require('./zend_iterators.js');
    require('./zend_modules.js');
    require('./zend_object_handlers.js');
    require('./zend_types.js');
}

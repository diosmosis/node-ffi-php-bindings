var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library.zend_ast = _library._zend_ast;

_library._zend_ast = Struct({
    "children": 'ushort',
    "kind": 'ushort',
    "u": Union({
        "child": _library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer',
        "val": _library.zval ? ref.refType(_library.zval) : 'pointer'
    })
});

_library._zend_ast_kind = {
    ZEND_UNARY_MINUS: 261,
    ZEND_SELECT: 259,
    ZEND_BOOL_OR: 258,
    ZEND_UNARY_PLUS: 260,
    ZEND_BOOL_AND: 257,
    ZEND_CONST: 256
};

_library.zend_ast_kind = 'int32';

_library.zend_ast_create_constant = [_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', [_library.zval ? ref.refType(_library.zval) : 'pointer']];
_library._functions.push(_library.zend_ast_create_constant);

_library.zend_ast_create_unary = [_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', ['uint', _library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer']];
_library._functions.push(_library.zend_ast_create_unary);

_library.zend_ast_create_binary = [_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', ['uint', _library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', _library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer']];
_library._functions.push(_library.zend_ast_create_binary);

_library.zend_ast_create_ternary = [_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', ['uint', _library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', _library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', _library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer']];
_library._functions.push(_library.zend_ast_create_ternary);

_library.zend_ast_create_dynamic = [_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', ['uint']];
_library._functions.push(_library.zend_ast_create_dynamic);

_library.zend_ast_dynamic_add = ['void', [ref.refType(_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer'), _library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer']];
_library._functions.push(_library.zend_ast_dynamic_add);

_library.zend_ast_dynamic_shrink = ['void', [ref.refType(_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer')]];
_library._functions.push(_library.zend_ast_dynamic_shrink);

_library.zend_ast_is_ct_constant = ['int', [_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer']];
_library._functions.push(_library.zend_ast_is_ct_constant);

_library.zend_ast_evaluate = ['void', [_library.zval ? ref.refType(_library.zval) : 'pointer', _library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', _library.zend_class_entry ? ref.refType(_library.zend_class_entry) : 'pointer']];
_library._functions.push(_library.zend_ast_evaluate);

_library.zend_ast_copy = [_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer', [_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer']];
_library._functions.push(_library.zend_ast_copy);

_library.zend_ast_destroy = ['void', [_library.zend_ast ? ref.refType(_library.zend_ast) : 'pointer']];
_library._functions.push(_library.zend_ast_destroy);

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
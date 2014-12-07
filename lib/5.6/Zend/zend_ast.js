var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

require('./zend_ast.js');
_library.zend_ast = _library._zend_ast;

_library._zend_ast = Struct({});

_library._preload.push(function () {
    _library._zend_ast.defineProperty("children", 'ushort');
    _library._zend_ast.defineProperty("kind", 'ushort');
    _library._zend_ast.defineProperty("u", Union({}));
    _library._zend_ast.fields.u.type.defineProperty("child", ref.refType(_library.zend_ast));
    _library._zend_ast.fields.u.type.defineProperty("val", ref.refType(_library.zval));
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

_library.zend_ast_create_constant = [ref.refType(_library.zend_ast), [ref.refType(_library.zval)]];
_library._functions['zend_ast_create_constant'] = _library.zend_ast_create_constant;

_library.zend_ast_create_unary = [ref.refType(_library.zend_ast), ['uint', ref.refType(_library.zend_ast)]];
_library._functions['zend_ast_create_unary'] = _library.zend_ast_create_unary;

_library.zend_ast_create_binary = [ref.refType(_library.zend_ast), ['uint', ref.refType(_library.zend_ast), ref.refType(_library.zend_ast)]];
_library._functions['zend_ast_create_binary'] = _library.zend_ast_create_binary;

_library.zend_ast_create_ternary = [ref.refType(_library.zend_ast), ['uint', ref.refType(_library.zend_ast), ref.refType(_library.zend_ast), ref.refType(_library.zend_ast)]];
_library._functions['zend_ast_create_ternary'] = _library.zend_ast_create_ternary;

_library.zend_ast_create_dynamic = [ref.refType(_library.zend_ast), ['uint']];
_library._functions['zend_ast_create_dynamic'] = _library.zend_ast_create_dynamic;

_library.zend_ast_dynamic_add = ['void', [ref.refType(ref.refType(_library.zend_ast)), ref.refType(_library.zend_ast)]];
_library._functions['zend_ast_dynamic_add'] = _library.zend_ast_dynamic_add;

_library.zend_ast_dynamic_shrink = ['void', [ref.refType(ref.refType(_library.zend_ast))]];
_library._functions['zend_ast_dynamic_shrink'] = _library.zend_ast_dynamic_shrink;

_library.zend_ast_is_ct_constant = ['int', [ref.refType(_library.zend_ast)]];
_library._functions['zend_ast_is_ct_constant'] = _library.zend_ast_is_ct_constant;

_library.zend_ast_evaluate = ['void', [ref.refType(_library.zval), ref.refType(_library.zend_ast), ref.refType(_library.zend_class_entry)]];
_library._functions['zend_ast_evaluate'] = _library.zend_ast_evaluate;

_library.zend_ast_copy = [ref.refType(_library.zend_ast), [ref.refType(_library.zend_ast)]];
_library._functions['zend_ast_copy'] = _library.zend_ast_copy;

_library.zend_ast_destroy = ['void', [ref.refType(_library.zend_ast)]];
_library._functions['zend_ast_destroy'] = _library.zend_ast_destroy;


var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_rsrc_list_entry = Struct({});
_library._zend_rsrc_list_entry.size = 1;

_library._preload['_zend_rsrc_list_entry'] = [function () {
    _library._zend_rsrc_list_entry.size = 0;
    _library._zend_rsrc_list_entry.defineProperty("ptr", ref.refType('void'));
    _library._zend_rsrc_list_entry.defineProperty("type", 'int');
    _library._zend_rsrc_list_entry.defineProperty("refcount", 'int');
}];

_library._preload['zend_rsrc_list_entry'] = [function () {
    _library.zend_rsrc_list_entry = _library._zend_rsrc_list_entry;
}];

_library._preload['rsrc_dtor_func_t'] = ['void (zend_rsrc_list_entry *)', function () {
    _library.rsrc_dtor_func_t = ffi.Function('void', [ref.refType(_library._zend_rsrc_list_entry)]);
}];

_library._zend_rsrc_list_dtors_entry = Struct({});
_library._zend_rsrc_list_dtors_entry.size = 1;

_library._preload['_zend_rsrc_list_dtors_entry'] = ['void (void *)', 'void (void *)', 'rsrc_dtor_func_t', 'rsrc_dtor_func_t', function () {
    _library._zend_rsrc_list_dtors_entry.size = 0;
    _library._zend_rsrc_list_dtors_entry.defineProperty("list_dtor", ffi.Function('void', [ref.refType('void')]));
    _library._zend_rsrc_list_dtors_entry.defineProperty("plist_dtor", ffi.Function('void', [ref.refType('void')]));
    _library._zend_rsrc_list_dtors_entry.defineProperty("list_dtor_ex", _library.rsrc_dtor_func_t);
    _library._zend_rsrc_list_dtors_entry.defineProperty("plist_dtor_ex", _library.rsrc_dtor_func_t);
    _library._zend_rsrc_list_dtors_entry.defineProperty("type_name", ref.refType('char'));
    _library._zend_rsrc_list_dtors_entry.defineProperty("module_number", 'int');
    _library._zend_rsrc_list_dtors_entry.defineProperty("resource_id", 'int');
    _library._zend_rsrc_list_dtors_entry.defineProperty("type", 'uchar');
}];

_library._preload['zend_rsrc_list_dtors_entry'] = [function () {
    _library.zend_rsrc_list_dtors_entry = _library._zend_rsrc_list_dtors_entry;
}];

_library._preload['zend_register_list_destructors'] = ['void (void *)', 'void (void *)', function () {
    _library.zend_register_list_destructors = ['int', [ffi.Function('void', [ref.refType('void')]), ffi.Function('void', [ref.refType('void')]), 'int']];
    _library._functions['zend_register_list_destructors'] = _library.zend_register_list_destructors;
}];

_library._preload['zend_register_list_destructors_ex'] = ['rsrc_dtor_func_t', 'rsrc_dtor_func_t', function () {
    _library.zend_register_list_destructors_ex = ['int', [_library.rsrc_dtor_func_t, _library.rsrc_dtor_func_t, ref.refType('char'), 'int']];
    _library._functions['zend_register_list_destructors_ex'] = _library.zend_register_list_destructors_ex;
}];

_library._preload['zend_list_insert'] = [function () {
    _library.zend_list_insert = ['int', [ref.refType('void'), 'int']];
    _library._functions['zend_list_insert'] = _library.zend_list_insert;
}];

_library._preload['_zend_list_addref'] = [function () {
    _library._zend_list_addref = ['int', ['int']];
    _library._functions['_zend_list_addref'] = _library._zend_list_addref;
}];

_library._preload['_zend_list_delete'] = [function () {
    _library._zend_list_delete = ['int', ['int']];
    _library._functions['_zend_list_delete'] = _library._zend_list_delete;
}];

_library._preload['_zend_list_find'] = [function () {
    _library._zend_list_find = [ref.refType('void'), ['int', ref.refType('int')]];
    _library._functions['_zend_list_find'] = _library._zend_list_find;
}];

_library._preload['zend_register_resource'] = ['zval', function () {
    _library.zend_register_resource = ['int', [ref.refType(_library.zval), ref.refType('void'), 'int']];
    _library._functions['zend_register_resource'] = _library.zend_register_resource;
}];

_library._preload['zend_rsrc_list_get_rsrc_type'] = [function () {
    _library.zend_rsrc_list_get_rsrc_type = [ref.refType('char'), ['int']];
    _library._functions['zend_rsrc_list_get_rsrc_type'] = _library.zend_rsrc_list_get_rsrc_type;
}];

_library._preload['zend_fetch_list_dtor_id'] = [function () {
    _library.zend_fetch_list_dtor_id = ['int', [ref.refType('char')]];
    _library._functions['zend_fetch_list_dtor_id'] = _library.zend_fetch_list_dtor_id;
}];

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

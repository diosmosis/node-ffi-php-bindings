var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_rsrc_list_entry = Struct({});

_library._preload.push(function () {
    _library._zend_rsrc_list_entry.defineProperty("ptr", ref.refType('void'));
    _library._zend_rsrc_list_entry.defineProperty("refcount", 'int');
    _library._zend_rsrc_list_entry.defineProperty("type", 'int');
});

_library.zend_rsrc_list_entry = _library._zend_rsrc_list_entry;

_library.rsrc_dtor_func_t = ffi.Function('void', [ref.refType(_library._zend_rsrc_list_entry)]);

_library._zend_rsrc_list_dtors_entry = Struct({});

_library._preload.push(function () {
    _library._zend_rsrc_list_dtors_entry.defineProperty("list_dtor", ffi.Function('void', [ref.refType('void')]));
    _library._zend_rsrc_list_dtors_entry.defineProperty("list_dtor_ex", _library.rsrc_dtor_func_t);
    _library._zend_rsrc_list_dtors_entry.defineProperty("module_number", 'int');
    _library._zend_rsrc_list_dtors_entry.defineProperty("plist_dtor", ffi.Function('void', [ref.refType('void')]));
    _library._zend_rsrc_list_dtors_entry.defineProperty("plist_dtor_ex", _library.rsrc_dtor_func_t);
    _library._zend_rsrc_list_dtors_entry.defineProperty("resource_id", 'int');
    _library._zend_rsrc_list_dtors_entry.defineProperty("type", 'uchar');
    _library._zend_rsrc_list_dtors_entry.defineProperty("type_name", ref.refType('char'));
});

_library.zend_rsrc_list_dtors_entry = _library._zend_rsrc_list_dtors_entry;

_library.zend_register_list_destructors = ['int', [ffi.Function('void', [ref.refType('void')]), ffi.Function('void', [ref.refType('void')]), 'int']];
_library._functions['zend_register_list_destructors'] = _library.zend_register_list_destructors;

_library.zend_register_list_destructors_ex = ['int', [_library.rsrc_dtor_func_t, _library.rsrc_dtor_func_t, ref.refType('char'), 'int']];
_library._functions['zend_register_list_destructors_ex'] = _library.zend_register_list_destructors_ex;

_library.list_entry_destructor = ['void', [ref.refType('void')]];
_library._functions['list_entry_destructor'] = _library.list_entry_destructor;

_library.plist_entry_destructor = ['void', [ref.refType('void')]];
_library._functions['plist_entry_destructor'] = _library.plist_entry_destructor;

_library.zend_clean_module_rsrc_dtors = ['void', ['int']];
_library._functions['zend_clean_module_rsrc_dtors'] = _library.zend_clean_module_rsrc_dtors;

_library.zend_init_rsrc_list = ['int', []];
_library._functions['zend_init_rsrc_list'] = _library.zend_init_rsrc_list;

_library.zend_init_rsrc_plist = ['int', []];
_library._functions['zend_init_rsrc_plist'] = _library.zend_init_rsrc_plist;

_library.zend_destroy_rsrc_list = ['void', [ref.refType(_library.HashTable)]];
_library._functions['zend_destroy_rsrc_list'] = _library.zend_destroy_rsrc_list;

_library.zend_init_rsrc_list_dtors = ['int', []];
_library._functions['zend_init_rsrc_list_dtors'] = _library.zend_init_rsrc_list_dtors;

_library.zend_destroy_rsrc_list_dtors = ['void', []];
_library._functions['zend_destroy_rsrc_list_dtors'] = _library.zend_destroy_rsrc_list_dtors;

_library.zend_list_insert = ['int', [ref.refType('void'), 'int']];
_library._functions['zend_list_insert'] = _library.zend_list_insert;

_library._zend_list_addref = ['int', ['int']];
_library._functions['_zend_list_addref'] = _library._zend_list_addref;

_library._zend_list_delete = ['int', ['int']];
_library._functions['_zend_list_delete'] = _library._zend_list_delete;

_library._zend_list_find = [ref.refType('void'), ['int', ref.refType('int')]];
_library._functions['_zend_list_find'] = _library._zend_list_find;

_library.zend_register_resource = ['int', [ref.refType(_library.zval), ref.refType('void'), 'int']];
_library._functions['zend_register_resource'] = _library.zend_register_resource;

_library.zend_rsrc_list_get_rsrc_type = [ref.refType('char'), ['int']];
_library._functions['zend_rsrc_list_get_rsrc_type'] = _library.zend_rsrc_list_get_rsrc_type;

_library.zend_fetch_list_dtor_id = ['int', [ref.refType('char')]];
_library._functions['zend_fetch_list_dtor_id'] = _library.zend_fetch_list_dtor_id;

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
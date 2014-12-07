var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_llist_element = Struct({});

_library._preload.push(function () {
    _library._zend_llist_element.defineProperty("data", RefArray('char', 1));
    _library._zend_llist_element.defineProperty("next", ref.refType(_library._zend_llist_element));
    _library._zend_llist_element.defineProperty("prev", ref.refType(_library._zend_llist_element));
});

_library.zend_llist_element = _library._zend_llist_element;

_library.llist_dtor_func_t = ffi.Function('void', [ref.refType('void')]);

_library.llist_compare_func_t = ffi.Function('int', [ref.refType(ref.refType(_library._zend_llist_element)), ref.refType(ref.refType(_library._zend_llist_element))]);

_library.llist_apply_with_args_func_t = ffi.Function('void', [ref.refType('void'), 'int', ref.refType('void')]);

_library.llist_apply_with_arg_func_t = ffi.Function('void', [ref.refType('void'), ref.refType('void')]);

_library.llist_apply_func_t = ffi.Function('void', [ref.refType('void')]);

_library._zend_llist = Struct({});

_library._preload.push(function () {
    _library._zend_llist.defineProperty("count", 'ulong');
    _library._zend_llist.defineProperty("dtor", _library.llist_dtor_func_t);
    _library._zend_llist.defineProperty("head", ref.refType(_library.zend_llist_element));
    _library._zend_llist.defineProperty("persistent", 'uchar');
    _library._zend_llist.defineProperty("size", 'ulong');
    _library._zend_llist.defineProperty("tail", ref.refType(_library.zend_llist_element));
    _library._zend_llist.defineProperty("traverse_ptr", ref.refType(_library.zend_llist_element));
});

_library.zend_llist = _library._zend_llist;

_library.zend_llist_position = ref.refType(_library.zend_llist_element);

_library.zend_llist_init = ['void', [ref.refType(_library.zend_llist), 'ulong', _library.llist_dtor_func_t, 'uchar']];
_library._functions['zend_llist_init'] = _library.zend_llist_init;

_library.zend_llist_add_element = ['void', [ref.refType(_library.zend_llist), ref.refType('void')]];
_library._functions['zend_llist_add_element'] = _library.zend_llist_add_element;

_library.zend_llist_prepend_element = ['void', [ref.refType(_library.zend_llist), ref.refType('void')]];
_library._functions['zend_llist_prepend_element'] = _library.zend_llist_prepend_element;

_library.zend_llist_del_element = ['void', [ref.refType(_library.zend_llist), ref.refType('void'), ffi.Function('int', [ref.refType('void'), ref.refType('void')])]];
_library._functions['zend_llist_del_element'] = _library.zend_llist_del_element;

_library.zend_llist_destroy = ['void', [ref.refType(_library.zend_llist)]];
_library._functions['zend_llist_destroy'] = _library.zend_llist_destroy;

_library.zend_llist_clean = ['void', [ref.refType(_library.zend_llist)]];
_library._functions['zend_llist_clean'] = _library.zend_llist_clean;

_library.zend_llist_remove_tail = [ref.refType('void'), [ref.refType(_library.zend_llist)]];
_library._functions['zend_llist_remove_tail'] = _library.zend_llist_remove_tail;

_library.zend_llist_copy = ['void', [ref.refType(_library.zend_llist), ref.refType(_library.zend_llist)]];
_library._functions['zend_llist_copy'] = _library.zend_llist_copy;

_library.zend_llist_apply = ['void', [ref.refType(_library.zend_llist), _library.llist_apply_func_t]];
_library._functions['zend_llist_apply'] = _library.zend_llist_apply;

_library.zend_llist_apply_with_del = ['void', [ref.refType(_library.zend_llist), ffi.Function('int', [ref.refType('void')])]];
_library._functions['zend_llist_apply_with_del'] = _library.zend_llist_apply_with_del;

_library.zend_llist_apply_with_argument = ['void', [ref.refType(_library.zend_llist), _library.llist_apply_with_arg_func_t, ref.refType('void')]];
_library._functions['zend_llist_apply_with_argument'] = _library.zend_llist_apply_with_argument;

_library.zend_llist_count = ['int', [ref.refType(_library.zend_llist)]];
_library._functions['zend_llist_count'] = _library.zend_llist_count;

_library.zend_llist_sort = ['void', [ref.refType(_library.zend_llist), _library.llist_compare_func_t]];
_library._functions['zend_llist_sort'] = _library.zend_llist_sort;

_library.zend_llist_get_first_ex = [ref.refType('void'), [ref.refType(_library.zend_llist), ref.refType(_library.zend_llist_position)]];
_library._functions['zend_llist_get_first_ex'] = _library.zend_llist_get_first_ex;

_library.zend_llist_get_last_ex = [ref.refType('void'), [ref.refType(_library.zend_llist), ref.refType(_library.zend_llist_position)]];
_library._functions['zend_llist_get_last_ex'] = _library.zend_llist_get_last_ex;

_library.zend_llist_get_next_ex = [ref.refType('void'), [ref.refType(_library.zend_llist), ref.refType(_library.zend_llist_position)]];
_library._functions['zend_llist_get_next_ex'] = _library.zend_llist_get_next_ex;

_library.zend_llist_get_prev_ex = [ref.refType('void'), [ref.refType(_library.zend_llist), ref.refType(_library.zend_llist_position)]];
_library._functions['zend_llist_get_prev_ex'] = _library.zend_llist_get_prev_ex;

function loadDependentSymbols() {
}
var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

loadDependentSymbols();

_library._zend_llist_element = Struct({
    "data": RefArray('char', 1),
    "next": _library._zend_llist_element ? ref.refType(_library._zend_llist_element) : 'pointer',
    "prev": _library._zend_llist_element ? ref.refType(_library._zend_llist_element) : 'pointer'
});

_library.zend_llist_element = _library._zend_llist_element;

_library.llist_dtor_func_t = ffi.Function('void', [ref.refType('void')]);

_library.llist_compare_func_t = ffi.Function('int', [ref.refType(_library._zend_llist_element ? ref.refType(_library._zend_llist_element) : 'pointer'), ref.refType(_library._zend_llist_element ? ref.refType(_library._zend_llist_element) : 'pointer')]);

_library.llist_apply_with_args_func_t = ffi.Function('void', [ref.refType('void'), 'int', ref.refType('void')]);

_library.llist_apply_with_arg_func_t = ffi.Function('void', [ref.refType('void'), ref.refType('void')]);

_library.llist_apply_func_t = ffi.Function('void', [ref.refType('void')]);

_library._zend_llist = Struct({
    "count": 'ulong',
    "dtor": _library.llist_dtor_func_t,
    "head": _library.zend_llist_element ? ref.refType(_library.zend_llist_element) : 'pointer',
    "persistent": 'uchar',
    "size": 'ulong',
    "tail": _library.zend_llist_element ? ref.refType(_library.zend_llist_element) : 'pointer',
    "traverse_ptr": _library.zend_llist_element ? ref.refType(_library.zend_llist_element) : 'pointer'
});

_library.zend_llist = _library._zend_llist;

_library.zend_llist_position = _library.zend_llist_element ? ref.refType(_library.zend_llist_element) : 'pointer';

_library.zend_llist_init = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', 'ulong', _library.llist_dtor_func_t, 'uchar']];
_library._functions.push(_library.zend_llist_init);

_library.zend_llist_add_element = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', ref.refType('void')]];
_library._functions.push(_library.zend_llist_add_element);

_library.zend_llist_prepend_element = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', ref.refType('void')]];
_library._functions.push(_library.zend_llist_prepend_element);

_library.zend_llist_del_element = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', ref.refType('void'), ffi.Function('int', [ref.refType('void'), ref.refType('void')])]];
_library._functions.push(_library.zend_llist_del_element);

_library.zend_llist_destroy = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer']];
_library._functions.push(_library.zend_llist_destroy);

_library.zend_llist_clean = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer']];
_library._functions.push(_library.zend_llist_clean);

_library.zend_llist_remove_tail = [ref.refType('void'), [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer']];
_library._functions.push(_library.zend_llist_remove_tail);

_library.zend_llist_copy = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', _library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer']];
_library._functions.push(_library.zend_llist_copy);

_library.zend_llist_apply = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', _library.llist_apply_func_t]];
_library._functions.push(_library.zend_llist_apply);

_library.zend_llist_apply_with_del = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', ffi.Function('int', [ref.refType('void')])]];
_library._functions.push(_library.zend_llist_apply_with_del);

_library.zend_llist_apply_with_argument = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', _library.llist_apply_with_arg_func_t, ref.refType('void')]];
_library._functions.push(_library.zend_llist_apply_with_argument);

_library.zend_llist_count = ['int', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer']];
_library._functions.push(_library.zend_llist_count);

_library.zend_llist_sort = ['void', [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', _library.llist_compare_func_t]];
_library._functions.push(_library.zend_llist_sort);

_library.zend_llist_get_first_ex = [ref.refType('void'), [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', _library.zend_llist_position ? ref.refType(_library.zend_llist_position) : 'pointer']];
_library._functions.push(_library.zend_llist_get_first_ex);

_library.zend_llist_get_last_ex = [ref.refType('void'), [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', _library.zend_llist_position ? ref.refType(_library.zend_llist_position) : 'pointer']];
_library._functions.push(_library.zend_llist_get_last_ex);

_library.zend_llist_get_next_ex = [ref.refType('void'), [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', _library.zend_llist_position ? ref.refType(_library.zend_llist_position) : 'pointer']];
_library._functions.push(_library.zend_llist_get_next_ex);

_library.zend_llist_get_prev_ex = [ref.refType('void'), [_library.zend_llist ? ref.refType(_library.zend_llist) : 'pointer', _library.zend_llist_position ? ref.refType(_library.zend_llist_position) : 'pointer']];
_library._functions.push(_library.zend_llist_get_prev_ex);

function loadDependentSymbols() {
}
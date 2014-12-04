var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zm_startup_assert = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_assert);

_library.zm_shutdown_assert = ['int', ['int', 'int']];
_library._functions.push(_library.zm_shutdown_assert);

_library.zm_activate_assert = ['int', ['int', 'int']];
_library._functions.push(_library.zm_activate_assert);

_library.zm_deactivate_assert = ['int', ['int', 'int']];
_library._functions.push(_library.zm_deactivate_assert);

_library.zm_info_assert = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.zm_info_assert);

_library.zif_assert = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_assert);

_library.zif_assert_options = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_assert_options);


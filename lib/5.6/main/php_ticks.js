var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../');

_library.php_startup_ticks = ['int', []];
_library._functions['php_startup_ticks'] = _library.php_startup_ticks;

_library.php_deactivate_ticks = ['void', []];
_library._functions['php_deactivate_ticks'] = _library.php_deactivate_ticks;

_library.php_shutdown_ticks = ['void', []];
_library._functions['php_shutdown_ticks'] = _library.php_shutdown_ticks;

_library.php_run_ticks = ['void', ['int']];
_library._functions['php_run_ticks'] = _library.php_run_ticks;

_library.php_add_tick_function = ['void', [ffi.Function('void', ['int'])]];
_library._functions['php_add_tick_function'] = _library.php_add_tick_function;

_library.php_remove_tick_function = ['void', [ffi.Function('void', ['int'])]];
_library._functions['php_remove_tick_function'] = _library.php_remove_tick_function;


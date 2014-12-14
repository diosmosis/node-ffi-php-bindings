var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._php_date_obj = Struct({});
_library._php_date_obj.size = 1;

_library._preload['_php_date_obj'] = ['zend_object', '_zend_object', 'timelib_time', 'HashTable', function () {
    _library._php_date_obj.size = 0;
    _library._php_date_obj.defineProperty("std", _library.zend_object);
    _library._php_date_obj.defineProperty("time", ref.refType(_library.timelib_time));
    _library._php_date_obj.defineProperty("props", ref.refType(_library.HashTable));
}];

_library._preload['php_date_obj'] = [function () {
    _library.php_date_obj = _library._php_date_obj;
}];

_library._php_timezone_obj = Struct({});
_library._php_timezone_obj.size = 1;

_library._preload['_php_timezone_obj'] = ['zend_object', '_zend_object', 'timelib_tzinfo', 'timelib_abbr_info', 'timelib_abbr_info', 'HashTable', function () {
    _library._php_timezone_obj.size = 0;
    _library._php_timezone_obj.defineProperty("std", _library.zend_object);
    _library._php_timezone_obj.defineProperty("initialized", 'int');
    _library._php_timezone_obj.defineProperty("type", 'int');
    _library._php_timezone_obj.defineProperty("tzi", (function () {
        var temp = Union({});
        temp.defineProperty("tz", ref.refType(_library.timelib_tzinfo));
        temp.defineProperty("utc_offset", 'longlong');
        temp.defineProperty("z", _library.timelib_abbr_info);
        return temp;
    })());
    _library._php_timezone_obj.defineProperty("props", ref.refType(_library.HashTable));
}];

_library._preload['php_timezone_obj'] = [function () {
    _library.php_timezone_obj = _library._php_timezone_obj;
}];

_library._php_interval_obj = Struct({});
_library._php_interval_obj.size = 1;

_library._preload['_php_interval_obj'] = ['zend_object', '_zend_object', 'timelib_rel_time', 'HashTable', function () {
    _library._php_interval_obj.size = 0;
    _library._php_interval_obj.defineProperty("std", _library.zend_object);
    _library._php_interval_obj.defineProperty("diff", ref.refType(_library.timelib_rel_time));
    _library._php_interval_obj.defineProperty("props", ref.refType(_library.HashTable));
    _library._php_interval_obj.defineProperty("initialized", 'int');
}];

_library._preload['php_interval_obj'] = [function () {
    _library.php_interval_obj = _library._php_interval_obj;
}];

_library._php_period_obj = Struct({});
_library._php_period_obj.size = 1;

_library._preload['_php_period_obj'] = ['zend_object', '_zend_object', 'timelib_time', 'zend_class_entry', 'timelib_time', 'timelib_time', 'timelib_rel_time', function () {
    _library._php_period_obj.size = 0;
    _library._php_period_obj.defineProperty("std", _library.zend_object);
    _library._php_period_obj.defineProperty("start", ref.refType(_library.timelib_time));
    _library._php_period_obj.defineProperty("start_ce", ref.refType(_library.zend_class_entry));
    _library._php_period_obj.defineProperty("current", ref.refType(_library.timelib_time));
    _library._php_period_obj.defineProperty("end", ref.refType(_library.timelib_time));
    _library._php_period_obj.defineProperty("interval", ref.refType(_library.timelib_rel_time));
    _library._php_period_obj.defineProperty("recurrences", 'int');
    _library._php_period_obj.defineProperty("initialized", 'int');
    _library._php_period_obj.defineProperty("include_start_date", 'int');
}];

_library._preload['php_period_obj'] = [function () {
    _library.php_period_obj = _library._php_period_obj;
}];

_library._zend_date_globals = Struct({});
_library._zend_date_globals.size = 1;

_library._preload['_zend_date_globals'] = ['HashTable', 'timelib_error_container', function () {
    _library._zend_date_globals.size = 0;
    _library._zend_date_globals.defineProperty("default_timezone", ref.refType('char'));
    _library._zend_date_globals.defineProperty("timezone", ref.refType('char'));
    _library._zend_date_globals.defineProperty("tzcache", ref.refType(_library.HashTable));
    _library._zend_date_globals.defineProperty("last_errors", ref.refType(_library.timelib_error_container));
    _library._zend_date_globals.defineProperty("timezone_valid", 'int');
}];

_library._preload['zend_date_globals'] = [function () {
    _library.zend_date_globals = _library._zend_date_globals;
}];

_library._preload['php_parse_date'] = [function () {
    _library.php_parse_date = ['long', [ref.refType('char'), ref.refType('long')]];
    _library._functions['php_parse_date'] = _library.php_parse_date;
}];

_library._preload['php_mktime'] = ['zval', 'pointer', 'zval', function () {
    _library.php_mktime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int', 'int']];
    _library._functions['php_mktime'] = _library.php_mktime;
}];

_library._preload['php_idate'] = ['time_t', function () {
    _library.php_idate = ['int', ['char', _library.time_t, 'int']];
    _library._functions['php_idate'] = _library.php_idate;
}];

_library._preload['php_strftime'] = ['zval', 'pointer', 'zval', function () {
    _library.php_strftime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int', 'int']];
    _library._functions['php_strftime'] = _library.php_strftime;
}];

_library._preload['php_format_date'] = ['time_t', function () {
    _library.php_format_date = [ref.refType('char'), [ref.refType('char'), 'int', _library.time_t, 'int']];
    _library._functions['php_format_date'] = _library.php_format_date;
}];

_library._preload['php_date_set_tzdb'] = ['timelib_tzdb', function () {
    _library.php_date_set_tzdb = ['void', [ref.refType(_library.timelib_tzdb)]];
    _library._functions['php_date_set_tzdb'] = _library.php_date_set_tzdb;
}];

_library._preload['get_timezone_info'] = ['timelib_tzinfo', function () {
    _library.get_timezone_info = [ref.refType(_library.timelib_tzinfo), []];
    _library._functions['get_timezone_info'] = _library.get_timezone_info;
}];

_library._preload['php_date_get_date_ce'] = ['zend_class_entry', function () {
    _library.php_date_get_date_ce = [ref.refType(_library.zend_class_entry), []];
    _library._functions['php_date_get_date_ce'] = _library.php_date_get_date_ce;
}];

_library._preload['php_date_get_timezone_ce'] = ['zend_class_entry', function () {
    _library.php_date_get_timezone_ce = [ref.refType(_library.zend_class_entry), []];
    _library._functions['php_date_get_timezone_ce'] = _library.php_date_get_timezone_ce;
}];

_library._preload['php_date_instantiate'] = ['zval', 'zend_class_entry', 'zval', function () {
    _library.php_date_instantiate = [ref.refType(_library.zval), [ref.refType(_library.zend_class_entry), ref.refType(_library.zval)]];
    _library._functions['php_date_instantiate'] = _library.php_date_instantiate;
}];

_library._preload['php_date_initialize'] = ['php_date_obj', 'zval', function () {
    _library.php_date_initialize = ['int', [ref.refType(_library.php_date_obj), ref.refType('char'), 'int', ref.refType('char'), ref.refType(_library.zval), 'int']];
    _library._functions['php_date_initialize'] = _library.php_date_initialize;
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
    require('./lib/timelib_structs.js');
}

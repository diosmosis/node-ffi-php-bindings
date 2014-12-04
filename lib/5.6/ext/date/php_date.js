var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zif_date = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date);

_library.zif_idate = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_idate);

_library.zif_gmdate = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_gmdate);

_library.zif_strtotime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strtotime);

_library.zif_mktime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_mktime);

_library.zif_gmmktime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_gmmktime);

_library.zif_checkdate = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_checkdate);

_library.zif_strftime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_strftime);

_library.zif_gmstrftime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_gmstrftime);

_library.zif_time = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_time);

_library.zif_localtime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_localtime);

_library.zif_getdate = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_getdate);

_library.zim_DateTime___construct = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTime___construct);

_library.zim_DateTime___wakeup = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTime___wakeup);

_library.zim_DateTime___set_state = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTime___set_state);

_library.zif_date_create = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_create);

_library.zif_date_create_immutable = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_create_immutable);

_library.zif_date_create_from_format = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_create_from_format);

_library.zif_date_create_immutable_from_format = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_create_immutable_from_format);

_library.zif_date_parse = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_parse);

_library.zif_date_parse_from_format = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_parse_from_format);

_library.zif_date_get_last_errors = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_get_last_errors);

_library.zif_date_format = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_format);

_library.zif_date_modify = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_modify);

_library.zif_date_add = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_add);

_library.zif_date_sub = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_sub);

_library.zif_date_timezone_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_timezone_get);

_library.zif_date_timezone_set = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_timezone_set);

_library.zif_date_offset_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_offset_get);

_library.zif_date_diff = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_diff);

_library.zif_date_time_set = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_time_set);

_library.zif_date_date_set = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_date_set);

_library.zif_date_isodate_set = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_isodate_set);

_library.zif_date_timestamp_set = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_timestamp_set);

_library.zif_date_timestamp_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_timestamp_get);

_library.zim_DateTimeImmutable___construct = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable___construct);

_library.zim_DateTimeImmutable___set_state = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable___set_state);

_library.zim_DateTimeImmutable_modify = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable_modify);

_library.zim_DateTimeImmutable_add = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable_add);

_library.zim_DateTimeImmutable_sub = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable_sub);

_library.zim_DateTimeImmutable_setTimezone = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable_setTimezone);

_library.zim_DateTimeImmutable_setTime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable_setTime);

_library.zim_DateTimeImmutable_setDate = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable_setDate);

_library.zim_DateTimeImmutable_setISODate = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable_setISODate);

_library.zim_DateTimeImmutable_setTimestamp = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable_setTimestamp);

_library.zim_DateTimeImmutable_createFromMutable = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeImmutable_createFromMutable);

_library.zim_DateTimeZone___construct = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeZone___construct);

_library.zim_DateTimeZone___wakeup = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeZone___wakeup);

_library.zim_DateTimeZone___set_state = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateTimeZone___set_state);

_library.zif_timezone_open = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_timezone_open);

_library.zif_timezone_name_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_timezone_name_get);

_library.zif_timezone_name_from_abbr = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_timezone_name_from_abbr);

_library.zif_timezone_offset_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_timezone_offset_get);

_library.zif_timezone_transitions_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_timezone_transitions_get);

_library.zif_timezone_location_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_timezone_location_get);

_library.zif_timezone_identifiers_list = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_timezone_identifiers_list);

_library.zif_timezone_abbreviations_list = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_timezone_abbreviations_list);

_library.zif_timezone_version_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_timezone_version_get);

_library.zim_DateInterval___construct = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateInterval___construct);

_library.zim_DateInterval___wakeup = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateInterval___wakeup);

_library.zim_DateInterval___set_state = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DateInterval___set_state);

_library.zif_date_interval_format = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_interval_format);

_library.zif_date_interval_create_from_date_string = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_interval_create_from_date_string);

_library.zim_DatePeriod___construct = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DatePeriod___construct);

_library.zim_DatePeriod___wakeup = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DatePeriod___wakeup);

_library.zim_DatePeriod___set_state = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zim_DatePeriod___set_state);

_library.zif_date_default_timezone_set = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_default_timezone_set);

_library.zif_date_default_timezone_get = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_default_timezone_get);

_library.zif_date_sunrise = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_sunrise);

_library.zif_date_sunset = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_sunset);

_library.zif_date_sun_info = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_date_sun_info);

_library.zm_activate_date = ['int', ['int', 'int']];
_library._functions.push(_library.zm_activate_date);

_library.zm_deactivate_date = ['int', ['int', 'int']];
_library._functions.push(_library.zm_deactivate_date);

_library.zm_startup_date = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_date);

_library.zm_shutdown_date = ['int', ['int', 'int']];
_library._functions.push(_library.zm_shutdown_date);

_library.zm_info_date = ['void', [ref.refType(_library.zend_module_entry)]];
_library._functions.push(_library.zm_info_date);

_library._php_date_obj = Struct({
    "props": ref.refType(_library.HashTable),
    "std": _library.zend_object,
    "time": ref.refType(_library.timelib_time)
});

_library._php_date_obj = Struct({
    "props": ref.refType(_library.HashTable),
    "std": _library.zend_object,
    "time": ref.refType(_library.timelib_time)
});

_library.php_date_obj = _library._php_date_obj;

_library._php_timezone_obj = Struct({
    "initialized": 'int',
    "props": ref.refType(_library.HashTable),
    "std": _library.zend_object,
    "type": 'int',
    "tzi": Union({
        "tz": ref.refType(_library.timelib_tzinfo),
        "utc_offset": 'longlong',
        "z": _library.timelib_abbr_info
    });
});

_library._php_timezone_obj = Struct({
    "initialized": 'int',
    "props": ref.refType(_library.HashTable),
    "std": _library.zend_object,
    "type": 'int',
    "tzi": Union({
        "tz": ref.refType(_library.timelib_tzinfo),
        "utc_offset": 'longlong',
        "z": _library.timelib_abbr_info
    });
});

_library.php_timezone_obj = _library._php_timezone_obj;

_library._php_interval_obj = Struct({
    "diff": ref.refType(_library.timelib_rel_time),
    "initialized": 'int',
    "props": ref.refType(_library.HashTable),
    "std": _library.zend_object
});

_library._php_interval_obj = Struct({
    "diff": ref.refType(_library.timelib_rel_time),
    "initialized": 'int',
    "props": ref.refType(_library.HashTable),
    "std": _library.zend_object
});

_library.php_interval_obj = _library._php_interval_obj;

_library._php_period_obj = Struct({
    "current": ref.refType(_library.timelib_time),
    "end": ref.refType(_library.timelib_time),
    "include_start_date": 'int',
    "initialized": 'int',
    "interval": ref.refType(_library.timelib_rel_time),
    "recurrences": 'int',
    "start": ref.refType(_library.timelib_time),
    "start_ce": ref.refType(_library.zend_class_entry),
    "std": _library.zend_object
});

_library._php_period_obj = Struct({
    "current": ref.refType(_library.timelib_time),
    "end": ref.refType(_library.timelib_time),
    "include_start_date": 'int',
    "initialized": 'int',
    "interval": ref.refType(_library.timelib_rel_time),
    "recurrences": 'int',
    "start": ref.refType(_library.timelib_time),
    "start_ce": ref.refType(_library.zend_class_entry),
    "std": _library.zend_object
});

_library.php_period_obj = _library._php_period_obj;

_library._zend_date_globals = Struct({
    "default_timezone": ref.refType('char'),
    "last_errors": ref.refType(_library.timelib_error_container),
    "timezone": ref.refType('char'),
    "timezone_valid": 'int',
    "tzcache": ref.refType(_library.HashTable)
});

_library.zend_date_globals = _library._zend_date_globals;

_library.php_parse_date = ['long', [ref.refType('char'), ref.refType('long')]];
_library._functions.push(_library.php_parse_date);

_library.php_mktime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int', 'int']];
_library._functions.push(_library.php_mktime);

_library.php_idate = ['int', ['char', _library.time_t, 'int']];
_library._functions.push(_library.php_idate);

_library.php_strftime = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int', 'int']];
_library._functions.push(_library.php_strftime);

_library.php_format_date = [ref.refType('char'), [ref.refType('char'), 'int', _library.time_t, 'int']];
_library._functions.push(_library.php_format_date);

_library.php_date_set_tzdb = ['void', [ref.refType(_library.timelib_tzdb)]];
_library._functions.push(_library.php_date_set_tzdb);

_library.get_timezone_info = [ref.refType(_library.timelib_tzinfo), []];
_library._functions.push(_library.get_timezone_info);

_library.php_date_get_date_ce = [ref.refType(_library.zend_class_entry), []];
_library._functions.push(_library.php_date_get_date_ce);

_library.php_date_get_timezone_ce = [ref.refType(_library.zend_class_entry), []];
_library._functions.push(_library.php_date_get_timezone_ce);

_library.php_date_instantiate = [ref.refType(_library.zval), [ref.refType(_library.zend_class_entry), ref.refType(_library.zval)]];
_library._functions.push(_library.php_date_instantiate);

_library.php_date_initialize = ['int', [ref.refType(_library.php_date_obj), ref.refType('char'), 'int', ref.refType('char'), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.php_date_initialize);


var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../../');

loadDependentSymbols();

_library.ttinfo = Struct({
    "abbr_idx": 'uint',
    "isdst": 'int',
    "isgmtcnt": 'uint',
    "isstdcnt": 'uint',
    "offset": 'int'
});

_library.ttinfo = _library.ttinfo;

_library.tlinfo = Struct({
    "offset": 'int',
    "trans": 'int'
});

_library.tlinfo = _library.tlinfo;

_library.tlocinfo = Struct({
    "comments": ref.refType('char'),
    "country_code": RefArray('char', 3),
    "latitude": 'double',
    "longitude": 'double'
});

_library.tlocinfo = _library.tlocinfo;

_library.timelib_tzinfo = Struct({
    "bc": 'uchar',
    "charcnt": 'uint',
    "leap_times": ref.refType(_library.tlinfo),
    "leapcnt": 'uint',
    "location": _library.tlocinfo,
    "name": ref.refType('char'),
    "timecnt": 'uint',
    "timezone_abbr": ref.refType('char'),
    "trans": ref.refType('int'),
    "trans_idx": ref.refType('uchar'),
    "ttisgmtcnt": 'uint',
    "ttisstdcnt": 'uint',
    "type": ref.refType(_library.ttinfo),
    "typecnt": 'uint'
});

_library.timelib_tzinfo = _library.timelib_tzinfo;

_library.timelib_special = Struct({
    "amount": 'longlong',
    "type": 'uint'
});

_library.timelib_special = _library.timelib_special;

_library.timelib_rel_time = Struct({
    "d": 'longlong',
    "days": 'longlong',
    "first_last_day_of": 'int',
    "h": 'longlong',
    "have_special_relative": 'uint',
    "have_weekday_relative": 'uint',
    "i": 'longlong',
    "invert": 'int',
    "m": 'longlong',
    "s": 'longlong',
    "special": _library.timelib_special,
    "weekday": 'int',
    "weekday_behavior": 'int',
    "y": 'longlong'
});

_library.timelib_rel_time = _library.timelib_rel_time;

_library.timelib_time_offset = Struct({
    "abbr": ref.refType('char'),
    "is_dst": 'uint',
    "leap_secs": 'uint',
    "offset": 'int',
    "transistion_time": 'longlong'
});

_library.timelib_time_offset = _library.timelib_time_offset;

_library.timelib_time = Struct({
    "d": 'longlong',
    "dst": 'int',
    "f": 'double',
    "h": 'longlong',
    "have_date": 'uint',
    "have_relative": 'uint',
    "have_time": 'uint',
    "have_weeknr_day": 'uint',
    "have_zone": 'uint',
    "i": 'longlong',
    "is_localtime": 'uint',
    "m": 'longlong',
    "relative": _library.timelib_rel_time,
    "s": 'longlong',
    "sse": 'longlong',
    "sse_uptodate": 'uint',
    "tim_uptodate": 'uint',
    "tz_abbr": ref.refType('char'),
    "tz_info": ref.refType(_library.timelib_tzinfo),
    "y": 'longlong',
    "z": 'int',
    "zone_type": 'uint'
});

_library.timelib_time = _library.timelib_time;

_library.timelib_abbr_info = Struct({
    "abbr": ref.refType('char'),
    "dst": 'int',
    "utc_offset": 'longlong'
});

_library.timelib_abbr_info = _library.timelib_abbr_info;

_library.timelib_error_message = Struct({
    "character": 'char',
    "message": ref.refType('char'),
    "position": 'int'
});

_library.timelib_error_message = _library.timelib_error_message;

_library.timelib_error_container = Struct({
    "error_count": 'int',
    "error_messages": ref.refType(_library.timelib_error_message),
    "warning_count": 'int',
    "warning_messages": ref.refType(_library.timelib_error_message)
});

_library.timelib_error_container = _library.timelib_error_container;

_library._timelib_tz_lookup_table = Struct({
    "full_tz_name": ref.refType('char'),
    "gmtoffset": 'float',
    "name": ref.refType('char'),
    "type": 'int'
});

_library.timelib_tz_lookup_table = _library._timelib_tz_lookup_table;

_library._timelib_tzdb_index_entry = Struct({
    "id": ref.refType('char'),
    "pos": 'uint'
});

_library.timelib_tzdb_index_entry = _library._timelib_tzdb_index_entry;

_library._timelib_tzdb = Struct({
    "data": ref.refType('uchar'),
    "index": ref.refType(_library.timelib_tzdb_index_entry),
    "index_size": 'int',
    "version": ref.refType('char')
});

_library.timelib_tzdb = _library._timelib_tzdb;

function loadDependentSymbols() {
};
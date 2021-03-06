var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../../');

loadDependentSymbols();

_library.ttinfo = Struct({});
_library.ttinfo.size = 1;

_library._preload['ttinfo'] = [function () {
    _library.ttinfo.size = 0;
    _library.ttinfo.defineProperty("offset", 'int');
    _library.ttinfo.defineProperty("isdst", 'int');
    _library.ttinfo.defineProperty("abbr_idx", 'uint');
    _library.ttinfo.defineProperty("isstdcnt", 'uint');
    _library.ttinfo.defineProperty("isgmtcnt", 'uint');
}];

_library._preload['ttinfo'] = [function () {
    _library.ttinfo = _library.ttinfo;
}];

_library.tlinfo = Struct({});
_library.tlinfo.size = 1;

_library._preload['tlinfo'] = [function () {
    _library.tlinfo.size = 0;
    _library.tlinfo.defineProperty("trans", 'int');
    _library.tlinfo.defineProperty("offset", 'int');
}];

_library._preload['tlinfo'] = [function () {
    _library.tlinfo = _library.tlinfo;
}];

_library.tlocinfo = Struct({});
_library.tlocinfo.size = 1;

_library._preload['tlocinfo'] = [function () {
    _library.tlocinfo.size = 0;
    _library.tlocinfo.defineProperty("country_code", _library.__RefArray('char', 3));
    _library.tlocinfo.defineProperty("latitude", 'double');
    _library.tlocinfo.defineProperty("longitude", 'double');
    _library.tlocinfo.defineProperty("comments", ref.refType('char'));
}];

_library._preload['tlocinfo'] = [function () {
    _library.tlocinfo = _library.tlocinfo;
}];

_library.timelib_tzinfo = Struct({});
_library.timelib_tzinfo.size = 1;

_library._preload['timelib_tzinfo'] = ['ttinfo', 'tlinfo', 'tlocinfo', 'tlocinfo', function () {
    _library.timelib_tzinfo.size = 0;
    _library.timelib_tzinfo.defineProperty("name", ref.refType('char'));
    _library.timelib_tzinfo.defineProperty("ttisgmtcnt", 'uint');
    _library.timelib_tzinfo.defineProperty("ttisstdcnt", 'uint');
    _library.timelib_tzinfo.defineProperty("leapcnt", 'uint');
    _library.timelib_tzinfo.defineProperty("timecnt", 'uint');
    _library.timelib_tzinfo.defineProperty("typecnt", 'uint');
    _library.timelib_tzinfo.defineProperty("charcnt", 'uint');
    _library.timelib_tzinfo.defineProperty("trans", ref.refType('int'));
    _library.timelib_tzinfo.defineProperty("trans_idx", ref.refType('uchar'));
    _library.timelib_tzinfo.defineProperty("type", ref.refType(_library.ttinfo));
    _library.timelib_tzinfo.defineProperty("timezone_abbr", ref.refType('char'));
    _library.timelib_tzinfo.defineProperty("leap_times", ref.refType(_library.tlinfo));
    _library.timelib_tzinfo.defineProperty("bc", 'uchar');
    _library.timelib_tzinfo.defineProperty("location", _library.tlocinfo);
}];

_library._preload['timelib_tzinfo'] = [function () {
    _library.timelib_tzinfo = _library.timelib_tzinfo;
}];

_library.timelib_special = Struct({});
_library.timelib_special.size = 1;

_library._preload['timelib_special'] = [function () {
    _library.timelib_special.size = 0;
    _library.timelib_special.defineProperty("type", 'uint');
    _library.timelib_special.defineProperty("amount", 'longlong');
}];

_library._preload['timelib_special'] = [function () {
    _library.timelib_special = _library.timelib_special;
}];

_library.timelib_rel_time = Struct({});
_library.timelib_rel_time.size = 1;

_library._preload['timelib_rel_time'] = ['timelib_special', 'timelib_special', function () {
    _library.timelib_rel_time.size = 0;
    _library.timelib_rel_time.defineProperty("y", 'longlong');
    _library.timelib_rel_time.defineProperty("m", 'longlong');
    _library.timelib_rel_time.defineProperty("d", 'longlong');
    _library.timelib_rel_time.defineProperty("h", 'longlong');
    _library.timelib_rel_time.defineProperty("i", 'longlong');
    _library.timelib_rel_time.defineProperty("s", 'longlong');
    _library.timelib_rel_time.defineProperty("weekday", 'int');
    _library.timelib_rel_time.defineProperty("weekday_behavior", 'int');
    _library.timelib_rel_time.defineProperty("first_last_day_of", 'int');
    _library.timelib_rel_time.defineProperty("invert", 'int');
    _library.timelib_rel_time.defineProperty("days", 'longlong');
    _library.timelib_rel_time.defineProperty("special", _library.timelib_special);
    _library.timelib_rel_time.defineProperty("have_weekday_relative", 'uint');
    _library.timelib_rel_time.defineProperty("have_special_relative", 'uint');
}];

_library._preload['timelib_rel_time'] = [function () {
    _library.timelib_rel_time = _library.timelib_rel_time;
}];

_library.timelib_time_offset = Struct({});
_library.timelib_time_offset.size = 1;

_library._preload['timelib_time_offset'] = [function () {
    _library.timelib_time_offset.size = 0;
    _library.timelib_time_offset.defineProperty("offset", 'int');
    _library.timelib_time_offset.defineProperty("leap_secs", 'uint');
    _library.timelib_time_offset.defineProperty("is_dst", 'uint');
    _library.timelib_time_offset.defineProperty("abbr", ref.refType('char'));
    _library.timelib_time_offset.defineProperty("transistion_time", 'longlong');
}];

_library._preload['timelib_time_offset'] = [function () {
    _library.timelib_time_offset = _library.timelib_time_offset;
}];

_library.timelib_time = Struct({});
_library.timelib_time.size = 1;

_library._preload['timelib_time'] = ['timelib_tzinfo', 'timelib_rel_time', 'timelib_rel_time', function () {
    _library.timelib_time.size = 0;
    _library.timelib_time.defineProperty("y", 'longlong');
    _library.timelib_time.defineProperty("m", 'longlong');
    _library.timelib_time.defineProperty("d", 'longlong');
    _library.timelib_time.defineProperty("h", 'longlong');
    _library.timelib_time.defineProperty("i", 'longlong');
    _library.timelib_time.defineProperty("s", 'longlong');
    _library.timelib_time.defineProperty("f", 'double');
    _library.timelib_time.defineProperty("z", 'int');
    _library.timelib_time.defineProperty("tz_abbr", ref.refType('char'));
    _library.timelib_time.defineProperty("tz_info", ref.refType(_library.timelib_tzinfo));
    _library.timelib_time.defineProperty("dst", 'int');
    _library.timelib_time.defineProperty("relative", _library.timelib_rel_time);
    _library.timelib_time.defineProperty("sse", 'longlong');
    _library.timelib_time.defineProperty("have_time", 'uint');
    _library.timelib_time.defineProperty("have_date", 'uint');
    _library.timelib_time.defineProperty("have_zone", 'uint');
    _library.timelib_time.defineProperty("have_relative", 'uint');
    _library.timelib_time.defineProperty("have_weeknr_day", 'uint');
    _library.timelib_time.defineProperty("sse_uptodate", 'uint');
    _library.timelib_time.defineProperty("tim_uptodate", 'uint');
    _library.timelib_time.defineProperty("is_localtime", 'uint');
    _library.timelib_time.defineProperty("zone_type", 'uint');
}];

_library._preload['timelib_time'] = [function () {
    _library.timelib_time = _library.timelib_time;
}];

_library.timelib_abbr_info = Struct({});
_library.timelib_abbr_info.size = 1;

_library._preload['timelib_abbr_info'] = [function () {
    _library.timelib_abbr_info.size = 0;
    _library.timelib_abbr_info.defineProperty("utc_offset", 'longlong');
    _library.timelib_abbr_info.defineProperty("abbr", ref.refType('char'));
    _library.timelib_abbr_info.defineProperty("dst", 'int');
}];

_library._preload['timelib_abbr_info'] = [function () {
    _library.timelib_abbr_info = _library.timelib_abbr_info;
}];

_library.timelib_error_message = Struct({});
_library.timelib_error_message.size = 1;

_library._preload['timelib_error_message'] = [function () {
    _library.timelib_error_message.size = 0;
    _library.timelib_error_message.defineProperty("position", 'int');
    _library.timelib_error_message.defineProperty("character", 'char');
    _library.timelib_error_message.defineProperty("message", ref.refType('char'));
}];

_library._preload['timelib_error_message'] = [function () {
    _library.timelib_error_message = _library.timelib_error_message;
}];

_library.timelib_error_container = Struct({});
_library.timelib_error_container.size = 1;

_library._preload['timelib_error_container'] = ['timelib_error_message', 'timelib_error_message', function () {
    _library.timelib_error_container.size = 0;
    _library.timelib_error_container.defineProperty("warning_count", 'int');
    _library.timelib_error_container.defineProperty("warning_messages", ref.refType(_library.timelib_error_message));
    _library.timelib_error_container.defineProperty("error_count", 'int');
    _library.timelib_error_container.defineProperty("error_messages", ref.refType(_library.timelib_error_message));
}];

_library._preload['timelib_error_container'] = [function () {
    _library.timelib_error_container = _library.timelib_error_container;
}];

_library._timelib_tz_lookup_table = Struct({});
_library._timelib_tz_lookup_table.size = 1;

_library._preload['_timelib_tz_lookup_table'] = [function () {
    _library._timelib_tz_lookup_table.size = 0;
    _library._timelib_tz_lookup_table.defineProperty("name", ref.refType('char'));
    _library._timelib_tz_lookup_table.defineProperty("type", 'int');
    _library._timelib_tz_lookup_table.defineProperty("gmtoffset", 'float');
    _library._timelib_tz_lookup_table.defineProperty("full_tz_name", ref.refType('char'));
}];

_library._preload['timelib_tz_lookup_table'] = [function () {
    _library.timelib_tz_lookup_table = _library._timelib_tz_lookup_table;
}];

_library._timelib_tzdb_index_entry = Struct({});
_library._timelib_tzdb_index_entry.size = 1;

_library._preload['_timelib_tzdb_index_entry'] = [function () {
    _library._timelib_tzdb_index_entry.size = 0;
    _library._timelib_tzdb_index_entry.defineProperty("id", ref.refType('char'));
    _library._timelib_tzdb_index_entry.defineProperty("pos", 'uint');
}];

_library._preload['timelib_tzdb_index_entry'] = [function () {
    _library.timelib_tzdb_index_entry = _library._timelib_tzdb_index_entry;
}];

_library._timelib_tzdb = Struct({});
_library._timelib_tzdb.size = 1;

_library._preload['_timelib_tzdb'] = ['timelib_tzdb_index_entry', function () {
    _library._timelib_tzdb.size = 0;
    _library._timelib_tzdb.defineProperty("version", ref.refType('char'));
    _library._timelib_tzdb.defineProperty("index_size", 'int');
    _library._timelib_tzdb.defineProperty("index", ref.refType(_library.timelib_tzdb_index_entry));
    _library._timelib_tzdb.defineProperty("data", ref.refType('uchar'));
}];

_library._preload['timelib_tzdb'] = [function () {
    _library.timelib_tzdb = _library._timelib_tzdb;
}];

function loadDependentSymbols() {
}

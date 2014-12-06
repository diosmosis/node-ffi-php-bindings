var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../../');

loadDependentSymbols();

_library.timelib_tz_get_wrapper = ffi.Function(ref.refType(_library.timelib_tzinfo), [ref.refType('char'), ref.refType(_library._timelib_tzdb)]);

_library.timelib_day_of_week = ['longlong', ['longlong', 'longlong', 'longlong']];
_library._functions.push(_library.timelib_day_of_week);

_library.timelib_iso_day_of_week = ['longlong', ['longlong', 'longlong', 'longlong']];
_library._functions.push(_library.timelib_iso_day_of_week);

_library.timelib_day_of_year = ['longlong', ['longlong', 'longlong', 'longlong']];
_library._functions.push(_library.timelib_day_of_year);

_library.timelib_daynr_from_weeknr = ['longlong', ['longlong', 'longlong', 'longlong']];
_library._functions.push(_library.timelib_daynr_from_weeknr);

_library.timelib_days_in_month = ['longlong', ['longlong', 'longlong']];
_library._functions.push(_library.timelib_days_in_month);

_library.timelib_isoweek_from_date = ['void', ['longlong', 'longlong', 'longlong', ref.refType('longlong'), ref.refType('longlong')]];
_library._functions.push(_library.timelib_isoweek_from_date);

_library.timelib_valid_time = ['int', ['longlong', 'longlong', 'longlong']];
_library._functions.push(_library.timelib_valid_time);

_library.timelib_valid_date = ['int', ['longlong', 'longlong', 'longlong']];
_library._functions.push(_library.timelib_valid_date);

_library.timelib_strtotime = [ref.refType(_library.timelib_time), [ref.refType('char'), 'int', ref.refType(ref.refType(_library.timelib_error_container)), ref.refType(_library.timelib_tzdb), _library.timelib_tz_get_wrapper]];
_library._functions.push(_library.timelib_strtotime);

_library.timelib_parse_from_format = [ref.refType(_library.timelib_time), [ref.refType('char'), ref.refType('char'), 'int', ref.refType(ref.refType(_library.timelib_error_container)), ref.refType(_library.timelib_tzdb), _library.timelib_tz_get_wrapper]];
_library._functions.push(_library.timelib_parse_from_format);

_library.timelib_fill_holes = ['void', [ref.refType(_library.timelib_time), ref.refType(_library.timelib_time), 'int']];
_library._functions.push(_library.timelib_fill_holes);

_library.timelib_timezone_id_from_abbr = [ref.refType('char'), [ref.refType('char'), 'long', 'int']];
_library._functions.push(_library.timelib_timezone_id_from_abbr);

_library.timelib_timezone_abbreviations_list = [ref.refType(_library.timelib_tz_lookup_table), []];
_library._functions.push(_library.timelib_timezone_abbreviations_list);

_library.timelib_parse_tz_cor = ['long', [ref.refType(ref.refType('char'))]];
_library._functions.push(_library.timelib_parse_tz_cor);

_library.timelib_strtointerval = ['void', [ref.refType('char'), 'int', ref.refType(ref.refType(_library.timelib_time)), ref.refType(ref.refType(_library.timelib_time)), ref.refType(ref.refType(_library.timelib_rel_time)), ref.refType('int'), ref.refType(ref.refType(_library.timelib_error_container))]];
_library._functions.push(_library.timelib_strtointerval);

_library.timelib_update_ts = ['void', [ref.refType(_library.timelib_time), ref.refType(_library.timelib_tzinfo)]];
_library._functions.push(_library.timelib_update_ts);

_library.timelib_do_normalize = ['void', [ref.refType(_library.timelib_time)]];
_library._functions.push(_library.timelib_do_normalize);

_library.timelib_do_rel_normalize = ['void', [ref.refType(_library.timelib_time), ref.refType(_library.timelib_rel_time)]];
_library._functions.push(_library.timelib_do_rel_normalize);

_library.timelib_apply_localtime = ['int', [ref.refType(_library.timelib_time), 'uint']];
_library._functions.push(_library.timelib_apply_localtime);

_library.timelib_unixtime2gmt = ['void', [ref.refType(_library.timelib_time), 'longlong']];
_library._functions.push(_library.timelib_unixtime2gmt);

_library.timelib_unixtime2local = ['void', [ref.refType(_library.timelib_time), 'longlong']];
_library._functions.push(_library.timelib_unixtime2local);

_library.timelib_update_from_sse = ['void', [ref.refType(_library.timelib_time)]];
_library._functions.push(_library.timelib_update_from_sse);

_library.timelib_set_timezone_from_offset = ['void', [ref.refType(_library.timelib_time), 'longlong']];
_library._functions.push(_library.timelib_set_timezone_from_offset);

_library.timelib_set_timezone_from_abbr = ['void', [ref.refType(_library.timelib_time), _library.timelib_abbr_info]];
_library._functions.push(_library.timelib_set_timezone_from_abbr);

_library.timelib_set_timezone = ['void', [ref.refType(_library.timelib_time), ref.refType(_library.timelib_tzinfo)]];
_library._functions.push(_library.timelib_set_timezone);

_library.timelib_timezone_id_is_valid = ['int', [ref.refType('char'), ref.refType(_library.timelib_tzdb)]];
_library._functions.push(_library.timelib_timezone_id_is_valid);

_library.timelib_parse_tzfile = [ref.refType(_library.timelib_tzinfo), [ref.refType('char'), ref.refType(_library.timelib_tzdb)]];
_library._functions.push(_library.timelib_parse_tzfile);

_library.timelib_timestamp_is_in_dst = ['int', ['longlong', ref.refType(_library.timelib_tzinfo)]];
_library._functions.push(_library.timelib_timestamp_is_in_dst);

_library.timelib_get_time_zone_info = [ref.refType(_library.timelib_time_offset), ['longlong', ref.refType(_library.timelib_tzinfo)]];
_library._functions.push(_library.timelib_get_time_zone_info);

_library.timelib_get_current_offset = ['longlong', [ref.refType(_library.timelib_time)]];
_library._functions.push(_library.timelib_get_current_offset);

_library.timelib_dump_tzinfo = ['void', [ref.refType(_library.timelib_tzinfo)]];
_library._functions.push(_library.timelib_dump_tzinfo);

_library.timelib_builtin_db = [ref.refType(_library.timelib_tzdb), []];
_library._functions.push(_library.timelib_builtin_db);

_library.timelib_timezone_builtin_identifiers_list = [ref.refType(_library.timelib_tzdb_index_entry), [ref.refType('int')]];
_library._functions.push(_library.timelib_timezone_builtin_identifiers_list);

_library.timelib_parse_zone = ['long', [ref.refType(ref.refType('char')), ref.refType('int'), ref.refType(_library.timelib_time), ref.refType('int'), ref.refType(_library.timelib_tzdb), _library.timelib_tz_get_wrapper]];
_library._functions.push(_library.timelib_parse_zone);

_library.timelib_tzinfo_ctor = [ref.refType(_library.timelib_tzinfo), [ref.refType('char')]];
_library._functions.push(_library.timelib_tzinfo_ctor);

_library.timelib_time_tz_abbr_update = ['void', [ref.refType(_library.timelib_time), ref.refType('char')]];
_library._functions.push(_library.timelib_time_tz_abbr_update);

_library.timelib_time_tz_name_update = ['void', [ref.refType(_library.timelib_time), ref.refType('char')]];
_library._functions.push(_library.timelib_time_tz_name_update);

_library.timelib_tzinfo_dtor = ['void', [ref.refType(_library.timelib_tzinfo)]];
_library._functions.push(_library.timelib_tzinfo_dtor);

_library.timelib_tzinfo_clone = [ref.refType(_library.timelib_tzinfo), [ref.refType(_library.timelib_tzinfo)]];
_library._functions.push(_library.timelib_tzinfo_clone);

_library.timelib_rel_time_ctor = [ref.refType(_library.timelib_rel_time), []];
_library._functions.push(_library.timelib_rel_time_ctor);

_library.timelib_rel_time_dtor = ['void', [ref.refType(_library.timelib_rel_time)]];
_library._functions.push(_library.timelib_rel_time_dtor);

_library.timelib_rel_time_clone = [ref.refType(_library.timelib_rel_time), [ref.refType(_library.timelib_rel_time)]];
_library._functions.push(_library.timelib_rel_time_clone);

_library.timelib_time_ctor = [ref.refType(_library.timelib_time), []];
_library._functions.push(_library.timelib_time_ctor);

_library.timelib_time_set_option = ['void', [ref.refType(_library.timelib_time), 'int', ref.refType('void')]];
_library._functions.push(_library.timelib_time_set_option);

_library.timelib_time_dtor = ['void', [ref.refType(_library.timelib_time)]];
_library._functions.push(_library.timelib_time_dtor);

_library.timelib_time_clone = [ref.refType(_library.timelib_time), [ref.refType(_library.timelib_time)]];
_library._functions.push(_library.timelib_time_clone);

_library.timelib_time_offset_ctor = [ref.refType(_library.timelib_time_offset), []];
_library._functions.push(_library.timelib_time_offset_ctor);

_library.timelib_time_offset_dtor = ['void', [ref.refType(_library.timelib_time_offset)]];
_library._functions.push(_library.timelib_time_offset_dtor);

_library.timelib_error_container_dtor = ['void', [ref.refType(_library.timelib_error_container)]];
_library._functions.push(_library.timelib_error_container_dtor);

_library.timelib_date_to_int = ['long', [ref.refType(_library.timelib_time), ref.refType('int')]];
_library._functions.push(_library.timelib_date_to_int);

_library.timelib_dump_date = ['void', [ref.refType(_library.timelib_time), 'int']];
_library._functions.push(_library.timelib_dump_date);

_library.timelib_dump_rel_time = ['void', [ref.refType(_library.timelib_rel_time)]];
_library._functions.push(_library.timelib_dump_rel_time);

_library.timelib_decimal_hour_to_hms = ['void', ['double', ref.refType('int'), ref.refType('int'), ref.refType('int')]];
_library._functions.push(_library.timelib_decimal_hour_to_hms);

_library.timelib_ts_to_juliandate = ['double', ['longlong']];
_library._functions.push(_library.timelib_ts_to_juliandate);

_library.timelib_astro_rise_set_altitude = ['int', [ref.refType(_library.timelib_time), 'double', 'double', 'double', 'int', ref.refType('double'), ref.refType('double'), ref.refType('longlong'), ref.refType('longlong'), ref.refType('longlong')]];
_library._functions.push(_library.timelib_astro_rise_set_altitude);

_library.timelib_diff = [ref.refType(_library.timelib_rel_time), [ref.refType(_library.timelib_time), ref.refType(_library.timelib_time)]];
_library._functions.push(_library.timelib_diff);

_library.timelib_add = [ref.refType(_library.timelib_time), [ref.refType(_library.timelib_time), ref.refType(_library.timelib_rel_time)]];
_library._functions.push(_library.timelib_add);

_library.timelib_sub = [ref.refType(_library.timelib_time), [ref.refType(_library.timelib_time), ref.refType(_library.timelib_rel_time)]];
_library._functions.push(_library.timelib_sub);

function loadDependentSymbols() {
    require('./timelib_structs.js');
}
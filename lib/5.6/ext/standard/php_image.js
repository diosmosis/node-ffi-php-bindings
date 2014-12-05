var ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

_library.zif_getimagesize = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_getimagesize);

_library.zif_getimagesizefromstring = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_getimagesizefromstring);

_library.zif_image_type_to_mime_type = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_image_type_to_mime_type);

_library.zif_image_type_to_extension = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
_library._functions.push(_library.zif_image_type_to_extension);

_library.image_filetype = 'int32';

_library.zm_startup_imagetypes = ['int', ['int', 'int']];
_library._functions.push(_library.zm_startup_imagetypes);

_library.php_getimagetype = ['int', [ref.refType(_library.php_stream), ref.refType('char')]];
_library._functions.push(_library.php_getimagetype);

_library.php_image_type_to_mime_type = [ref.refType('char'), ['int']];
_library._functions.push(_library.php_image_type_to_mime_type);

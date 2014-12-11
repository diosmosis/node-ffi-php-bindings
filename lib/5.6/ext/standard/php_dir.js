var ffi = require('ffi'),
    ref = require('ref'),
    RefArray = require('ref-array'),
    Struct = require('ref-struct'),
    Union = require('ref-union'),
    _library = require('./../../');

loadDependentSymbols();

_library._preload['zm_startup_dir'] = [function () {
    _library.zm_startup_dir = ['int', ['int', 'int']];
    _library._functions['zm_startup_dir'] = _library.zm_startup_dir;
}];

_library._preload['zm_activate_dir'] = [function () {
    _library.zm_activate_dir = ['int', ['int', 'int']];
    _library._functions['zm_activate_dir'] = _library.zm_activate_dir;
}];

_library._preload['zif_opendir'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_opendir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_opendir'] = _library.zif_opendir;
}];

_library._preload['zif_closedir'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_closedir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_closedir'] = _library.zif_closedir;
}];

_library._preload['zif_chdir'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_chdir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_chdir'] = _library.zif_chdir;
}];

_library._preload['zif_chroot'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_chroot = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_chroot'] = _library.zif_chroot;
}];

_library._preload['zif_getcwd'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_getcwd = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_getcwd'] = _library.zif_getcwd;
}];

_library._preload['zif_rewinddir'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_rewinddir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_rewinddir'] = _library.zif_rewinddir;
}];

_library._preload['php_if_readdir'] = ['zval', 'pointer', 'zval', function () {
    _library.php_if_readdir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['php_if_readdir'] = _library.php_if_readdir;
}];

_library._preload['zif_getdir'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_getdir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_getdir'] = _library.zif_getdir;
}];

_library._preload['zif_glob'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_glob = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_glob'] = _library.zif_glob;
}];

_library._preload['zif_scandir'] = ['zval', 'pointer', 'zval', function () {
    _library.zif_scandir = ['void', ['int', ref.refType(_library.zval), ref.refType(ref.refType(_library.zval)), ref.refType(_library.zval), 'int']];
    _library._functions['zif_scandir'] = _library.zif_scandir;
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
}

var lib_path = process.argv[2];

var mod = require('../../lib/5.6');
mod.loadDependentSymbols();
mod.loadAllBindings();

console.log("Successfully required and loaded binding!");

mod(lib_path);

console.log("Successfully loaded libphp5.so!");

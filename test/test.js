var SystemJS = require('systemjs');
var assert = require('assert');

SystemJS.config({
    map: {
        wasm: './wasm.js'
    }
});
// loads './app.js' from the current directory
SystemJS.import('./fixtures/add.wasm!').then(function (module) {
    var add = module.default;
    console.log(add);
});

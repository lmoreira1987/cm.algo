"use strict";
exports.__esModule = true;
exports.hello = void 0;
function hello(world) {
    if (world === void 0) { world = 'world'; }
    console.log("Hello ".concat(world, "! "));
}
exports.hello = hello;
hello();

"use strict";
exports.__esModule = true;
exports.getNthFib = void 0;
// O(n) time | O(1) space
function getNthFib(n) {
    var preview = 0;
    var current = 0;
    for (var i = 0; i < n; i++) {
        if (i !== 0 && preview == 0 && current == 0)
            current = 1;
        else {
            var aux = current;
            current = preview + current;
            preview = aux;
        }
        console.log(current);
    }
    return current;
}
exports.getNthFib = getNthFib;
var n = 6;
console.log(getNthFib(n));

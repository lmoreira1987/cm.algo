"use strict";
exports.__esModule = true;
exports.isValidSubsequence = void 0;
function isValidSubsequence(array, sequence) {
    var pos = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === sequence[pos])
            pos++;
    }
    return pos === sequence.length;
}
exports.isValidSubsequence = isValidSubsequence;
var array = [5, 1, 22, 25, 6, -1, 8, 10];
var sequence = [1, 6, -1, 10];
console.log(isValidSubsequence(array, sequence));

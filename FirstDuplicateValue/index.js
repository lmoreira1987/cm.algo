"use strict";
exports.__esModule = true;
exports.firstDuplicateValue = void 0;
// Space = O(N) | Time = O(N)
function firstDuplicateValue(array) {
    var mySet = new Set();
    for (var index = 0; index < array.length; index++) {
        var newValue = array[index];
        if (mySet.has(newValue))
            return newValue;
        mySet.add(newValue);
    }
    return -1;
}
exports.firstDuplicateValue = firstDuplicateValue;
var array = [2, 1, 5, 2, 3, 3, 4];
console.log(firstDuplicateValue(array));

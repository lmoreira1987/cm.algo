"use strict";
exports.__esModule = true;
exports.insertionSort = void 0;
// Space = O(1) | Time = O(N^2)
function insertionSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i; 0 <= j; j--) {
            var current = array[j];
            var next = array[j + 1];
            if (next !== undefined && next < current) {
                // swap
                var auxNext = next;
                array[j] = auxNext;
                array[j + 1] = current;
                console.log("".concat(current, " - ").concat(next));
            }
        }
    }
    return array;
}
exports.insertionSort = insertionSort;
var array = [8, 5, 2, 9, 5, 6, 3];
console.log(insertionSort(array));

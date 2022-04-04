"use strict";
exports.__esModule = true;
exports.bubbleSort = void 0;
// O time | O space
function bubbleSort(array) {
    var arrayLength = array.length;
    var didSwap = false;
    var aux;
    for (var i = 0; i < array.length; i++) {
        var temp = 0;
        while (temp < arrayLength - 1) {
            console.log("".concat(array[temp], " ").concat(array[temp + 1]));
            if (array[temp] > array[temp + 1]) {
                didSwap = true;
                aux = array[temp];
                array[temp] = array[temp + 1];
                array[temp + 1] = aux;
            }
            temp++;
        }
        if (!didSwap)
            break;
        console.log("Times: ", i);
        arrayLength--;
    }
    return array;
}
exports.bubbleSort = bubbleSort;
var array = [8, 5, 2, 9, 5, 6, 3];
console.log(bubbleSort(array));

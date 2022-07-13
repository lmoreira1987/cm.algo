"use strict";
// Time = O(nlogn) [because we have to sort the list] | Space = O(1) [Dont need extra space]
exports.__esModule = true;
exports.selectionSort = void 0;
function selectionSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        var swap = array[i];
        var swapIndex = i + 1;
        var isSwap = false;
        for (var j = i + 1; j < array.length; j++) {
            if (swap > array[j]) {
                swap = array[j];
                swapIndex = j;
                isSwap = true;
            }
        }
        selectionSwap(array, i, swapIndex, isSwap);
        console.log(array);
    }
    return array;
}
exports.selectionSort = selectionSort;
/*
[2, 5, 8, 9, 5, 6, 3];

swap            = 8
swapindex       = 0
array[i]        = 5
swap > array[i] = true
swap            = 5;
swapIndex       = 1;

*/
function selectionSwap(array, i, swapIndex, isSwap) {
    if (!isSwap)
        return;
    // console.log("i: \t\t", i)
    var aux = array[i]; // 8
    // console.log("aux \t\t", aux)
    array[i] = array[swapIndex]; //
    // console.log("array[i] \t", array[i])
    array[swapIndex] = aux;
    // console.log("array[swapIndex]", array[swapIndex])
}
var array = [8, 5, 2, 9, 5, 6, 3];
console.log(selectionSort(array));

"use strict";
// Time = O(logN) [Get rid of middle of array every iteration] | Space = O(1) [I didnt have to create a new list]
exports.__esModule = true;
exports.binarySearch = void 0;
function binarySearch(array, target) {
    var leftPointer = 0;
    var rightPointer = array.length - 1;
    var middlePointer = 0;
    while (leftPointer <= rightPointer) {
        middlePointer = Math.floor((leftPointer + rightPointer) / 2);
        // console.log("middlePointer", middlePointer)
        var middleNumber = array[middlePointer];
        if (middleNumber === target)
            return middlePointer;
        else if (middleNumber > target)
            rightPointer = middlePointer - 1;
        else
            leftPointer = middlePointer + 1;
        // console.log("left", leftPointer);
        // console.log("right", rightPointer);
    }
    return -1;
}
exports.binarySearch = binarySearch;
var array = [0, 1, 21, 33, 45, 61, 71, 72, 73];
console.log(binarySearch(array, 33));

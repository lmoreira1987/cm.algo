"use strict";
exports.__esModule = true;
exports.findThreeLargestNumbers = void 0;
// Space = O(1) | Time = O(N)
function findThreeLargestNumbers(array) {
    var threeLargestNumbers = [array[0], array[1], array[2]];
    sortArray(threeLargestNumbers);
    for (var i = 3; i < array.length; i++) {
        if (array[i] > threeLargestNumbers[0]) {
            threeLargestNumbers[0] = array[i];
            sortArray(threeLargestNumbers);
        }
    }
    return threeLargestNumbers;
}
exports.findThreeLargestNumbers = findThreeLargestNumbers;
function sortArray(threeLargestNumbers) {
    if (threeLargestNumbers[0] > threeLargestNumbers[1])
        swap(threeLargestNumbers, 0, 1);
    if (threeLargestNumbers[1] > threeLargestNumbers[2])
        swap(threeLargestNumbers, 1, 2);
    if (threeLargestNumbers[0] > threeLargestNumbers[1])
        swap(threeLargestNumbers, 0, 1);
}
function swap(threeLargestNumbers, index0, index1) {
    var aux = threeLargestNumbers[index0];
    threeLargestNumbers[index0] = threeLargestNumbers[index1];
    threeLargestNumbers[index1] = aux;
}
var array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
console.log(findThreeLargestNumbers(array));

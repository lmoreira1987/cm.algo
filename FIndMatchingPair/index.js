"use strict";
// Time = O(n) [because we have to sort the list] | Space = O(1) [Dont need extra space]
exports.__esModule = true;
exports.findMatchingPair = void 0;
function findMatchingPair(array, sum) {
    var mySet = new Set(); // npm install -D @types/node
    // sum - current value = find pair inside hashset
    for (var i = 0; i < array.length; i++) {
        if (mySet.has(sum - array[i]))
            return true;
        mySet.add(array[i]);
        console.log(mySet);
    }
    return false;
}
exports.findMatchingPair = findMatchingPair;
//const array = [1, 2, 3, 9];
var array = [1, 2, 4, 11, 4, 5];
var sum = 8;
console.log(findMatchingPair(array, sum));

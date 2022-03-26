"use strict";
exports.__esModule = true;
exports.sortedSquaredArray = void 0;
function sortedSquaredArray(array) {
    var squaredArray = [];
    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        var squaredNum = num * num;
        squaredArray[i] = squaredNum;
    }
    squaredArray.sort(function (a, b) { return a - b; });
    return squaredArray;
}
exports.sortedSquaredArray = sortedSquaredArray;
// export function sortedSquaredArray(array: number[]) {	
// 	let squaredArray: number[] = [];
//     for (let i: number = 0; i < array.length; i++) {
//         let num = array[i];
// 		squaredArray[i] = num * num;
// 	}
//     return squaredArray;
// }
var array = [5, 1, 22, 25, 6, -1, 8, 10];
console.log(sortedSquaredArray(array));

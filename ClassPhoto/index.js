"use strict";
exports.__esModule = true;
exports.classPhotos = void 0;
// O(nLogn) time | O(1) space
function classPhotos(redShirtHeights, blueShirtHeights) {
    // Reverse both arrays
    var redShirtHeightsReverse = redShirtHeights.sort(function (a, b) { return (a > b ? -1 : 1); });
    var blueShirtHeightsReverse = blueShirtHeights.sort(function (a, b) { return (a > b ? -1 : 1); });
    // find where is the tallest student
    var TALLEST = redShirtHeightsReverse[0] > blueShirtHeightsReverse[0] ? "RED" : "BLUE";
    var arrayLength = redShirtHeights.length; // both array has the same length
    var isSortedRow = false;
    for (var i = 0; i < arrayLength; i++) {
        if (TALLEST === "RED")
            isSortedRow = compareHeights(redShirtHeightsReverse[i], blueShirtHeightsReverse[i]);
        else
            isSortedRow = compareHeights(blueShirtHeightsReverse[i], redShirtHeightsReverse[i]);
        if (!isSortedRow)
            break;
    }
    return isSortedRow;
}
exports.classPhotos = classPhotos;
function compareHeights(a, b) {
    return (a > b);
}
// export function bubbleSort(array: number[]) {
// 	let arrayLength = array.length;
// 	let didSwap = false;
// 	let aux;
// 	for (let i: number = 0; i < array.length; i++) {
// 		let temp = 0;
// 		while(temp < arrayLength - 1) {
// 			console.log(`${array[temp]} ${array[temp+1]}`)
// 			if (array[temp] > array[temp+1]) {
// 				didSwap = true;
// 				aux = array[temp];
// 				array[temp] = array[temp+1];
// 				array[temp+1] = aux;
// 			}
// 			temp++;
// 		}
// 		if (!didSwap) break;
// 		console.log("Times: ", i)
// 		arrayLength--;
// 	}
//   	return array;
// }
var redShirtHeights = [5, 9, 1, 3, 4];
var blueShirtHeights = [6, 9, 2, 4, 5];
console.log(classPhotos(redShirtHeights, blueShirtHeights));

"use strict";
exports.__esModule = true;
exports.zigzagTraverse = void 0;
function zigzagTraverse(array) {
    var result = [];
    var height = array.length - 1;
    var width = array[0].length - 1;
    var col = 0;
    var row = 0;
    var isGoingDown = true;
    // isInsideOfBounds
    while (col >= 0 && col <= width && row >= 0 && row <= height) {
        result.push(array[row][col]);
        if (isGoingDown) {
            if (col === 0 || row === height) {
                isGoingDown = false;
                if (row === height) {
                    col++;
                }
                else {
                    row++;
                }
            }
            else {
                row++;
                col--;
            }
        }
        else {
            if (row === 0 || col === width) {
                isGoingDown = true;
                if (col === width) {
                    row++;
                }
                else {
                    col++;
                }
            }
            else {
                col++;
                row--;
            }
        }
        console.log("col:", col);
        console.log("width:", width);
        console.log("row:", row);
        console.log("height:", height);
        console.log("---");
    }
    return result;
}
exports.zigzagTraverse = zigzagTraverse;
var array = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
];
console.log(zigzagTraverse(array));

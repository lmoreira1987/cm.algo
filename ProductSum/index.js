"use strict";
exports.__esModule = true;
exports.productSum = void 0;
// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, level, result) {
    if (level === void 0) { level = 1; }
    if (result === void 0) { result = 0; }
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (Array.isArray(element)) {
            sum += productSum(element, level + 1, result);
        }
        else {
            sum += element;
        }
    }
    // if (sum != 0)
    //   result = result + level * sum;
    return level * sum;
}
exports.productSum = productSum;
var array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
// Result: 5 + 2 + level2 * temp1
// Temp1: 7 - 1
console.log(productSum(array));

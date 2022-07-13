"use strict";
// Time = O(nlogn) [because we have to sort the list] | Space = O(1) [Dont need extra space]
exports.__esModule = true;
exports.minimumWaitingTime = void 0;
// export function minimumWaitingTime(queries: number[]) {
//   queries.sort((a, b) => a - b);
//   let sum: number = 0;
//   let total: number = 0;
//   for (let i: number = 0; i < queries.length - 1; i++) {
//     sum = sum + queries[i];
//     total = total + sum;
//   }
//   return total;
// }
function minimumWaitingTime(queries) {
    queries.sort(function (a, b) { return a - b; });
    var total = 0;
    for (var i = 0; i < queries.length - 1; i++) {
        console.log("(queries.length - i)", (queries.length - i));
        console.log("queries[i] * (queries.length - i)", queries[i] * (queries.length - i));
        total += queries[i] * (queries.length - (i + 1));
    }
    return total;
}
exports.minimumWaitingTime = minimumWaitingTime;
var queries = [3, 2, 1, 2, 6];
console.log(minimumWaitingTime(queries));
// Sort
// 1 2 2 3 6
// Sum
// (0) + (1) + (1+2) + (3+2) + (5+3) = 1+3+5+8 ) 17

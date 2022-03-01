"use strict";
exports.__esModule = true;
exports.twoNumberSum = void 0;
function twoNumberSum(array, targetSum) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] + array[j] === targetSum && array[i] !== array[j]) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}
exports.twoNumberSum = twoNumberSum;
// export function twoNumberSum(array: number[], targetSum: number) {
// 	var nums: number[] = [];
//     debugger
// 	for (let num of nums) {
// 		let potentialMatch = targetSum - num;
// 		if (potentialMatch in nums)
// 			return [potentialMatch, num];
// 		else
// 			nums[num] = 1;
// 	}
//   return [];
// }
var array = [3, 5, -4, 8, 11, 1, -1, 6];
var targetSum = 10;
console.log(twoNumberSum(array, targetSum));
// export function hello(world: string = 'world'): void {
//   console.log(`Hello ${world}! `);
// }
// hello();

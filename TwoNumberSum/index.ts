export function twoNumberSum(array: number[], targetSum: number) {
    for (let i: number = 0; i < array.length; i++) {
        for (let j: number = 0; j < array.length; j++) {
            if (array[i] + array[j] === targetSum && array[i] !== array[j]) {
                return [array[i], array[j]];
            }            
        }
    }
    
    return [];
}

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


let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumberSum(array, targetSum));



// export function hello(world: string = 'world'): void {
//   console.log(`Hello ${world}! `);
// }

// hello();
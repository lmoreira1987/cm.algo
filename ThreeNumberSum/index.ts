type Triplet = [number, number, number];

// Time = O(n^2) | Space = O(n)
export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  array.sort((a, b) => a - b);

  let triplets: Triplet[] = [];
  
  for (let i = 0; i < array.length - 2; i++) {
    let L = i + 1;
    let R = array.length-1;
    
    while (array[L] < array[R]) {
      let sum = array[i] + array[L] + array[R];
      if (sum === targetSum) {
        triplets.push([array[i], array[L], array[R]]);
        R--;
        L++;
      } else if (sum > targetSum) 
        R--;
      else if (sum < targetSum) 
        L++;
    }
  }
  // S = CN + L + R
  // if S = target than push the array and go to the next step 

  // move both if we already have the answer and still have numbers

  // move left to right if sum is less than target

  // move right to left if sum is greater than target

  // if L is greater than R we restart the search with CN + 1, L = CNindex + 1, R = array length

  
  return triplets;
}


const targetSum = 0;
const array = [12, 3, 1, 2, -6, 5, -8, 6];

console.log(threeNumberSum(array, targetSum));
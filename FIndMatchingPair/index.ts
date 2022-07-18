// Time = O(n) | Space = O(n)

export function findMatchingPair(array: number[], sum: number) {
  const mySet: Set<number> = new Set<number>(); // npm install -D @types/node

  // sum - current value = find pair inside hashset
  for (let i: number = 0; i < array.length; i++) {
    if (mySet.has(sum - array[i]))
      return true
    mySet.add(array[i]);
    console.log(mySet);
  }
  
  return false;
}

// const array = [1, 2, 3, 9];
// const array = [1, 2, 4, 11, 4, 5];
const array = [1, 2, 4, 4];
const sum = 8;

console.log(findMatchingPair(array, sum));
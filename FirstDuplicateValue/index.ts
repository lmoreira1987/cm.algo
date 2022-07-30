// Space = O(N) | Time = O(N)
export function firstDuplicateValue(array: number[]) {
  const mySet = new Set();
  for (let index = 0; index < array.length; index++) {
    let newValue = array[index];
    if (mySet.has(newValue))
      return newValue;

    mySet.add(newValue);
  }
  
  return -1;
}

let array = [2, 1, 5, 2, 3, 3, 4];

console.log(firstDuplicateValue(array));
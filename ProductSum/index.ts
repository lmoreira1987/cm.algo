// Space = O(d)[d = greatest depth of special array] | Time = O(n)
type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, level = 1, result = 0) {
  let sum = 0;
  for (let element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, level + 1, result);
    } else {
      sum += element;
    }
  }

  return level * sum;
}

let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

console.log(productSum(array));
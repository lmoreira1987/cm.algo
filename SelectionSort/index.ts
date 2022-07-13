// Time = O(n^2) [2 for] | Space = O(1) [I didnt have to create a new list, for instance]

export function selectionSort(array: number[]) {
  for (let i: number = 0; i < array.length-1; i++) {
    let swap: number = array[i];
    let swapIndex = i+1;
    let isSwap = false;
    for (let j: number = i+1; j < array.length; j++) {
      if (swap > array[j]) {
        swap = array[j];
        swapIndex = j;
        isSwap = true;
      }
    }

    selectionSwap (array, i, swapIndex, isSwap);
    // console.log(array);
  }

  return array;
}

function selectionSwap(array: number[], i: number, swapIndex: number, isSwap: boolean) {
  if (!isSwap) return;
  // console.log("i: \t\t", i)
  const temp = array[i];           // 8
  // console.log("aux \t\t", aux)

  array[i] = array[swapIndex];  //
  // console.log("array[i] \t", array[i])

  array[swapIndex] = temp;
  // console.log("array[swapIndex]", array[swapIndex])
}

const array = [8, 5, 2, 9, 5, 6, 3];

console.log(selectionSort(array));
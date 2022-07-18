// // Space = O( ) | Time = O( )
// export function findThreeLargestNumbers(array: number[]) {
//   const min = -9999 //Number.MIN_VALUE;

//   let temp = [min, min, min];

//   for (let i: number = 0; i < array.length - 1; i++) {
//     // swap(temp, array[i]);
//     if (array[i] > temp[0]) {
//       selectionSwap(temp, array[i], 0)
//       continue;
//     }

//     if (temp[0] > temp[1]) {
//       selectionSwap(temp, temp[0], 1)
//       continue;
//     }

//     if (temp[1] > temp[2]) {
//       selectionSwap(temp, temp[1], 2)
//       continue;
//     }
    
//   }

//   return temp;
// }

// // function swap(temp: number[], num: number) {
// //   if (temp[0] < num)
// //     temp[0] = num
// // }

// function selectionSwap(array: number[], i: number, swapIndex: number) {
//   const temp = array[i];

//   array[i] = array[swapIndex];
//   array[swapIndex] = temp;
// }

// const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

// // Sample Output
// // [18, 141, 541]

// console.log(findThreeLargestNumbers(array));
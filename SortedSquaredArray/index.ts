export function sortedSquaredArray(array: number[]) {	
	let squaredArray: number[] = [];

    for (let i: number = 0; i < array.length; i++) {
        let num = array[i];
        let squaredNum = num * num;

        squaredArray[i] = squaredNum;
	}

    squaredArray.sort((a, b) => a - b);
    return squaredArray;
}


// export function sortedSquaredArray(array: number[]) {	
// 	let squaredArray: number[] = [];

//     for (let i: number = 0; i < array.length; i++) {
//         let num = array[i];
// 		squaredArray[i] = num * num;
// 	}

//     return squaredArray;
// }




let array = [5, 1, 22, 25, 6, -1, 8, 10];

console.log(sortedSquaredArray(array));

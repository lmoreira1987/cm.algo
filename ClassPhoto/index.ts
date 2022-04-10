// O(nLogn) time | O(1) space
export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
	// Reverse both arrays
	const redShirtHeightsReverse = redShirtHeights.sort((a,b) => (a > b ? -1 : 1));
	const blueShirtHeightsReverse = blueShirtHeights.sort((a,b) => (a > b ? -1 : 1));
  
    // find where is the tallest student
	const TALLEST = redShirtHeightsReverse[0] > blueShirtHeightsReverse[0] ? "RED" : "BLUE";
	const arrayLength = redShirtHeights.length; // both array has the same length
	let isSortedRow = false;

	for (let i: number = 0; i < arrayLength; i++) {
		if (TALLEST === "RED")
			isSortedRow = compareHeights(redShirtHeightsReverse[i], blueShirtHeightsReverse[i]);
		else	
			isSortedRow = compareHeights(blueShirtHeightsReverse[i], redShirtHeightsReverse[i]);

		if (!isSortedRow) break;
	}
	  
	return isSortedRow;
}

function compareHeights(a: any, b: any) {
	return (a > b);
}

// export function bubbleSort(array: number[]) {
// 	let arrayLength = array.length;
// 	let didSwap = false;
// 	let aux;

// 	for (let i: number = 0; i < array.length; i++) {
// 		let temp = 0;
// 		while(temp < arrayLength - 1) {
// 			console.log(`${array[temp]} ${array[temp+1]}`)
// 			if (array[temp] > array[temp+1]) {
// 				didSwap = true;
// 				aux = array[temp];
// 				array[temp] = array[temp+1];
// 				array[temp+1] = aux;
// 			}
	
// 			temp++;
// 		}

// 		if (!didSwap) break;
// 		console.log("Times: ", i)
// 		arrayLength--;
// 	}

//   	return array;
// }

let redShirtHeights = [5, 9, 1, 3, 4];
let blueShirtHeights = [6, 9, 2, 4, 5];

console.log(classPhotos(redShirtHeights, blueShirtHeights));

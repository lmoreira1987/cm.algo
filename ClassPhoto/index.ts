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

let redShirtHeights = [5, 8, 1, 3, 4];
let blueShirtHeights = [6, 9, 2, 4, 5];

console.log(classPhotos(redShirtHeights, blueShirtHeights));

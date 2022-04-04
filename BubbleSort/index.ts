// O(n^2) time | O(1) space
export function bubbleSort(array: number[]) {
	let arrayLength = array.length;
	let didSwap = false;
	let aux;

	for (let i: number = 0; i < array.length; i++) {
		let temp = 0;
		while(temp < arrayLength - 1) {
			console.log(`${array[temp]} ${array[temp+1]}`)
			if (array[temp] > array[temp+1]) {
				didSwap = true;
				aux = array[temp];
				array[temp] = array[temp+1];
				array[temp+1] = aux;
			}
	
			temp++;
		}

		if (!didSwap) break;
		console.log("Times: ", i)
		arrayLength--;
	}

  	return array;
}

let array = [8, 5, 2, 9, 5, 6, 3];

console.log(bubbleSort(array));

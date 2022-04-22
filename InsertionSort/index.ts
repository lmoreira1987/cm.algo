// Space = O(1) | Time = O(N^2)
export function insertionSort(array: number[]) {

	for (let i: number = 0; i < array.length; i++) {
		for (let j: number = i; 0 <= j; j--) {
			let current = array[j];
			let next = array[j+1];
			if (next !== undefined &&  next < current) {
				// swap
				let auxNext = next;
				array[j] = auxNext;
				array[j+1] = current;

				console.log(`${current} - ${next}`);
			}
		}
	}

	return array;
}

let array = [8, 5, 2, 9, 5, 6, 3];

console.log(insertionSort(array));

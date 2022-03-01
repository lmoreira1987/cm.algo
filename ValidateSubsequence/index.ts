export function isValidSubsequence(array: number[], sequence: number[]) {	
	let pos = 0;
	for (let i: number = 0; i < array.length; i++) {
		if (array[i] === sequence[pos]) pos++;						
	}

	return pos === sequence.length;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));

// O(n) time | O(1) space
export function getNthFib(n: number) {
	let preview = 0;
	let current = 0;

	for (let i: number = 0; i < n; i++) {
		if (i!== 0 && preview == 0 && current == 0)
			current = 1;
		else {
			let aux = current;
			current = preview + current;
			preview = aux;
		}

		//console.log(current)
	}

	return current;
}

const n = 6

console.log(getNthFib(n));

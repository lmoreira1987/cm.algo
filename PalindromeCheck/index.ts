// Space = O(1) | Time = O(N)
export function isPalindrome(string: string) {
  let palindromeIndex = string.length-1;

  for (let i: number = 0; i < string.length; i++) {
	console.log(`${i} = ${palindromeIndex} - ${string[i]} x ${string[palindromeIndex]}`);
	if (i === palindromeIndex || i >= palindromeIndex) return true;

	if (string[i] !== string[palindromeIndex]) break;

	palindromeIndex--;
  }

  return false;
}

let string = "abcdcba"; // true
//let string = "abcdecba"; // false
//let string = "abcddcba"; // true
//let string = "abcdcb2a"; // false

console.log(isPalindrome(string));
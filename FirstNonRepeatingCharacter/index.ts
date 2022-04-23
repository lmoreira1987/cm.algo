// Space = O(N) | Time = O(N)
export function firstNonRepeatingCharacter(string: string) {
  let characters: { [key: string]: number } = {};

  for (let i: number = 0; i < string.length; i++) {
    if (!(string[i] in characters)) characters[string[i]] = 0;
    
    characters[string[i]] += 1;
  }

  for (let i: number = 0; i < string.length; i++) {
    if (characters[string[i]] === 1) return i;
  }

  console.log(characters)
  
  return -1;
}

let string = "abcdcaf";

console.log(firstNonRepeatingCharacter(string));
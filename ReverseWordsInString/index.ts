// Space = O(N) | Time = O(N)
// Replace _ to blank space
export function reverseWordsInString(sentence: string) {
  let array = new Array();
  let subString = '';
  let whiteSpaceCounter = '';

  for (let i: number = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      subString += sentence[i];
      if (whiteSpaceCounter.length > 0) array.push('_');
      whiteSpaceCounter = '';
    } else {
      whiteSpaceCounter += '_';
      if (subString.length > 0) array.push(subString);
      subString = ''; 
    }
  }

  if (whiteSpaceCounter !== '') array.push(whiteSpaceCounter);
  if (subString !== '') array.push(subString);

  let newSentence = '';
  for (let i: number = array.length; i > 0; i--) {
    newSentence += array.pop();
  }
  
  return newSentence;
}


let sentence = "this      string     has a     lot of   whitespace";
// let sentence = "test        ";

console.log(reverseWordsInString(sentence));
"use strict";
exports.__esModule = true;
exports.reverseWordsInString = void 0;
// Space = O(N) | Time = O(N)
// Replace _ to blank space
function reverseWordsInString(sentence) {
    var array = new Array();
    var subString = '';
    var whiteSpaceCounter = '';
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            subString += sentence[i];
            if (whiteSpaceCounter.length > 0)
                array.push('_');
            whiteSpaceCounter = '';
        }
        else {
            whiteSpaceCounter += '_';
            if (subString.length > 0)
                array.push(subString);
            subString = '';
        }
    }
    if (whiteSpaceCounter !== '')
        array.push(whiteSpaceCounter);
    if (subString !== '')
        array.push(subString);
    var newSentence = '';
    for (var i = array.length; i > 0; i--) {
        newSentence += array.pop();
    }
    return newSentence;
}
exports.reverseWordsInString = reverseWordsInString;
var sentence = "this      string     has a     lot of   whitespace";
// let sentence = "test        ";
console.log(reverseWordsInString(sentence));

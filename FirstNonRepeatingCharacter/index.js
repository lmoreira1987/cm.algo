"use strict";
exports.__esModule = true;
exports.firstNonRepeatingCharacter = void 0;
// Space = O(1) | Time = O(N)
function firstNonRepeatingCharacter(string) {
    var characters = {};
    for (var i = 0; i < string.length; i++) {
        if (!(string[i] in characters))
            characters[string[i]] = 0;
        characters[string[i]] += 1;
    }
    for (var i = 0; i < string.length; i++) {
        if (characters[string[i]] === 1)
            return i;
    }
    console.log(characters);
    return -1;
}
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
var string = "abcdcaf";
console.log(firstNonRepeatingCharacter(string));

"use strict";
exports.__esModule = true;
exports.generateDocument = void 0;
// Time: O(n+m) | Space: O(c)
function generateDocument(characters, document) {
    var charactersArray = Array.from(characters);
    var documentArray = Array.from(document);
    var chars = {};
    for (var _i = 0, charactersArray_1 = charactersArray; _i < charactersArray_1.length; _i++) {
        var c = charactersArray_1[_i];
        if (!(c in chars))
            chars[c] = 0;
        chars[c] += 1;
    }
    for (var _a = 0, documentArray_1 = documentArray; _a < documentArray_1.length; _a++) {
        var d = documentArray_1[_a];
        if (!(d in chars) || chars[d] === 0)
            return false;
        chars[d] -= 1;
    }
    console.log(chars);
    return true;
}
exports.generateDocument = generateDocument;
var characters = "Bste!hetsi ogEAxpelrt x "; // extra x is possible
var document = "AlgoExpert is the Best!";
console.log(generateDocument(characters, document));

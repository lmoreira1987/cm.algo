"use strict";
exports.__esModule = true;
exports.isPalindrome = void 0;
// Space = O(1) | Time = O(N)
function isPalindrome(string) {
    var palindromeIndex = string.length - 1;
    for (var i = 0; i < string.length; i++) {
        console.log("".concat(i, " = ").concat(palindromeIndex, " - ").concat(string[i], " x ").concat(string[palindromeIndex]));
        if (i === palindromeIndex || i >= palindromeIndex)
            return true;
        if (string[i] !== string[palindromeIndex])
            break;
        palindromeIndex--;
    }
    return false;
}
exports.isPalindrome = isPalindrome;
var string = "abcdcba"; // true
//let string = "abcdecba"; // false
//let string = "abcddcba"; // true
//let string = "abcdcb2a"; // false
console.log(isPalindrome(string));

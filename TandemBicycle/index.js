"use strict";
exports.__esModule = true;
exports.tandemBicycle = void 0;
// Time: O(nLog(n)) | Space: O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    var redSorted = redShirtSpeeds.sort(function (a, b) { return b - a; });
    var blueSorted = blueShirtSpeeds.sort(function (a, b) { return fastest ? a - b : b - a; });
    var tandem = 0;
    for (var i in blueShirtSpeeds) {
        tandem += Math.max(redSorted[i], blueSorted[i]);
    }
    return tandem;
}
exports.tandemBicycle = tandemBicycle;
var redShirtSpeeds = [5, 5, 3, 9, 2];
var blueShirtSpeeds = [3, 6, 7, 2, 1];
var fastest = false;
console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest));

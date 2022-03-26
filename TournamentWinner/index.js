"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.tournamentWinner = void 0;
function tournamentWinner(competitions, results) {
    var teamsMap = new Map();
    var pointers = 3;
    for (var i = 0; i < competitions.length; i++) {
        if (teamsMap.get(competitions[i][0]) === undefined)
            teamsMap.set(competitions[i][0], 0);
        if (teamsMap.get(competitions[i][1]) === undefined)
            teamsMap.set(competitions[i][1], 0);
        var matchWinnerResult = results[i] === 0 ? 1 : 0;
        var matchWinner = competitions[i][matchWinnerResult];
        teamsMap.set(matchWinner, teamsMap.get(matchWinner) + pointers); // ! means get the value once it is not undefined
    }
    var teamsMapSorted = new Map(__spreadArray([], __read(teamsMap.entries()), false).sort(function (a, b) { return b[1] - a[1]; }));
    var champion = __spreadArray([], __read(teamsMapSorted), false)[0][0];
    return champion;
}
exports.tournamentWinner = tournamentWinner;
//var competitions = [["html", "c#"], ["c#", "python"], ["python", "html"], ["html", "c#"],];
var competitions = [["html", "c#"], ["c#", "python"], ["python", "html"]];
var results = [0, 0, 1];
console.log(tournamentWinner(competitions, results));

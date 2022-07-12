"use strict";
// Space = O( ) | Time = O( )
exports.__esModule = true;
exports.nonConstructibleChange = void 0;
function nonConstructibleChange(coins) {
    if (coins.length <= 1 && coins[0] != 1)
        return 1;
    coins.sort(function (a, b) { return a - b; });
    var change = 0;
    for (var i = 0; i < coins.length; i++) {
        change += coins[i];
        if (change + 1 < coins[i + 1])
            break;
    }
    return change + 1;
}
exports.nonConstructibleChange = nonConstructibleChange;
//const coins = [1, 2, 5];
// minimum amount is 4
// -- 1 + 2 = 3
var coins = [5, 7, 1, 1, 2, 3, 22];
// no coins
//const coins: number[] = [87];
console.log(nonConstructibleChange(coins));

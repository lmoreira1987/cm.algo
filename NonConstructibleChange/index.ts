// Space = O(nlogn) [because we have to sort the list] | Time = O(1)

export function nonConstructibleChange(coins: number[]) {
  if (coins.length <= 1 && coins[0] != 1) return 1;

  coins.sort((a, b) => a - b);

  let change = 0;
  for (let i = 0; i < coins.length; i++) {
    change += coins[i];

    if (change + 1 < coins[i+1]) break;
  }

  return change + 1;
}

//const coins = [1, 2, 5];
// minimum amount is 4
// -- 1 + 2 = 3

const coins = [5, 7, 1, 1, 2, 3, 22];

// no coins
//const coins: number[] = [87];

console.log(nonConstructibleChange(coins));
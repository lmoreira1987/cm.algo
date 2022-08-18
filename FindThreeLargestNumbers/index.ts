// Space = O(1) | Time = O(N)
export function findThreeLargestNumbers(array: number[]) {
    let threeLargestNumbers: Array<number> = [array[0], array[1], array[2]];

    sortArray(threeLargestNumbers);

    for (let i = 3; i < array.length; i++) {
        if (array[i] > threeLargestNumbers[0]) {
            threeLargestNumbers[0] = array[i];
            sortArray(threeLargestNumbers);
        }
    }
    
    return threeLargestNumbers;
}

function sortArray(threeLargestNumbers: Array<number>) {
    if (threeLargestNumbers[0] > threeLargestNumbers[1])
        swap(threeLargestNumbers, 0, 1)

    if (threeLargestNumbers[1] > threeLargestNumbers[2])
        swap(threeLargestNumbers, 1, 2)

    if (threeLargestNumbers[0] > threeLargestNumbers[1])
        swap(threeLargestNumbers, 0, 1)
}

function swap(threeLargestNumbers: Array<number>, index0: number, index1: number) {
    let aux = threeLargestNumbers[index0];
    threeLargestNumbers[index0] = threeLargestNumbers[index1];
    threeLargestNumbers[index1] = aux;
}

const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
  
console.log(findThreeLargestNumbers(array));
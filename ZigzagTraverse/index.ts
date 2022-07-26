// Time O(n)[while through all values in the array] | Space O(n) [create an array]

export function zigzagTraverse(array: number[][]) {
    const result = [];
    let height = array.length - 1;
    let width = array[0].length - 1;

    let col = 0;
    let row = 0;
    
    let isGoingDown = true;

    // isInsideOfBounds
    while (col >= 0 && col <= width && row >= 0 && row <= height) { 
        result.push(array[row][col]);

        if (isGoingDown) {
            if (col === 0 || row === height) {
                isGoingDown = false;
                if (row === height) {
                    col++;
                } else {
                    row++;
                }
            }
            else {
                row++;
                col--;
            }
        } else {
            if (row === 0 || col === width) {
                isGoingDown = true;
                if (col === width) {
                    row++;
                } else {
                    col++;
                }
            }
            else {
                col++;
                row--;
            }
        }

        console.log("col:", col);
        console.log("width:", width);
        console.log("row:", row);
        console.log("height:", height);
        console.log("---")
    }

    return result;
}

let array = [
    [1,  3,  4, 10],
    [2,  5,  9, 11],
    [6,  8, 12, 15],
    [7, 13, 14, 16],
];

console.log(zigzagTraverse(array));
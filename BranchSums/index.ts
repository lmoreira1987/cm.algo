// Space = O(N) | Time = O(N)
// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    //console.log(this.value)
  }
}

export function branchSums(root: BinaryTree): number[] {
  const sums: number[] = [];
  calculateBranchSums(root, 0, sums, 0);
  // console.log(root);
  return sums;
}

function calculateBranchSums(node: BinaryTree | null, runningSum: number, sums: number[], level: number) {
  // Object is possibly null
  if (!node) {
    console.log("empty node");
    return; 
  }

  const levelSum = level+1;
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    console.log(`newRunningSum - ${newRunningSum}`);
    sums.push(newRunningSum);
    return;
  }

  console.log(`levelSum - ${levelSum}`);
  calculateBranchSums(node.left, newRunningSum, sums, levelSum);
  calculateBranchSums(node.right, newRunningSum, sums, levelSum);
}


const root = new BinaryTree(1);

const nodeLevel1Left = new BinaryTree(2);
const nodeLevel1Right = new BinaryTree(3);

const nodeLevel2Left1 = new BinaryTree(4);
const nodeLevel2Right1 = new BinaryTree(5);
const nodeLevel2Left2 = new BinaryTree(6);
const nodeLevel2Right2 = new BinaryTree(7);

const nodeLevel3Left1 = new BinaryTree(8);
const nodeLevel3Right1 = new BinaryTree(9);
const nodeLevel3Left2 = new BinaryTree(10);

root.left = nodeLevel1Left;   // 2
root.right = nodeLevel1Right; // 3

nodeLevel1Left.left = nodeLevel2Left1     // 4
nodeLevel1Left.right = nodeLevel2Right1   // 5
nodeLevel1Right.left = nodeLevel2Left2    // 6
nodeLevel1Right.right = nodeLevel2Right2  // 7

nodeLevel2Left1.left = nodeLevel3Left1;   // 8
nodeLevel2Left1.right = nodeLevel3Right1; // 9
nodeLevel2Right1.left = nodeLevel3Left2;  // 10

console.log(branchSums(root));
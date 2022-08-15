// Space = O(N) | Time = O(N)
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function invertBinaryTree(tree: BinaryTree | null) {
  invert(tree);
  
  return tree;
}

function invert(tree: BinaryTree | null) {
  if (tree === null) return;
  swap(tree);
  invert(tree.left)
  invert(tree.right);
}

function swap(tree: BinaryTree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
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

console.log(invertBinaryTree(root));
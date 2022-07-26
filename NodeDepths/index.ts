// O(n) time | O(height) space
// This is the class of the input binary tree.
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

export function nodeDepths(root: BinaryTree) {
  return getNodeDepth(root, 0, 0);
}

function getNodeDepth(bt: BinaryTree, depth: number, totalDepth: number): number {

  if (bt.left != undefined) {
    totalDepth = getNodeDepth(bt.left, depth+1, totalDepth);
  }
    
  if (bt.right != undefined) {
    totalDepth = getNodeDepth(bt.right, depth+1, totalDepth);
  }

  return totalDepth += depth;
}

let bst1 = new BinaryTree(1);
let bst2 = new BinaryTree(2);
let bst3 = new BinaryTree(3);
let bst4 = new BinaryTree(4);
let bst5 = new BinaryTree(5);
let bst6 = new BinaryTree(6);
let bst7 = new BinaryTree(7);
let bst8 = new BinaryTree(8);
let bst9 = new BinaryTree(9);

bst4.left = bst8;
bst4.right = bst9;
bst2.left = bst4;
bst2.right = bst5;
bst1.left = bst2;

bst3.left = bst6;
bst3.right = bst7;
bst1.right = bst3;

console.log(nodeDepths(bst1));
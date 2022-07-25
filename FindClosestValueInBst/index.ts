// Time = O(n) | Space = O(n)

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BST, target: number) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree: BST | null, target: number, closest: number): number {
  if (tree == null) return closest;

  // Change closest or still the same
  if (Math.abs(target - closest) > Math.abs(target - tree.value))
    closest = tree.value;

  // Decide a side, otherwise closest is equal to target
  if (target < tree.value)
    return findClosestValueInBstHelper(tree.left, target, closest);
  else if (target > tree.value)
    return findClosestValueInBstHelper(tree.right, target, closest);
  else
    return closest;
}

let bst1 = new BST(10);
let bst2 = new BST(5);
let bst3 = new BST(15);
let bst4 = new BST(2);
let bst5 = new BST(5);
let bst6 = new BST(13);
let bst7 = new BST(22);
let bst8 = new BST(1);
let bst9 = new BST(14);

bst4.left = bst8;
bst2.left = bst4;
bst2.right = bst5;
bst1.left = bst2;

bst6.left = bst9;
bst3.left = bst6;
bst3.right = bst7;
bst1.right = bst3;

const target = 12;

console.log(findClosestValueInBst(bst1, target));
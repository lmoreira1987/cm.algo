"use strict";
// Time = O(logn) | Space = O(logn)
exports.__esModule = true;
exports.findClosestValueInBst = void 0;
var BST = /** @class */ (function () {
    function BST(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BST;
}());
function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}
exports.findClosestValueInBst = findClosestValueInBst;
function findClosestValueInBstHelper(tree, target, closest) {
    if (tree == null)
        return closest;
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
var bst1 = new BST(10);
var bst2 = new BST(5);
var bst3 = new BST(15);
var bst4 = new BST(2);
var bst5 = new BST(5);
var bst6 = new BST(13);
var bst7 = new BST(22);
var bst8 = new BST(1);
var bst9 = new BST(14);
bst4.left = bst8;
bst2.left = bst4;
bst2.right = bst5;
bst1.left = bst2;
bst6.left = bst9;
bst3.left = bst6;
bst3.right = bst7;
bst1.right = bst3;
var target = 12;
console.log(findClosestValueInBst(bst1, target));

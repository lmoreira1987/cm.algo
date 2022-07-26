"use strict";
exports.__esModule = true;
exports.nodeDepths = void 0;
// O(n) time | O(height) space
// This is the class of the input binary tree.
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
function nodeDepths(root) {
    return getNodeDepth(root, 0, 0);
}
exports.nodeDepths = nodeDepths;
function getNodeDepth(bt, depth, totalDepth) {
    if (bt.left != undefined) {
        totalDepth = getNodeDepth(bt.left, depth + 1, totalDepth);
    }
    if (bt.right != undefined) {
        totalDepth = getNodeDepth(bt.right, depth + 1, totalDepth);
    }
    return totalDepth += depth;
}
var bst1 = new BinaryTree(1);
var bst2 = new BinaryTree(2);
var bst3 = new BinaryTree(3);
var bst4 = new BinaryTree(4);
var bst5 = new BinaryTree(5);
var bst6 = new BinaryTree(6);
var bst7 = new BinaryTree(7);
var bst8 = new BinaryTree(8);
var bst9 = new BinaryTree(9);
bst4.left = bst8;
bst4.right = bst9;
bst2.left = bst4;
bst2.right = bst5;
bst1.left = bst2;
bst3.left = bst6;
bst3.right = bst7;
bst1.right = bst3;
console.log(nodeDepths(bst1));

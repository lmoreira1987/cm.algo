"use strict";
exports.__esModule = true;
exports.heightOfABinaryTree = void 0;
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
function heightOfABinaryTree(root) {
    return getHeight(root, 0, 0);
}
exports.heightOfABinaryTree = heightOfABinaryTree;
function getHeight(bt, depth, totalDepth) {
    if (bt.left != undefined) {
        totalDepth = getHeight(bt.left, depth + 1, totalDepth);
    }
    if (bt.right != undefined) {
        totalDepth = getHeight(bt.right, depth + 1, totalDepth);
    }
    return depth > totalDepth ? depth : totalDepth;
}
// // Test Case 1
// let bt1 = new BinaryTree(1);
// let bt2 = new BinaryTree(2);
// let bt3 = new BinaryTree(3);
// let bt4 = new BinaryTree(4);
// let bt5 = new BinaryTree(5);
// let bt6 = new BinaryTree(6);
// let bt7 = new BinaryTree(7);
// bt4.left = bt2;
// bt4.right = bt6;
// bt2.left = bt1;
// bt2.right = bt3;
// bt6.left = bt5;
// bt6.right = bt7;
// console.log(heightOfABinaryTree(bt4));
// Test Case 2
var bt1 = new BinaryTree(1);
var bt2 = new BinaryTree(2);
var bt3 = new BinaryTree(3);
var bt4 = new BinaryTree(4);
var bt5 = new BinaryTree(5);
var bt6 = new BinaryTree(6);
var bt7 = new BinaryTree(7);
var bt8 = new BinaryTree(8);
var bt9 = new BinaryTree(9);
var bt10 = new BinaryTree(10);
var bt11 = new BinaryTree(11);
bt3.left = bt2;
bt3.right = bt5;
bt2.left = bt1;
bt5.left = bt4;
bt5.right = bt6;
bt6.right = bt7;
bt7.right = bt8;
bt4.right = bt9;
bt9.right = bt10;
bt10.right = bt11;
console.log(heightOfABinaryTree(bt3));

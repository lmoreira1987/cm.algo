"use strict";
exports.__esModule = true;
exports.branchSums = void 0;
// Space = O(N) | Time = O(N)
// This is the class of the input root.
// Do not edit it.
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        //console.log(this.value)
    }
    return BinaryTree;
}());
function branchSums(root) {
    var sums = [];
    calculateBranchSums(root, 0, sums, 0);
    // console.log(root);
    return sums;
}
exports.branchSums = branchSums;
function calculateBranchSums(node, runningSum, sums, level) {
    // Object is possibly null
    if (!node) {
        console.log("empty node");
        return;
    }
    var levelSum = level + 1;
    var newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        console.log("newRunningSum - ".concat(newRunningSum));
        sums.push(newRunningSum);
        return;
    }
    console.log("levelSum - ".concat(levelSum));
    calculateBranchSums(node.left, newRunningSum, sums, levelSum);
    calculateBranchSums(node.right, newRunningSum, sums, levelSum);
}
var root = new BinaryTree(1);
var nodeLevel1Left = new BinaryTree(2);
var nodeLevel1Right = new BinaryTree(3);
var nodeLevel2Left1 = new BinaryTree(4);
var nodeLevel2Right1 = new BinaryTree(5);
var nodeLevel2Left2 = new BinaryTree(6);
var nodeLevel2Right2 = new BinaryTree(7);
var nodeLevel3Left1 = new BinaryTree(8);
var nodeLevel3Right1 = new BinaryTree(9);
var nodeLevel3Left2 = new BinaryTree(10);
root.left = nodeLevel1Left; // 2
root.right = nodeLevel1Right; // 3
nodeLevel1Left.left = nodeLevel2Left1; // 4
nodeLevel1Left.right = nodeLevel2Right1; // 5
nodeLevel1Right.left = nodeLevel2Left2; // 6
nodeLevel1Right.right = nodeLevel2Right2; // 7
nodeLevel2Left1.left = nodeLevel3Left1; // 8
nodeLevel2Left1.right = nodeLevel3Right1; // 9
nodeLevel2Right1.left = nodeLevel3Left2; // 10
console.log(branchSums(root));

"use strict";
exports.__esModule = true;
exports.invertBinaryTree = void 0;
// Space = O(N) | Time = O(N)
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
function invertBinaryTree(tree) {
    invert(tree);
    return tree;
}
exports.invertBinaryTree = invertBinaryTree;
function invert(tree) {
    if (tree === null)
        return;
    swap(tree);
    invert(tree.left);
    invert(tree.right);
}
function swap(tree) {
    var left = tree.left;
    tree.left = tree.right;
    tree.right = left;
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
console.log(invertBinaryTree(root));

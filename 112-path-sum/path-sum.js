/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const traverse = (root, sum) => {
        if(!root) return false;
        const currSum = sum + root.val;
        if(!root.left && !root.right && currSum === targetSum) return true;

        return traverse(root.left, currSum) || traverse(root.right, currSum)

    }
    return traverse(root, 0)

};
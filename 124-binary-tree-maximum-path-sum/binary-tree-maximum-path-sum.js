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
 * @return {number}
 */
var maxPathSum = function(root) {
    if(!root) return root;
    let maxSum = -Infinity;
    const traverse = (root) => {
        if(!root) return 0;

        const lSum = Math.max(0,traverse(root.left));
        const rSum = Math.max(0,traverse(root.right));
        const cSum = lSum + rSum + root.val;
        maxSum = Math.max(maxSum, cSum);
        return Math.max(lSum+root.val, rSum+root.val);
    }
    traverse(root);
    return maxSum;

    
};
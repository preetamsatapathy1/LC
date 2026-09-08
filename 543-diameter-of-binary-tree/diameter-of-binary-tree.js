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
var diameterOfBinaryTree = function(root) {
    let maxDepth = 0;
    const depth = root => {
        if(!root) return 0;

        const l = depth(root.left);
        const r = depth(root.right);

        const curr = l+r;
        maxDepth = Math.max(maxDepth, curr);
        return 1+ Math.max(l,r);
    }
    depth(root);
    return maxDepth;
    
};
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const traverse = (r1, r2) => {
        if(!r1 && !r2) return true;

        if(!r1 || !r2 || r1.val !== r2.val) return false;

        return traverse(r1.left, r2.right) && traverse(r2.left, r1.right)
    }
    return traverse(root.left, root.right)

};
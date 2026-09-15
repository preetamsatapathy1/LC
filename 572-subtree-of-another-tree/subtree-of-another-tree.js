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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var isSameTree = (r1, r2) => {
    if(!r1 && !r2) return true;

    if(!r1 || !r2 || r1.val != r2.val) return false;

    return isSameTree(r1.left, r2.left) && isSameTree(r1.right, r2.right);
}

var isSubtree = function(root, subRoot) {
    if(!root) return false;

    if(isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
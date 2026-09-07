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
const findDepth = root => {
    if(!root) return 0;

    return 1 + Math.max(findDepth(root.left), findDepth(root.right));
}

var isBalanced = function(root) {
    if(!root) return true;
    
    const leftDepth = findDepth(root.left)
    const rightDepth = findDepth(root.right);
    console.log("l", leftDepth, "r", rightDepth)

    if(Math.abs(leftDepth - rightDepth) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right)
};
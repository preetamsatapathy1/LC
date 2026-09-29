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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    const traverse = (root) => {
        if(!root) return;

        const left = traverse(root.left);
        if(left != null) return left;
        k-=1;
        if(k == 0) return root.val;
        return traverse(root.right);

    }
    return traverse(root)
    
};
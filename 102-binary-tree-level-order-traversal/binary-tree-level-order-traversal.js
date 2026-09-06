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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ans = [];
    if(!root) return ans;
    let queue = [root];
    while(queue.length) {
        const level = [];
        const size = queue.length;
        for(let i=0; i<size; i++ ){
            const item = queue.shift();
            if(item.left) queue.push(item.left);
            if(item.right) queue.push(item.right);
            level.push(item.val);
        }
        ans.push(level);
    }
    return ans
};
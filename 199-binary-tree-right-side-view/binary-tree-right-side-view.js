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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let ans = [];
    if(!root) return ans;
    let queue = [root];

    while(queue.length) {
        let count = queue.length;
        for(let i=0;i <count;i++){
            const last = queue.shift();
            if(i==0) ans.push(last.val);
            if(last.right) queue.push(last.right);
            if(last.left) queue.push(last.left);
        }
    }
    return ans
    
};
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
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let isRightToLeft = false ;
    const queue = [root];
    let ans = []
    while(queue.length){
        let level = [];
        const l = queue.length;
        for(let i=0;i <l;i++){
            const curr = queue.shift();
            if(isRightToLeft){
                level.unshift(curr.val)
            }else {
                level.push(curr.val);
            }
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);

        }
        isRightToLeft = !isRightToLeft;
        ans.push(level)
    }
    return ans;
};
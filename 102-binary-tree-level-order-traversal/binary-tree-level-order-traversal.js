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
    // if(!root) return ans;
    // let queue = [root];
    // let front = 0;
    // while(queue.length - front) {
    //     const size = queue.length - front;
    //     const level = [];
    //     for(let i=0; i<size; i++ ){
    //         const item = queue[front++];
    //         if(item.left) queue.push(item.left);
    //         if(item.right) queue.push(item.right);
    //         level.push(item.val);
    //     }
    //     ans.push(level);
    // }
    // return ans

    const traverse = (root, level=0) => {
        if(!root) return []
        if(!ans[level]) ans[level] = [];

        ans[level].push(root.val);

        if(root.left) traverse(root.left, level+1);
        if(root.right) traverse(root.right, level+1);
    }

    traverse(root, 0);
    return ans;
};
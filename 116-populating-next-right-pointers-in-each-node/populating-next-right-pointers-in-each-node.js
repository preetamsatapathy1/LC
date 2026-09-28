/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) return root;
    let queue = [root];

    while(queue.length) {
        let l = queue.length;
        for(let i=0; i<l;i++){
            const item = queue.shift();
            if((i+1) < l) {
                item.next = queue[0] || null
            }
            if(item.left) queue.push(item.left);
            if(item.right) queue.push(item.right);
        }
    }
    return root;
};
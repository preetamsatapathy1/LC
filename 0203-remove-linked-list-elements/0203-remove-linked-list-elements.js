/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function(head, val) {
    let prev = null, curr = head;
    while(curr){
        const currVal = curr.val;

        if(prev && currVal === val) {
            prev.next = curr.next;
        } else if (currVal === val){
            head = head.next;
        } else {
            prev = curr; 
        }

        curr = curr.next;
    }
    return head;
    
};
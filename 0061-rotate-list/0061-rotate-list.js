/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let l = 0, count = 0;
    let curr = head;
    if(!head || !k) return head;
    while(curr){
        l+=1;
        curr = curr.next;
    }

    const actualShift = k % l;
    if(!actualShift) return head;
    const shiftPos = l - actualShift;
    curr = head;
    let newHead = null;
    let prev = null;
    while(curr.next){
        count+=1
        if (count === shiftPos){
            newHead = curr.next;
            prev = curr
        }
        curr = curr.next;
    }
    prev.next = null;
    curr.next = head;
    return newHead;

    
};
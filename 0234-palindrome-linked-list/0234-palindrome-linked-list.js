/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverseLL = function(head) {
    let curr = head, prev = null, next = null;
    while(curr){
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
}

var isPalindrome = function(head) {
    let slow = fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let reversedHead = reverseLL(slow);
    while(head && reversedHead){
        const revVal = reversedHead.val;
        const headVal = head.val;
        if(revVal != headVal) return false;
        reversedHead = reversedHead.next;
        head = head.next;
    }
    return true;
};
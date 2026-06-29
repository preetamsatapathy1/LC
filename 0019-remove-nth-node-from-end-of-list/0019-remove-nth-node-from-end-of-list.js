/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const sentinel = new ListNode();
    sentinel.next = head;
    let p1 = p2 = sentinel, c= 0;
    while(c<n){
        p2 = p2.next;
        c+=1;
    }
    while(p2.next){
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = p1.next.next;
    return sentinel.next;
};
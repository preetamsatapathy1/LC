/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const sentinel = new ListNode(null);
    sentinel.next = head;
    let prev = sentinel;
    while(head){
        if(head.val == prev.val){
            prev.next = head.next;
        } else {
            prev = head;
        }
        head = head.next;
    }
    return sentinel.next;
    
};
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
var swapPairs = function(head) {
    let curr = head;
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    while(curr && curr.next){
        let nodeThree = curr.next.next;
        prev.next = curr.next;
        curr.next.next = curr;
        curr.next = nodeThree;
        prev = curr;

        curr = curr.next;
    }

    return sentinel.next;
    
};
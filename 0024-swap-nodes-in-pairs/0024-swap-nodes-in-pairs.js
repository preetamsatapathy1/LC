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
    // let curr = head;
    // let sentinel = new ListNode();
    // sentinel.next = head;
    // let prev = sentinel;
    // while(curr && curr.next){
    //     let nodeThree = curr.next.next;
    //     prev.next = curr.next;
    //     curr.next.next = curr;
    //     curr.next = nodeThree;
    //     prev = curr;

    //     curr = curr.next;
    // }

    // return sentinel.next;

    if (!head || !head.next) return head;

    let first = head;
    let second = head.next;
    let rest = second.next;

    second.next = first;
    first.next = swapPairs(rest);
    return second;
    
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
     // let set = new Set();
    // while(headA){
    //     set.add(headA);
    //     headA = headA.next;
    // }

    // while(headB){
    //     if(set.has(headB)){
    //         return headB;
    //     }
    //     headB = headB.next;
    // }
    // return null;
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    while(pA != pB) {
        pA = pA === null? headB: pA.next;
        pB = pB === null? headA: pB.next;
    }
    return pB;

};
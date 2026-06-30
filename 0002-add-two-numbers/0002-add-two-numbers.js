/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let nh = null, prev = null
    while(l1 || l2 || carry){
        let n1 = l1?.val || 0;
        let n2 = l2?.val || 0;
        let n3 = (n1 + n2 + carry) % 10;

        carry = Math.floor((n1+n2+carry)/10);
        let node = new ListNode(n3);
        if(!nh) nh = node;
        if (prev) prev.next = node;
        prev = node;

        l1 = l1?.next;
        l2=l2?.next;
    }

    return nh;

    
};
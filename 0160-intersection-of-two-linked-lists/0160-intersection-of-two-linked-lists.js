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
var getIntersectionNode = function(headA, headB) {
    let dataMap = {};
    while(headA){
        const value = headA.val;
        if(value in dataMap){
            dataMap[value] = [...dataMap[value], headA];
        }else{
            dataMap[value] = [headA]
        }
        headA = headA.next;
    }

    while(headB){
        const data = headB.val;
        if(data in dataMap){
            const nodes = dataMap[data];
            for(let i=0;i < nodes.length; i++){
                if(headB === nodes[i]){
                    return headB;
                }
            }
        }
        headB = headB.next;
    }
    return null;
};
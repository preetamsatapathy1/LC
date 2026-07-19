/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let nge = {};
    let ans = [];
    for(let i=nums2.length-1; i>=0; i--){
        let nl = -1;
        const currNum = nums2[i];
        if(stack.length && stack[stack.length-1] > currNum) {
            nge[currNum] = stack[stack.length-1];
        } else if(stack.length){
            while(stack.length){
                const top = stack[stack.length-1];
                if(currNum > top){
                    stack.pop();
                }else{
                    nge[currNum] = top;
                    break;
                }
            }
        }
        if(!(currNum in nge)){
            nge[currNum] = -1;
        }
        stack.push(currNum);
    }

    for(let i=0;i<nums1.length;i++){
        ans.push(nge[nums1[i]])
    }
    return ans;
};
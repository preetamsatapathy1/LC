/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    const s = (n * (n+1) )/ 2;
    let c = 0;
    for(let i=0;i<n;i++){
        c+= nums[i];
    }
    return s - c;
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length < 2) return nums[0]
    let maxR = [nums[0], Math.max(nums[0], nums[1])];
    for(let i=2;i<nums.length;i++){
        const cMax = Math.max(maxR[i-2]+nums[i], maxR[i-1]);
        maxR.push(cMax)
    }
    return maxR[maxR.length - 1]
    
};
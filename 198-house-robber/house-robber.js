/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length < 2) return nums[0];
    let p1 = nums[0];
    let p2 = Math.max(nums[0], nums[1]);
    for(let i=2;i<nums.length;i++){
        const cMax = Math.max(p1+nums[i], p2);
        p1=p2;
        p2 = cMax;
    }
    return p2;
};
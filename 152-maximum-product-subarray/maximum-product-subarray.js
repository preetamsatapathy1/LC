/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prefix = 1, suffix= 1, ans = -Infinity
    const n = nums.length;
    for(let i=0;i<nums.length;i++){
        prefix = prefix*nums[i];
        suffix = suffix*nums[n-i-1];

        ans = Math.max(ans, prefix, suffix)
        if(prefix == 0) prefix = 1;
        if(suffix == 0) suffix = 1;

    }
    return ans
};
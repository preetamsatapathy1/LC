/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const len = nums.length;
    let l=0, r=nums.length-1;
    while(l<=r){
        const m = Math.floor(l + (r-l)/2);
        if(nums[m] == target) return m;
        const isLeftSorted = nums[l] <= nums[m];
        if(isLeftSorted){
            if(target >= nums[l] && target < nums[m]){
                r = m-1;
            }else{
                l=m+1;
            }
        } else {
            if(target > nums[m] && target <= nums[r]){
                l = m+1;
            }else{
                r=m-1;
            }
        }
    }
    return -1;
};
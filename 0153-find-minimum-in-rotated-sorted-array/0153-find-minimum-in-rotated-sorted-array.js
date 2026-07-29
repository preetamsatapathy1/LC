/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0, r=nums.length-1;
    
    while(l<=r){
        if(nums[l]<=nums[r]) return nums[l];
        let m = l + Math.floor((r-l)/2);
        if(nums[m] < nums[m-1]) return nums[m];
        const isLeftSorted = nums[l] <= nums[m];
        if(isLeftSorted){
            l = m+1;
        }else{
            r = m-1;
        }
    }
};
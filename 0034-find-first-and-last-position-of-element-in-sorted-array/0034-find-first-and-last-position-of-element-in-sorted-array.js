/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l=0, r=nums.length-1, fp=-1, lp=-1;
    while(l <= r){
        let m = l + Math.floor((r-l)/2);
        if(nums[m]==target){
            fp = m;
            r=m-1;
            continue;

        }
        if(nums[m] < target){
            l=m+1
        } else {
            r=m-1;
        }
    }

    l=0, r=nums.length-1;
    while(l <= r){
        let m = l + Math.floor((r-l)/2);
        if(nums[m]==target){
            lp = m;
            l = m+1;
            continue;
        }

        if(nums[m] < target){
            l=m+1
        } else {
            r=m-1
        }

    }
    return [fp, lp]
};
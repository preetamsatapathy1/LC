/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l=0, r=nums.length-1;
    while(l<=r) {
        const m = l + Math.min((r-l)/2);
        if(nums[m]!== nums[m-1] && nums[m]!==nums[m+1]){
            return nums[m]
        }

        if(nums[m] == nums[m-1]){
            const remLen = m-1-l;
            if(remLen % 2 == 0){
                l=m+1
            }else{
                r=m-2;
            }
        }

        if(nums[m] == nums[m+1]){
            const remLen = r-m+1;
            if(remLen % 2 == 0){
                r = m-1;
            }else{
                l=m+2;
            }
            
        }


    }
};
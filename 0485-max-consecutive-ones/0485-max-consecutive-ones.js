/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currCount=0, maxCount = 0;
    for(let i=0; i< nums.length;i++){
        if(nums[i] == 0) {
            maxCount = Math.max(maxCount, currCount);
            currCount = 0;
        }else{
            currCount+=1;
        }
    }
    return Math.max(maxCount, currCount);
};
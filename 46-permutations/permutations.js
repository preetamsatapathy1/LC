/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];

    const backtrack = (path) => {
        if(path.length === nums.length) {
            ans.push([...path]);
        }
        for(let i=0; i<nums.length; i++){
            if(path.includes(nums[i])) continue;
            path.push(nums[i])
            backtrack(path)
            path.pop()
        }
    }
    backtrack([], 0);
    return ans;
    
};
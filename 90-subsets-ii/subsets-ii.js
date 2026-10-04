/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let ans = []

    const back = (path, pos) => {
        ans.push([...path])
        for(let i=pos; i<nums.length;i++) {
            if(i> pos && nums[i] === nums[i-1]) continue
            path.push(nums[i])
            back(path, i+1)
            path.pop()
        }
    }

    back([], 0)
    return ans;
    
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    // let nums = [...arr, ...arr];
    let n = nums.length;
    let stack = [nums.at(-1)];
    let ans = Array(nums.length*2).fill(-1);
    for(let i=(nums.length*2)-1; i>=0; i--){
        if(stack.length && stack.at(-1) > nums[i%n]){
            ans[i] = stack.at(-1);
        } else if(stack.length) {
            while(stack.length){
                if(stack.at(-1) > nums[i%n]){
                    ans[i] = stack.at(-1);
                    break;
                }else{
                    stack.pop()
                }
            }

        }
        stack.push(nums[i%n])
    }
    return ans.slice(0, nums.length)
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0];

    let sol1 = [nums[0], Math.max(nums[0], nums[1])];
    let sol2 = [0, nums[1]]

    for(let i=2; i<nums.length; i++) {
        const c1 = (i !== nums.length -1) ? Math.max(sol1[i-2]+nums[i], sol1[i-1]) : 0;
        const c2 = Math.max(sol2[i-2]+nums[i], sol2[i-1]);
        sol1.push(c1);
        sol2.push(c2)
    }
    console.log(sol1, sol2)
    return Math.max(sol1.at(-2), sol2.at(-1))
    
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let ans = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] != nums[i-1]){
            twoSum(nums, i, ans);
        }
    }
    return ans;
};

var twoSum = (arr, x, ans) => {
    const target = arr[x] * -1;
    let i=x+1, j=arr.length-1;
    while(i < j) {
        if(arr[i] + arr[j] == target) {
            ans.push([arr[x], arr[i], arr[j]]);
            i++;
            j--;
            while(i<j && arr[i] == arr[i-1]) i++;
        }
        if(arr[i] + arr[j] > target) j--;
        if(arr[i] + arr[j] < target) i++;

        
    }
}
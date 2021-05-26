// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
    let currentTotal = nums[0];
    let maxTotal = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        currentTotal = Math.max(nums[i], nums[i] + currentTotal);
        if(currentTotal > maxTotal) {
            maxTotal = currentTotal;
        }
    }
    return maxTotal
};

// if else solution

var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    
    let curr = nums[0]
    let sum = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        if(curr < 0) {
            curr = nums[i]
            console.log(curr, sum)
        } else {
            curr = curr + nums[i]
        }
        if(curr > sum) {
            sum = curr
        }
    }
    return sum
};
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Return true if and only if the given array nums is monotonic.

 

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increase = true;
    let decrease = true;
    
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] > nums[i + 1]) {
            increase = false;
        } else if(nums[i] < nums[i + 1]) {
            decrease = false;
        } else if(nums[i] === nums[i + 1]) {
            continue
        }
    }
    return increase || decrease
};
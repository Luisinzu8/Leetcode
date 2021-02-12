/**
 * @param {number[]} nums
 * @return {number}
 */
//given an integer array nums of 2n integers
//group integers into n pairs
//the sum of such pairs for all i is maximized
//return max sum

nums = [1,4,3,2]
var arrayPairSum = function(nums) {
    let maxSum = 0;
    nums.sort((a,b)=>a-b);
    for (let i = 0; i < nums.length; i += 2) {
        maxSum += nums[i];
    };
    return maxSum;
};

arrayPairSum(nums)
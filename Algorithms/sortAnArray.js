/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    sortNums = nums.sort((a,b) => a-b);
    return sortNums;
};
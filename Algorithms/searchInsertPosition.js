/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2;
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums =[1,3,5,6];
let target= 5;

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let currentIndex = nums[i];
        if (currentIndex >= target) {
            return i;
        };
    };
    return length;
};

searchInsert(nums, target)
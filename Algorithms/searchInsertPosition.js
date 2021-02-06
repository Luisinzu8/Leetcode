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
    //use for loop to iterate through the array
    for (let i = 0; i < nums.length; i++) {
        //create currentIndex variable to keep track of our current place in the loop
        let currentIndex = nums[i];
        //if our current index position is greater than or equal to our target number
        //return index of the target if found
        if (currentIndex >= target) {
            return i;
        };
    };
    //return the length if target is not found but where it would be located
    return length;
};

searchInsert(nums, target)
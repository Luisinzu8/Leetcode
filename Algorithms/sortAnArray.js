//Given an array of integers nums, sort the array in ascending order.

 
/*
Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 
var sortArray = function(nums) {
	//create a new variable to hold our answer
	//use.sort() method to sort the array in descending order
    let sortNums = nums.sort((a,b) => a-b);
    //return our new variable as a sorted array
    return sortNums;
};
*/
//Selection sort method

/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums = [5,2,3,1]
/*
var sortArray = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let lowest = i;
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] < nums[lowest]) {
                lowest = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[lowest];
        nums[lowest] = temp;
    }
    return nums
};
*/
/*
//Insertion Sort Method//
var sortArray = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        let currentVal = nums[i];
        for(var j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
            nums[j + 1] = nums[j];
        }
        nums[j+1] = currentVal;
    }
    return nums;
};
sortArray(nums)
*/

var sortArray = function(nums) {
    for(let i = nums.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++){
            if(nums[j] > nums[j+1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j+1] = temp;
            }
        }
    }
    return nums
};
sortArray(nums)
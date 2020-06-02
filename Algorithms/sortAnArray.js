/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
	//create a new variable to hold our answer
	//use.sort() method to sort the array in descending order
    let sortNums = nums.sort((a,b) => a-b);
    //return our new variable as a sorted array
    return sortNums;
};
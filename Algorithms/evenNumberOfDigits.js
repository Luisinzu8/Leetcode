/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
	// use filter method to return a new array that checks if number is modulus 2
    return nums.filter(x => x.toString().length % 2 == 0).length;
};
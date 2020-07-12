/**
 * @param {number[]} nums
 * @return {number}
 */
 //Given a non-empty array of integers, every element 
 //appears twice except for one. Find that single one.

let singleNumber = (nums) => {
	return nums.reduce((prev, curr) => prev ^ curr, 0);
};

Input: [2,2,1]
Output: 1
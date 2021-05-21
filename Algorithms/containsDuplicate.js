/**
 * @param {number[]} nums
 * @return {boolean}
 */
 /*
 Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/
// Example 1:

// Input: [1,2,3,1]
// Output: true

var containsDuplicate = function(nums) {
    return nums.length !== new Set(nums).size;
}

// solution from scratch on 5/19/2021
var containsDuplicate = function(nums) {
    let mySet = new Set(nums);
    console.log(mySet);
    if(mySet.size !== nums.length) {
        return true
    } else if(mySet.size == nums.length) {
        return false
    }
};

//optimized solution 5/19/2021
var containsDuplicate = function(nums) {
    let mySet = new Set(nums);
    return (mySet.size !== nums.length ? true : false)
};
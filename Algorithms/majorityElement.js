/**
 * @param {number[]} nums
 * @return {number}
 */
 //Given an array of size n, 
 //find the majority element. 
 //The majority element is the 
 //element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
var majorityElement = function(nums) {
    let myMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(!myMap.has(nums[i])) {
            myMap.set(nums[i], 1)
        } else {
            myMap.set(nums[i], myMap.get(nums[i])+1);
        }
    }
    for(var [k,v] of myMap.entries()){
        if(v > nums.length/2){
            return k;
        }
    }
};
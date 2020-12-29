// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].



// set variable numLength as the nums array's length
// if numsLength is less than 2, return nums array
// create a cache called map to store each item in the array as the key and index as value
// create a for loop that runs as many times as the size of the array
  // if the target minus the current number is a key
  // or if the target minus the current number is equal to zero
    // return the key's value and the index in an array because if zero we found a match, and if key we know itll subtract to 0
  // if the current number is a key of the map is undefined
    // cache the current number and value as the index


var twoSum = function(nums, target) { // 96ms runtime
    var numLength = nums.length;
    if( numLength<2 ) return nums;
    var map = {};
    for( var i=0; i<numLength; i++ ){
        if( map[ target-nums[i] ] || map[ target-nums[i] ] === 0 ) return [map [ target-nums[i] ], i];
        if( map[ nums[i] ] === undefined ) map[ nums[i] ] = i;
    }
};
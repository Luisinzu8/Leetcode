/**
 * @param {number[]} nums
 * @return {number[]}
 */

 let nums = [1,2,3,4]


// let runningSum = (nums) => {
//   //initiate loop at 1 because first number in the array will remain the same
//   for (let i = 1; i < nums.length; ++i) {
//     //modify nums array by reassigning our current nums index + current index - 1
//     nums[i] += nums[i - 1];
//   }
//   //return modified nums array
//   return nums;
// };

// Solution using additional array
var runningSum = function(nums) {
  //create new array to store running sum 
  let result = [];
  //assign current sum variable to 0
  let currentSum = 0;
  //use for loop to iterate through nums array beginning at index 0
  for(let i = 0; i < nums.length; i++) {
    //add current index to currentSum variable ex: (0+1 = 1), (1+2 = 3), (3+3 = 6), (6+4 = 10)
      currentSum += nums[i];
      //push currentSum to new array
      result.push(currentSum)
      //[1,3,6,10]
  }
  //return new array with runningsum of original nums array
  return result
};

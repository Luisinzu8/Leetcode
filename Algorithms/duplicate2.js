/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 /*
 Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
*/
 example:
 Input: nums = [1,0,1,1], k = 1
 Output: true
 
 /*
var containsNearbyDuplicate = function(nums, k) {
    let map ={};
    for(let i = 0; i < nums.length; i++) {
    	if(map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
    	map[nums[i]] = i;
    }
    return false;
};
*/
var containsNearbyDuplicate = function(nums, k) {
    let map = {}, n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] in map && i - map[nums[i]] <= k) {
            return true;
        }
        map[nums[i]] = i;
    }
    return false;
};

let containsNearbyDuplicate = (nums, k) => {
  let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) {
            if (i - map[nums[i]] <= k) {
                return true;
            } 
            else {
                map[nums[i]] = i;
            }
        }
        else {
            map[nums[i]] = i;
        }
    }
    return false;
    
};
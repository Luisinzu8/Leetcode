/**
 * @param {number[]} nums
 * @return {number}
 */
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
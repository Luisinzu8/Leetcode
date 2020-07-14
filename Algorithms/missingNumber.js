/**
 * @param {number[]} nums
 * @return {number}
 
 //Given an array containing n distinct numbers 
 //taken from 0, 1, 2, ..., n, find the one that 
 //is missing from the array.
 */
let missingNumber = (nums) => {
    let max = 0;
    let map = new Map();
    for(let num of nums) {
        if(num > max) max = num;
        map.set(num, num);
    }
    for(let i = 0; i <= max; i++) {
        if(!map.has(i)) return i;
    }
    return max + 1;
};

Input: [3,0,1]
Output: 2
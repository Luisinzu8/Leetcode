/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 //Given the array nums consisting of 2n elements 
 //in the form [x1,x2,...,xn,y1,y2,...,yn]
 //Return the array in the form [x1,y1,x2,y2,...,xn,yn]
var shuffle = (nums, n) => {
    let insertPosition = 1;
    while ( n < nums.length - 1) {
        let removeElement = nums.splice(n, 1); 
		nums.splice(insertPosition, 0, removeElement);
        insertPosition += 2;
        n += 1;
    }
    return nums;
};

/*
example: Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
*/
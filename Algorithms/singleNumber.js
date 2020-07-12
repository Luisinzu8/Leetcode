/**
 * @param {number[]} nums
 * @return {number}
 */
 //Given a non-empty array of integers, every element 
 //appears twice except for one. Find that single one.

let singleNumber = (nums) => {
	return nums.reduce((prev, curr) => prev ^ curr, 0);
};

//map solution

let singleNumber = (nums) => {
    let randoNum = 0;
    nums.map((number) => randoNum ^=number);
    return randoNum;
};

//forEach solution
let singleNumber = (nums) => {
    let randoNum = 0;
    nums.forEach(n => {
        randoNum ^= n
    })
    return randoNum;
};

Input: [2,2,1]
Output: 1


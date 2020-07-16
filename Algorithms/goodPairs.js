/**
 * @param {number[]} nums
 * @return {number}
 */
let numIdenticalPairs = (nums) => {
    let pairs = 0;
    for (let i = 0; i < nums.length; ++i)
        for (let j = i + 1; j < nums.length; ++j)
            pairs += nums[i] == nums[j];
    return pairs;
};
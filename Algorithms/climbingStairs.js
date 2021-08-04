// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */

//recursive
var climbStairs = function (n) {
  let countRemainingStairs = (remainingStairs, savedResults) => {
    if (remainingStairs < 0) {
      return 0;
    }
    if (remainingStairs === 0) {
      return 1;
    }
    if (savedResults[remainingStairs]) {
      return savedResults[remainingStairs];
    }

    savedResults[remainingStairs] =
      countRemainingStairs(remainingStairs - 1, savedResults) +
      countRemainingStairs(remainingStairs - 2, savedResults);

    return savedResults[remainingStairs];
  };
  return countRemainingStairs(n, {});
};

// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]
/**
 * @param {number} n
 * @return {number[]}
 */

n = 4;

var sumZero = function (n) {
  //create array to be returned with the unique integers summing up to 0
  let answerArray = [];
  //if n is odd number, push 0 to answerArray
  if (n % 2 !== 0) {
    answerArray.push(0);
  }
  //loop while answerArray length is less than "n"
  while (answerArray.length < n) {
    //create index to push to answerArray + 1(since answerArray begins at zero)
    let index = answerArray.length + 1;
    //push index into out answerArray
    answerArray.push(index);
    //push negative index to answerArray
    answerArray.push(-index);
    //once answerArray length === n, stop looping and return answerArray
  }
  return answerArray;
};

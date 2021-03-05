/**
 * @param {number} N
 * @return {number}
 */
 /*
 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N)
*/
let fib = (N) => {
  if (N === 0 || N === 1) return N;
  let a = 0;
  let b = 1;
  while (N--) {
    [a, b] = [b, a + b];
  }
  return a;
};
//example
// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//Recursive with helper method

var fib = function(n) {
  let fibonacci = [0,1];
  
  function searchFib(i) {
      if(i > n) return;
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
      searchFib(i+1, n);
  }
  
  searchFib(2, n)
  return fibonacci[n]
};
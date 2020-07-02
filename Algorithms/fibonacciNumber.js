/**
 * @param {number} N
 * @return {number}
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
Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
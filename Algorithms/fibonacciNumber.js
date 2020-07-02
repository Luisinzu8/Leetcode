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
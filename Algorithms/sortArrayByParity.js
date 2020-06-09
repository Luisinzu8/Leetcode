/**
 * @param {number[]} A
 * @return {number[]}
 *Given an array A of non-negative integers, 
 return an array consisting of all the even 
 elements of A, followed by all the odd elements of A.
 */
var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
    
    for (let i = 0; i < A.length; i ++) {
        if (A[i] % 2 === 0) {
            even.push(A[i]);
        } else {
            odd.push(A[i]);
        }
    }
    return even.concat(odd);
};
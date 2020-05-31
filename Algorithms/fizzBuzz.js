/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = (n) => {
    //declare an array to return our answer
    let res = [];
    //use a for loop to iterate through numbers
    for (let i = 0; i <= n ; i++){
        //if statement to find out if our number is modulus by 3 and 5
        if(i % 3 === 0 && i % 5 === 0) {
            //if true output FizzBuzz
            res[i-1] = 'FizzBuzz';
            //if only modulus 3 output Fizz
        } else if(i % 3 === 0) {
            res[i-1] = 'Fizz';
            //if only modulus 5 output Buzz
        } else if(i % 5 === 0) {
            res[i-1] = 'Buzz';
        } else {
            //if not modulus by 3 or 5 output number as a string
            res[i-1] = i.toString();
        }  
    }
    return res;
};
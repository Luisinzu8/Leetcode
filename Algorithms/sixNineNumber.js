/**
 * @param {number} num
 * @return {number}
 */
 //Given a positive integer num 
 //consisting only of digits 6 and 9
 //Return the maximum number you can 
 //get by changing at most one digit 
 //(6 becomes 9, and 9 becomes 6)

let maximum69Number  = (num) => {
//create a new variable to hold our num array as a split string
 let numArray = num.toString().split('');
 //loop through numArray
    for (let i = 0; i < numArray.length; i++) {
 //if index of numArray is equal to '6'
        if (numArray[i] === '6') {
 //replace '6' with '9'
            numArray[i] = '9';
 //use break statement to stop the loop after changing at most one digit      
            break;
        }
    } 
 //return numArray with .join() method to join our split string 
    return numArray.join('');
};

//num = 9669;
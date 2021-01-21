/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
*/

/**
 * @param {string} address
 * @return {string}
 */

address = "1.1.1.1"
console.time('test')
var defangIPaddr = function(address) {
  let newAdd = address.split('')
    for(let i = 0; i < newAdd.length; i++) {
      if(newAdd[i] === '.') {
        newAdd[i] = '[.]'
        
      }
    }
    return newAdd.join('')
};
console.timeEnd('test')

defangIPaddr(address)
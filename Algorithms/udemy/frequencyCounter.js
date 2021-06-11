//write function called same

//accepts 2 arrays

//return true if every value in first array has squared value in second array

//value frequency must be the same



let arr1 = [1,2,3] 
let arr2 = [4,1,9]

let same = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};

  for(let i = 0; i < arr1.length; i++) {
    frequency1[arr1[i]] = (frequency1[arr1[i]] || 0) + 1
  }
  for(let i = 0; i < arr2.length; i++) {
    frequency2[arr2[i]] = (frequency2[arr2[i]] || 0) + 1
  }
  console.log(frequency1)
  console.log(frequency2)
  for(let key in frequency1) {
    if(!(key ** 2 in frequency2)) {
      return false
    }
    if(frequency2[key **2] !== frequency1[key]) {
      return false
    }
    console.log(arr2);
    arr2.splice()
  }
  return true
}
same(arr1,arr2)
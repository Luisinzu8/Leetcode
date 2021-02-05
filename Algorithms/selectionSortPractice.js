let arr = [3,2,8,21,11,-1,9];

let selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i+1; j < arr.length; j++) {
      console.log(i,j);
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    if(i != min) {
      let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    } 
  }
  return arr;
}

selectionSort(arr)
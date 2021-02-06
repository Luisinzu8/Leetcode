let arr = [3,2,8,21,11,-1,9];


let insertionSort = (arr) => {
  for(let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
    console.log(arr)
  }
  return arr
}

insertionSort(arr)
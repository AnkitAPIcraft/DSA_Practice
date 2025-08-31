function linearSearch(arr, val) {
  if (arr.length === 0) {
    return -1;
  }
  for (let count = 0; count < arr.length; count ++) {
    if(arr[count] === val) {
        return count
    }
  }
  return -1
}

console.log(linearSearch([1,4,7,5], 55));
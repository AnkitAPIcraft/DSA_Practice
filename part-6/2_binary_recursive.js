function binarySearchRecursive(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;  // base case → not found

  let middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) return middle;
  if (val < arr[middle]) {
    return binarySearchRecursive(arr, val, left, middle - 1);
  } else {
    return binarySearchRecursive(arr, val, middle + 1, right);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 33, 756];
console.log(binarySearchRecursive(arr, 33));
console.log(binarySearchRecursive(arr, 99));

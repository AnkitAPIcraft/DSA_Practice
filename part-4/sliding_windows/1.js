//Given an array of integers and a number n, find the maximum sum of n consecutive elements in the array.

// Input: arr = [1, 2, 5, 2, 8, 1, 5], n = 4  
// Output: 17  
// Explanation: The subarray [2, 5, 2, 8] has the maximum sum = 17

//time o(n**2), space o(1)


function maxSubarraySum(arr, n) {
  if (arr.length === 0) {
    null;
  }

  let hightestTotal = 0;
  let total = 0;

  for (let i = 0; i < arr.length - n; i++) {
    for (let j = i; j < n + i; j++) {
      total += arr[j];
    }
    if (total >= hightestTotal) {
      hightestTotal = total;
      total = 0
    }
  }
  return hightestTotal;
}

const arr = [1, 2, 5, 2, 8, 1, 5];

console.log(maxSubarraySum(arr, 4));

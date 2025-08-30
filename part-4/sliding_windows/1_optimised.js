//time o(n), space o(1)

function maxSubarraySum(arr, n) {
  if (arr.length < n) {
    return null;
  }

  let windowSum = 0;
  for (let i = 0; i < n; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let j = n; j < arr.length; j++) {
    windowSum = windowSum - arr[j - n] + arr[j];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const arr = [1, 2, 5, 2, 8, 1, 5, 7];
console.log(maxSubarraySum(arr, 4)); 

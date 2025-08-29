// o(n) = n
function sumZero (arr) {
   let left = 0;
   let  right = arr.length - 1
   while (left < right) {
    const sum =  arr[left] + arr[right];
    if (sum === 0) {
        return [arr[left], arr[right]]
    } else if (sum > 0) {
        right--
    } else {
        left++
    }
   }
   return;
}

const arr = [-3, -2, 0, 1, 2]

console.log(sumZero(arr));
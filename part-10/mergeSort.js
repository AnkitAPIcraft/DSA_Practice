//recursion ka best implementation yhi lga
// Time Complexity: O(n log n)
// Space Complexity: O(n)
// esme log n kyu aaya ?? kyuki yha log ko base 2 mana gya hau.
//to aon ko sb array ko diviekr kr ke end me single array chahiye esliye. jase 32 = 2^5 mtlb agar 32 length ka array hai to use 5 steps m devide krna pgeda tabhi wo single elements me convert hoga,

function merge(arr1, arr2) {
   let finalArray = []
   let i = 0
   let j = 0
   while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
         finalArray.push(arr1[i])
         i++
      } else {
         finalArray.push(arr2[j])
         j++
      }
   }

   while (i < arr1.length) {
      finalArray.push(arr1[i])
      i++
   }

   while (j < arr2.length) {
      finalArray.push(arr2[j])
      j++
   }

   return finalArray
}

// const arr1 = [1, 5, 10, 12, 17]
// const arr2 = [2, 4, 12]
// console.log(merge(arr1, arr2));

function mergeSort(arr) {
   if(arr.length === 1) return arr;

   const mid = Math.floor(arr.length/2)
   const right = mergeSort(arr.slice(0, mid))
   const left = mergeSort(arr.slice(mid))
   return merge(right, left)
}

console.log(mergeSort([23, 67, 13, 0, 9]));


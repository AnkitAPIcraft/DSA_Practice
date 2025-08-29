//Given two arrays, write a function to check if the second array contains the squares of all elements in the first array, with matching frequency.

//most optimal solution for this can be found only in 3_optimise.js

function same (arr1, arr2) {
    const length1 = arr1.length
    const length2 = arr2.length
    if (length1 !== length2) {
        return false
    }

    let freqObj1 = {}
    let freqObj2 = {}

    for (const ele of arr1) {
        freqObj1[ele] = ++freqObj1[ele] || 1;
    }

    for (const ele of arr2) {
        freqObj2[ele] = ++freqObj2[ele] || 1;
    }

    for (const key in freqObj1) {
       if (!(key in freqObj2)) {
        return false
       }
       if (freqObj2[key*key] !== freqObj1[key]) {
        return false
       }
       return true
    }
} 

const arr1 = [1, 3, 5]
const arr2 = [9, 25, 1]

console.log(same(arr1, arr2))
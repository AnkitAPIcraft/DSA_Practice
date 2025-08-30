//Given two arrays, write a function to check if the second array contains the squares of all elements in the first array, with matching frequency.

//most optimal solution for this can be found only in 3_optimise.js

// time o(n**2), space o(1)

function same (arr1, arr2) {
    const length1 = arr1.length
    const length2 = arr2.length
    if (length1 !== length2) {
        return false
    }

    for (const ele of arr1) {
        const position = arr2.indexOf(ele**2) //or ele*ele
        if(position === -1) {
            return false
        }
        arr2.splice(position, 1)
    }
    return true
}

const arr1 = [1, 3, 5]
const arr2 = [9, 25, 1]

console.log(same(arr1, arr2))
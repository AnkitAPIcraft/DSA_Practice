//Write a function that takes two strings and determines whether they are anagrams of each other.

// Two strings are considered anagrams if they contain the same characters with the same frequency, regardless of the order.

// ask these questions like -
// is everything is in lower case or is there any spaces there in the string.
function validAnagram (str1, str2) {
    const length1 = str1.length
    const length2 = str2.length
    if (length1 !== length2) {
        return false
    }

    let freqObj2 = {}
    let freqObj1 = {}

    for (const ele of str1) {
        freqObj1[ele] = ++freqObj1[ele] || 1;        
    }
    for (const ele of str2) {
        freqObj2[ele] = ++freqObj2[ele] || 1;        
    }
    console.log(freqObj1,"aa", freqObj2);
    for (const key in freqObj1) {
       if (!(key in freqObj2)) {
         return false
       }
       if (freqObj1[key] !== freqObj2[key]) {
        return false
       }
       return true
    }

}

const str1 = ' ';
const str2 = ' ';

console.log(validAnagram(str1, str2));
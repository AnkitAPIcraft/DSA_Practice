//Write a function that takes a string as input and returns an object representing the frequency of each letter or digit in the string.
// Below thing I asked to to the interviewer.
// The function should be case-insensitive (i.e., treat uppercase and lowercase letters as the same), and ignore all non-alphanumeric characters (such as spaces, punctuation, and symbols).
function countFrequency(str) {
    let freqObj = {}
    for (let ele of str) {
        ele = ele.toLowerCase()
        if(ele.match(/[a-z0-9]/) ) {
            freqObj[ele] = ++freqObj[ele] || 1
        }
    }
    return freqObj
}


const str = "Hello my friend Number 1234 !!"
console.log(countFrequency(str));

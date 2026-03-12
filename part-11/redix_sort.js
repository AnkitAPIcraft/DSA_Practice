function getDigit(str, number) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === number) {
            return str.length - 1 - i
        }
    }
    if (number === 0) {
        return str.length
    }

}

console.log(getDigit([1, 2, 3, 4, 5], 4));
function naiveStringSearch (longStr, shortStr) {
    let count =0;
    for (let outer = 0; outer <= longStr.length - shortStr.length; outer++) {
        let match = true
        for (let inner = 0; inner < shortStr.length; inner++) {
            if(shortStr[inner] !== longStr[inner+outer]) {
                match = false
               break;
            } 
        }
        if (match === true) {
            count ++;
        }
    }
    return count;
}

console.log(naiveStringSearch("aba haha ha", "ha"));
function productExceptSelf(num) {
    const n = num.length
    const prefix = Array(n).fill(1)
    const suffix = Array(n).fill(1)
    const res = Array(n)
    
    for(let itr = 1; itr < n; itr++) {
        prefix[itr] = prefix[itr - 1] * num[itr - 1]
    }
    
    for(let itr = n-2; itr >= 0; itr--) {
        suffix[itr] = suffix[itr + 1] * num[itr + 1]
    }
    
    for(let itr = 0; itr < n; itr++) {
        res[itr] = prefix[itr] * suffix[itr]
    }
    return res
    
}

const num = [1, 2, 3, 4]

console.log(productExceptSelf(num))
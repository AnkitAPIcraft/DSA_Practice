function findSumPair(arr, target) {
    const map = new Map()
    
    for(let itr = 0; itr < arr.length; itr ++) {
        const diff = target - arr[itr]
        if(map.has(diff)) {
            const max = Math.max(map.get(diff), itr)
            const min = Math.min(map.get(diff), itr)
            return [min, max]
        }
        map.set(arr[itr], itr)
    }
    return [-1, -1]
}

const arr = [7, 2, 8, 9] 

console.log(findSumPair(arr, 9))
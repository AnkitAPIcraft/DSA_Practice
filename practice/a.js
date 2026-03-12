function sort(arr) {
    for(let inn = 0; inn<arr.length; inn++) {
        for(let out = inn; out < arr.length; out++) {
            if(arr[inn] > arr[out]) {
                const temp = arr[inn];
                arr[inn] = arr[out];
                arr[out] = temp
            }
        }
    }
    return arr
}

console.log(sort([9,0,7,8]));
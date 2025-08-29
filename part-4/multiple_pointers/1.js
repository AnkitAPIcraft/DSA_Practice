// really unoptimized as o(n) = n**2
function sumZero (arr) {
    for (let j = 0; j < arr.length; j ++ ) {
        for(let i = arr.length - 1; i > j; i --) {
            if (arr[j] + arr[i] === 0) {
                return [arr[j], arr[i]]
            }
        }
    }
    return;
}

const arr = [-3, -2, 0, 1, 2]

console.log(sumZero(arr));


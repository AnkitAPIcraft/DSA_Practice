function bubbleSort(arr) {
    const length = arr.length
    for (let outer = 0; outer < length; outer++) {
        for (let inner = 0; inner < length - outer; inner++) {
            console.log(arr, arr[inner], arr[inner + 1]);
           if(arr[inner] > arr[inner + 1]) {
            let temp = arr[inner];
            arr[inner] = arr[inner + 1]
            arr[inner + 1] = temp
           }
        }
    }
    return arr
}

console.log(bubbleSort([23, 67, 13, 0, 9]));  //my appraoch

function bubbleSort(arr){
    for (var i = arr.length; i > 0; i--){
        for (var j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr; // this one is a bit more optimal as in my case I'm doing one comparison extra. 
}

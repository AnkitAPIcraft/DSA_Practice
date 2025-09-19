// Key Benefits
// Worst case: still O(n²) (like all Bubble Sorts).
// Best case (already sorted array): only O(n) because it exits after one pass.
// Saves unnecessary iterations → much faster for nearly-sorted arrays.

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n; i++) {
        swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]); // Debugging
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

        // If no two elements were swapped in the inner loop, array is sorted
        if (!swapped) break;
    }

    return arr;
}

// Example
console.log(bubbleSort([23, 67, 13, 0, 9])); 

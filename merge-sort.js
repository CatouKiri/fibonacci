// Helper function to merge two sorted subarrays
function merge(arr, l, mid, h) {
    let i = l;        // Starting index for left subarray
    let j = mid + 1;  // Starting index for right subarray
    let k = 0;        // Starting index for temporary merged array
    let temp = [];    // Temporary array to store the merged result

    // Merge the two subarrays into temp[]
    while (i <= mid && j <= h) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Copy remaining elements from the left subarray, if any
    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    // Copy remaining elements from the right subarray, if any
    while (j <= h) {
        temp[k++] = arr[j++];
    }

    // Copy the sorted elements back into the original array
    for (let p = 0; p < k; p++) {
        arr[l + p] = temp[p];
    }
}

// Merge sort function
function mergeSort(arr, l, h) {
    if (l < h) {
        let mid = Math.floor((l + h) / 2);  // Calculate the midpoint
        mergeSort(arr, l, mid);             // Sort the left half
        mergeSort(arr, mid + 1, h);         // Sort the right half
        merge(arr, l, mid, h);              // Merge the two halves
    }
}

// Example usage
let arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);  // Output: [3, 9, 10, 27, 38, 43, 82]
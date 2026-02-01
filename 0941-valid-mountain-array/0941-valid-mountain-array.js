/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    const n = arr.length;
    // Condition 1: The array must have at least 3 elements
    if (n < 3) {
        return false;
    }

    let i = 0;

    // Climb up the mountain (strictly increasing part)
    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    // Check if we reached a peak that is not the start or the end
    // i > 0 ensures we had an increasing segment.
    // i < n - 1 ensures we have a decreasing segment to follow.
    if (i === 0 || i === n - 1) {
        return false;
    }

    // Climb down the mountain (strictly decreasing part)
    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }

    // If we have traversed the entire array, it is a valid mountain
    return i === n - 1;
};

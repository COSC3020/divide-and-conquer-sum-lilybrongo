function divideAndConquerSum(a) {
    return separateSums(a, 0, a.length);
}

function separateSums(a, low, high) {
    // Base case: if the subarray has no elements or only one element
    // This is the start of the run time analysis 
    // When n <= 1 the run time is T(n) = 1, when n>1 T(n) = 3T(n/3)
    if (high - low <= 0) {
        return 0;
    }
    if (high - low === 1) {
        return a[low];
    }

    // Calculate the midpoints for splitting the array into thirds
    const third = Math.floor((high - low) / 3);
    const midpoint_1 = low + third;
    const midpoint_2 = low + 2 * third + 1;

    // Recursively sum the three segments
    const sum1 = separateSums(a, low, midpoint_1 + 1);
    const sum2 = separateSums(a, midpoint_1 + 1, midpoint_2);
    const sum3 = separateSums(a, midpoint_2, high);

    return sum1 + sum2 + sum3;
}

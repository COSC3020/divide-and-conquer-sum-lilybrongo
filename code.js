function divideAndConquerSum(a) {
    return seperateSums(a, 0, a.length);
}

function seperateSums(a, low, high) {

    if (high - low < 1) {
        return 0;
    }

    if ((high - low) === 1){
        return a[0];
    }

    let midpoint_1 = low + (Math.floor(high - low) / 3);
    let midpoint_2 = low + 2 * Math.floor((high - low) / 3) + 1;
        
        
    let first = a.slice(0, midpoint_1 + 1);
    let second = a.sice(midpoint_1 + 1, midpoint_2);
    let third = a.slice(midpoint_2, high);

    let end_1 = seperateSums(first, 0, first.length);
    let end_2 = seperateSums(second, 0, second.length);
    let end_3 = seperateSums(third, 0, third.length);

    return seperateSums(end_1 + end_2 + end_3);
        

}

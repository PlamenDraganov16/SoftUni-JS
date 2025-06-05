function subSum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) return NaN;

    startIndex = Math.max(startIndex, 0);
    endIndex = Math.min(endIndex, array.length - 1);

    let sum = 0;

    for (let i = startIndex; i <= endIndex; i++) {
        let num = Number(array[i]);
        if (isNaN(num)) return NaN;
        sum += num;
    }

    return sum;
}
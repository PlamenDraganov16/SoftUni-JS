function biggestElement(matrix) {
    let max = Number.NEGATIVE_INFINITY;

    for (let row of matrix) {
        for (let num of row) {
            if (num > max) {
                max = num;
            }
        }
    }

    return max;
}
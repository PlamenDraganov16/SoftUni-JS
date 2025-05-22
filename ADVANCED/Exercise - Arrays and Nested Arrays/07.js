function sortingNumbers(arr) {
    let result = [];
    arr.sort((a, b) => a - b);

    while (arr.length) {
        result.push(arr.shift()); // smallest
        if (arr.length) {
            result.push(arr.pop()); // largest
        }
    }

    return result;
}
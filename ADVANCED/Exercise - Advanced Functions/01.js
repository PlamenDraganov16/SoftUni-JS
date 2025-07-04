function sortArray(arr, order) {
    if (order === 'asc') {
        return arr.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return arr.sort((a, b) => b - a);
    } else {
        throw new Error("Invalid sort order. Use 'asc' or 'desc'.");
    }
}
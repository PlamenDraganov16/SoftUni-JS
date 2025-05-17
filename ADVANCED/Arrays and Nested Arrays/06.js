function biggerHalf(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const startIndex = Math.floor(sorted.length / 2);
    return sorted.slice(startIndex);
}
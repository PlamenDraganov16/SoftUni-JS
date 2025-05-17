function lastKNumbersSequence(n, k) {

    const result = [1];
    for (let i = 1; i < n; i++) {
        const start = Math.max(0, i - k);
        const sum = result.slice(start, i).reduce((a, b) => a + b, 0);
        result.push(sum);
    }
    return result;
}

console.log(lastKNumbersSequence(6, 3))
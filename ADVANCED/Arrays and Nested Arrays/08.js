function processOddPositions(input) {
    const result = input
        .map(Number)
        .filter((_, index) => index % 2 !== 0)
        .map(x => x * 2)
        .reverse();
    console.log(result.join(' '));
}
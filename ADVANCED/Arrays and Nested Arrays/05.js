function smallestTwoNumbers(arr) {
  const result = arr.sort((a, b) => a - b).slice(0, 2);
  console.log(result.join(' '));
}
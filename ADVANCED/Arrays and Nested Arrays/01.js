function evenPosition(arr) {
  console.log(arr.filter((_, i) => i % 2 === 0).join(' '));
}
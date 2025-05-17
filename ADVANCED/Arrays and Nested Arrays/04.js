function negativePositiveNumbers(arr) {
  const result = [];
  for (let num of arr) {
    num < 0 ? result.unshift(num) : result.push(num);
  }
  result.forEach(x => console.log(x));
}
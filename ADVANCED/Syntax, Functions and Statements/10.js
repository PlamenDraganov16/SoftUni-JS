function aggregateElements(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let inverseSum = arr.reduce((acc, num) => acc + 1 / num, 0);
    let concatenated = arr.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenated);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);

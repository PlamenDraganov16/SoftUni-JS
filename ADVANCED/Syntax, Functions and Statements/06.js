function sumNumbers(n, m) {
    let num1 = Number(n);
    let num2 = Number(m);
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumNumbers('1', '5'));
console.log(sumNumbers('-8', '20'));

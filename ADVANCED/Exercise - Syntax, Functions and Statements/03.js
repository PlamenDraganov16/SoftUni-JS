function sameNumbers(num) {
    let digits = num.toString().split('');
    let allSame = digits.every(d => d === digits[0]);
    let sum = digits.reduce((acc, d) => acc + Number(d), 0);
    
    console.log(allSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);

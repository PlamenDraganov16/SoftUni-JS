function solve(n)
{   
    if (n < 2) {
        console.log("It's not so perfect.");
        return;
    }
    function test(n)
    {
    let sum = 0;


    
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum;
    }

    let sum = test(n)
    
    if (sum === n) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

solve(6)
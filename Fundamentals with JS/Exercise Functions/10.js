function factorialDivision(n, m)
{
    function factorialCalculate(n)
    {
        let sum = n;
        for(let i = n - 1; i > 0; i--)
        {
            sum *= i;
        }

        return sum;
    }

    let nFactorial = factorialCalculate(n);
    let mFactorial = factorialCalculate(m);

    let result = nFactorial / mFactorial;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2)
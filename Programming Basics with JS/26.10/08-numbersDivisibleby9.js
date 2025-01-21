function numbersDivisible(n, m)
{   let sum = 0;
    let outputnumbers = '';
    
    for(let i = n; i <= m; i++)
    {
        if(i % 9 === 0)
        {
        sum += i;
        outputnumbers += i + '\n'
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputnumbers);
    
}

numbersDivisible(100, 200);


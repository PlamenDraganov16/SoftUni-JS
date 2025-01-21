function solve(n)
{   
    let sum = 0

    let i = 1;
    let j = 1;

    while(i <= n)
    {
        sum += j;
        console.log(j)

        j += 2;
        i++
    }

    console.log(`Sum: ${sum}`);
}

solve(5)
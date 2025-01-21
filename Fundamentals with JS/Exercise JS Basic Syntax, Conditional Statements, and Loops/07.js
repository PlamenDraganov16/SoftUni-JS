function solve(n)
{
    for(let i = 1; i <= n; i++)
    {   let line = '';
        let j = 1;
        while(j <= i)
        {
            line += i + ' ';
            j++
        }
        console.log(line)
    }
}

solve(3)
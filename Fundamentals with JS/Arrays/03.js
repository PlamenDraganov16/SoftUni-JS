function solve(n, array)
{
    let result = "";

    for(let i = n - 1; i >= 0; i--)
    {
        let value = array[i];
        result += value + ' ';
    }

    console.log(result)
}

solve(3, [10, 20, 30, 40, 50])

function solve2(n, array)
{
    let result = ""
    let array2 = [];

    for(let i = 0; i <= n - 1; i++)
    {
        array2.push(array[i]);
    }

    array2.reverse();

    for(let i = 0; i <= array2.length - 1; i++)
    {
        result += array2[i] + ' ';
    }
    console.log(result);
}

solve2(3, [10, 20, 30, 40, 50])
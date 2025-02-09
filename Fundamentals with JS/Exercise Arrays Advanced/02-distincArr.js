function solve(arr)
{
    let unique = [];

    for(let num of arr)
    {
        if(!unique.includes(num))
        {
            unique.push(num);
        }
    }

    console.log(unique.join(' '));
}

solve([1, 2, 3, 4, 3]);
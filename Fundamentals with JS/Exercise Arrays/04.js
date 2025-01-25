function solve(array, rotations)
{
    for(let i = 1; i <= rotations; i++)
    {
        let element = array.shift();
        array.push(element);
    }

    console.log(array.join(" "))
}

solve([51, 47, 32, 61, 21], 2);
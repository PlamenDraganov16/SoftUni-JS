function solve(array)
{
    for(let i = 0; i < array.length; i++)
    {
        let sumToLeft = 0
        let sumToRight = 0

        for(let j = 0; j < i; j++)
        {
            sumToLeft += array[j];
        }

        for(let k = i + 1; k < array.length; k++)
        {
            sumToRight += array[k];
        }

        if(sumToLeft === sumToRight)
        {
            console.log(i)
            return;
        }
        
    }
    console.log('no')
}

solve([1, 2])
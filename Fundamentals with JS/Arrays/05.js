function solve(array)
{   
    let sum = 0

    for(let i = 0; i < array.length; i++)
    {
        array[i] = Number(array[i]);
    }

    for(let num of array)
        {
            if(num % 2 == 0)
            {
                sum += num
            }
        }
    
    console.log(sum)
}

solve(['2','4','6','8','10'])
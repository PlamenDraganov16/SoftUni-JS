function solve(array)
{
    let arraySum = [];

    let sumOriginal = 0;
    for(let i = 0; i < array.length; i++)
    {
        sumOriginal += array[i]
    }

    let sumNew = 0;

    for(let i = 0; i < array.length; i++)
    {
        let number = array[i];

        if(number % 2 == 0)
        {
            number += i;
            sumNew += number
            
        }
        else 
        {
            number -= i;
            sumNew += number;
            
        }

        arraySum.push(number);
    }

    console.log(arraySum);
    console.log(sumOriginal);
    console.log(sumNew);
}

solve([5, 15, 23, 56, 35])
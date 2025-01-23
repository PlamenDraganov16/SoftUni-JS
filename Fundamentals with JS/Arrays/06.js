function solve(array)
{   let sumEven = 0;
    let sumOdd = 0;
    for(let even of array)
    {
        if(even % 2 == 0) sumEven += even;
        else sumOdd += even
    }

    let result = sumEven - sumOdd
    console.log(result)

}

solve([1,2,3,4,5,6])
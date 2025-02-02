function solve(num)
{
    let resultOdd = 0;
    let resultEven = 0;

    let numStr = num.toString();

    for(let i = 0; i < numStr.length; i++)
    {
        let place = numStr[i];

        if(place % 2 === 0)
        {
            resultEven += Number(place);
        }
        else resultOdd += Number(place);
    }

    console.log(`Odd sum = ${resultOdd}, Even sum = ${resultEven}`)
}

solve(1000435)
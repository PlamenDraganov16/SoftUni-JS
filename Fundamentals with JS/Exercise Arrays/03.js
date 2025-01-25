function solve(arrayOne, arrayTwo)
{   
    let mergedArray = [];

    for (let i = 0; i < arrayOne.length; i++) 
    {
        let elementOne = arrayOne[i];
        let elementTwo = arrayTwo[i];

        if(i % 2 == 0)
        {
            mergedArray.push(Number(elementOne) + Number(elementTwo));
        }
        else
        {
            mergedArray.push(elementOne + elementTwo);
        }
    }

    console.log(mergedArray.join(" - "));
}

solve(['5', '15', '23', '56', '35'],
      ['17', '22', '87', '36', '11'])
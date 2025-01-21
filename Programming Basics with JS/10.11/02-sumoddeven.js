function sumOddEven(startNum, endNum)
{
    let result = "";
    for(let current = startNum; current <= endNum; current++)
    {
        let evenPosition = 0;
        let oddPosition = 0;

        let currentStr = "" + current;

        for(let index = 0; index < currentStr.length; index++)
        {
            let digit = Number(currentStr[index]);

            if(index % 2 === 0)
            {
                evenPosition += digit;
            }
            else
            {
                oddPosition += digit;   
            }
        }

        if(evenPosition === oddPosition)
        {
            result += currentStr + ' ';
        
        }
        
    }
    console.log(result)
}

sumOddEven(100000, 100050)
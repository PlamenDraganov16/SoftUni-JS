function uniquePin(endFirstNum, endSecondNum, endThirdNum)
{
    for (let firstDigit = 2; firstDigit <= endFirstNum; firstDigit += 2) 
    { 
        for (let secondDigit = 2; secondDigit <= endSecondNum; secondDigit++)
        { 
            if ((secondDigit === 2 || secondDigit === 3 || secondDigit === 5 || secondDigit === 7) 
                && secondDigit >= 2 && secondDigit <= 7) 
            {
                for (let thirdDigit = 2; thirdDigit <= endThirdNum; thirdDigit += 2) 
                { 
                    console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
                }
            }
        }
    }
}

uniquePin(3, 5, 5)

function two(endFirstNum, endSecondNum, endThirdNum)
{
    for(let firstDigit = 2; firstDigit <= endFirstNum; firstDigit += 2)
    {
        for(let secondDigit = 2; secondDigit <= endSecondNum; secondDigit++)
        {
            if((secondDigit === 2 || secondDigit === 3 || secondDigit === 5 || secondDigit === 7) && secondDigit >=2 && secondDigit <=7)
            {
                for(let thirdDigit = 2; thirdDigit <= endThirdNum; thirdDigit += 2)
                {
                    console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
                }
            }
        }
    }
}

two(8, 2, 8)
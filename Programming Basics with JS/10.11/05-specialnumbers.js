function specialNumbers(n)
{
    let result = '';

    for(let currNum = 1111; currNum <= 9999; currNum++)
    {
        let isMagic = true;
        let currNumStr = currNum + '';

        for(let i = 0; i < currNumStr.length; i++)
        {
            let digit = Number(currNumStr[i]);

            if(n % digit !== 0)
            {
                isMagic = false;
                break;
            }
        }

        if(isMagic)
        {
            result += currNum + ' ';
        }
    }

    console.log(result)
}

specialNumbers(3)
function sumTwoNums(start, finish, desiredNum)
{
    let counter = 0;
    let shouldWeBreak = false;

    for(let i = start; i <= finish; i++)
    {
        for(let j = start; j <= finish; j++)
        {
            counter++
            if(i + j === desiredNum)
            {
                //console.log(`${counter}:${i} + ${j} = ${desiredNum}`)

                console.log(`Combination N:${counter} (${i} + ${j} = ${desiredNum})`)
                shouldWeBreak = true;
                break;
                
            }
        }
        if(shouldWeBreak)
            break;
    }

    if(!shouldWeBreak)
    {
        console.log(`${counter} combinations - neither equals ${desiredNum}`)
    }
}

sumTwoNums(1,10,5
    )
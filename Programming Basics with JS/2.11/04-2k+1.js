function twoKPlusOne(n)
{
    let currentNum = 1;

    while(currentNum <= n)
    {
        console.log(currentNum);

        currentNum = currentNum * 2 + 1;
    }
}

twoKPlusOne(3)
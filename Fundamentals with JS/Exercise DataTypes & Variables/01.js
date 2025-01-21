function solve(n)
{
    let sum = 0;
    
    let strNum = String(n);

    for(let i = 0; i < strNum.length; i++)
    {
        let place = Number(strNum[i]);

        sum += place;
    }

    console.log(sum)
}

solve(2345)
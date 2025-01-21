function smartLilly(age, washerPrice, toyPrice)
{
    let money = 0;
    let toys = 0;
    let moneyTaken = 0;

    for(i = 1; i <= age; i++)
    {
        if(i % 2 === 0)
        {
            money += (i / 2) * 10;
            moneyTaken++;
        }
        else
        {
            toys++;
        }
    }

    let total = money + (toys * toyPrice) - moneyTaken;

    if(total > washerPrice)
        console.log(`Yes! ${(total - washerPrice).toFixed(2)}`);
    else
        console.log(`No! ${(washerPrice - total).toFixed(2)}`);
}

smartLilly(10, 170, 6);
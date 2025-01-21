function mineBitCoin(array)
{
    let totalMoney = 0;
    let currentDay = 1;
    let firstDayBitCoin = 0;
    let countBitCoin = 0;

    for(let goldQty of array)
    {
        if(currentDay % 3 === 0)
        {
            goldQty *= 0.7;
        }

        let moneyWon = goldQty * 67.51;
        totalMoney += moneyWon;

        while (totalMoney >= 11949.16)
        {
            countBitCoin++;
            totalMoney -= 11949.16;

            if(countBitCoin === 1)
            {
                firstDayBitCoin = currentDay;
            }
        }

        currentDay++
    }

    console.log(`Bought bitcoins: ${countBitCoin}`);
    if(countBitCoin > 0)
    {
    console.log(`Day of the first purchased bitcoin: ${firstDayBitCoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}

mineBitCoin([100, 200, 300]);
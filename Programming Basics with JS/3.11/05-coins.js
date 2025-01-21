function coins(change)
{
    let coins = [200, 100, 50, 20, 10, 5, 2, 1];
    let count = 0;

    change = change * 100;

    let index = 0;

    while(change > 0 && index < coins.length)  {
     let coinsInCents = coins[index];
     while(change >= coinsInCents)
        {
            change-=coinsInCents;
            count++
        }   
        index++
    }
    console.log(count)
}

coins(1.23)
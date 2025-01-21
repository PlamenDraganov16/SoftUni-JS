function hollywoodCinema(budget, workers, costumePrice)
{
    let decor = budget * 0.1;
    let costume = workers * costumePrice;
    
    let discount = 0;

    if(workers > 150)
    {
        discount = costume * 0.1;
        costume = costume - discount;       
    }

   // let newcostume = costume - discount;

    let overallSum = decor + costume;
    let leftMoney = 0;

    if(budget >= overallSum)
    {
        leftMoney = budget - overallSum;
        console.log('Action!')
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
    }
    else
    {
        leftMoney = overallSum - budget;
        console.log('Not enough money!');
        console.log(`Wingard needs ${leftMoney.toFixed(2)} leva more.`)
    }
}

hollywoodCinema(20000, 120, 55.5);
hollywoodCinema(9587.88, 222, 55.68);
function magazine(priceTrip, numPuzzels, numDolls, numBears, numMinions, numTrucks)
{
    let totalSum = numPuzzels * 2.60 + numDolls * 3 + numBears * 4.10 + numMinions * 8.20 + numTrucks * 2;
    let totalToys = numPuzzels + numDolls + numBears + numMinions + numTrucks;
    
    let discount = 0;
    if (totalToys >= 50)
    {
        discount = totalSum * 0.25;
    }
    
    let finalPrice = totalSum - discount;
    let rent = finalPrice * 0.1;

    let profit = finalPrice - rent;
    let leftMoney=0;

    if(profit >= priceTrip)
    {
        leftMoney = profit - priceTrip;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
    }

    else{
        leftMoney = -(profit - priceTrip);
        console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`);
    }
    
   
}

magazine(320, 8,2,5,5,1);
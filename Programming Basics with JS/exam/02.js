function maidenParty(wedParty, numLoveP, numRoses, numKeyholders, numCaricatures, numSurprise)
{
    let total = numLoveP * 0.6 + numRoses * 7.20 + numKeyholders * 3.60 + numCaricatures * 18.20 + numSurprise * 22;

    let totalNumArticules = numLoveP + numRoses + numKeyholders + numCaricatures + numSurprise;

    if(totalNumArticules > 25)
    {
        total *= 0.65;
    }

    let hostingPrice = total * 0.1;

    let winnings = total - hostingPrice;

    if(winnings > wedParty)
    {
        console.log(`Yes! ${(winnings - wedParty).toFixed(2)} lv left.`)
    }
    else
    {
        console.log(`Not enough money! ${(wedParty - winnings).toFixed(2)} lv needed.`)
    }
}

maidenParty(40.8,
    20,
    25,
    30,
    50,
    10)
function shopping(budget, graphicsCard, processors, RAM)
{   
    let graphicsMoney = 250;

    let totalGraphics = graphicsCard * graphicsMoney;

    let processorsMoney = totalGraphics * 0.35;
    let ramMoney = totalGraphics * 0.10;

    let price = totalGraphics + (processors * processorsMoney) + (ramMoney * RAM);

    if(graphicsCard > processors)
    {
        let finalPrice = price * 0.85
        
        if(finalPrice <= budget)
        {
            let leftMoney = budget - finalPrice;
            console.log(`You have ${(leftMoney).toFixed(2)} leva left!`)
        }
        else
        {
            console.log(`Not enough money! You need ${(finalPrice-budget).toFixed(2)} leva more!`)
        }
    }
    else
    {
        if(price <= budget)
            {
                let leftMoney = budget - price;
                console.log(`You have ${(leftMoney).toFixed(2)} leva left!`)
            }
            else
            {
                console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva more!`)
            }
    }
}

shopping(900, 2, 1, 3)
shopping(920.45, 3, 1, 1)
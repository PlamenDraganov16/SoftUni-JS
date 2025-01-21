function fishBoat(budget, season, fishmans)
{
    let boat = 0;

    if(season === 'Spring')
    {
        boat = 3000;
    }
    else if(season === 'Summer' || season === 'Autumn')
    {
        boat = 4200;
    }
    else if(season === 'Winter')
    {
        boat = 2600;
    }
    else 
    {
        console.log("Invalid input!")
        return;
    }

    if(fishmans <=6)
        {
            boat *= 0.9;
        }
    else if(fishmans > 6 && fishmans <= 11)
        {
            boat *= 0.85;
        }
    else if( fishmans >= 12)
        {
            boat *= 0.75;
        }
    
    if (fishmans % 2 == 0 && season != 'Autumn')
    {
        boat *= 0.95
    }

    let leftMoney = budget - boat;
    
    if(budget >= boat)
    {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`)
    }
    else
    {
        console.log(`Not enough money! You need ${(boat-budget).toFixed(2)} leva.`);
    }
}

fishBoat(3000, 'Summer', 11);
fishBoat(3600, 'Autumn', 6);
fishBoat(2000, 'Winter', 13);

function travelling(budget, season)
{
    let moneySpent = 0; 
    let destination = '';
    let typeHotel = '';

    if(budget <= 100)
    {
        if(season === 'summer')
        {
            moneySpent = budget * 0.30;
            typeHotel = 'Camp';
        }
        else if(season === 'winter')
        {
            moneySpent = budget * 0.70;
            typeHotel = 'Hotel';
        }

        destination = 'Bulgaria';
    }
    else if(budget > 100 && budget <= 1000)
    {
        if(season === 'summer')
        {
            moneySpent = budget * 0.4;
            typeHotel = 'Camp';
        }
        else if(season === 'winter')
        {
            moneySpent = budget * 0.8;
            typeHotel = 'Hotel';
        }

        destination = 'Balkans';
    }
    else if(budget > 1000)
    {
        if(season === 'summer' || season === 'winter')
        {
            moneySpent = budget * 0.9;
        }
        typeHotel = 'Hotel';
        destination = 'Europe';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeHotel} - ${moneySpent.toFixed(2)}`);

}

travelling(1500, 'summer');
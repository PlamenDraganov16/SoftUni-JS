function excursionCalculator(numPeople, season)
{
    let total = 0;

    if(numPeople <= 5)
    {
        switch(season)
        {
            case 'spring':
                total = numPeople * 50;
                break;
            case 'summer':
                total = numPeople * 48.50;
                total = total - (total * 0.15);
                break;
            case 'autumn':
                total = numPeople * 60;
                break;
            case 'winter':
                total = numPeople * 86;
                total = total + (total * 0.08);
                break;
        }
    }
    else if(numPeople > 5)
        {
            switch(season)
            {
                case 'spring':
                    total = numPeople * 48;
                    break;
                case 'summer':
                    total = numPeople * 45;
                    total = total - (total * 0.15);
                    break;
                case 'autumn':
                    total = numPeople * 49.5;
                    break;
                case 'winter':
                    total = numPeople * 85;
                    total = total + (total * 0.08);
                    break;
            }
        }




    console.log(`${total.toFixed(2)} leva.`)
}

excursionCalculator(
    10,
    'summer');
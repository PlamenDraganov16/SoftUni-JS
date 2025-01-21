function solve(numPeople, type, day)
{
    let ticket = 0;
    let total = 0;

    if(type === 'Students')
    {
        switch(day)
        {
            case 'Friday':
                ticket = 8.45;
                break;
            case 'Saturday':
                ticket = 9.80;
                break;
            case 'Sunday':
                ticket = 10.46;
                break;
        }

        total = numPeople * ticket;
        if(numPeople >= 30) total *= 0.85;     
    }
    else if(type === 'Business')
        {
            switch(day)
            {
                case 'Friday':
                    ticket = 10.90;
                    break;
                case 'Saturday':
                    ticket = 15.60;
                    break;
                case 'Sunday':
                    ticket = 16;
                    break;
            }
    
            let totalBusiness = numPeople * ticket;
            total = totalBusiness;
            if(numPeople >= 100) total = totalBusiness - (10 * ticket);     
        }

    else if(type === 'Regular')
    {
        switch(day)
            {
                case 'Friday':
                    ticket = 15;
                    break;
                case 'Saturday':
                    ticket = 20;
                    break;
                case 'Sunday':
                    ticket = 22.50;
                    break;
            }

        total = numPeople * ticket

        if(numPeople >= 10 && numPeople <= 20)
            total *= 0.95;
    }

    console.log(`Total price: ${total.toFixed(2)}`)
    
}

solve(
    40,
    "Regular",
    "Saturday"
    
)
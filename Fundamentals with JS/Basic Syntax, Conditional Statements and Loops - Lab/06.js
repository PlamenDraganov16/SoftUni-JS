function solve(day, age)
{
    let ticket = 0;

    if(age >= 0 && age <= 18)
    {
        if(day === 'Weekday')
            ticket = 12;
        
        else if(day === 'Weekend')
            ticket = 15;
        
        else if(day === 'Holiday') 
            ticket = 5;
    }
    else if(age >= 19 && age <= 64)
    {
        if(day === 'Weekday')
            ticket = 18;
        
        else if(day === 'Weekend')
            ticket = 20;
        
        else if(day === 'Holiday') 
            ticket = 12;
    }
    else if(age >= 65 && age <= 122)
    {
        if(day === 'Weekday')
            ticket = 12;
        
        else if(day === 'Weekend')
            ticket = 15;
        
        else if(day === 'Holiday') 
            ticket = 10;
    }
    else
    {
        console.log('Error!')
        return;
    }

    console.log(`${ticket}$`);
}
solve('Weekday', -15)
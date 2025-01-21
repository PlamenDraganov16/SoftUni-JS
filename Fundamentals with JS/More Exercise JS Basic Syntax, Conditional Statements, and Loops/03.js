function nextDay(year, month, day)
{
    switch(month)
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if(day >= 1 && day <=30) day ++;
            else if(day === 31) day = 1, month++;
            break;
        case 12:
            if(day >= 1 && day <=30) day ++;
            else if(day === 31) day = 1, month = 1, year++;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if(day >= 1 && day <=29) day++;
            else if(day === 30) day = 1, month ++;
            break;
        case 2:
            if(day >= 1 && day <= 27) day++;
            else if(day === 28 && year % 4 === 0) day++;
            else if(day === 28) day = 1, month++
            break;
    }
    console.log(`${year}-${month}-${day}`)
}

nextDay(2022, 2, 28)
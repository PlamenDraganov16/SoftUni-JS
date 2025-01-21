function workingDay(time, day)
{
    if(time >=10 && time <= 18 && day != 'Sunday')
    {
        switch (day)
        {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday' :
            case 'Friday' :
            case 'Saturday':
                console.log('open');
                break;
            default:
                break;

        }
    }
    else
        console.log('closed')
}

workingDay(11, 'Monday');
workingDay(19, 'Friday')
workingDay(11, 'Sunday');
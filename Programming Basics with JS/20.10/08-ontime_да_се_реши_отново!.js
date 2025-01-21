function onTime(hourOfExam, minuteOfExam, hourOfArrival, minuteOfArrival)
{
    let examTotalMinutes = hourOfExam * 60 + minuteOfExam;
    let arrivalTotalMinutes = hourOfArrival * 60 + minuteOfArrival;
    let diff = arrivalTotalMinutes - examTotalMinutes;

    if(diff > 0)
    {
        console.log('Late');
        if(diff < 60)
        {
            console.log(`${diff} minutes after the start`);
        }
        else
        {
        let hours = Math.floor(diff / 60);
        let minutes = diff % 60;

        if(minutes < 10)
            minutes = '0' + minutes;

        consol
        
        e.log(`${hours}:${minutes} hours after the start`);
        }
    }
    else if(diff >= -30)
    {
        console.log(`On time`);
        if(diff < 0)
        {
            console.log(`${-diff} minutes before the start`);
        }
    }
    else
    {
        console.log('Early')
        let absDiff = -diff;
        if (absDiff < 60) {
            console.log(absDiff + " minutes before the start");
        } else {
            let hours = Math.floor(absDiff / 60);
            let minutes = absDiff % 60;
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            console.log(hours + ":" + minutes + " hours before the start");
        }
    }
   
}

onTime(9, 0, 10, 30);

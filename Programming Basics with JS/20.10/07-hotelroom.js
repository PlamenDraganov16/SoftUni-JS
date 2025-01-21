function hotelRoom(month, nights)
{
    let studioPrice = 0;
    let apartmentPrice = 0;

    if(month === 'May' || month === 'October')
    {
        studioPrice = 50;
        apartmentPrice = 65;
        if(nights > 14)
            {
                studioPrice *= 0.70;
            }
        else if(nights > 7)
        {
        
            studioPrice *= 0.95
        
        }
    }
    else if(month === 'June' || month === 'September')
    {
        studioPrice = 75.2;
        apartmentPrice = 68.70;
        if(nights > 14)
        {
            studioPrice *= 0.8
        }
    }
    else if(month === 'July' || month === 'August')
    {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if(nights > 14)
    {
        apartmentPrice *= 0.9;
    }

    let totalStayS = studioPrice * nights;
    let totalStayA = apartmentPrice * nights;
    console.log(`Apartment: ${totalStayA.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStayS.toFixed(2)} lv.`);
}

hotelRoom('May', 15)
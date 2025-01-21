function skiHoliday(days, roomType, grade)
{
    let simpleRoom = 18;
    let simpleApartment = 25;
    let presidentApartment = 35;

    let nights = days - 1;

    if(days < 10 && (roomType === 'apartment' || roomType === 'president apartment'))
    {
        simpleApartment *= 0.7;
        presidentApartment *= 0.9;
    }
    else if(days >= 10 && days <=15 && (roomType === 'apartment' || roomType === 'president apartment'))
    {
        simpleApartment *= 0.65;
        presidentApartment *= 0.85;
    }
    else if(days > 15 && (roomType === 'apartment' || roomType === 'president apartment'))
    {
        simpleApartment *= 0.5;
        presidentApartment *= 0.8;
    }
    
    let staying=0;
    if(roomType === 'room for one person')
    {
    staying = nights * simpleRoom;
    }
    else if(roomType === 'apartment')
    {
    staying = nights * simpleApartment;
    }
    else if(roomType === 'president apartment')
    {
    staying = nights * presidentApartment;
    }

    if(grade === 'positive')
    {
        staying *= 1.25;
    }
    else if(grade === 'negative')
    {
        staying *= 0.9;
    }

    console.log(staying.toFixed(2));
}

skiHoliday(12, 'room for one person','positive');
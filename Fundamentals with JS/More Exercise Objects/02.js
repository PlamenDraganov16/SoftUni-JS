function flightStatusManager(flightData) {
    let [flights, updatedStatuses, statusToCheck] = flightData;
    let flightMap = {};
    
    flights.forEach(flight => {
        let [flightNumber, ...destinationArr] = flight.split(' ');
        let destination = destinationArr.join(' ');
        flightMap[flightNumber] = { Destination: destination, Status: 'Ready to fly' };
    });
    
    updatedStatuses.forEach(update => {
        let [flightNumber, status] = update.split(' ');
        if (flightMap.hasOwnProperty(flightNumber)) {
            flightMap[flightNumber].Status = status;
        }
    });
    
    Object.values(flightMap).forEach(flight => {
        if (flight.Status === statusToCheck[0]) {
            console.log(flight);
        }
    });
}

flightStatusManager([['WN269 Delaware',
    'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
     ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK430 Cancelled'],
     ['Cancelled']
 ]
 )
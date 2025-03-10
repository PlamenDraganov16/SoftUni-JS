function roadRadar(speed, area) {
    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let limit = speedLimits[area];
    let difference = speed - limit;
    
    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status = difference <= 20 ? "speeding" :
                     difference <= 40 ? "excessive speeding" :
                     "reckless driving";
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

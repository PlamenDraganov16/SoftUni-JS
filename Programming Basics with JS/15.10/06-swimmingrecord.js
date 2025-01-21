function recordSwimming(record, meters, timeMeter)
{
    let swimmingPhase = meters * timeMeter;
    let slowing = Math.floor(meters / 15);
    let totalSlowing = slowing * 12.5;
    let totalTime = swimmingPhase + totalSlowing;

    // if(record < totalTime)
    // {
    //     remainingTime = totalTime - record;
    //     console.log(`No, he failed! He was ${(remainingTime).toFixed(2)} seconds slower.`)
    // }
    // else{
    //     console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    // }

    if(record > totalTime)
    {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
    else{
        remainingTime = totalTime - record;
        console.log(`No, he failed! He was ${(remainingTime).toFixed(2)} seconds slower.`)
    }
}

recordSwimming(10464, 1500, 20);
recordSwimming(55555.67, 3017, 5.03)
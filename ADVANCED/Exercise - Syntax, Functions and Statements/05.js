function timeToWalk(steps, footprintLength, speedKmH) {
    let distanceMeters = steps * footprintLength;
    let speedMetersSec = (speedKmH * 1000) / 3600;
    let timeSeconds = distanceMeters / speedMetersSec;

    let restTime = Math.floor(distanceMeters / 500) * 60;
    timeSeconds += restTime;

    let hours = Math.floor(timeSeconds / 3600);
    let minutes = Math.floor((timeSeconds % 3600) / 60);
    let seconds = Math.round(timeSeconds % 60);

    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);

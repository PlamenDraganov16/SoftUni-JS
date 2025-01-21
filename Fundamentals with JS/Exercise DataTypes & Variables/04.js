function solve(meters)
{   let kilometers = meters / 1000  
    
    console.log(`${meters} meters is equal to ${kilometers} kilometers.`);
    let miles = kilometers * 0.62137;
    console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
}

solve(1854)
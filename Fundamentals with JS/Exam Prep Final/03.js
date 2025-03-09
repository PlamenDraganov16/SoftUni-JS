function needForSpeedIII(input) {
    let n = Number(input.shift());
    let cars = {};

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        cars[car] = { mileage: Number(mileage), fuel: Number(fuel) };
    }

    for (let commandLine of input) {
        if (commandLine === "Stop") break;

        let [command, car, ...params] = commandLine.split(" : ");

        if (command === "Drive") {
            let [distance, fuelNeeded] = params.map(Number);

            if (cars[car].fuel < fuelNeeded) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[car].mileage += distance;
                cars[car].fuel -= fuelNeeded;
                console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            }
        } 
        else if (command === "Refuel") {
            let fuelAmount = Number(params[0]);
            let fuelBefore = cars[car].fuel;
            cars[car].fuel = Math.min(75, fuelBefore + fuelAmount);
            console.log(`${car} refueled with ${cars[car].fuel - fuelBefore} liters`);
        } 
        else if (command === "Revert") {
            let kilometers = Number(params[0]);
            cars[car].mileage -= kilometers;
            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    Object.entries(cars).forEach(([car, { mileage, fuel }]) => {
        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    });
}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
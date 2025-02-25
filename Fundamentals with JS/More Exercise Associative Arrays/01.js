function garage(input) {
    let garages = {};

    input.forEach(entry => {
        let [garageNumber, carInfo] = entry.split(" - ");
        if (!garages[garageNumber]) {
            garages[garageNumber] = [];
        }
        garages[garageNumber].push(carInfo.replace(/: /g, " - "));
    });

    Object.keys(garages).forEach(garage => {
        console.log(`Garage № ${garage}`);
        garages[garage].forEach(car => console.log(`--- ${car} `));
    });
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])
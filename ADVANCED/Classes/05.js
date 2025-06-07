function autoEngineeringCompany(input) {
    const carRegister = new Map();

    for (let entry of input) {
        let [brand, model, produced] = entry.split(' | ');
        produced = Number(produced);

        if (!carRegister.has(brand)) {
            carRegister.set(brand, new Map());
        }

        const models = carRegister.get(brand);

        if (!models.has(model)) {
            models.set(model, produced);
        } else {
            models.set(model, models.get(model) + produced);
        }
    }

    for (let [brand, models] of carRegister.entries()) {
        console.log(brand);
        for (let [model, count] of models.entries()) {
            console.log(`###${model} -> ${count}`);
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
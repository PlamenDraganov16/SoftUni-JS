function fruitCost(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let totalCost = weightInKg * pricePerKg;
    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruitCost('orange', 2500, 1.80);
fruitCost('apple', 1563, 2.35);

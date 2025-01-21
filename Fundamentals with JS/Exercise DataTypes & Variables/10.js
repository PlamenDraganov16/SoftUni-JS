function calculateSpiceExtraction(startingYield) {
    let totalSpice = 0;
    let daysOperated = 0;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        startingYield -= 10;
        daysOperated++;

        // Subtract daily consumption
        totalSpice -= 26;
    }

    // Subtract final consumption if any spice is left
    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(daysOperated);
    console.log(totalSpice);
}

calculateSpiceExtraction(450)
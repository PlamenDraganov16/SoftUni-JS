function travelDestinations(input) {
    let destinations = new Map();

    for (let entry of input) {
        let [country, town, cost] = entry.split(' > ');
        cost = Number(cost);

        if (!destinations.has(country)) {
            destinations.set(country, new Map());
        }

        let towns = destinations.get(country);
        if (!towns.has(town) || towns.get(town) > cost) {
            towns.set(town, cost);
        }
    }

    let sortedCountries = [...destinations.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]));

    let result = [];
    for (let [country, towns] of sortedCountries) {
        let sortedTowns = [...towns.entries()]
            .sort((a, b) => a[1] - b[1])
            .map(([town, cost]) => `${town} -> ${cost}`)
            .join(' ');

        result.push(`${country} -> ${sortedTowns}`);
    }

    console.log(result.join('\n'));
}

travelDestinations([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);

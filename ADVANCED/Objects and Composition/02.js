function townPopulation(arr) {
    const towns = {};

    for (const line of arr) {
        const [town, populationStr] = line.split(' <-> ');
        const population = Number(populationStr);

        if (!towns[town]) {
            towns[town] = 0;
        }
        towns[town] += population;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
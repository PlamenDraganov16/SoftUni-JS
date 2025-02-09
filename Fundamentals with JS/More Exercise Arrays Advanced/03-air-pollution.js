function solve(map, forces) {
    let pollutionMap = map.map(row => row.split(' ').map(Number));

    for (let force of forces) {
        let [type, indexOrValue] = force.split(' ');
        indexOrValue = Number(indexOrValue);

        if (type === 'breeze') {
            for (let i = 0; i < 5; i++) {
                pollutionMap[indexOrValue][i] = Math.max(0, pollutionMap[indexOrValue][i] - 15);
            }
        } else if (type === 'gale') {            for (let i = 0; i < 5; i++) {
                pollutionMap[i][indexOrValue] = Math.max(0, pollutionMap[i][indexOrValue] - 20);
            }
        } else if (type === 'smog') {

            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    pollutionMap[i][j] += indexOrValue;
                }
            }
        }
    }

    let pollutedAreas = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (pollutionMap[i][j] >= 50) {
                pollutedAreas.push(`[${i}-${j}]`);
            }
        }
    }

    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

solve(
    ['5 7 72 14 4',
     '41 35 37 27 33',
     '23 16 27 42 12',
     '2 20 28 39 14',
     '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
);

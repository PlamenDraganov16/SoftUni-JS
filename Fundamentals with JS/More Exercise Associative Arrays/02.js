function armies(input) {
    let leaders = {};

    input.forEach(entry => {
        if (entry.includes(" arrives")) {
            let leader = entry.split(" arrives")[0];
            leaders[leader] = {};
        } else if (entry.includes(" defeated")) {
            let leader = entry.split(" defeated")[0];
            delete leaders[leader];
        } else if (entry.includes(": ")) {
            let [leader, armyInfo] = entry.split(": ");
            if (leaders[leader]) {
                let [armyName, armyCount] = armyInfo.split(", ");
                leaders[leader][armyName] = Number(armyCount);
            }
        } else if (entry.includes(" + ")) {
            let [armyName, armyCount] = entry.split(" + ");
            for (let leader in leaders) {
                if (leaders[leader][armyName] !== undefined) {
                    leaders[leader][armyName] += Number(armyCount);
                }
            }
        }
    });

    let sortedLeaders = Object.entries(leaders)
        .map(([leader, armies]) => ({
            leader,
            total: Object.values(armies).reduce((sum, count) => sum + count, 0),
            armies
        }))
        .sort((a, b) => b.total - a.total);

    sortedLeaders.forEach(({ leader, total, armies }) => {
        console.log(`${leader}: ${total}`);
        Object.entries(armies)
            .sort(([, a], [, b]) => b - a)
            .forEach(([name, count]) => console.log(`>>> ${name} - ${count}`));
    });
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])
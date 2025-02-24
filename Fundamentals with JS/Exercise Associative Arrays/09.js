function gladiatorArena(input) {
    let gladiators = new Map();

    for (let line of input) {
        if (line === "Ave Cesar") break;

        if (line.includes("->")) {
            let [gladiator, technique, skill] = line.split(" -> ");
            skill = Number(skill);

            if (!gladiators.has(gladiator)) {
                gladiators.set(gladiator, new Map());
            }

            let techniques = gladiators.get(gladiator);
            if (!techniques.has(technique) || techniques.get(technique) < skill) {
                techniques.set(technique, skill);
            }

        } else if (line.includes("vs")) {
            let [glad1, glad2] = line.split(" vs ");

            if (gladiators.has(glad1) && gladiators.has(glad2)) {
                let techniques1 = gladiators.get(glad1);
                let techniques2 = gladiators.get(glad2);

                let commonTechniques = [...techniques1.keys()].filter(tech => techniques2.has(tech));

                if (commonTechniques.length > 0) {
                    let totalSkill1 = [...techniques1.values()].reduce((a, b) => a + b, 0);
                    let totalSkill2 = [...techniques2.values()].reduce((a, b) => a + b, 0);

                    if (totalSkill1 > totalSkill2) {
                        gladiators.delete(glad2);
                    } else if (totalSkill2 > totalSkill1) {
                        gladiators.delete(glad1);
                    }
                }
            }
        }
    }

    let sortedGladiators = [...gladiators.entries()]
        .map(([name, techniques]) => ({
            name,
            totalSkill: [...techniques.values()].reduce((a, b) => a + b, 0),
            techniques
        }))
        .sort((a, b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name));

    for (let gladiator of sortedGladiators) {
        console.log(`${gladiator.name}: ${gladiator.totalSkill} skill`);

        let sortedTechniques = [...gladiator.techniques.entries()]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}

gladiatorArena([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);

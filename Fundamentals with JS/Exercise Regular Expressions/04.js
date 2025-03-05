function starEnigma(input) {
    let n = Number(input.shift());
    let attacked = [];
    let destroyed = [];
    let starPattern = /[star]/gi;
    let planetPattern = /@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([AD])![^@\-!:>]*->(\d+)/;

    for (let i = 0; i < n; i++) {
        let message = input[i];
        let key = (message.match(starPattern) || []).length;
        let decrypted = message.split("").map(ch => String.fromCharCode(ch.charCodeAt() - key)).join("");

        let match = decrypted.match(planetPattern);
        if (match) {
            let [_, planet, population, attackType, soldiers] = match;
            attackType === "A" ? attacked.push(planet) : destroyed.push(planet);
        }
    }

    attacked.sort();
    destroyed.sort();
    
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(p => console.log(`-> ${p}`));
    
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(p => console.log(`-> ${p}`));
}

starEnigma([
    "2",
    "STCDoghudd4=63333$D$0A53333",
    "EHfsytsnhf?8555&I&2C9555SR"
]);

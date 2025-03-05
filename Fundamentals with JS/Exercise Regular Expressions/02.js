function race(input) {
    let participants = input.shift().split(", ");
    let results = {};
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;

    for (let line of input) {
        if (line === "end of race") break;
        
        let name = (line.match(namePattern) || []).join("");
        let distance = (line.match(distancePattern) || []).reduce((a, b) => a + Number(b), 0);

        if (participants.includes(name)) {
            results[name] = (results[name] || 0) + distance;
        }
    }

    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]).slice(0, 3);
    let places = ["1st", "2nd", "3rd"];
    
    sortedResults.forEach((racer, index) => console.log(`${places[index]} place: ${racer[0]}`));
}

race([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@ ",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"
]);

function extractDestinations(str) {
    const regex = /([=/])([A-Z][a-zA-Z]{2,})\1/g;
    let destinations = [];
    let travelPoints = 0;
    
    let match;
    while ((match = regex.exec(str)) !== null) {
        destinations.push(match[2]);
        travelPoints += match[2].length;
    }
    
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

extractDestinations("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="); 
extractDestinations("ThisIs some InvalidInput");

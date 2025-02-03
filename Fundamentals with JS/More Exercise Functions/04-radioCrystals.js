function radioCrystals(arr){

    let targetThickness = arr[0];
    let chunks = arr.slice(1);

    function processChunk(thickness)
    {
        console.log(`Processing chunk ${thickness} microns`);

        let operations = [
            { name: 'Cut', action: (x) => x / 4, condition: (x) => x / 4 >= targetThickness },
            { name: 'Lap', action: (x) => x * 0.8, condition: (x) => x * 0.8 >= targetThickness },
            { name: 'Grind', action: (x) => x - 20, condition: (x) => x - 20 >= targetThickness },
            { name: 'Etch', action: (x) => x - 2, condition: (x) => x - 2 >= targetThickness - 1 }
        ];

        let xRayUsed = false;
        
        for (let op of operations) {
            let count = 0;
            while (op.condition(thickness)) {
                thickness = op.action(thickness);
                count++;
            }
            if (count > 0) {
                console.log(`${op.name} x${count}`);
                thickness = Math.floor(thickness);
                console.log("Transporting and washing");
            }
        }
        
        if (thickness < targetThickness && !xRayUsed) {
            console.log("X-ray x1");
            thickness += 1;
            xRayUsed = true;
        }
        
        console.log(`Finished crystal ${thickness} microns`);
    }
    
    chunks.forEach(processChunk);
}

radioCrystals([1375, 50000]);


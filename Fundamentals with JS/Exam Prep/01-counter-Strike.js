function game(array)
{
    let energy = array.shift();
    let count = 0;
    
    for(let fight of array)
    {
        
        if(count % 3 === 0)
        {
            energy += count;
        }
        if(fight <= energy)
        {
            energy -= fight;
            count++
        }
        else if(fight > energy)
        {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            return;
        }
        else if(fight === "End of battle")
        {
            console.log(`Won battles: ${count}. Energy left: ${energy}`);
            return;
        }
        
    }
    console.log(`Won battles: ${count}. Energy left: ${energy}`);
}

function gameTwo(input) {
    let energy = Number(input[0]);
    let battlesWon = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "End of battle") {
            console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
            return;
        }

        let distance = Number(input[i]);

        if (energy < distance) {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            return;
        }

        energy -= distance;
        battlesWon++;

        if (battlesWon % 3 === 0) {
            energy += battlesWon;
        }
    }

    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
}

gameTwo([100,
    10,
    10,
    10,
    1,
    2,
    3,
    73,
    10]
    );
function dungeonBlitz(input)
{
    let health = 100;
    let coins = 0;
    let roomsNum = 0;

    let rooms = input.split("|")
    
    for(let room of rooms)
    {
        let tokens = room.split(" ");
        let command = tokens[0];
        let value = Number(tokens[1]);

        if(command === 'potion')
        {
            let healthAdded = value;
            
            if(health + healthAdded >= 100)
            {
                healthAdded = 100 - health;
            }
            health += healthAdded;

            console.log(`You healed for ${healthAdded} hp.`);
            console.log(`Current health: ${health} hp.`);
            roomsNum++
        }
        else if(command === 'chest')
        {
            let coinsFound = value;
            coins += coinsFound;
            console.log(`You found ${coinsFound} coins.`)
            roomsNum++
            
        }
        else
        {   roomsNum++
            let monster = command;
            let attack = Number(value);

            health -= attack;

            if(health > 0) {
                console.log(`You slayed ${monster}.`)
                
            }
            else{
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomsNum}`);
                return;
            }
            
        }

    }

    console.log("You've made it!");

    console.log(`Coins: ${coins}`);

    console.log(`Health: ${health}`);
}

dungeonBlitz("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
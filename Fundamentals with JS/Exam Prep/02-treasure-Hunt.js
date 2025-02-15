function solve(arr)
{
    let treasureChest = arr.shift().split('|');

    let index = 0;
    let command = arr[index]
    index++

    while(command !== 'Yohoho!')
    {
        let currentAction = command.split(' ');
        let action = currentAction.shift();

        switch(action)
        {
            case 'Loot':
                for(let el of currentAction)
                {
                    if(!treasureChest.includes(el))
                    {
                        treasureChest.unshift(el);
                    }
                }
                break;
            case 'Drop':
                let position = Number(currentAction[0])
                if(position < 0 || position > treasureChest.length)
                {
                    command = arr[index];
                    index++
                    continue;
                }
                let elements = treasureChest.splice(position, 1);
                treasureChest.push(elements);
                break;
            case 'Steal':

                let count = Number(currentAction[0])
                let items = treasureChest.splice(-count);
                console.log(items.join(', '));
                break;
        }
        command = arr[index];
        index++
    }

    if(treasureChest.length > 0)
    {
        let sum = 0;
        for(let el of treasureChest)
        {
            sum += el.length;
        }
        let avg = sum / treasureChest.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`)
    }
    else{
        console.log('Failed treasure hunt.')
    }
     
}

solve((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
);
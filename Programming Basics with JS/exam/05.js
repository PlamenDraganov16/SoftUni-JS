function excursionSale(array)
{
    let numSea = Number(array[0]);
    let numMountain = Number(array[1]);

    let priceSea = 680;
    let priceMountain = 499;

    let total = 0;
    let index = 2;

    let command = array[index]

    while(command !== 'Stop' && index < array.length)
    {
        let place = command;

        if(place === 'sea')
        {
            if(numSea === 0) {
                index++
                command = array[index]
                continue;
            }
            total += priceSea;
            numSea--;
        }
        else if(place === 'mountain')
        {   if(numMountain === 0)
            {
                index++
                command = array[index]
                continue;
            } 
            total += priceMountain;
            numMountain--;
        }

        index++
        command = array[index]
    }

    if(numMountain === 0 && numSea === 0) console.log(`Good job! Everything is sold.`);
    console.log(`Profit: ${total} leva.`)
        
}

excursionSale(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])
    
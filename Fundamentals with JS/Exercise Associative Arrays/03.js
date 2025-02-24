function solve(arr)
{
    let parking = new Set();

    for(let command of arr)
    {
        let[direction, carNum] = command.split(', ');
        if(direction === 'IN')
        {
            parking.add(carNum);
        }
        else {
            parking.delete(carNum);
        }
    }

    let carsLeft = Array.from(parking).sort((a, b) => a.localeCompare(b));

    if(carsLeft.length === 0)
    {
        console.log("Parking Lot is Empty")
    }
    else
    {
    console.log(carsLeft.join('\n'));
    }

}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA',]
    )
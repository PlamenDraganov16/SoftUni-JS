function solve(arr)
{
    let obj = {};

    for(let i = 0; i < arr.length; i+= 2)
    {
        let material = arr[i];
        let quantity = Number(arr[i + 1]);

        if(material in obj)
        {
            obj[material] += +quantity;
        }
        else{
        obj[material] = quantity;
        }
    }

    for(let [material, quantity] of Object.entries(obj))
    {
        console.log(`${material} -> ${quantity}`)
    }
}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );
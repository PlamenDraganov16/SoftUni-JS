function solve(arr)
{
    let storage = new Map();

    for(let element of arr)
    {   let tokens = element.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1])

        if(storage.has(product))
        {
            quantity += storage.get(product)
        }

        storage.set(product, quantity);
        
    }

    for(let [product, quantity] of storage)
    {
        console.log(`${product} -> ${quantity}`)
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])
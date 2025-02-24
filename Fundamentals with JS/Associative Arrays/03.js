function solve(arr)
{
    let book = {};

    for(let element of arr)
    {
        let [name, address] = element.split(':')

        book[name] = address;
    }

    //When we need to sort by key -> easier approach is to sort the keys
    let sortedKeys = Object.keys(book).sort((keyA, keyB) => {return keyA.localeCompare(keyB)});

    for(let key of sortedKeys)
    {
        console.log(`${key} -> ${book[key]}`);
    }

}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])
function solve(arr)
{
    let phoneBook = {};

    for(let element of arr)
    {
        let personArgs = element.split(' ');
        let name = personArgs[0];
        let phone = personArgs[1];

        phoneBook[name] = phone;

    }

    for(let key in phoneBook)
    {
        let value = phoneBook[key];

        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   )
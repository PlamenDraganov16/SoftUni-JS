function solve(arr)
{
    let guests = [];

    for(let command of arr)
    {
        let tokens = command.split(' ');
        let name = tokens.shift();

        if(tokens.includes('not'))
        {
            let index =guests.indexOf(name);
            if(index === -1)
            {
                console.log(`${name} is not in the list!`);
            }
            else{
                guests.splice(index, 1);
            }
        }
        else{
            if(guests.includes(name))
            {
                console.log(`${name} is already in the list!`)
            }
            else{
                guests.push(name);
            }
        }
    }

    console.log(guests.join('\n'));
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
    );
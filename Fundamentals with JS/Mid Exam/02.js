function solve(arr)
{
    let list = arr.shift().split(' ').map(Number);

    let command = arr.shift();
    
    while(command !== 'Finish')
    {
        let tokens = command.split(' ');
        let action = tokens.shift();
        let num = Number(tokens.shift());

        if(action === 'Add')
        {
            list.push(num);
        }
        else if(action === 'Remove')
        {
            let index = list.indexOf(num);
            if(index !== -1)
            {
                list.splice(index, 1);
            }
        }
        else if(action === 'Replace')
        {
            let newNum = Number(tokens.shift());
            let index = list.indexOf(num);

            if(index !== -1)
            {
                list.splice(index, 1, newNum)
            }
        }
        else if(action === 'Collapse')
        {
            list = list.filter(n => n >= num);
        }


        command = arr.shift();
    }
    console.log(list.join(' '));
}

solve((["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"])
    )
function solve(arr)
{
    let list = arr.shift().split('!')
    
    let command = arr.shift();

    while(command !== 'Go Shopping!')
    {
        let words = command.split(' ')
        let action = words.shift();
        let item = words.shift();

        if(action === 'Urgent')
        {
            if(!list.includes(item))
            {
                list.unshift(item);
            }
        }
        else if(action === 'Unnecessary')
        {
            let index = list.indexOf(item);
            if(index !== -1)
            {
                list.splice(index, 1);
            }
        }
        else if(action === 'Correct')
        {
            let newItem = words.shift();
            let index = list.indexOf(item);

            if(index !== -1)
            {
                list.splice(index, 1, newItem)
            }
        }
        else if(action === 'Rearrange')
        {
            let index = list.indexOf(item);
            if(index  !== -1)
            {
                list.splice(index, 1);
                list.push(item);
            }
        }

        command = arr.shift();
    }
    
    console.log(list.join(', '));
}

solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
    
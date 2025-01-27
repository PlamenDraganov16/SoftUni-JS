function solve(array)
{
    let newArray = [];
    let i = 0;

    for(let command of array)
    {
        
        if(command === 'add')
        {   i++
            newArray.push(i);
            
        }
        else if(command === 'remove')
        {
            i++
            newArray.pop(newArray.length)
            
        }
        
    }

    if(newArray.length === 0) console.log("Empty")
    else(console.log(newArray.join(" ")))
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add'])
solve(['remove', 'remove', 'remove'])
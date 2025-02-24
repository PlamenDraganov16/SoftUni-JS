function solve(arr){

    let list = {};

    for(let command of arr)
    {
        let [day, name] = command.split(' ');

        if(list.hasOwnProperty(day))
        {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        list[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for(let key of Object.keys(list))
    {
        let name = list[key]
        console.log(`${key} -> ${name}`);
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])
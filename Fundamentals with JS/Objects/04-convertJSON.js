function solve(name, lastName, hairColor)
{

    let obj = {
        name,
        lastName,
        hairColor
    }

    let jsonString = JSON.stringify(obj);

    console.log(jsonString)
}

solve('George', 'Jones', 'Brown')
function solve(arr)
{
    let companyNames = {};

    for(let element of arr)
    {
        let [name, number] = element.split(' -> ');

        if(name in companyNames)
        {
            if(!companyNames[name].includes(number))
            {
            companyNames[name].push(number);
            }
        }
        else
        {
            companyNames[name] = [number];
        }
    }

    let entries = Object.entries(companyNames).sort((a, b) => a[0].localeCompare(b[0]))

    for(let [name, number1] of entries)
    {
        console.log(name);

        for(let number of number1)
        {
            console.log(`-- ${number}`)
        }
    } 
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])
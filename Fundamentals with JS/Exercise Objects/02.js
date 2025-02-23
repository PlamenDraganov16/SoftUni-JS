function solve(arr)
{
    for(let city of arr)
    {
        let [town, latitude, longitude] = city.split(' | ');
        let townObj = {
            town: town,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2)
        };
        console.log(townObj)
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )
function solve(town, population, area)
{
    if(town.length < 3)
    {
        console.log("Town name must be at least 3 characters!");
        
    }
    if(population < 0)
    {
        console.log("Population must be a positive number!")
        
    }
    if(area < 0)
    {
        console.log("Area must be a positive number!")
        return;
    }
    else console.log(`Town ${town} has population of ${population} and area ${area} square km.`)

}

solve('Sofia', 1286383, 492);
solve("Ka",
3600,
-50)